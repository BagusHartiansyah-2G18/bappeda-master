function _onload(data){
    $('#body').html(data.tmBody);
    myCode=data.code;
    _.dinas=data.dinas;
    _.tahun=data.tahun;
    
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
    infoSupport1=[];
    infoSupport1.push({ 
        clsBtn:`btn-outline-danger fzMfc`
        ,func:"kunciAll('PRA',1,)"
        ,icon:`<i class="mdi mdi-lock"></i>PRA`
        ,title:"kunci"
    });
    infoSupport1.push({ 
        clsBtn:`btn-outline-success fzMfc`
        ,func:"openAll('PRA',1,)"
        ,icon:`<i class="mdi mdi-lock-check"></i>PRA`
        ,title:"open"
    });
    infoSupport1.push({ 
        clsBtn:`btn-outline-danger fzMfc`
        ,func:"kunciAll('RENJA',2,)"
        ,icon:`<i class="mdi mdi-lock"></i>RENJA`
        ,title:"kunci"
    });
    infoSupport1.push({ 
        clsBtn:`btn-outline-success fzMfc`
        ,func:"openAll('RENJA',2,)"
        ,icon:`<i class="mdi mdi-lock-check"></i>RENJA`
        ,title:"open"
    });
    infoSupport1.push({ 
        clsBtn:`btn-outline-danger fzMfc`
        ,func:"kunciAll('FINAL',3,)"
        ,icon:`<i class="mdi mdi-lock"></i>FINAL`
        ,title:"kunci"
    });
    infoSupport1.push({ 
        clsBtn:`btn-outline-success fzMfc`
        ,func:"openAll('FINAL',3,)"
        ,icon:`<i class="mdi mdi-lock-check"></i>FINAL`
        ,title:"open"
    });
    return `<div class="row m-2 shadow">`
                +_formIcon({
                    icon:'<i class="mdi mdi-file-check"></i>'
                    ,text:"<h3>Kunci OPD</h3>",
                    classJudul:' p-2',
                    id:"form1",
                    // btn:,
                    sizeCol:undefined,
                    bgHeader:"bg-info text-light",
                    attrHeader:`style="height: max-content;"`,
                    bgForm:"#fff; font-size:15px;",
                    isi: _sejajar({
                            data:[{
                                isi:'Aksi untuk mengunci seluruh OPD :'
                            },{
                                isi:_btnGroup(infoSupport1,0)
                            }]
                        })
                        +_lines({})
                        +`<div id='tabelShow' style="margin: auto;">`
                            +setTabel()
                        +`</div>`,
                })
            +`</div>`;
}
function setTabel(){
    infoSupport1=[];
    infoSupport1.push({ 
        clsBtn:`btn-outline-danger fzMfc`
        ,func:"kunci('PRA',1,)"
        ,icon:`<i class="mdi mdi-lock"></i>PRA`
        ,title:"kunci"
    });
    infoSupport1.push({ 
        clsBtn:`btn-outline-success fzMfc`
        ,func:"openx('PRA',1,)"
        ,icon:`<i class="mdi mdi-lock-check"></i>PRA`
        ,title:"open"
    });
    infoSupport1.push({ 
        clsBtn:`btn-outline-danger fzMfc`
        ,func:"kunci('RENJA',2,)"
        ,icon:`<i class="mdi mdi-lock"></i>RENJA`
        ,title:"kunci"
    });
    infoSupport1.push({ 
        clsBtn:`btn-outline-success fzMfc`
        ,func:"openx('RENJA',2,)"
        ,icon:`<i class="mdi mdi-lock-check"></i>RENJA`
        ,title:"open"
    });
    infoSupport1.push({ 
        clsBtn:`btn-outline-danger fzMfc`
        ,func:"kunci('FINAL',3,)"
        ,icon:`<i class="mdi mdi-lock"></i>FINAL`
        ,title:"kunci"
    });
    infoSupport1.push({ 
        clsBtn:`btn-outline-success fzMfc`
        ,func:"openx('FINAL',3,)"
        ,icon:`<i class="mdi mdi-lock-check"></i>FINAL`
        ,title:"open"
    });
    return _tabelResponsive(
        {
            id:"dt"
            ,isi:_tabel(
                {
                    data:_.dinas
                    ,no:1
                    ,kolom:[
                        "kdDinas","nmDinas"
                    ]
                    ,namaKolom:[
                        "Kode","Nama"
                    ],
                    action:infoSupport1
                })
        });;
}
function _getDataOpd(v) {
    find=Number(v.value);
    if(_.dinas[find].data==undefined ||_.dinas[find].data.length==0){
        _post('proses/getSubOpd',{kdDinas:_.dinas[find].value}).then(response=>{
            response=JSON.parse(response);
            if(response.exec){
                return _respon(response.data,find);
            }else{
                return _toast({bg:'e', msg:response.msg});
            }
        })
    }
    return _respon(null,find);
}
function _respon(data,ind){
    _.ind=ind;
    if(data!=null){
        _.dinas[_.ind].data=data.data;
    }
    if(_.dinas[_.ind].data==undefined){
        _.dinas[_.ind].data=[];
    }
    $('#tabelShow').html(setTabel());
    _startTabel("dt");
}


function kunci(ket,key,ind) {
    _modalEx1({
        judul:"Konfirmasi".toUpperCase(),
        icon:`<i class="mdi mdi-note-plus"></i>`,
        cform:`text-light`,
        bg:"bg-danger",
        minWidth:"500px; font-size: medium;",
        isi:"lakukan penguncian aksi di tahapan "+ket+" pada dinas "+_.dinas[ind].nmDinas+" ???",
        footer:_btn({
                    color:"primary shadow",
                    judul:"Close",
                    attr:`style='float:right; padding:5px;font-size: medium;' onclick="_modalHide('modal')"`,
                    class:"btn btn-secondary"
                })
                +_btn({
                    judul:"SIMPAN",
                    attr:"style='float:right; padding:5px;font-size: medium;' onclick='kuncied("+key+","+ind+")'",
                    class:"btn btn-danger"
                })
    });
}
function kuncied(key,ind){
    param={
        query:'update psub set '+getNmKolom(key)+'=1 where kdDinas="'+_.dinas[ind].kdDinas+'" and taSub="'+_.tahun+'"'
    }
    _post('proses/kunciOpd',param).then(res=>{
        res=JSON.parse(res);
        if(res.exec){
            _modalHide('modal');
            return _toast({bg:'s', msg:"sukses"});
        }else{
            return _toast({bg:'e', msg:res.msg});
        }
    });
}
function openx(ket,key,ind) {
    _modalEx1({
        judul:"konfirmasi".toUpperCase(),
        icon:`<i class="mdi mdi-note-plus"></i>`,
        cform:`text-light`,
        bg:"bg-success",
        minWidth:"500px; font-size: medium;",
        isi:"lakukan pemberian aksi di tahapan "+ket+" pada dinas "+_.dinas[ind].nmDinas+" ???",
        footer:_btn({
                    color:"primary shadow",
                    judul:"Close",
                    attr:`style='float:right; padding:5px;font-size: medium;' onclick="_modalHide('modal')"`,
                    class:"btn btn-secondary"
                })
                +_btn({
                    judul:"SIMPAN",
                    attr:"style='float:right; padding:5px;font-size: medium;' onclick='opened("+key+","+ind+")'",
                    class:"btn btn-success"
                })
    });
}
function opened(key,ind){
    param={
        query:'update psub set '+getNmKolom(key)+'=0 where kdDinas="'+_.dinas[ind].kdDinas+'" and taSub="'+_.tahun+'"'
    }
    _post('proses/kunciOpd',param).then(res=>{
        res=JSON.parse(res);
        if(res.exec){
            _modalHide('modal');
            return _toast({bg:'s', msg:"sukses"});
        }else{
            return _toast({bg:'e', msg:res.msg});
        }
    });
}


// all kunci 
function kunciAll(ket,key,ind) {
    _modalEx1({
        judul:"Konfirmasi".toUpperCase(),
        icon:`<i class="mdi mdi-note-plus"></i>`,
        cform:`text-light`,
        bg:"bg-danger",
        minWidth:"500px; font-size: medium;",
        isi:"lakukan penguncian aksi di tahapan "+ket+" pada seluruh OPD ???",
        footer:_btn({
                    color:"primary shadow",
                    judul:"Close",
                    attr:`style='float:right; padding:5px;font-size: medium;' onclick="_modalHide('modal')"`,
                    class:"btn btn-secondary"
                })
                +_btn({
                    judul:"SIMPAN",
                    attr:"style='float:right; padding:5px;font-size: medium;' onclick='kunciAlled("+key+","+ind+")'",
                    class:"btn btn-danger"
                })
    });
}
function kunciAlled(key,ind){
    param={
        query:'update psub set '+getNmKolom(key)+'=1 where taSub="'+_.tahun+'"'
    }
    _post('proses/kunciOpd',param).then(res=>{
        res=JSON.parse(res);
        if(res.exec){
            _modalHide('modal');
            return _toast({bg:'s', msg:"sukses"});
        }else{
            return _toast({bg:'e', msg:res.msg});
        }
    });
}
function openAll(ket,key,ind) {
    _modalEx1({
        judul:"Konfirmasi".toUpperCase(),
        icon:`<i class="mdi mdi-note-plus"></i>`,
        cform:`text-light`,
        bg:"bg-success",
        minWidth:"500px; font-size: medium;",
        isi:"lakukan pemberian aksi di tahapan "+ket+" pada seluruh OPD ???",
        footer:_btn({
                    color:"primary shadow",
                    judul:"Close",
                    attr:`style='float:right; padding:5px;font-size: medium;' onclick="_modalHide('modal')"`,
                    class:"btn btn-secondary"
                })
                +_btn({
                    judul:"SIMPAN",
                    attr:"style='float:right; padding:5px;font-size: medium;' onclick='openAlled("+key+","+ind+")'",
                    class:"btn btn-success"
                })
    });
}
function openAlled(key,ind){
    param={
        query:'update psub set '+getNmKolom(key)+'=0 where taSub="'+_.tahun+'"'
    }
    _post('proses/kunciOpd',param).then(res=>{
        res=JSON.parse(res);
        if(res.exec){
            _modalHide('modal');
            return _toast({bg:'s', msg:"sukses"});
        }else{
            return _toast({bg:'e', msg:res.msg});
        }
    });
}
function getNmKolom(key) {
    switch (key) {
        case 1: return 'qpra';
        case 2: return 'qrka';
        default:return 'qrkaFinal';
    }
}