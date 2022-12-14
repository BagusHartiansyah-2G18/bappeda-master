function _onload(data){
    $('#body').html(data.tmBody);
    myCode=data.code;
    
    _.tahun=data.tahun;
    _.data=[
        {nama:'Dinas',checked:0,key:"dinas"},
        {nama:'Rekening Belanja',checked:0,key:"rekeningB"},
        {nama:'Sub Kegiatan',checked:0,key:"subK"},
        {nama:'Tampung Sub Keg',checked:0,key:"tsubK"},
        {nama:'SSH',checked:0,key:"ssh"},
        {nama:'Rincian Belanja',checked:0,key:"rincianB"},
    ];
    
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
                    ,text:"<h3>Export Data / Pengiriman Data</h3>",
                    classJudul:' p-2',
                    id:"form1",
                    // btn:,
                    sizeCol:undefined,
                    bgHeader:"bg-info text-light",
                    attrHeader:`style="height: max-content;"`,
                    bgForm:"#fff; font-size:15px;",
                    isi:_sejajar({
                            data:[{
                                isi:_inpGroupPrepend({
                                    placeholder:"Dari Tahun",
                                    icon:'<i class="mdi mdi-cube-outline text-primary fzMfc"></i>',
                                    bg:"bg-dark text-light",
                                    isi:_inpComboBox({
                                        id:"from", 
                                        bg:"bg-secondary text-light fzMfc",
                                        data:_.tahun,
                                        getCombo:true,
                                        // index:"Bagus H",
                                        attr:"text-dark;",
                                        // change:"_changeStatus(this)",
                                    }),
                                    attrSpan:`style="width: 80px;"`,
                                })
                            },{
                                isi:_inpGroupPrepend({
                                    placeholder:"Menuju Tahun",
                                    icon:'<i class="mdi mdi-cube-outline text-primary fzMfc"></i> ',
                                    bg:"bg-dark text-light",
                                    attrSpan:`style="width: 100px;"`,
                                    isi:_inpComboBox({
                                        id:"to", 
                                        bg:"bg-secondary text-light fzMfc",
                                        data:_.tahun,
                                        getCombo:true,
                                        // index:"Bagus H",
                                        attr:"text-dark;",
                                        // change:"_changeStatus(this)",
                                    })
                                })
                            }]
                        })
                        +_sejajar({
                            data:[{
                                isi:''
                            },{
                                isi:_btn({
                                    color:"success shadow",
                                    judul:"Export Data Selected",
                                    attr:"style='padding:5px;font-size:15px;' onclick='exportx()'",
                                    // class:"btn btn-success btn-block"
                                })
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
    // infoSupport1=[];
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
                    data:_.data
                    ,no:1
                    ,kolom:[
                        "nama","checkbox"
                    ]
                    ,namaKolom:[
                        "Export Data","Pilih"
                    ],
                    // action:infoSupport1,
                    func:"_changeSelected()"
                })
        });;
}
function exportx(){
    _modalEx1({
        judul:"Konfirmasi ".toUpperCase(),
        icon:`<i class="mdi mdi-note-plus"></i>`,
        cform:`text-light`,
        bg:"bg-warning",
        minWidth:"500px; font-size: medium;",
        isi:"Lakukan proses pengiriman data ???<br> jika terdapat data pada tahun tujuan, proses ini akan menghapus data tersebut sesuai dengan pilihan yang terpilih",
        footer:_btn({
                    color:"primary shadow",
                    judul:"Close",
                    attr:`style='float:right; padding:5px;font-size: medium;' onclick="_modalHide('modal')"`,
                    class:"btn btn-secondary"
                })
                +_btn({
                    color:"primary shadow",
                    judul:"Export Data",
                    attr:"style='float:right; padding:5px;font-size: medium;' onclick='exportxed()'",
                    class:"btn btn-success"
                })
    });
}
function exportxed(){
    ftam=[];
    _.data.forEach((v) => {
        if(v.checked){
            ftam.push({key:v.key});
        }
    });
    if(ftam.length==0){
        _modalHide('modal');
        return _toast({bg:'e',msg:'Lakukan pemilihan data yang aKan diexport !!!'});
    }
    param={
        from    :$('#from').val(),
        to      :$('#to').val(),
        data    :ftam
    }
    if(param.from==param.to){
        _modalHide('modal');
        return _toast({bg:'e',msg:'Tahun yang akan diproses tidak boleh sama  !!!'});
    }

    _post('proses/export',param).then(res=>{
        res=JSON.parse(res);
        if(res.exec){
            _modalHide('modal');
            _respon();
        }else{
            return _toast({bg:'e', msg:res.msg});
        }
    });
}
function _respon(){
    _.data=[
        {nama:'Dinas',checked:0,key:"dinas"},
        {nama:'Rekening Belanja',checked:0,key:"rekeningB"},
        {nama:'Sub Kegiatan',checked:0,key:"subK"},
        {nama:'Tampung Sub Keg',checked:0,key:"tsubK"},
        {nama:'SSH',checked:0,key:"ssh"},
        {nama:'Rincian Belanja',checked:0,key:"rincianB"},
    ];
    $('#tabelShow').html(setTabel());
    _startTabel("dt");
}
function _changeSelected(ind,val) {
    _.data[ind].checked=Number(val.checked);
}
