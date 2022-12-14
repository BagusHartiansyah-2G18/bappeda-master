function _onload(data){
    $('#body').html(data.tmBody);
    myCode=data.code;
    
    _.dt=data.dt;
    _.tahun=data.tahun;
    $('#bodyTM').html(_form());
    $('#footer').html(data.tmFooter+data.footer);
    img.maxUpload=1;
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
                    icon:'<i class="mdi mdi-apple-keyboard-command" style="font-size: 20px;"></i>'
                    ,text:"<h3>Daftar Indikator Kinerja Utama</h3>",
                    classJudul:' p-2',
                    id:"form1",
                    btn:_btn({
                        color:"primary shadow",
                        judul:"Tambah Data",
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
        clsBtn:`btn-outline-info fzMfc`
        ,func:"delData()"
        ,icon:`<i class="mdi mdi-eye"></i>`
        ,title:"Hapus"
    });

    fhtml=`
        <thead>
            <tr>
                <th>No</th>
                <th>Indikator</th>
                <th>Tujuan</th>
                <th>Sasaran</th>`;
            fcont=_.tahun.length-1;
            while (fcont>=0) {
                fhtml+=`<td >`+_.tahun[fcont].nama+`</td>`;
                fcont--;
            }
        fhtml+=`
                <th>Satuan Data</th>
                <th>Action</th>
            </tr>
        </thead>
        <tbody>`;
        _.dt.forEach((v,i) => {
            fhtml+=`
                <tr>
                    <td>`+(i+1)+`</td>
                    <td>`+v.nmIku+`</td>
                    <td>`+v.ketIku+`</td>
                    <td>`+v.sasIku+`</td>`;
                    fcont=_.tahun.length-1;
                    if(v.ok==undefined){ // agar 
                        v.tahun=_getValueTahun(_.tahun,(v.tahun==undefined?[]:v.tahun));
                    }
                    v.tahun.forEach((t,it) => {
                        v.ok="Bagush";
                        // if(t.value){
                        //     fhtml+=`<td>`
                        //                 +t.value
                        //             +`</td>`;
                        // }else{
                        //     fhtml+=`<td></td>`;
                        // }
                        if(t.value){
                            fhtml+=`<td>`
                                        +_btnGroup([
                                            {
                                                clsBtn:`btn-outline-dark`
                                                ,func:"setval1("+i+",0,)"
                                                ,icon:`<b class="p-1">`+t.value+`</b><i class="mdi mdi-cloud-upload-outline"></i> `
                                                ,title:"Perbarui Hasil"
                                            }
                                        ],it)
                                    +`</td>`;
                        }else{
                            fhtml+=`<td>`
                                        +_btnGroup([
                                            {
                                                clsBtn:`btn-outline-dark`
                                                ,func:"setval1("+i+",1,)"
                                                ,icon:` <i class="mdi mdi-cloud-upload-outline"></i> `
                                                ,title:"Entri Hasil"
                                            }
                                        ],it)
                                    +`</td>`;
                        }
                    });
                fhtml+=`<td>`+v.satuan+`</td>
                    <td>`+_btnGroup(infoSupport1,i)+`</td>
                </tr>
            `;
        });
            
    fhtml+=`</tbody>
    `;
    return _tabelResponsive({
        id:"dt"
        ,isi:fhtml
    });
}
function addData() {
    _modalEx1({
        judul:"Tambah Data".toUpperCase(),
        icon:`<i class="mdi mdi-note-plus"></i>`,
        cform:`text-light`,
        bg:undefined,
        minWidth:"500px; font-size: medium;",
        isi:_fiku(true),
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
    
    $('#kdIku').val((_.dt.length+1));
}
function addDataed(){
    param={
        kdIku  :$('#kdIku').val(),
        nmIku  :$('#nmIku').val(),
        ketIku :$('#ketIku').val(),
        sasIku :$('#sasIku').val(),
        satuan :$('#satuan').val(),
    }
    if(_isNull(param.nmIku))return _toast({bg:'e',msg:'Tambahkan Indikator !!!'});
    if(_isNull(param.ketIku))return _toast({bg:'e',msg:'Tambahkan Tujuan !!!'});
    if(_isNull(param.sasIku))return _toast({bg:'e',msg:'Tambahkan Sasaran !!!'});
    if(_isNull(param.satuan))return _toast({bg:'e',msg:'Tambahkan Satuan !!!'});

    if(img.data.length==0)return _toast({bg:'e',msg:'Tambahkan File Icon !!!'});

    _postFile('proses/insSpm',param,img.data).then(res=>{
        res=JSON.parse(res);
        if(res.exec){
            img.data=[];
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
        isi:_fiku(false),
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
    $('#kdIku').val(_.dt[ind].kdIku);
    $('#nmIku').val(_.dt[ind].nmIku);
    $('#ketIku').val(_.dt[ind].ketIku);
    $('#sasIku').val(_.dt[ind].sasIku);
    $('#satuan').val(_.dt[ind].satuan);
}
function updDataed(ind){
    param={
        kdIku  :$('#kdIku').val(),
        nmIku  :$('#nmIku').val(),
        ketIku :$('#ketIku').val(),
        sasIku :$('#sasIku').val(),
        satuan :$('#satuan').val(),
    }
    if(_isNull(param.nmIku))return _toast({bg:'e',msg:'Tambahkan Indikator !!!'});
    if(_isNull(param.ketIku))return _toast({bg:'e',msg:'Tambahkan Tujuan !!!'});
    if(_isNull(param.sasIku))return _toast({bg:'e',msg:'Tambahkan Sasaran !!!'});
    if(_isNull(param.satuan))return _toast({bg:'e',msg:'Tambahkan Satuan !!!'});

    _post('proses/updSpm',param).then(res=>{
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
        judul:"File Icon".toUpperCase(),
        icon:`<i class="mdi mdi-note-plus"></i>`,
        cform:`text-light`,
        bg:"bg-info",
        minWidth:"500px; font-size: medium;",
        isi:`<img src="`+assert+`/fs_sistem/upload/icIku/`+_.dt[ind].img+`" width="100%">`,
        footer:_btn({
                    color:"primary shadow",
                    judul:"Close",
                    attr:`style='float:right; padding:5px;font-size: medium;' onclick="_modalHide('modal')"`,
                    class:"btn btn-secondary"
                })
                // +_btn({
                //     color:"primary shadow",
                //     judul:"SIMPAN",
                //     attr:"style='float:right; padding:5px;font-size: medium;' onclick='delDataed("+ind+")'",
                //     class:"btn btn-primary"
                // })
    });
}
function _respon(data){
    if(data!=null){
        _.dt=data.dt;
    }
    $('#tabelShow').html(setTabel());
    _startTabel("dt");
}


function setval1(ind,ins,it) {
    _modalEx1({
        judul:"Perbarui Data".toUpperCase(),
        icon:`<i class="mdi mdi-note-plus"></i>`,
        cform:`text-light`,
        bg:"bg-warning",
        minWidth:"500px;",
        isi:_fsetValIku(
            {
                judul:_.dt[ind].nmIku,
                satuan:_.dt[ind].satuan,
                target:_.dt[ind].tahun[it].target,
                realisasi:_.dt[ind].tahun[it].realisasi,
                capaian:_.dt[ind].tahun[it].capaian,
            }
        ),
        footer:_btn({
                    color:"primary shadow",
                    judul:"Close",
                    attr:`style='float:right; padding:5px;font-size: medium;' onclick="_modalHide('modal')"`,
                    class:"btn btn-secondary"
                })
                +_btn({
                    judul:"SIMPAN",
                    attr:"style='float:right; padding:5px;font-size: medium;' onclick='setval1ed("+ind+","+ins+","+it+")'",
                    class:"btn btn-warning"
                })
    });
}
function setval1ed(ind,ins,it){
    param={
        kdIku       :_.dt[ind].kdIku,
        tahun       :_.dt[ind].tahun[it].tahun,
        target      :$('#target').val(),
        realisasi   :$('#realisasi').val(),
        capaian     :$('#capaian').val() 
    }
    if(_isNull(param.target))return _toast({bg:'e',msg:'Tambahkan Nilai Target !!!'});
    if(_isNull(param.realisasi))return _toast({bg:'e',msg:'Tambahkan Nilai Realisasi !!!'});
    if(_isNull(param.capaian))return _toast({bg:'e',msg:'Tambahkan Nilai Capaian !!!'});

    _post('proses/execQueryNoReturn',{
        query:(
                ins?
                `INSERT INTO ikuvalue(kdIku, tahun,target, realisasi, capaian,jenis) VALUES (
                    '`+param.kdIku+`','`+param.tahun+`','`+param.target+`','`+param.realisasi+`','`+param.capaian+`','spm'
                )`
                :
                `
                    update ikuvalue set target='`+param.target+`',realisasi='`+param.realisasi+`',capaian='`+param.capaian+`'
                    where kdIku='`+param.kdIku+`' and tahun='`+param.tahun+`' and jenis='spm'
                `
            )
    }).then(res=>{
        res=JSON.parse(res);
        if(res.exec){
            _modalHide('modal');
            _.dt[ind].tahun[it].target      =param.target;
            _.dt[ind].tahun[it].realisasi   =param.realisasi;
            _.dt[ind].tahun[it].value       =param.realisasi;
            _.dt[ind].tahun[it].capaian     =param.capaian;
            _respon();
        }else{
            return _toast({bg:'e', msg:res.msg});
        }
    });
}