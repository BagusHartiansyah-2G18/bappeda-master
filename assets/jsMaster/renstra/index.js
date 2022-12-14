function _onload(data){
    $('#body').html(data.tmBody);
    myCode=data.code;
    
    _.renstra=data.renstra;
    
    $('#bodyTM').html(_form());
    $('#footer').html(data.tmFooter+data.footer);
    
    // _startTabel("dt");
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
                    ,text:"<h3>Daftar List Sub Kegiatan</h3>",
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
    
    return _tabelResponsive(
        {
            id:"dt"
            ,isi:_previewRBelanja()
                
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

function _previewRBelanja(){
    var html=`
        <thead style="font-size: small;">
            <tr class="text-center align-middle bg-gray-200">
                <th width="10%">Kode Rekening</th>
                <th width="80%">Uraian/Bidang/Prog/Keg/Sub</th>
                <th width="1%">Aksi</th>
            </tr>
        </thead>
        <tbody>`;
    var kdApbd6="",judul="",kdSDana="",kdUrusan="",kdBidang="",kdProg="",kdKeg="",kdSub;
    for(let a=0;a<_.renstra.length;a++){
        if(kdUrusan!=_.renstra[a].kdUrusan){
            html+=`
                <tr class="font-weight-bold">
                    <td class="pl-1">`+_.renstra[a].kdUrusan+`</td>
                    <td  class="flag1">
                        `+_.renstra[a].nmUrusan+`
                    </td>               
                    <td class="text-right">
                    </td>
                </tr>
            `;
            kdUrusan=_.renstra[a].kdUrusan;
        }
        if(kdBidang!=_.renstra[a].kdBidang){
            html+=`
                <tr class="font-weight-bold">
                    <td class="pl-1">`+_.renstra[a].kdBidang+`</td>
                    <td  class="flag1">
                    `+_.renstra[a].nmBidang+`
                    </td>               
                    <td class="text-right">
                    </td>
                </tr>
            `;
            kdBidang=_.renstra[a].kdBidang;
        }
        if(kdProg!=_.renstra[a].kdProg){
            html+=`
                <tr class="font-weight-bold">
                    <td class="pl-1">`+_.renstra[a].kdProg+`</td>
                    <td  class="flag1">
                    `+_.renstra[a].nmProg+`
                    </td>               
                    <td class="text-right">
                    </td>
                </tr>
            `;
            kdProg=_.renstra[a].kdProg;
        }
        if(kdKeg!=_.renstra[a].kdKeg){
            // <td class="text-right">`+_$(_getTotalAnak(3,_.renstra[a].kdKeg))+`</td>
            html+=`
                <tr class="font-weight-bold">
                    <td class="pl-1">`+_.renstra[a].kdKeg+`</td>
                    <td  class="flag1">
                    `+_.renstra[a].nmKeg+`
                    </td>               
                    <td class="text-right">
                    </td>
                </tr>
            `;
            kdKeg=_.renstra[a].kdKeg;
        }
        if(kdSub!=_.renstra[a].kdSub){
            html+=`
                <tr class="font-weight-bold">
                    <td class="pl-1">`+_.renstra[a].kdSub+`</td>
                    <td  class="flag1">
                    `+_.renstra[a].nmSub+`
                    </td>               
                    <td class="text-right">
                    </td>
                </tr>
            `;
            kdSub=_.renstra[a].kdSub;
        }

        
        // if(kdApbd6!=_.renstra[a].kdApbd6){
        //     html+=`
        //         <tr class="font-weight-bold">
        //             <td class="pl-1">`+_.renstra[a].kdApbd6+`</td>
        //             <td  class="flag1">
        //             `+_.renstra[a].nmApbd6+`
        //             </td>               
        //             <td class="text-right">
        //             </td>
        //         </tr>
        //     `;
        //     kdApbd6=_.renstra[a].kdApbd6;
        // } 
        // if(kdSDana!=_.renstra[a].kdSDana){
        //     html+=`
        //         <tr class="font-weight-bold">
        //             <td class="pl-1"></td>
        //             <td  class="flag1">
        //             `+_.renstra[a].nmSDana+`
        //             </td>               
        //             <td class="text-right">
        //             </td>
        //         </tr>
        //     `;
        //     kdSDana=_.renstra[a].kdSDana;
        // }       
        
    }
    return html+"</tbody>";

}