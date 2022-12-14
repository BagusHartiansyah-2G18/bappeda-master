function _onload(data){
    $('#body').html(data.tmBody);
    myCode=data.code;
    
    _.ssh=data.ssh;
    
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
                    icon:'<i class="mdi mdi-ladder" style="font-size: 20px;"></i>'
                    ,text:"<h3>Daftar List SSH</h3>",
                    classJudul:' p-2',
                    id:"form1",
                    // btn:_btn({
                    //     color:"primary shadow",
                    //     judul:"Tambah Data",
                    //     attr:"style='padding:5px;font-size:15px;' onclick='addData()'",
                    //     // class:"btn btn-success btn-block"
                    // }),
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
    // infoSupport1=[];
    // infoSupport1.push({ 
    //     clsBtn:`btn-outline-warning fzMfc`
    //     ,func:"updData()"
    //     ,icon:`<i class="mdi mdi-grease-pencil"></i>`
    //     ,title:"Perbarui"
    // });
    // infoSupport1.push({ 
    //     clsBtn:`btn-outline-danger fzMfc`
    //     ,func:"delData()"
    //     ,icon:`<i class="mdi mdi-delete-forever"></i>`
    //     ,title:"Hapus"
    // });
    return _tabelResponsive(
        {
            id:"dt"
            ,isi:_tabel(
                {
                    data:_.ssh
                    ,no:1
                    ,kolom:[
                        "kodeBelanja","nama","keterangan","spek","satuan","harga$"
                    ]
                    ,namaKolom:[
                        "Kode","Nama","Keterangan","Spek","Satuan","Harga"
                    ],
                    // action:infoSupport1
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
        isi:_fjabatan(),
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
        jabatan   :$('#jabatan').val()
    }
    if(_isNull(param.jabatan))return _toast({bg:'e',msg:'Tambahkan jabatan !!!'});

    _post('proses/insJabatan',param).then(res=>{
        res=JSON.parse(res);
        if(res.exec){
            _modalHide('modal');
            _respon(res.data);
        }else{
            return _toast({bg:'e', msg:res.msg});
        }
    });
}
function updData(ind) {
    _modalEx1({
        judul:"Perbarui Data".toUpperCase(),
        icon:`<i class="mdi mdi-note-plus"></i>`,
        cform:`text-light`,
        bg:"bg-warning",
        minWidth:"500px; font-size: medium;",
        isi:_fjabatan(),
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
    $('#jabatan').val(_.jabatan[ind].nmJabatan);
}
function updDataed(ind){
    param={
        jabatan   :$('#jabatan').val(),
        kdJabatan   :_.jabatan[ind].kdJabatan
    }
    if(_isNull(param.jabatan))return _toast({bg:'e',msg:'Tambahkan jabatan !!!'});

    _post('proses/updJabatan',param).then(res=>{
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
        kdJabatan   :_.jabatan[ind].kdJabatan
    }
    _post('proses/delJabatan',param).then(res=>{
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
        _.jabatan=data.data;
    }
    $('#tabelShow').html(setTabel());
    _startTabel("dt");
}