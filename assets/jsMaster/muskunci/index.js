function _onload(data){
    $('#body').html(data.tmBody);
    myCode=data.code;
    
    _.tahapan=data.tahapan;
    _.member=data.member;
    
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
    infoSupport=[];
    infoSupport.push({ 
        clsBtn:`btn-danger fzMfc`
        ,func:"_fkunciAll(1,)"
        ,icon:`<i class="mdi mdi-cellphone-link-off m-2 "></i>Kunci `
        ,title:_.tahapan
    });
    infoSupport.push({ 
        clsBtn:`btn-light fzMfc`
        ,func:"_fkunciAll(0,)"
        ,icon:`<i class="mdi mdi-cellphone-link m-2"></i>Buka `
        ,title:_.tahapan
    });

    return `<div class="row m-2 shadow">`
                +_formIcon({
                    icon:'<i class="mdi mdi-file-check"  style="font-size: 20px;"></i>'
                    ,text:"<h3>Kunci "+_.tahapan+"</h3>",
                    classJudul:' p-2',
                    id:"form1",
                    btn:_btnGroup(infoSupport,0),
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
        clsBtn:`btn-outline-danger fzMfc`
        ,func:"_fkunci(1,)"
        ,icon:`<i class="mdi mdi-cellphone-link-off m-2"></i>Kunci`
        ,title:"Kunci"
    });
    infoSupport1.push({ 
        clsBtn:`btn-outline-info fzMfc`
        ,func:"_fkunci(0,)"
        ,icon:`<i class="mdi mdi-cellphone-link m-2"></i>Buka`
        ,title:"buka"
    });
    return _tabelResponsive(
        {
            id:"dt"
            ,isi:_tabel(
                {
                    data:_.member
                    ,no:1
                    ,kolom:[
                        "nmMember"
                    ]
                    ,namaKolom:[
                        "Akun"
                    ],
                    action:infoSupport1
                })
        });;
}
function _fkunci(kunci,ind) {
    _modalEx1({
        judul:"Konfirmasi Penguncian".toUpperCase(),
        icon:`<i class="mdi mdi-note-plus"></i>`,
        cform:`text-light`,
        bg:(kunci?'bg-danger':'bg-info'),
        minWidth:"500px; font-size: medium;",
        isi:(kunci?'Kunci':'Buka')+" akses pengguna "+_.member[ind].nmMember,
        footer:_btn({
                    judul:"Close",
                    attr:`style='float:right; padding:5px;font-size: medium;' onclick="_modalHide('modal')"`,
                    class:"btn btn-secondary"
                })
                +_btn({
                    judul:(kunci?'Kunci':'Buka'),
                    attr:"style='float:right; padding:5px;font-size: medium;' onclick='_fkuncied("+kunci+","+ind+")'",
                    class:"btn btn-"+(kunci?'danger':'info')
                })
    });
}
function _fkuncied(kunci,ind){
    param={
        kunci   :kunci,
        kdMember   :_.member[ind].kdMember,
    }
    _post('proses/onOffKeyMus',param).then(res=>{
        res=JSON.parse(res);
        if(res.exec){
            _modalHide('modal');
        }else{
            return _toast({bg:'e', msg:res.msg});
        }
    });
}

function _fkunciAll(kunci) {
    _modalEx1({
        judul:"Konfirmasi Penguncian".toUpperCase(),
        icon:`<i class="mdi mdi-note-plus"></i>`,
        cform:`text-light`,
        bg:(kunci?'bg-danger':'bg-info'),
        minWidth:"500px; font-size: medium;",
        isi:(kunci?'Kunci':'Buka')+" akses untuk seluruh pengguna ? ",
        footer:_btn({
                    judul:"Close",
                    attr:`style='float:right; padding:5px;font-size: medium;' onclick="_modalHide('modal')"`,
                    class:"btn btn-secondary"
                })
                +_btn({
                    judul:(kunci?'Kunci':'Buka'),
                    attr:"style='float:right; padding:5px;font-size: medium;' onclick='_fkunciAlled("+kunci+")'",
                    class:"btn btn-"+(kunci?'danger':'info')
                })
    });
}
function _fkunciAlled(kunci){
    param={
        kunci   :kunci
    }
    _post('proses/onOffAllKeyMus',param).then(res=>{
        res=JSON.parse(res);
        if(res.exec){
            _modalHide('modal');
        }else{
            return _toast({bg:'e', msg:res.msg});
        }
    });
}