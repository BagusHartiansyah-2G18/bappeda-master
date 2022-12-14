function _onload(data){
    $('#body').html(data.tmBody);
    myCode=data.code;
    
    _.member=data.member;
    _.ind=0;
    
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
                    icon:'<i class="mdi mdi-file-check"></i>'
                    ,text:"<h3>Daftar Akses Admin</h3>",
                    classJudul:' p-2',
                    id:"form1",
                    btn:_btn({
                        color:"primary shadow",
                        judul:"Simpan Perubahan",
                        attr:"style='padding:5px;font-size:15px;' onclick='saveData()'",
                        // class:"btn btn-success btn-block"
                    }),
                    sizeCol:undefined,
                    bgHeader:"bg-info text-light",
                    attrHeader:`style="height: max-content;"`,
                    bgForm:"#fff; font-size:15px;",
                    isi:_inpSejajar({
                            attrRow:"margin-left:5px;margin-bottom:10px;",
                            attrCol:"margin-left:5px;margin-bottom:10px;",
                            attrLabel:"color:black",
                            judul:"Pengguna / Admin",
                            isi:_inpComboBox({
                                id:"kdMember", 
                                bg:"bg-primary text-light fzMfc",
                                data:_.member,
                                change:"_memberChanged(this)",
                                getCombo:true,
                                attr:"text-dark;",
                                index:"Bagus H"
                            })
                        })
                        +_lines({attr:'background:white;'})
                        +`<div id='tabelShow' style="margin: auto;">`
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
                    data:_.member[_.ind].dinas
                    ,no:1
                    ,kolom:[
                        "valueName","checkbox"
                    ]
                    ,namaKolom:[
                        "Dinas","Pilihan"
                    ],
                    func:"_updCheck()"
                    // action:infoSupport1
                })
        });;
}
function _updCheck(ind,v) {
    if(!Number(_.member[_.ind].dinas[ind].upd)){//false
        _.member[_.ind].dinas[ind].upd=true;
    }else{
        _.member[_.ind].dinas[ind].upd=false;
    }
    _.member[_.ind].dinas[ind].checked=Number(v.checked);
}

function saveData() {
    _modalEx1({
        judul:"Konfirmasi".toUpperCase(),
        icon:`<i class="mdi mdi-note-plus"></i>`,
        cform:`text-light`,
        bg:undefined,
        minWidth:"500px; font-size: medium;",
        isi:"Simpan perubahan perijinan akses admin ??",
        footer:_btn({
                    color:"primary shadow",
                    judul:"Close",
                    attr:`style='float:right; padding:5px;font-size: medium;' onclick="_modalHide('modal')"`,
                    class:"btn btn-secondary"
                })
                +_btn({
                    color:"primary shadow",
                    judul:"SIMPAN",
                    attr:"style='float:right; padding:5px;font-size: medium;' onclick='saveDataed()'",
                    class:"btn btn-primary"
                })
    });
}
function saveDataed(){
    fqadd='INSERT INTO `admingroup`(`kdDinas`, `kdMember`) VALUES ';
    fqdel='';
    fkondisi=true;
    _.member[_.ind].dinas.forEach((v) => {
        if(Number(v.upd)){
            if(Number(v.checked)){ // true artinya ditambah baru
                fkondisi=false;
                fqadd+='("'+v.value+'","'+_.member[_.ind].value+'"),'
            }else{// data sudah ada lalu dihapus
                fqdel+='delete from `admingroup` where `kdDinas`="'+v.value+'" and `kdMember`="'+_.member[_.ind].value+'"; ';
            }
        }
    });

    if(fkondisi){
        fqadd='';
    }else{
        fqadd=fqadd.substring(0,fqadd.length-1)+";";
    }

    _post('proses/saveAdminGroup',{
        query:fqadd+fqdel,
        member:_.member[_.ind].value
    }).then(res=>{
        res=JSON.parse(res);
        if(res.exec){
            _modalHide('modal');
            _toast({bg:'i', msg:"sukses..."});
            return _respon(res.data);
        }else{
            return _toast({bg:'e', msg:res.msg});
        }
    });
}
function _respon(data){
    if(data!=null){
        _.member[_.ind].dinas=data.dinas;
    }
    $('#tabelShow').html(setTabel());
    _startTabel("dt");
}

function _memberChanged(v) {
    _.ind=Number(v.value);
    if(_.member[_.ind].dinas==undefined || _.member[_.ind].dinas.length==0){
        _post('proses/getDinasAdminGroup',{
            member:_.member[_.ind].value
        }).then(res=>{
            res=JSON.parse(res);
            if(res.exec){
                _modalHide('modal');
                return _respon(res.data);
            }else{
                return _toast({bg:'e', msg:res.msg});
            }
        });
    }else{
        return _respon(null);
    }
}