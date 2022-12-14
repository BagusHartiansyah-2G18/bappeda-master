function _onload(data){
    $('#body').html(data.tmBody);
    myCode=data.code;
    
    _.dinas=data.dinas;
    _.dt=data.dt;
    _.tahun=data.tahun;
    _.prioritas=data.prioritas;
    _.kdDinas=data.kdDinas;
    _.ind=0;
    
    $('#bodyTM').html(_form());
    $('#footer').html(data.tmFooter+data.footer);
    
    $('#dinas').val(_.kdDinas);
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
                    ,text:"<h3>Daftar Sub / Prioritas</h3>",
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
                            judul:"Dinas",
                            id:"dinas",
                            color:"black",  
                            data:_.dinas,
                            bg:"bg-primary fzMfc mb-2",
                            method:"sejajar",
                            change:"_changeDinas(this)",
                        })
                        +_inpComboBox({
                            judul:"Prioritas",
                            id:"prioritas",
                            color:"black",  
                            data:_.prioritas,
                            bg:"bg-primary fzMfc",
                            method:"sejajar",
                            index:'bagus H',
                            change:"_changePrioritas(this)",
                        })
                        +_lines({})
                        +`<div id='tabelShow' style="margin: auto;">`
                            +setTabel()
                        +`</div>`,
                })
            +`</div>`;
}
function setTabel(){
    fhtml=`
        <thead>
            <tr>
                <td>Kode</td>
                <td>Sub Kegiatan</td>
                <td>Terpilih</td>
            </tr>
        </thead>
        <tbody>`;
        _.dt.forEach((v,i) => {
            if(Number(v.idPri)==0 || Number(v.idPri)==Number(_.prioritas[_.ind].value)){
                fhtml+=`
                    <tr>
                        <td>`+v.kdSub+`</td>
                        <td>`+v.nmSub+`</td>
                        <td>`
                            +_checkbok({
                                id:"checklist",
                                text:undefined,
                                attr:(Number(v.idPri)>0? 'checked':'')+` onchange='_chekedBox(`+i+`,this)'`
                            })
                        +`</td>
                    </tr>
                `;
            }
        });
    fhtml+=`</tbody>`;

    return _tabelResponsive(
        {
            id:"dt"
            ,isi:fhtml
        });;
}
function _changeDinas(v) {
    return _redirect('control/subPrioritas/'+v.value)
}
function _changePrioritas(v) {
    _.ind=Number(v.value);
    _respon(null);
}
function _chekedBox(ind,v) {
    fq=` delete from psub 
        where kdSub='`+_.dt[ind].kdSub+`' 
        and kdKeg='`+_.dt[ind].kdKeg+`' 
        and idPri='`+_.prioritas[_.ind].value+`' 
        and taSub='`+_.tahun+`'
        and kdDinas='`+_.kdDinas+`'
        and qdel='2'
    `;
    _.dt[ind].idPri=0;
    if(v.checked){
        fq=`INSERT INTO psub(kdSub, kdKeg,kdDinas,nmSub,idPri,taSub,qdel) VALUES 
            (
                '`+_.dt[ind].kdSub+`',
                '`+_.dt[ind].kdKeg+`',
                '`+_.kdDinas+`',
                '`+_.dt[ind].nmSub+`',
                '`+_.prioritas[_.ind].value+`',
                '`+_.tahun+`',
                '2'
            );
        `;
        _.dt[ind].idPri=_.prioritas[_.ind].value;
    }
    _post('proses/onOffSubPrioritas',{query:fq}).then(res=>{
        res=JSON.parse(res);
        if(res.exec){
        }else{
            return _toast({bg:'e', msg:res.msg});
        }
    });
}
function _respon(data){
    if(data!=null){
        _.dt=data.dt;
    }
    $('#tabelShow').html(setTabel());
    _startTabel("dt");
}
