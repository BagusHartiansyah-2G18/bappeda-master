function _onload(data){
    $('#body').html(data.tmBody);
    myCode=data.code;
    
    _.dt=data.dt;
    _.kategori=data.kategori;
    _.sumberKate="beranda-produk";

    img.maxUpload=1;
    _file.maxUpload=1;
    _.ind=-1;
    $('#bodyTM').html(_form());
    $('#footer').html(data.tmFooter+data.footer);
    
    _startTabel("dt");
}
function _form() {
    // <img class="img-fluid d-block mx-auto" src="`+assert+`fs_css/bgForm.png" alt="sasasa"></img>
    return `
    
    <div class="page-header" style="padding: 20px; margin-top: 4%;">
        <div class="page-block">
            <div class="row m-2 shadow">`
                +_formIcon({
                    icon:'<i class="mdi mdi-office-building" style="font-size: 20px;"></i>'
                    ,text:"<h3>Data Produk</h3>",
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
                    isi:_tabx({
                            active:0,
                            start:0,
                            // attrNav:`style="background-color: sienna;"`,
                            style:`style="width: 50%;text-align: center;"`,
                            attrContent:'',
                            tab:[{
                                judul:"<b>DATA</b>",
                                isi:`<div id='tabelShow' style="margin: auto;">`
                                        +_lines({})
                                        +setTabel()
                                    +`</div>`,
                                // onclick:`_checkUpdTabel()`
                            },{
                                judul:"<b>Form Entri</b>",
                                isi:_fproduk(),
                                // onclick:`_checkUpdTabel()`
                            }]
                        }),
                })
            +`</div>
        </div>
    </div>`;
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
                    data:_.dt
                    ,no:1
                    ,kolom:[
                        "judul","keterangan","date"
                    ]
                    ,namaKolom:[
                        "Judul","Keterangan","Waktu"
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
        isi:"Simpan produk ?",
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
        keterangan  :$('#keterangan').val(),
        judul       :$('#judul').val(),
        kdKate      :_tamp1,
        sumberKate  :_.sumberKate
    }
    if(_isNull(param.judul))return _toast({bg:'e',msg:'Tambahkan Judul Produk !!!'});
    if(_isNull(param.keterangan))return _toast({bg:'e',msg:'Tambahkan Keterangan !!!'});
    if(_isNull(param.kdKate))return _toast({bg:'e',msg:'Tambahkan Kategori produk !!!'});

    if(img.data.length==0)return _toast({bg:'e',msg:'Tambahkan Cover File !!!'});
    if(_file.data.length==0)return _toast({bg:'e',msg:'Tambahkan Produk File !!!'});
    
    file={
        file:_file.data,
        img :img.data,
    }
    
    _postFile('proses/insProduk',param,file).then(res=>{
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
    _.ind=ind;

    $('#btnAdd').css({display:'none'});
    $('#btnUpd').css({display:''});
    
    $('#ffile').css({display:'none'});

    $('#tab0').removeClass("active");
    $('#contentTab0').removeClass("active");

    $('#tab1').addClass("active");
    $('#contentTab1').addClass("active");

    $('#judul').val(_.dt[ind].judul);
    $('#keterangan').val(_.dt[ind].keterangan);

    $('#idInpDropJudul').html(_.dt[ind].nmKate);
    _tamp1=_.dt[ind].kdKate;
}
function updDatax() {
    _modalEx1({
        judul:"Perbarui Data".toUpperCase(),
        icon:`<i class="mdi mdi-note-plus"></i>`,
        cform:`text-light`,
        bg:'bg-warning',
        minWidth:"500px; font-size: medium;",
        isi:"Simpan perbaikan data kegiatan ?",
        footer:_btn({
                    color:"primary shadow",
                    judul:"Close",
                    attr:`style='float:right; padding:5px;font-size: medium;' onclick="_modalHide('modal')"`,
                    class:"btn btn-secondary"
                })
                +_btn({
                    color:"primary shadow",
                    judul:"SIMPAN",
                    attr:"style='float:right; padding:5px;font-size: medium;' onclick='updDataed()'",
                    class:"btn btn-primary"
                })
    });
}
function updDataed(){
    param={
        judul       :$('#judul').val(),
        keterangan  :$('#keterangan').val(),
        kdProduk    :_.dt[_.ind].kdProduk,
        kdKate      :_tamp1
    }
    if(_isNull(param.judul))return _toast({bg:'e',msg:'Tambahkan Judul Kegiatan !!!'});
    if(_isNull(param.keterangan))return _toast({bg:'e',msg:'Tambahkan keterangan !!!'});
    if(_isNull(param.kdKate))return _toast({bg:'e',msg:'Tambahkan Kategori produk !!!'});

    _post('proses/updProduk',param).then(res=>{
        res=JSON.parse(res);
        if(res.exec){
            _modalHide('modal');
            _respon(res.data);
        }else{
            return _toast({bg:'e', msg:res.msg});
        }
    });
}
function btlData() {
    $('#tab1').removeClass("active");
    $('#contentTab1').removeClass("active");

    $('#tab0').addClass("active");
    $('#contentTab0').addClass("active");

    $('#btnAdd').css({display:''});
    $('#btnUpd').css({display:'none'});
    $('#ffile').css({display:''});

    $('#judul').val('');
    $('#images').html('');
    img.data=[];
    _file.data=[];
    $('#idInpDropJudul').html('List Kategori');
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
                    // color:"danger shadow",
                    judul:"SIMPAN",
                    attr:"style='float:right; padding:5px;font-size: medium;' onclick='delDataed("+ind+")'",
                    class:"btn btn-danger"
                })
    });
}
function delDataed(ind){
    param={
        kdProduk     :_.dt[ind].kdProduk,
    }
    _post('proses/delProduk',param).then(res=>{
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
        _.dt=data.dt;
        btlData();
    }
    $('#tabelShow').html(setTabel());
    _startTabel("dt");
}


function _tambahKategori(){
    _modalEx1({
        judul:"Tambah Ketegori".toUpperCase(),
        icon:`<i class="mdi mdi-note-plus"></i>`,
        cform:`text-light`,
        bg:undefined,
        minWidth:"500px; font-size: medium;",
        isi:_fKategoriUmum(),
        footer:_btn({
                    color:"primary shadow",
                    judul:"Close",
                    attr:`style='float:right; padding:5px;font-size: medium;' onclick="_modalHide('modal')"`,
                    class:"btn btn-secondary"
                })
                +_btn({
                    color:"primary shadow",
                    judul:"SIMPAN",
                    attr:"style='float:right; padding:5px;font-size: medium;' onclick='_tambahKategoried()'",
                    class:"btn btn-primary"
                })
    });
}
function _tambahKategoried(){
    param={
        kdKate      :(_.kategori.length==0?1:Number(_.kategori[_.kategori.length-1].value)+1),
        nmKate      :$('#nmKate').val(),
        sumber      :'beranda-produk',
    }
    if(_isNull(param.nmKate))return _toast({bg:'e',msg:'Tambahkan Judul Kategori !!!'});

    _post('proses/addKategoriUmum',param).then(res=>{
        res=JSON.parse(res);
        if(res.exec){
            _modalHide('modal');
            responKate(res.data);
            _toast({bg:'s', msg:"sukses !!!"});
        }else{
            return _toast({bg:'e', msg:res.msg});
        }
    });
}
function responKate(data) {
    if(data!=null){
        _.kategori=data.kateUmum;
    }
    dropdonw.data=_.kategori;
    _inpDropdonwSelectedSearch({value:""});
}