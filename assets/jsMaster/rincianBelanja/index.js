function _onload(data){
    $('#body').html(data.tmBody);
    myCode=data.code;
    _.drenstra=data.drenstra[0];
    _.dapbd=data.dapbd;
    _.sfKdApbd='';
    _.dtDetailRincian=data.dtDetailRincian;
    // console.log(_.dtDetailRincian);
    _.dSdana=data.dSdana;
    _.dsshx=data.dssh; // ssh yang berpproses
    _.sfKeyUpdate='';
    _.totalPagu=0;
    


    _.tahapan=data.tahapan;
    _.tahun=data.tahun;
    _.nmTahapan=data.nmTahapan;
    
    $('#bodyTM').html(_form());
    $('#footer').html(data.tmFooter+data.footer);
    
    _tabelPreview(null);
    _startTabel("dt");
    saveDynamicDataToFile();
    // _startTabel("dtPreview");
}
function _form() {
    // <img class="img-fluid d-block mx-auto" src="`+assert+`fs_css/bgForm.png" alt="sasasa"></img>
    return `
    <div class="page-header" style="padding: 20px; margin-top: 4%;">
        <div class="page-block">`
            +_infoBelanja()
            +_formBelanja()
            +_formPreview()
        +`</div>
    </div>`;
}

function _infoBelanja() {
    return `<div class="row ml-2 shadow" >`
                +_formIcon({
                    icon:'<i class="mdi mdi-file-check"></i>'
                    ,text:"<h3>Informasi Belanja</h3>",
                    classJudul:' p-2',
                    id:"form1",
                    sizeCol:undefined,
                    bgHeader:"bg-info text-light",
                    attrHeader:`style="height: max-content;"`,
                    bgForm:"#fff; font-size:15px;",
                    isi:_getInfoRenstra()
                })
            +`</div>`;
}
function _getInfoRenstra() {
    infoSupport=[];
    infoSupport.push({name:"Urusan",value:_.drenstra.nmUrusan});
    infoSupport.push({name:"Bidang",value:_.drenstra.nmBidang});
    infoSupport.push({name:"Program",value:_.drenstra.nmProg});
    infoSupport.push({name:"Kegiatan",value:_.drenstra.nmKeg});
    infoSupport.push({name:"Sub Kegiatan",value:_.drenstra.nmSub});
    return _tbl2Col(infoSupport);
}
function _formBelanja(){
    return `<div class="row ml-2 shadow" style="margin-top:20px;">`
                +_formIcon({
                    icon:'<i class="mdi mdi-file-check"></i>'
                    ,text:"<h3>Form Belanja</h3>",
                    classJudul:' p-2',
                    id:"form1",
                    sizeCol:undefined,
                    bgHeader:"bg-info text-light",
                    attrHeader:`style="height: max-content;"`,
                    bgForm:"#fff; font-size:15px;",
                    isi:`<div id="formAdd">`
                            +_inpSejajar({
                                attrRow:"margin-left:5px;margin-bottom:10px;",
                                attrCol:"margin-left:5px;margin-bottom:10px;",
                                attrLabel:"color:black",
                                judul:"Rekening Belanja",
                                isi:_inpDropdonwSelected({
                                        inputType:true,
                                        inputChange:"_changeValRekening",
                                        attrInput:"border-color: yellowgreen; font-size:medium; margin-bottom:20px",
                                        classDropdonw:"form-control p-0 fzMfc",
                                        judul:"Rekening Belanja",
                                        id:"rekening",
                                        idJudul:"jrekening",
                                        idData:"drekening",
                                        data:_.dapbd,
                                        bgSearch:"#283941",
                                        bg:" btn-primary fzMfc",
                                        idDropdonw:"idInpDropRekening",
                                        func:"_selectRekening",
                                        funcSearch:"_formSearchRekening(this)"
                                    })
                            })
                            +_inpSejajar({
                                attrRow:"margin-left:5px;margin-bottom:10px;",
                                attrCol:"margin-left:5px;margin-bottom:10px;",
                                attrLabel:"color:black",
                                judul:"Judul Uraian",
                                isi:_inp({
                                    type:"text",
                                    cls:'form-control fzMfc',
                                    hint:"Judul Uraian",
                                    id:"judul",
                                })
                            })
                            +_inpSejajar({
                                attrRow:"margin-left:5px;margin-bottom:10px;",
                                attrCol:"margin-left:5px;margin-bottom:10px;",
                                attrLabel:"color:black",
                                judul:"",
                                isi:_btn({
                                    judul:"Tambah Judul",
                                    attr:"style='float:right;' onclick='_addJudul()'",
                                    class:"btn btn-primary btn-block fzMfc"
                                })
                            })
                            +_lines({attr:'background:white;'})
                        +`</div>
                        <div id="formSetting">`
                            
                        +`</div>`
                    
                })
            +`</div>`;
}
function _formPreview(){
    infoSupport1=[];
    infoSupport1.push({ 
        clsBtn:`btn-primary fzMfc`
        ,func:"_lapoPDF()"
        ,icon:`<i class="mdi mdi-file-check"></i>PDF`
        ,title:"Donwload PDF"
    });
    infoSupport1.push({ 
        clsBtn:`btn-success fzMfc`
        ,func:"_lapoExcell()"
        ,icon:`<i class="mdi mdi-file-check"></i>Excell`
        ,title:"Donwload Excell"
    });
    return `<div class="row ml-2 shadow"  style="margin-top:20px;">`
                +_formIcon({
                    icon:'<i class="mdi mdi-file-check"></i>'
                    ,text:"<h3>Form Belanja</h3>",
                    classJudul:' p-2',
                    id:"form1",
                    btn:_btnGroup(infoSupport1,0),
                    sizeCol:undefined,
                    bgHeader:"bg-info text-light",
                    attrHeader:`style="height: max-content;"`,
                    bgForm:"#fff; font-size:15px;",
                    isi:`<div id="formPreview">`
                        +`</div>`                        
                })
            +`</div>`;
}
function _tabelPreview(data) {
    if(data!=null){
        $('#formSetting').html('');
        _.dtDetailRincian=data.dtDetailRincian;
    }
    $('#formPreview').html(
        _tabelResponsive({
            id:"dtPreview"
            ,isi:_previewRBelanja()
        })
    );
    // _startTabel("dtPreview");
}

function _changeValRekening(v) {
    if(!$('#rekening').hasClass('show')){
        $('#rekening').addClass("show");
    }
    _multiDropdonwSearch({
        data:_.dapbd,
        idData:"drekening",
        id:"rekening",
        value:v.value,
        cls:'btn-primary fzMfc',
        func:"_selectRekening",
        idDropdonw:"idInpDropRekening",
    })
}
function _selectRekening(idForDrop,id,value,valueName){
    _.sfKdApbd=value;
    $("#"+id).val(valueName.substring(0,50));
    return _showForDropSelect(idForDrop);
}
function _formSearchRekening(v){
    _multiDropdonwSearch({
        data:_.dapbd,
        idData:"drekening",
        id:"rekening",
        value:v.value,
        cls:'btn-primary fzMfc',
        func:"_selectRekening",
        idDropdonw:"idInpDropRekening",
    })
}

function _addJudul(){    
    if(_isNull(_.sfKdApbd))return _toast({bg:'e',msg:'Pilih Rekening Belanja !!!'});
    if(_isNull($('#judul').val()))return _toast({bg:'e',msg:'Judul belum diisi !!!'});

    kdJudul=1;
    _.dtDetailRincian.forEach(v => {
        if(Number(v.kdJudul)>=Number(kdJudul)){
            kdJudul=Number(v.kdJudul)+1;
        }
    });
    _.dtDetailRincian.push({
        nama    :$('#judul').val(),
        jumlah  :0,
        kdSDana:0,
        kdApbd:_.sfKdApbd,
        detail:[],
        status:"belum",
        kdJudul:kdJudul
    });
    _dataTableDetail();
    $('#judul').val('');
}
function _dataTableDetail(){
    var html=_getHeadRincian(),
    tamJudul="",tamDetail="",selected="";
    if(_.dtDetailRincian.length!=0){

        _.dtDetailRincian.forEach((v,i) => {
            if(v.status!="sudah"){
                tamJudul=_getJudulRincian(i,false);
            }
            if(tamJudul.length!=0){
                html+=tamJudul;
            }
            tamDetail="";
            v.detail.forEach((v1,i1) => {
                if(v1.status!="sudah"){
                    selected="";
                    tamDetail+=_setBodyRincian(i,i1,false);
                }
            });
            if(tamDetail.length!=0){
                html+=tamDetail;
            }
        });
    }
    html+=`<tr class="bg-gray-200">
                <td colspan="14" class="text-right">
                    <button class="btn btn-success btn-m btn-icon-split fzMfc" onclick="_save()">
                        <span class="text">Simpan Uraian Belanja</span>
                    </button>
                </td>
            </tr>
        </body>`;
    
    $('#formSetting').html(
        _tabelResponsive({
            id:"dt"
            ,isi:html
        })
    );
    // $('#tabelDetailRincian').html(html);
}


function _setNama(index,next){
    // _log($('#judul'+index).val());
    _.dtDetailRincian[index].nama=$('#judul'+index).val();
    if(next){
        _editDataTableDetailPerIndex(_.sfKeyUpdate);
    }
}
function _editDataTableDetailPerIndex(a){
    _.sfKeyUpdate=a;
    var html=_getHeadRincian();
    if(_.dtDetailRincian.length!=0){
        html+=_getJudulRincian(a,true);
        for(let b=0;b<_.dtDetailRincian[a].detail.length;b++){
            html+=_setBodyRincian(a,b,true);
        }
    }
    // html+=_getButtonSaveTabelForm("modalUpdate");
    html+=`<tr class="bg-gray-200">
                <td colspan="14" class="text-right">
                    <button class="btn btn-warning btn-sm btn-icon-split fzMfc" onclick="_saveUpd(`+a+`)">
                        <span class="text">Simpan Perubahan</span>
                    </button>
                </td>
            </tr>
        </body>`;
    $('#formSetting').html(
        _tabelResponsive({
            id:"dt"
            ,isi:html
        })
    );
    $('#judul'+a).focus();
    // $('#tabelDetailRincian').html(html);
}

function _setSumberDana(val,index){
    var value = val.value;    
    _.dtDetailRincian[index].nmSDana=$('#kodeSumber')[0][0].lastChild.data;
    _.dtDetailRincian[index].kdSDana=value;
}


function _setSHH(indexJudul,next){
    if(_.dtDetailRincian[indexJudul].kdSDana==0){
        return _toast({bg:'e',msg:'Pilih Sumber Dana !!!'});
    }
    _.dtDetailRincian[indexJudul].detail.push({
        // uraian  :$('#judul').val(),
        uraian  :'',
        status  :"belum",
        jumlah  :"",
        jumlah1 :1,
        satuan1 :"",
        jumlah2 :"",
        satuan2 :"",
        jumlah3 :"",
        satuan3 :"",
        volume  :"",
        satuanVol:"",
        harga   :"",
        indexJudul:indexJudul
    })
    if(next){
        _editDataTableDetailPerIndex(_.sfKeyUpdate);
    }else{
        _dataTableDetail();
    }
}
function _getSHH(indexJudul,next){
    _pageLength=10;
    _.dsshx.forEach(v => {
        v.checked=0;
    });
    
    _.sfKeyUpdate=indexJudul+"|"+next;
    if(_.dtDetailRincian[indexJudul].kdSDana==0){
        return _toast({bg:'e',msg:'Pilih Sumber Dana !!!'});
    }
    _modalEx1({
        judul:"Pilih SSH ".toUpperCase(),
        icon:`<i class="mdi mdi-note-plus"></i>`,
        cform:`text-light`,
        bg:"bg-warning",
        minWidth:"500px; ;",
        isi:_tabelResponsive(
            {
                id:"dtSsh",
                attr:'fzMfc'
                ,isi:_tabel(
                    {
                        data:_.dsshx
                        ,no:1
                        ,kolom:[
                            "nama","satuan","keterangan","harga","checkbox"
                        ]
                        ,namaKolom:[
                            "Nama","Satuan","Keterangan","Harga","Pilih"
                        ],
                        func:'_sshCheck()'
                        // action:infoSupport1
                    })
            }),
        footer:_btn({
                    color:"primary shadow",
                    judul:"Batalkan",
                    attr:`style='float:right; padding:5px;;' onclick="_modalHide('modal')"`,
                    class:"btn btn-secondary"
                })
                +_btn({
                    color:"primary shadow",
                    judul:"Tambahkan SSH",
                    attr:"style='float:right; padding:5px;;' onclick='_sshChecked("+indexJudul+","+next+")'",
                    class:"btn btn-primary"
                })
    });
    _startTabel("dtSsh");
    _pageLength=25;
}
function _sshCheck(ind,v){
    _.dsshx[ind].checked=v.checked;
}
function _sshChecked(indexJudul,next){
    _modalHide('modal');
    _.dsshx.forEach((v,i) => {
        if(Number(v.checked)){
            _.dtDetailRincian[indexJudul].detail.push({
                uraian  :v.nama,
                status  :"belum",
                jumlah  :v.harga,
                jumlah1 :1,
                satuan1 :v.satuan,
                jumlah2 :"",
                satuan2 :"",
                jumlah3 :"",
                satuan3 :"",
                volume  :1,
                satuanVol:v.satuan.substring(0,1),
                harga   :v.harga,
                indexJudul:indexJudul
            })
        }
    });
    
    if(next){
        _editDataTableDetailPerIndex(indexJudul);
    }else{
        _.dtDetailRincian[indexJudul].jumlah=_getTotalJudul(indexJudul);
        _dataTableDetail();
    }
    
}


function _setvaluraian(index,indexSub,next){
    _.dtDetailRincian[index].detail[indexSub].uraian=$('#uraian'+index+indexSub).val();
    if(next){
        _editDataTableDetailPerIndex(_.sfKeyUpdate);
    }else{
        _setUraianDetail(index,indexSub);
    }
    $( "#jumlah1"+index+indexSub).focus();
}
function _getTotalJudul(index){
    var total=0;
    for(let a=0;a<_.dtDetailRincian[index].detail.length;a++){
        total+=parseFloat(_.dtDetailRincian[index].detail[a].jumlah);
    }
    return total;
}
function _setvaljumlah1(index,indexSub,next){
    _.dtDetailRincian[index].detail[indexSub].jumlah1=$('#jumlah1'+index+indexSub).val();
    if(next){
        _updateDataEditingTabel(index,indexSub);
        _editDataTableDetailPerIndex(_.sfKeyUpdate);
    }else{
        _setUraianDetail(index,indexSub);
    }
    $( "#satuan1"+index+indexSub).focus();
}

function _setvaljumlah2(index,indexSub,next){
    _.dtDetailRincian[index].detail[indexSub].jumlah2=$('#jumlah2'+index+indexSub).val();
    if(next){
        _updateDataEditingTabel(index,indexSub);
        _editDataTableDetailPerIndex(_.sfKeyUpdate);
    }else{
        _setUraianDetail(index,indexSub);
    }
    $( "#satuan2"+index+indexSub).focus();
}

function _setvaljumlah3(index,indexSub,next){
    _.dtDetailRincian[index].detail[indexSub].jumlah3=$('#jumlah3'+index+indexSub).val();
    if(next){
        _updateDataEditingTabel(index,indexSub);
        _editDataTableDetailPerIndex(_.sfKeyUpdate);
    }else{
        _setUraianDetail(index,indexSub);
    }
    $( "#satuan3"+index+indexSub).focus();
}

function _setvalsatuan1(index,indexSub,next){
    _.dtDetailRincian[index].detail[indexSub].satuan1=$('#satuan1'+index+indexSub).val();
    if(next){
        _updateDataEditingTabel(index,indexSub);
        _editDataTableDetailPerIndex(_.sfKeyUpdate);
    }else{
        _setUraianDetail(index,indexSub);
    }
    $( "#jumlah2"+index+indexSub).focus();
}

function _setvalsatuan2(index,indexSub,next){
    _.dtDetailRincian[index].detail[indexSub].satuan2=$('#satuan2'+index+indexSub).val();
    if(next){
        _updateDataEditingTabel(index,indexSub);
        _editDataTableDetailPerIndex(_.sfKeyUpdate);
    }else{
        _setUraianDetail(index,indexSub);
    }
    $( "#jumlah3"+index+indexSub).focus();
}

function _setvalsatuan3(index,indexSub,next){
    _.dtDetailRincian[index].detail[indexSub].satuan3=$('#satuan3'+index+indexSub).val();
    if(next){
        _updateDataEditingTabel(index,indexSub);
        _editDataTableDetailPerIndex(_.sfKeyUpdate);
    }else{
        _setUraianDetail(index,indexSub);
    }
    $( "#harga"+index+indexSub).focus();
}

function _setvalharga(index,indexSub,next){
    // _log($('#harga'+index+indexSub).val());
    _.dtDetailRincian[index].detail[indexSub].harga=$('#harga'+index+indexSub).val();
    // _log(_.dtDetailRincian[index].detail[indexSub].harga);
    if(next){
        _updateDataEditingTabel(index,indexSub);
        _editDataTableDetailPerIndex(_.sfKeyUpdate);
    }else{
        _setUraianDetail(index,indexSub);
    }
}

function _updateDataEditingTabel(a,b){
    var res=_getSatuanTotalHarga(a,b);
    _.dtDetailRincian[a].detail[b].volume=res.volume;
    _.dtDetailRincian[a].detail[b].satuanVol=res.satuanVol;
    _.dtDetailRincian[a].detail[b].jumlah=res.jumlah;
    _.dtDetailRincian[a].jumlah=_totalJumlahDetail(a);
    return null;
}
function _totalJumlahDetail(ind){
    var tot=0;
    for(let a=0;a<_.dtDetailRincian[ind].detail.length;a++){
        tot+=parseInt(_.dtDetailRincian[ind].detail[a].jumlah);
    }
    return tot;
}
function _setUraianDetail(index,indexSub){
    var res=_getSatuanTotalHarga(index,indexSub);
    _.dtDetailRincian[index].detail[indexSub].volume=res.volume;
    _.dtDetailRincian[index].detail[indexSub].satuanVol=res.satuanVol;

    if(res.harga>0){
        _.dtDetailRincian[index].detail[indexSub].jumlah=res.jumlah;
    }
    _.dtDetailRincian[index].jumlah=_getTotalJudul(index);
    _dataTableDetail();
}
function _getSatuanTotalHarga(index,indexSub){
    var 
        jum1=$('#jumlah1'+index+indexSub).val(),
        jum2=$('#jumlah2'+index+indexSub).val(),
        jum3=$('#jumlah3'+index+indexSub).val(),

        sat1=$('#satuan1'+index+indexSub).val(),
        sat2=$('#satuan2'+index+indexSub).val(),
        sat3=$('#satuan3'+index+indexSub).val(),

        sat1=$('#satuan1'+index+indexSub).val(),
        
        harga=$('#harga'+index+indexSub).val(),

        satuan="",
        total=0;
    
    if(jum1.length!=0 && jum1!=0){
        total=jum1;
    }
    if(jum2.length!=0 && jum2!=0){
        total=total*jum2;
    }
    if(jum3.length!=0 && jum3!=0){
        total=total*jum3;
    }

    if(sat1.length!=0){
        satuan=sat1.substring(0,1);
    }
    if(sat2.length!=0){
        satuan=satuan+sat2.substring(0,1);
    }
    if(sat3.length!=0){
        satuan=satuan+sat3.substring(0,1);
    }    
    // _log(_$(double(harga)),"h")
    return {
        volume:total,
        satuanVol:satuan,
        jumlah:harga*total,
        harga:harga
    }
}


function _posisiUp(index,indexDetail,next){
    var tam=_.dtDetailRincian[index].detail[indexDetail];
    _.dtDetailRincian[index].detail[indexDetail]=_.dtDetailRincian[index].detail[indexDetail-1];
    _.dtDetailRincian[index].detail[indexDetail-1]=tam;
    if(next){
        _editDataTableDetailPerIndex(_getKodeKeyUpdate());
    }else{
        _dataTableDetail();
    }
}
function _posisiDonw(index,indexDetail,next){
    var tam=_.dtDetailRincian[index].detail[indexDetail];
    _.dtDetailRincian[index].detail[indexDetail]=_.dtDetailRincian[index].detail[indexDetail+1];
    _.dtDetailRincian[index].detail[indexDetail+1]=tam;
    if(next){
        _editDataTableDetailPerIndex(_getKodeKeyUpdate());
    }else{
        _dataTableDetail();
    }
}
function _delete(index,indexDetail,next){
    _.sfKeyUpdate=index+"|"+indexDetail+"|"+next;
    _modalEx1({
        judul:"Konfirmasi".toUpperCase(),
        icon:`<i class="mdi mdi-note-plus"></i>`,
        cform:`text-light`,
        bg:"bg-danger",
        minWidth:"500px; font-size: medium;",
        isi:`Apakah anda ingin menghapus data ini ?`,
        footer:_btn({
                    color:"primary shadow",
                    judul:"Close",
                    attr:`style='float:right; padding:5px;font-size: medium;' onclick="_modalHide('modal')"`,
                    class:"btn btn-secondary"
                })
                +_btn({
                    color:"primary shadow",
                    judul:"SIMPAN",
                    attr:"style='float:right; padding:5px;font-size: medium;' onclick='_deleleUmum()'",
                    class:"btn btn-danger"
                })
    });
    // $('#modalDelete').modal('show');
}
function _deleleUmum(){
    _modalHide('modal');
    var ind=_.sfKeyUpdate.split("|");
    _.dtDetailRincian[ind[0]].jumlah=parseInt(_.dtDetailRincian[ind[0]].jumlah-_.dtDetailRincian[ind[0]].detail[ind[1]].jumlah);
    _.dtDetailRincian[ind[0]].detail.splice(ind[1],1);
    if(ind[2]){
        _editDataTableDetailPerIndex(ind[0]);
    }else{
        _dataTableDetail();
    }
}
function _copyAsNew(index,indexDetail,next){
    // _.dtDetailRincian[index].detail.push(_.dtDetailRincian[index].detail[indexDetail]);
    _.dtDetailRincian[index].detail.push({
        uraian  :_.dtDetailRincian[index].detail[indexDetail].uraian,
        status  :_.dtDetailRincian[index].detail[indexDetail].status,
        jumlah  :_.dtDetailRincian[index].detail[indexDetail].jumlah,
        jumlah1 :_.dtDetailRincian[index].detail[indexDetail].jumlah1,
        satuan1 :_.dtDetailRincian[index].detail[indexDetail].satuan1,
        jumlah2 :_.dtDetailRincian[index].detail[indexDetail].jumlah2,
        satuan2 :_.dtDetailRincian[index].detail[indexDetail].satuan2,
        jumlah3 :_.dtDetailRincian[index].detail[indexDetail].jumlah3,
        satuan3 :_.dtDetailRincian[index].detail[indexDetail].satuan3,
        volume  :_.dtDetailRincian[index].detail[indexDetail].volume,
        satuanVol:_.dtDetailRincian[index].detail[indexDetail].satuanVol,
        harga   :_.dtDetailRincian[index].detail[indexDetail].harga,
        indexJudul:index
    });
    if(next){
        _editDataTableDetailPerIndex(_getKodeKeyUpdate());
    }else{
        _dataTableDetail();
    }
} 

function _save(){
    _modalEx1({
        judul:"Konfirmasi".toUpperCase(),
        icon:`<i class="mdi mdi-note-plus"></i>`,
        cform:`text-light`,
        bg:"bg-success",
        minWidth:"500px; font-size: medium;",
        isi:`Simpan uraian belanja ?`,
        footer:_btn({
                    color:"primary shadow",
                    judul:"Close",
                    attr:`style='float:right; padding:5px;font-size: medium;' onclick="_modalHide('modal')"`,
                    class:"btn btn-secondary"
                })
                +_btn({
                    color:"primary shadow",
                    judul:"SIMPAN",
                    attr:"style='float:right; padding:5px;font-size: medium;' onclick='_saveed()'",
                    class:"btn btn-success"
                })
    });
}
function _saveed(){
    var values=`INSERT INTO ubjudul(kdSUb, kdDinas, kdApbd6, kdSDana, nama, taJudul, total, tahapan, kdJudul) VALUES `,
        valuesDetail=`INSERT INTO ubrincian(
                    kdRincian, kdJudul, kdSub, kdDinas, uraian, total, 
                    jumlah1, jumlah2, jumlah3, satuan1, satuan2, satuan3, 
                    volume, satuanVol, harga,taRincian,tahapan
                ) VALUES `;
        fkondisi=true;
        _.dtDetailRincian.forEach((v,i) => {
            if(v.status!="sudah" && v.detail.length>0){// judul
                values+=`
                    (
                        `+_valforQuery(_.drenstra.kdSub)+`,`+_valforQuery(_.drenstra.kdDinas)+`,`+_valforQuery(v.kdApbd)+`,
                        `+_valforQuery(v.kdSDana)+`,`+_valforQuery(v.nama)+`,`+_valforQuery(_.tahun)+`,
                        `+_valforQuery(v.jumlah)+`,`+_valforQuery(_.tahapan)+`,`+v.kdJudul+`
                    ),
                `;

                v.detail.forEach((v1,i1) => {
                    if(v1.status!="sudah"){
                        fkondisi=false;
                        valuesDetail+=`
                            (
                                `+_valforQuery(i1+1)+`,`+_valforQuery(v.kdJudul)+`,`+_valforQuery(_.drenstra.kdSub)+`,
                                `+_valforQuery(_.drenstra.kdDinas)+`,`+_valforQuery(v1.uraian)+`,`+_valforQuery(v1.jumlah)+`,
                                `+_valforQuery(v1.jumlah1)+`,`+_valforQuery(v1.jumlah2)+`,`+_valforQuery(v1.jumlah3)+`,
                                `+_valforQuery(v1.satuan1)+`,`+_valforQuery(v1.satuan2)+`,`+_valforQuery(v1.satuan3)+`,
                                `+_valforQuery(v1.volume)+`,`+_valforQuery(v1.satuanVol)+`,`+_valforQuery(v1.harga)+`,
                                `+_valforQuery(_.tahun)+`,`+_valforQuery(_.tahapan)+`
                            ),
                        `;
                    }
                });
            }
        });
        if(fkondisi){
            return _toast({bg:'e', msg:"Rincian belanja harap ditambahkan !!!"});
        }
        param={
            judul:values,
            rincian:valuesDetail,
            kdDinas:_.drenstra.kdDinas,
            kdSub:_.drenstra.kdSub,
            tahapan:_.tahapan,
            tahun:_.tahun
        }
        // return console.log(param);
        _post('proses/insBelanja',param).then(res=>{
            res=JSON.parse(res);
            if(res.exec){
                _modalHide('modal');
                _tabelPreview(res.data);
            }else{
                return _toast({bg:'e', msg:res.msg});
            }
        });
        // _ajax("WsBelanjaPegawai/addRincian",{
            // values:values,
            // valuesDetail:valuesDetail
        // }).then(res=>{            
        //     res=JSON.parse(res);
        //     $('#mdlLoad').modal("hide");
        //     if(res.status){
        //       return showNotif(res.msg);
        //     }
        //     _.dtDetailRincian=res[0];
        //     _dataTableDetail();
        //     _setForm("dataViewDetail");
        // })
}

function _saveUpd(index){
    _modalEx1({
        judul:"Konfirmasi".toUpperCase(),
        icon:`<i class="mdi mdi-note-plus"></i>`,
        cform:`text-light`,
        bg:"bg-warning",
        minWidth:"500px; font-size: medium;",
        isi:`Simpan Perubahan pada uraian belanja ?`,
        footer:_btn({
                    judul:"Close",
                    attr:`style='float:right; padding:5px;font-size: medium;' onclick="_modalHide('modal')"`,
                    class:"btn btn-secondary shadow"
                })
                +_btn({
                    judul:"SIMPAN",
                    attr:"style='float:right; padding:5px;font-size: medium;' onclick='_saveUpded("+index+")'",
                    class:"btn btn-warning shadow"
                })
    });
}
function _saveUpded(index){
    if(_.dtDetailRincian[index].detail.length==0){
        return _toast({bg:'e', msg:"Rincian belanja harap ditambahkan !!!"});
    }
    var values=``,
        valuesDetail=`INSERT INTO ubrincian(
                    kdRincian, kdJudul, kdSub, kdDinas, uraian, total, 
                    jumlah1, jumlah2, jumlah3, satuan1, satuan2, satuan3, 
                    volume, satuanVol, harga,taRincian,tahapan
                ) VALUES `;
        
        values=`update ubjudul set
                    kdSDana=`+_valforQuery(_.dtDetailRincian[index].kdSDana)+`, 
                    nama=`+_valforQuery(_.dtDetailRincian[index].nama)+`, 
                    total=`+_valforQuery(_.dtDetailRincian[index].jumlah)+`
                where kdSUb=`+_valforQuery(_.drenstra.kdSub)+` and  
                    kdDinas=`+_valforQuery(_.drenstra.kdDinas)+` and 
                    taJudul=`+_valforQuery(_.tahun)+` and
                    tahapan=`+_valforQuery(_.tahapan)+` and
                    kdJudul=`+_valforQuery(_.dtDetailRincian[index].kdJudul)+`;
            `;

        _.dtDetailRincian[index].detail.forEach((v1,i1) => {
            valuesDetail+=`
                    (
                        `+_valforQuery(i1+1)+`,`+_valforQuery(_.dtDetailRincian[index].kdJudul)+`,`+_valforQuery(_.drenstra.kdSub)+`,
                        `+_valforQuery(_.drenstra.kdDinas)+`,`+_valforQuery(v1.uraian)+`,`+_valforQuery(v1.jumlah)+`,
                        `+_valforQuery(v1.jumlah1)+`,`+_valforQuery(v1.jumlah2)+`,`+_valforQuery(v1.jumlah3)+`,
                        `+_valforQuery(v1.satuan1)+`,`+_valforQuery(v1.satuan2)+`,`+_valforQuery(v1.satuan3)+`,
                        `+_valforQuery(v1.volume)+`,`+_valforQuery(v1.satuanVol)+`,`+_valforQuery(v1.harga)+`,
                        `+_valforQuery(_.tahun)+`,`+_valforQuery(_.tahapan)+`
                    ),
                `;
        })
        param={
            judul:values,
            rincian:valuesDetail,
            kdDinas:_.drenstra.kdDinas,
            kdSub:_.drenstra.kdSub,
            tahapan:_.tahapan,
            tahun:_.tahun,
            kdJudul:_.dtDetailRincian[index].kdJudul
        }
        _post('proses/updBelanja',param).then(res=>{
            res=JSON.parse(res);
            if(res.exec){
                _modalHide('modal');
                _tabelPreview(res.data);
            }else{
                return _toast({bg:'e', msg:res.msg});
            }
        });
}

// setelah ada data 
function _previewRBelanja(){
    var html=`
        <thead style="font-size: small;">
            <tr class="text-center align-middle bg-gray-200">
                <th rowspan="2" width="10%">Kode Rekening</th>
                <th rowspan="2" width="30%">Uraian</th>
                <th rowspan="2" width="15%">Detail Volume</th>
                <th colspan="3" width="30%">Rincian Perhitungan</th>
                <th rowspan="2" width="10%">Jumlah</th>
                <th rowspan="2" width="5%">Aksi</th>
            </tr>
            <tr class="text-center align-middle bg-gray-200">
                <th width="10%">Vol</th>
                <th width="10%">Sat</th>
                <th width="10%">Harga Satuan</th>
            </tr>
        </thead>
        <tbody>`;
    var kdApbd6="",judul="",kdSDana="",kdApbd1="",kdApbd2="",kdApbd3="",kdApbd4="",kdApbd5;
    for(let a=0;a<_.dtDetailRincian.length;a++){
        if(a==0){ //for sub kegiatan saja
            html+=`
                <tr class="font-weight-bold">
                    <td width="10%"></td>
                    <td colspan="5" width="75%">`+_.dtDetailRincian[a].kdSub+` - `+_.dtDetailRincian[a].nmSub+`</td>
                    <td class="text-right" width="10%"></td>
                    <td class="text-center" width="5%"></td>
                </tr>
            `;
        }
        if(kdApbd1!=_.dtDetailRincian[a].kdApbd1){
            _.totalPagu=_getTotalAnak(0,_.dtDetailRincian[a].kdApbd1);
            html+=`
                <tr class="font-weight-bold">
                    <td class="pl-1">`+_.dtDetailRincian[a].kdApbd1+`</td>
                    <td colspan="5" class="flag1">
                    `+_.dtDetailRincian[a].nmApbd1+`
                    </td>               
                    <td class="text-right">`+_$(_getTotalAnak(0,_.dtDetailRincian[a].kdApbd1))+`</td>
                    <td class="text-right">
                    </td>
                </tr>
            `;
            kdApbd1=_.dtDetailRincian[a].kdApbd1;
        }
        if(kdApbd2!=_.dtDetailRincian[a].kdApbd2){
            html+=`
                <tr class="font-weight-bold">
                    <td class="pl-1">`+_.dtDetailRincian[a].kdApbd2+`</td>
                    <td colspan="5" class="flag1">
                    `+_.dtDetailRincian[a].nmApbd2+`
                    </td>               
                    <td class="text-right">`+_$(_getTotalAnak(1,_.dtDetailRincian[a].kdApbd2))+`</td>
                    <td class="text-right">
                    </td>
                </tr>
            `;
            kdApbd2=_.dtDetailRincian[a].kdApbd2;
        }
        if(kdApbd3!=_.dtDetailRincian[a].kdApbd3){
            html+=`
                <tr class="font-weight-bold">
                    <td class="pl-1">`+_.dtDetailRincian[a].kdApbd3+`</td>
                    <td colspan="5" class="flag1">
                    `+_.dtDetailRincian[a].nmApbd3+`
                    </td>               
                    <td class="text-right">`+_$(_getTotalAnak(2,_.dtDetailRincian[a].kdApbd3))+`</td>
                    <td class="text-right">
                    </td>
                </tr>
            `;
            kdApbd3=_.dtDetailRincian[a].kdApbd3;
        }
        if(kdApbd4!=_.dtDetailRincian[a].kdApbd4){
            html+=`
                <tr class="font-weight-bold">
                    <td class="pl-1">`+_.dtDetailRincian[a].kdApbd4+`</td>
                    <td colspan="5" class="flag1">
                    `+_.dtDetailRincian[a].nmApbd4+`
                    </td>               
                    <td class="text-right">`+_$(_getTotalAnak(3,_.dtDetailRincian[a].kdApbd4))+`</td>
                    <td class="text-right">
                    </td>
                </tr>
            `;
            kdApbd4=_.dtDetailRincian[a].kdApbd4;
        }
        if(kdApbd5!=_.dtDetailRincian[a].kdApbd5){
            html+=`
                <tr class="font-weight-bold">
                    <td class="pl-1">`+_.dtDetailRincian[a].kdApbd5+`</td>
                    <td colspan="5" class="flag1">
                    `+_.dtDetailRincian[a].nmApbd5+`
                    </td>               
                    <td class="text-right">`+_$(_getTotalAnak(4,_.dtDetailRincian[a].kdApbd5))+`</td>
                    <td class="text-right">
                    </td>
                </tr>
            `;
            kdApbd5=_.dtDetailRincian[a].kdApbd5;
        }

        
        if(kdApbd6!=_.dtDetailRincian[a].kdApbd6){
            html+=`
                <tr class="font-weight-bold">
                    <td class="pl-1">`+_.dtDetailRincian[a].kdApbd6+`</td>
                    <td colspan="5" class="flag1">
                    `+_.dtDetailRincian[a].nmApbd6+`
                    </td>               
                    <td class="text-right">`+_$(_getTotalAnak(5,_.dtDetailRincian[a].kdApbd6))+`</td>
                    <td class="text-right">
                    </td>
                </tr>
            `;
            kdApbd6=_.dtDetailRincian[a].kdApbd6;
        } 
        if(kdSDana!=_.dtDetailRincian[a].kdSDana){
            html+=`
                <tr class="font-weight-bold">
                    <td class="pl-1"></td>
                    <td colspan="5" class="flag1">
                    `+_.dtDetailRincian[a].nmSDana+`
                    </td>               
                    <td class="text-right"></td>
                    <td class="text-right">
                    </td>
                </tr>
            `;
            kdSDana=_.dtDetailRincian[a].kdSDana;
        }       
        if(judul!=_.dtDetailRincian[a].nama){
            html+=`
                <tr style="background-color: lightblue;">
                    <td class="pl-1"></td>
                    <td colspan="5" class="flag4">
                    `+_.dtDetailRincian[a].nama+`
                    </td>
                    <td class="text-right pr-1">`+_$(_.dtDetailRincian[a].jumlah)+`</td>
                    <td class="text-right">`;
                    if(_.dtDetailRincian[0].keyForPraRka=="0"){
                        html+=`
                        <div style="margin:auto">
                            <button title="Edit Rincian Rekening" class="btn btn-warning btn-sm" onclick="_setEditViewTabel(`+a+`)"><i class="mdi mdi-grease-pencil"></i></button>
                            <button title="Hapus Rincian Rekening" class="btn btn-danger btn-sm" onclick="_deleteViewTabel(`+a+`)"><i class="mdi mdi-delete-forever"></i></button>
                        </div>`;
                    }else{
                        html+=`<span class="badge badge-danger">TERKUNCI</span>`
                    }
                    
                    html+=`</td>
                </tr>
            `;
            judul=_.dtDetailRincian[a].nama;
        }
        for(let b=0;b<_.dtDetailRincian[a].detail.length;b++){
            html+=`
                <tr class="font-weight-bold">
                    <td class="pl-1"></td>
                    <td class="flag4" width="30%">
                    - `+_.dtDetailRincian[a].detail[b].uraian+`
                    </td>
                    <td width="15%">
                        `+_getDetailVolume(_.dtDetailRincian[a].detail[b])+`
                    </td>
                    <td width="10%">
                        `+_.dtDetailRincian[a].detail[b].volume+`
                    </td>
                    <td width="10%">
                        `+_.dtDetailRincian[a].detail[b].satuanVol+`
                    </td>
                    <td width="10%">
                        `+_$(_.dtDetailRincian[a].detail[b].harga)+`
                    </td>
                    <td class="text-right pr-1">`+_$(_.dtDetailRincian[a].detail[b].jumlah)+`</td>
                    <td class="text-right">
                    </td>
                </tr>
            `;
        }
    }
    return html+"</tbody>";

}
function _getTotalAnak(anak,kode){
    let total=0;
    for(let a=0;a<_.dtDetailRincian.length;a++){
        switch(anak){
            case 1:
                if(_.dtDetailRincian[a].kdApbd2==kode){
                    total+=parseFloat(_.dtDetailRincian[a].jumlah);
                }
            break
            case 2:
                if(_.dtDetailRincian[a].kdApbd3==kode){
                    total+=parseFloat(_.dtDetailRincian[a].jumlah);
                }
            break;
            case 3:
                if(_.dtDetailRincian[a].kdApbd4==kode){
                    total+=parseFloat(_.dtDetailRincian[a].jumlah);
                }
            break
            case 4:
                if(_.dtDetailRincian[a].kdApbd5==kode){
                    total+=parseFloat(_.dtDetailRincian[a].jumlah);
                }
            break;
            case 5:
                if(_.dtDetailRincian[a].kdApbd6==kode){
                    total+=parseFloat(_.dtDetailRincian[a].jumlah);
                }
            default:
                if(_.dtDetailRincian[a].kdApbd1==kode){
                    total+=parseFloat(_.dtDetailRincian[a].jumlah);
                }
                break
        }
    }
    return total;
}
function _getDetailVolume(data){
    var res="";
    if(data.jumlah1>0){
        res+=data.jumlah1+" "+data.satuan1;
    }if(data.jumlah2>0){
        res+=" x "+data.jumlah2+" "+data.satuan2;
    }if(data.jumlah3>0){
        res+=" x "+data.jumlah3+" "+data.satuan3;
    }
    return res;
}

// action preview data
function _setEditViewTabel(index){
    // _setForm("rincianRek");
    _editDataTableDetailPerIndex(index);
    // $( "#judul").focus();
}
function _deleteViewTabel(index){
    _.sfKeyUpdate=index
    _modalEx1({
        judul:"Konfirmasi".toUpperCase(),
        icon:`<i class="mdi mdi-note-plus"></i>`,
        cform:`text-light`,
        bg:"bg-danger",
        minWidth:"500px; font-size: medium;",
        isi:`Hapus Uraian Belanja berdasarkan judul uraian ini ???`,
        footer:_btn({
                    color:"primary shadow",
                    judul:"Close",
                    attr:`style='float:right; padding:5px;font-size: medium;' onclick="_modalHide('modal')"`,
                    class:"btn btn-secondary"
                })
                +_btn({
                    color:"primary shadow",
                    judul:"SIMPAN",
                    attr:"style='float:right; padding:5px;font-size: medium;' onclick='_deleteViewTabeled("+index+")'",
                    class:"btn btn-danger"
                })
    });
}
function _deleteViewTabeled(index){
    param={
        kdDinas:_.drenstra.kdDinas,
        kdSub:_.drenstra.kdSub,
        tahapan:_.tahapan,
        tahun:_.tahun,
        kdJudul:_.dtDetailRincian[index].kdJudul
    }
    _post('proses/delBelanja',param).then(res=>{
        _modalHide('modal');
        res=JSON.parse(res);
        if(res.exec){
            _tabelPreview(res.data);
        }else{
            return _toast({bg:'e', msg:res.msg});
        }
    });
}


function _lapoPDF() {
    var data =btoa(JSON.stringify({
        kdDinas:_.drenstra.kdDinas,
        kdSub:_.drenstra.kdSub,
        tahapan:_.tahapan,
        tahun:_.tahun,
        nmTahapan:_.nmTahapan,
        totalPagu:_.totalPagu,
        pdf:true
        // tabel:_previewRBelanjaForPDF(),
        // renstra:_getInfoRenstra()
    }));
    _redirectOpen("laporan/rincianBelanja/"+data);
}
function _lapoExcell() {
    var data =btoa(JSON.stringify({
        kdDinas:_.drenstra.kdDinas,
        kdSub:_.drenstra.kdSub,
        tahapan:_.tahapan,
        tahun:_.tahun,
        nmTahapan:_.nmTahapan,
        totalPagu:_.totalPagu,
        pdf:false
    }));
    _redirectOpen("laporan/rincianBelanja/"+data);
}
