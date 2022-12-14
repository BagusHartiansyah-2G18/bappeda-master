function _onload(data){
    $('#body').html(data.tmBody);
    myCode=data.code;
    
    _.member=data.member;
    img.maxUpload=1;
    _.ind=0;
    _.ind1=0;
    _.keterangan='keterangan';
    $('#bodyTM').html(_form());
    _startEditorTiny({url:router});
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
                    ,text:"<h3>Data Agenda</h3>",
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
                    isi:_inpComboBox({
                            judul:"Bidang",
                            id:"kdMember",
                            color:"black",  
                            data:_.member,
                            bg:"bg-primary fzMfc",
                            method:"sejajar",
                            index:'Bagus H',
                            change:'_changeMember(this)'
                        })
                        +_lines({})
                        +_tabx({
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
                                isi:_fagenda(),
                                // onclick:`_checkUpdTabel()`
                            }]
                        }),
                })
            +`</div>
        </div>
    </div>`;
}

function _changeMember(v) {
    _.ind=Number(v.value);
    if(_.member[_.ind].dt==undefined){
        _post('proses/selectMemberAgenda',{kdMember:_.member[_.ind].value}).then(res=>{
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
    infoSupport1.push({ 
        clsBtn:`btn-outline-success fzMfc`
        ,func:"filasisasi()"
        ,icon:`<i class="mdi mdi-check"></i>`
        ,title:"Finalisasi Agenda"
    });
    fhtml=`<thead>
                <tr>
                    <th>no</th>
                    <th>Judul</th>
                    <th>Hari</th>
                    <th>Tanggal</th>
                    <th>Waktu</th>
                    <th>Tempat</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>`;
            _.member[_.ind].dt.forEach((v,i)=> {
                fhtml+=`
                    <tr>
                        <td>`+(i+1)+`</td>
                        <td>`+v.judul+`</td>
                        <td>`+v.hari+`</td>
                        <td>`+v.tgl+`</td>
                        <td>`+v.waktu+`</td>
                        <td>`+v.tempat+`</td>
                        <td style="min-width: 15%;">`+
                            (
                                Number(v.final)?
                                _btnGroup([{ 
                                    clsBtn:`btn-outline-danger fzMfc`
                                    ,func:"xxx"
                                    ,icon:`<i class="mdi mdi-lock"></i> Terkunci`
                                    ,title:"Terkunci"
                                }],i):
                                _btnGroup(infoSupport1,i)
                            )
                        +`</td>
                    </tr>
                `;
            });
        fhtml+=`</tbody>`;
    return _tabelResponsive(
        {
            id:"dt"
            ,isi:fhtml
        });;
}
function addData() {
    _modalEx1({
        judul:"Tambah Data".toUpperCase(),
        icon:`<i class="mdi mdi-note-plus"></i>`,
        cform:`text-light`,
        bg:undefined,
        minWidth:"500px; font-size: medium;",
        isi:"Simpan agenda kegiatan ?",
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
    fkdAgenda=1;
    try {
        fkdAgenda=_.member[_.ind].dt[0].kdAgenda+1;
    } catch (error) {
        
    }
    param={
        keterangan  :tinymce.get('isi').getContent(),
        judul       :$('#judul').val(),
        hari        :$('#hari').val(),
        tempat      :$('#tempat').val(),
        tglS     :$('#tglS').val(),
        tglE     :$('#tglE').val(),
        waktu       :$('#waktu').val(),
        kdAgenda    :fkdAgenda,
        kdMember    :_.member[_.ind].value
    }
    if(_isNull(param.judul))return _toast({bg:'e',msg:'Tambahkan Judul Kegiatan !!!'});
    if(_isNull(param.hari))return _toast({bg:'e',msg:'Tambahkan Hari Kegiatan !!!'});
    if(_isNull(param.tglS))return _toast({bg:'e',msg:'Tambahkan Tanggal Mulai Kegiatan !!!'});
    if(_isNull(param.waktu))return _toast({bg:'e',msg:'Tambahkan waktu Kegiatan !!!'});
    if(_isNull(param.tempat))return _toast({bg:'e',msg:'Tambahkan tempat Kegiatan !!!'});
    if(_isNull(param.keterangan))return _toast({bg:'e',msg:'Tambahkan keterangan !!!'});
    // if(img.data.length==0)return _toast({bg:'e',msg:'Tambahkan File Dokumentasi !!!'});
    
    _postFile('proses/insAgenda',param,img.data).then(res=>{
        res=JSON.parse(res);
        if(res.exec){
            _modalHide('modal');
            img.data=[];
            _respon(res.data);
        }else{
            return _toast({bg:'e', msg:res.msg});
        }
    });
}
function updData(ind) {
    _.ind1=ind;
    tinymce.get('isi').setContent(_.member[_.ind].dt[ind].keteranganS);
    // get('isi').getContent()

    $('#btnAdd').css({display:'none'});
    $('#btnUpd').css({display:''});
    $('#btnFinal').css({display:'none'});
    
    $('#ffile').css({display:'none'});

    $('#tab0').removeClass("active");
    $('#contentTab0').removeClass("active");

    $('#tab1').addClass("active");
    $('#contentTab1').addClass("active");

    $('#tab1').html("<b>Form Perubahan</b>");

    $('#judul').val(_.member[_.ind].dt[ind].judul);
    $('#hari').val(_.member[_.ind].dt[ind].hari);
    $('#tempat').val(_.member[_.ind].dt[ind].tempat);
    $('#tglS').val(_.member[_.ind].dt[ind].tglS);
    $('#tglE').val(_.member[_.ind].dt[ind].tglE);
    $('#waktu').val(_.member[_.ind].dt[ind].waktu);
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
                    class:"btn btn-warning"
                })
    });
}
function updDataed(){
    param={
        keterangan  :tinymce.get('isi').getContent(),
        judul       :$('#judul').val(),
        hari        :$('#hari').val(),
        tempat      :$('#tempat').val(),
        tglS     :$('#tglS').val(),
        tglE     :$('#tglE').val(),
        waktu       :$('#waktu').val(),
        kdAgenda    :_.member[_.ind].dt[_.ind1].kdAgenda,
        kdMember    :_.member[_.ind].value
    }
    if(_isNull(param.judul))return _toast({bg:'e',msg:'Tambahkan Judul Kegiatan !!!'});
    if(_isNull(param.hari))return _toast({bg:'e',msg:'Tambahkan Hari Kegiatan !!!'});
    if(_isNull(param.tglS))return _toast({bg:'e',msg:'Tambahkan Tanggal Mulai Kegiatan !!!'});
    if(_isNull(param.waktu))return _toast({bg:'e',msg:'Tambahkan waktu Kegiatan !!!'});
    if(_isNull(param.tempat))return _toast({bg:'e',msg:'Tambahkan tempat Kegiatan !!!'});
    if(_isNull(param.keterangan))return _toast({bg:'e',msg:'Tambahkan keterangan !!!'});
    // return console.log(param);
    _post('proses/updAgenda',param).then(res=>{
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
    $('#btnFinal').css({display:'none'});
    $('#ffile').css({display:''});

    // $('#idInpDropJudul').html('Sub Kegiatan');
    $('#tab1').html("<b>Form Entri</b>");
    $('#judul').val('');
    $('#tempat').val('');
    $('#waktu').val('');
    $('#hari').val('');
    $('#tglS').val('');
    $('#tglE').val('');
    tinymce.get('isi').setContent('keterangan');
    $('#images').html('');
    img.data=[];
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
        kdAgenda    :_.member[_.ind].dt[ind].kdAgenda,
        kdMember    :_.member[_.ind].value
    }
    _post('proses/delAgenda',param).then(res=>{
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
        _.member[_.ind].dt=data.dt;
        btlData();
    }
    $('#tabelShow').html(setTabel());
    _startTabel("dt");
}

function filasisasi(ind) {
    _.ind1=ind;
    tinymce.get('isi').setContent("Keterangan");
    // get('isi').getContent()
    img.maxUpload=10;
    $('#btnAdd').css({display:'none'});
    $('#btnUpd').css({display:'none'});
    $('#btnFinal').css({display:''});
    
    // $('#ffile').css({display:'none'});

    $('#tab0').removeClass("active");
    $('#contentTab0').removeClass("active");

    $('#tab1').addClass("active");
    $('#contentTab1').addClass("active");

    $('#tab1').html("<b>Form Finalisasi Agenda</b>");

    $('#judul').val(_.member[_.ind].dt[ind].judul);
    $('#hari').val(_.member[_.ind].dt[ind].hari);
    $('#tempat').val(_.member[_.ind].dt[ind].tempat);
    $('#tglS').val(_.member[_.ind].dt[ind].tglS);
    $('#tglE').val(_.member[_.ind].dt[ind].tglE);
    $('#waktu').val(_.member[_.ind].dt[ind].waktu);
}
function btlDataFinal() {
    $('#tab1').removeClass("active");
    $('#contentTab1').removeClass("active");

    $('#tab0').addClass("active");
    $('#contentTab0').addClass("active");

    $('#btnAdd').css({display:''});
    $('#btnUpd').css({display:'none'});
    $('#btnFinal').css({display:'none'});

    $('#ffile').css({display:''});

    // $('#idInpDropJudul').html('Sub Kegiatan');
    $('#tab1').html("<b>Form Entri</b>");
    $('#judul').val('');
    $('#tempat').val('');
    $('#waktu').val('');
    $('#hari').val('');
    $('#tglS').val('');
    $('#tglE').val('');
    tinymce.get('isi').setContent('keterangan');
    $('#images').html('');
    img.maxUpload=1;
    img.data=[];
}
function updDataxFinal() {
    _modalEx1({
        judul:"Pengarsipan Agenda".toUpperCase(),
        icon:`<i class="mdi mdi-note-plus"></i>`,
        cform:`text-light`,
        bg:'bg-success',
        minWidth:"500px; font-size: medium;",
        isi:"Mengunci dan mengarsipkan Agenda ini ?",
        footer:_btn({
                    color:"primary shadow",
                    judul:"Close",
                    attr:`style='float:right; padding:5px;font-size: medium;' onclick="_modalHide('modal')"`,
                    class:"btn btn-secondary"
                })
                +_btn({
                    color:"primary shadow",
                    judul:"SIMPAN",
                    attr:"style='float:right; padding:5px;font-size: medium;' onclick='updDataedFinal()'",
                    class:"btn btn-success"
                })
    });
}
function updDataedFinal(){
    param={
        keterangan  :tinymce.get('isi').getContent(),
        judul       :$('#judul').val(),
        hari        :$('#hari').val(),
        tempat      :$('#tempat').val(),
        tglS        :$('#tglS').val(),
        tglE        :$('#tglE').val(),
        waktu       :$('#waktu').val(),
        kdAgenda    :_.member[_.ind].dt[_.ind1].kdAgenda,
        kdMember    :_.member[_.ind].value
    }
    if(_isNull(param.judul))return _toast({bg:'e',msg:'Tambahkan Judul Kegiatan !!!'});
    if(_isNull(param.hari))return _toast({bg:'e',msg:'Tambahkan Hari Kegiatan !!!'});
    if(_isNull(param.tglS))return _toast({bg:'e',msg:'Tambahkan Tanggal Mulai Kegiatan !!!'});
    if(_isNull(param.waktu))return _toast({bg:'e',msg:'Tambahkan waktu Kegiatan !!!'});
    if(_isNull(param.tempat))return _toast({bg:'e',msg:'Tambahkan tempat Kegiatan !!!'});
    if(_isNull(param.keterangan))return _toast({bg:'e',msg:'Tambahkan keterangan !!!'});
    // return console.log(param);
    _postFile('proses/finalAgenda',param,img.data).then(res=>{
        res=JSON.parse(res);
        if(res.exec){
            _modalHide('modal');
            img.maxUpload=1;
            img.data=[];
            _respon(res.data);
        }else{
            return _toast({bg:'e', msg:res.msg});
        }
    });
}