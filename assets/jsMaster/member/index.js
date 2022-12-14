function _onload(data){
    $('#body').html(data.tmBody);
    myCode=data.code;
    
    _.dinas=data.dinas;
    _.jabatan=data.jabatan;
    _.member=data.member;
    _.sfKdDinas="";
    
    $('#bodyTM').html(_form());
    $('#footer').html(data.tmFooter+data.footer);
    
    _startTabel("dt");
}
function _form() {
    // <img class="img-fluid d-block mx-auto" src="`+assert+`fs_css/bgForm.png" alt="sasasa"></img>
    return `
    
    <div class="page-header" style="padding: 20px; margin-top: 4%;">
        <div class="page-block">`
            +_formData()
        +`</div>
    </div>`;
}

function _formData() {
    return `<div class="row m-2 shadow">`
                +_formIcon({
                    icon:'<i class="mdi mdi-file-check"  style="font-size: 20px;"></i>'
                    ,text:"<h3>Daftar Jabatan Sistem</h3>",
                    classJudul:' p-2',
                    id:"form1",
                    btn:_btn({
                        color:"primary shadow",
                        judul:"Tambah Member",
                        attr:"style='padding:5px;font-size:15px;' onclick='addData()'",
                        // class:"btn btn-success btn-block"
                    }),
                    sizeCol:undefined,
                    bgHeader:"bg-info text-light",
                    attrHeader:`style="height: max-content;"`,
                    bgForm:"#fff; font-size:15px;",
                    isi:`<div id='tabelShow' style="margin: auto;">`
                            +setTabel()
                        +`</div>`,
                })
            +`</div>`;
}
function setTabel(){
    infoSupport1=[];
    infoSupport1.push({ 
        clsBtn:`btn-outline-warning fzMfc`
        ,func:"updData()"
        ,icon:`<i class="mdi mdi-grease-pencil"></i>`
        ,title:"Perbarui"
    });
    infoSupport1.push({ 
        clsBtn:`btn-outline-danger fzMfc`
        ,func:"delData()"
        ,icon:`<i class="mdi mdi-delete-forever"></i>`
        ,title:"Hapus"
    });
    return _tabelResponsive(
        {
            id:"dt"
            ,isi:_tabel(
                {
                    data:_.member
                    ,no:1
                    ,kolom:[
                        "nmDinas","nmJabatan","nmMember","password","nik","email"
                    ]
                    ,namaKolom:[
                        "Dinas","Status","Username","Password","NIK","Email"
                    ],
                    action:infoSupport1
                })
        });;
}
function addData() {
    _modalEx1({
        judul:"Tambah Data".toUpperCase(),
        icon:`<i class="mdi mdi-note-plus"></i>`,
        cform:`text-light`,
        bg:undefined,
        minWidth:"500px; font-size: medium;",
        isi:_fmember(),
        footer:_btn({
                    color:"primary shadow",
                    judul:"Close",
                    attr:`style='float:right; padding:5px;font-size: medium;' onclick="_modalHide('modal')"`,
                    class:"btn btn-secondary"
                })
                +_btn({
                    color:"primary shadow",
                    judul:"SIMPAN",
                    attr:"style='float:right; padding:5px;font-size: medium;' onclick='addDataed()'",
                    class:"btn btn-primary"
                })
    });
}
function addDataed(){
    param={
        kdJabatan   :$('#kdJabatan').val(),
        username    :$('#username').val(),
        password    :$('#password').val(),
        nik         :$('#nik').val(),
        email       :$('#email').val(),
        kdDinas     :_.sfKdDinas
    }
    if(_isNull(param.kdDinas))return _toast({bg:'e',msg:'Pilih Dinas !!!'});
    if(_isNull(param.kdJabatan))return _toast({bg:'e',msg:'Tambahkan Nama Member !!!'});
    if(_isNull(param.username))return _toast({bg:'e',msg:'Tambahkan Username !!!'});
    if(_isNull(param.password))return _toast({bg:'e',msg:'Tambahkan Password !!!'});

    _post('proses/insMember',param).then(res=>{
        res=JSON.parse(res);
        if(res.exec){
            _modalHide('modal');
            _respon(res.data);
        }else{
            return _toast({bg:'e', msg:res.msg});
        }
    });
}
function _respon(data){
    if(data!=null){
        _.member=data.member;
    }
    $('#tabelShow').html(setTabel());
    _startTabel("dt");
}
function updData(ind) {
    _modalEx1({
        judul:"Perbarui Data".toUpperCase(),
        icon:`<i class="mdi mdi-note-plus"></i>`,
        cform:`text-light`,
        bg:"bg-warning",
        minWidth:"500px; font-size: medium;",
        isi:_fmember(),
        footer:_btn({
                    color:"primary shadow",
                    judul:"Close",
                    attr:`style='float:right; padding:5px;font-size: medium;' onclick="_modalHide('modal')"`,
                    class:"btn btn-secondary"
                })
                +_btn({
                    color:"primary shadow",
                    judul:"SIMPAN",
                    attr:"style='float:right; padding:5px;font-size: medium;' onclick='updDataed("+ind+")'",
                    class:"btn btn-primary"
                })
    });
    _.sfKdDinas=_.member[ind].kdDinas;
    $('#idInpDropDinas').val(_.member[ind].nmDinas);
    $('#kdJabatan').val(_.member[ind].kdJabatan);
    $('#password').val(_.member[ind].password);
    $('#username').val(_.member[ind].nmMember);
    $('#nik').val(_.member[ind].nik);
    $('#email').val(_.member[ind].email);
}
function updDataed(ind){
    param={
        kdJabatan   :$('#kdJabatan').val(),
        username    :$('#username').val(),
        password    :$('#password').val(),
        nik         :$('#nik').val(),
        email       :$('#email').val(),
        kdDinas     :_.sfKdDinas,
        kdMember    :_.member[ind].kdMember
    }
    if(_isNull(param.kdDinas))return _toast({bg:'e',msg:'Pilih Dinas !!!'});
    if(_isNull(param.kdJabatan))return _toast({bg:'e',msg:'Tambahkan Nama Member !!!'});
    if(_isNull(param.username))return _toast({bg:'e',msg:'Tambahkan Username !!!'});
    if(_isNull(param.password))return _toast({bg:'e',msg:'Tambahkan Password !!!'});

    _post('proses/updMember',param).then(res=>{
        res=JSON.parse(res);
        if(res.exec){
            _modalHide('modal');
            _respon(res.data);
        }else{
            return _toast({bg:'e', msg:res.msg});
        }
    });
}
function delData(ind) {
    _modalEx1({
        judul:"Konfirmasi".toUpperCase(),
        icon:`<i class="mdi mdi-note-plus"></i>`,
        cform:`text-light`,
        bg:"bg-danger",
        minWidth:"500px; font-size: medium;",
        isi:"Hapus Data Ini ?",
        footer:_btn({
                    color:"primary shadow",
                    judul:"Close",
                    attr:`style='float:right; padding:5px;font-size: medium;' onclick="_modalHide('modal')"`,
                    class:"btn btn-secondary"
                })
                +_btn({
                    color:"primary shadow",
                    judul:"SIMPAN",
                    attr:"style='float:right; padding:5px;font-size: medium;' onclick='delDataed("+ind+")'",
                    class:"btn btn-primary"
                })
    });
}
function delDataed(ind){
    param={
        kdMember    :_.member[ind].kdMember,
    }
    _post('proses/delMember',param).then(res=>{
        res=JSON.parse(res);
        if(res.exec){
            _modalHide('modal');
            _respon(res.data);
        }else{
            return _toast({bg:'e', msg:res.msg});
        }
    });
}
function info(ind) {
    ftam=[];
    ftam.push({
        valueName:"Kabupaten",
        value:_.ddata[ind].kabupaten
    });
    ftam.push({
        valueName:"Kecamatan",
        value:_.ddata[ind].kecamatan
    });
    ftam.push({
        valueName:"Desa",
        value:_.ddata[ind].desa
    });
    ftam.push({
        valueName:"no HP",
        value:_.ddata[ind].noHp
    });
    ftam.push({
        valueName:"Detail",
        value:_.ddata[ind].tambahan
    });
    _modalEx1({
        judul:"Informasi".toUpperCase(),
        icon:`<i class="mdi mdi-note-plus"></i>`,
        cform:`text-light`,
        bg:"bg-secondary",
        minWidth:"500px; font-size: medium;",
        isi:_fi2Kolom({
            attr:'margin: auto;',
            cls:'',
            attrName:"",
            attrVal:"",
            data:ftam
        }),
        footer:_btn({
                    color:"primary shadow",
                    judul:"Close",
                    attr:`style='float:right; padding:5px;font-size: medium;' onclick="_modalHide('modal')"`,
                    class:"btn btn-secondary"
                })
    });
}
function _refresh(ind){
    _modalEx1({
        judul:"Konfirmasi".toUpperCase(),
        icon:`<i class="mdi mdi-refresh"></i>`,
        cform:`text-light`,
        bg:"bg-primary",
        minWidth:"500px; font-size: medium;",
        isi:"Refresh Hak Akses "+_.ddata[ind].username+" ??",
        footer:_btn({
                color:"primary shadow",
                judul:"Close",
                attr:`style='float:right; padding:5px;font-size: medium;' onclick="_modalHide('modal')"`,
                class:"btn btn-secondary"
            })
            +_btn({
                color:"primary shadow",
                judul:"Refresh",
                attr:"style='float:right; padding:5px;font-size: medium;' onclick='_refreshed("+ind+")'",
                class:"btn btn-primary"
            })
    });
}
function _refreshed(ind){
    param={
        kdJabatan   :_.ddata[ind].kdJabatan,
        kdMember    :_.ddata[ind].kdMember1
    }
    // return console.log(param);
    _post("Proses/refreshHakAkses",param).then(res=>{
        res=JSON.parse(res);
        if(res.exec){
            _modalHide('modal');
            return _toast({bg:'s', msg:"sukses"});
        }else{
            return _toast({bg:'e', msg:res.msg});
        }
    })
}

// act dinas
function _changeValDinas(v) {
    if(!$('#dinas').hasClass('show')){
        $('#dinas').addClass("show");
    }
    _multiDropdonwSearch({
        data:_.dinas,
        idData:"ddinas",
        id:"dinas",
        value:v.value,
        func:"_selectDinas",
        idDropdonw:"idInpDropDinas",
    })
}
function _selectDinas(idForDrop,id,value,valueName){
    _.sfKdDinas=value;
    $("#"+id).val(valueName.substring(0,50));
    return _showForDropSelect(idForDrop);
}
function _formSearchDinas(v){
    _multiDropdonwSearch({
        data:_.dinas,
        idData:"ddinas",
        id:"dinas",
        value:v.value,
        func:"_selectDinas",
        idDropdonw:"idInpDropDinas",
    })
}