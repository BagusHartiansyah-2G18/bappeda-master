function _onload(data){
    $('#body').html(data.tmBody);
    myCode=data.code;
    
    _.rekening=data.rekening;
    
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
                    ,text:"<h3>Daftar List Rekening Belanja</h3>",
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
                <th width="80%">Uraian</th>
                <th width="1%">Aksi</th>
            </tr>
        </thead>
        <tbody>`;
    var kdApbd6="",judul="",kdSDana="",kdApbd1="",kdApbd2="",kdApbd3="",kdApbd4="",kdApbd5;
    for(let a=0;a<_.rekening.length;a++){
        if(kdApbd1!=_.rekening[a].kdApbd1){
            html+=`
                <tr class="font-weight-bold">
                    <td class="pl-1">`+_.rekening[a].kdApbd1+`</td>
                    <td  class="flag1">
                        `+_.rekening[a].nmApbd1+`
                    </td>               
                    <td class="text-right">
                    </td>
                </tr>
            `;
            kdApbd1=_.rekening[a].kdApbd1;
        }
        if(kdApbd2!=_.rekening[a].kdApbd2){
            html+=`
                <tr class="font-weight-bold">
                    <td class="pl-1">`+_.rekening[a].kdApbd2+`</td>
                    <td  class="flag1">
                    `+_.rekening[a].nmApbd2+`
                    </td>               
                    <td class="text-right">
                    </td>
                </tr>
            `;
            kdApbd2=_.rekening[a].kdApbd2;
        }
        if(kdApbd3!=_.rekening[a].kdApbd3){
            html+=`
                <tr class="font-weight-bold">
                    <td class="pl-1">`+_.rekening[a].kdApbd3+`</td>
                    <td  class="flag1">
                    `+_.rekening[a].nmApbd3+`
                    </td>               
                    <td class="text-right">
                    </td>
                </tr>
            `;
            kdApbd3=_.rekening[a].kdApbd3;
        }
        if(kdApbd4!=_.rekening[a].kdApbd4){
            // <td class="text-right">`+_$(_getTotalAnak(3,_.rekening[a].kdApbd4))+`</td>
            html+=`
                <tr class="font-weight-bold">
                    <td class="pl-1">`+_.rekening[a].kdApbd4+`</td>
                    <td  class="flag1">
                    `+_.rekening[a].nmApbd4+`
                    </td>               
                    <td class="text-right">
                    </td>
                </tr>
            `;
            kdApbd4=_.rekening[a].kdApbd4;
        }
        if(kdApbd5!=_.rekening[a].kdApbd5){
            html+=`
                <tr class="font-weight-bold">
                    <td class="pl-1">`+_.rekening[a].kdApbd5+`</td>
                    <td  class="flag1">
                    `+_.rekening[a].nmApbd5+`
                    </td>               
                    <td class="text-right">
                    </td>
                </tr>
            `;
            kdApbd5=_.rekening[a].kdApbd5;
        }

        
        if(kdApbd6!=_.rekening[a].kdApbd6){
            html+=`
                <tr class="font-weight-bold">
                    <td class="pl-1">`+_.rekening[a].kdApbd6+`</td>
                    <td  class="flag1">
                    `+_.rekening[a].nmApbd6+`
                    </td>               
                    <td class="text-right">
                    </td>
                </tr>
            `;
            kdApbd6=_.rekening[a].kdApbd6;
        } 
        // if(kdSDana!=_.rekening[a].kdSDana){
        //     html+=`
        //         <tr class="font-weight-bold">
        //             <td class="pl-1"></td>
        //             <td  class="flag1">
        //             `+_.rekening[a].nmSDana+`
        //             </td>               
        //             <td class="text-right">
        //             </td>
        //         </tr>
        //     `;
        //     kdSDana=_.rekening[a].kdSDana;
        // }       
        
    }
    return html+"</tbody>";

}