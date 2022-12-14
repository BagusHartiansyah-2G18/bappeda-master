function _onload(data){
    $('#body').html(data.tmBody);
    myCode=data.code;
    _.dinas=data.dinas;
    _.ind=0;
    _.tahun=data.tahun;
    
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
                    ,text:"<h3>Daftar Sub Kegiatan</h3>",
                    classJudul:' p-2',
                    id:"form1",
                    sizeCol:undefined,
                    bgHeader:"bg-info text-light",
                    attrHeader:`style="height: max-content;"`,
                    bgForm:"#fff; font-size:15px;",
                    isi:_inpComboBox({
                            judul:"Dinas",
                            id:"kdDinas",
                            color:"black",  
                            data:_.dinas,
                            bg:"bg-warning text-dark",
                            method:"sejajar",
                            attr:"font-size:15px;",
                            change:"_getDataOpd(this)",
                            index:true
                        })
                        +_lines({attr:'background:white;'})
                        +`<div id='tabelShow' style="margin: auto;">`
                            +setTabel()
                        +`</div>`,
                })
            +`</div>`;
}
function setTabel(){
    html=`
      <thead style="font-size: small;">
            <tr>            
                <th>No</th>
                <th>Kode</th>
                <th>Sub Kegiatan</th>
                <th>Pra RKA</th>
                <th>RKA</th>
                <th>RKA Final</th>
            </tr>
        </thead>
        <tfoot style="font-size: small;">
            <tr>          
                <th>No</th>
                <th>Kode</th>
                <th>Sub Kegiatan</th>
                <th>Pra RKA</th>
                <th>RKA</th>
                <th>RKA Final</th>
            </tr>
      </tfoot>
      <tbody style="font-size: small;">`;
        _.dinas[_.ind].data.forEach((v,i) => {
            html+=`
                <tr>
                    <td>`+(i+1)+`</td> 
                    
                    <td>
                        `+v.kdSub+`
                    </td>
                    <td>
                        `+v.nmSub+`
                    </td>
                    <td>`
                        +_checkbok({
                            id:"ckPra",
                            attr:`onchange="_onOffKey(`+i+`,'qpra',this)" `+_trueChecked(1,Number(v['qpra']))
                        })
                    +`</td>
                    <td>`
                        +_checkbok({
                            id:"ckRka",
                            attr:`onchange="_onOffKey(`+i+`,'qrka',this)" `+_trueChecked(1,Number(v['qrka']))
                        })
                    +`</td>
                    <td>`
                        +_checkbok({
                            id:"ckRkaFinal",
                            attr:`onchange="_onOffKey(`+i+`,'qrkaFinal',this)" `+_trueChecked(1,Number(v['qrkaFinal']))
                        })
                    +`</td>
                </tr>
            `;
        });
    html+=`</tbody>`;
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
            ,isi:html
        });;
}
function _getDataOpd(v) {
    find=Number(v.value);
    if(_.dinas[find].data==undefined ||_.dinas[find].data.length==0){
        _post('proses/getSubOpd',{kdDinas:_.dinas[find].value}).then(response=>{
            response=JSON.parse(response);
            if(response.exec){
                return _respon(response.data,find);
            }else{
                return _toast({bg:'e', msg:response.msg});
            }
        })
    }
    return _respon(null,find);
}
function _respon(data,ind){
    _.ind=ind;
    if(data!=null){
        _.dinas[_.ind].data=data.data;
    }
    if(_.dinas[_.ind].data==undefined){
        _.dinas[_.ind].data=[];
    }
    $('#tabelShow').html(setTabel());
    _startTabel("dt");
}
function _onOffKey(ind,key,v) {
    _post('proses/ebOnOFfKey',{
        query:"UPDATE psub SET "+key+"="+v.checked+" where kdDinas='"+_.dinas[_.ind].value+"' and taSub='"+_.tahun+"' and kdSub='"+_.dinas[_.ind].data[ind].kdSub+"'",
        kdDinas:_.dinas[_.ind].value
    }).then(response=>{
        response=JSON.parse(response);
        if(response.exec){
            return _respon(response.data,_.ind);
        }else{
            return _toast({bg:'e', msg:response.msg});
        }
    })
}