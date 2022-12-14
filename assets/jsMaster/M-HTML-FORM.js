function _inpGroupPrepend(inp){
    //Ex 1 _inpGroupPrepend({id:"nmKantor",placeholder:"Nama Kantor",type:"text",icon:'<i class="mdi mdi-office '+fcolor+'"></i>',bg:"bg-dark",attrSpan:`style="width: `+fsize+`;"`})
    //Ex 2 _inpGroupPrepend({id:"nmMember",placeholder:"Nama Member",type:"text",icon:'<i class="mdi mdi-rename-box '+fcolor+'"></i>',bg:fbg,attrSpan:undefined})
    //Ex 3
    //  _inpGroupPrepend({
    //     placeholder:"Kategori",
    //     icon:'<i class="mdi mdi-rename-box '+fcolor+'"></i>',
    //     bg:fbg,
    //     attrSpan:`style="width: `+fsize+`;"`,
    //     isi:_inpComboBox({
    //         id:"kdKategori", 
    //         bg:fbg,
    //         data:_.dsatkategoriGroup,
    //         getCombo:true
    //     })
    // ex 4
    // _inpGroupPrepend({
    //     id:"kdScaneProduk",
    //     placeholder:"Kode Scane",
    //     type:"text",
    //     icon:'<i class="mdi mdi-barcode-scan" '+fbgicon+'></i>',
    //     bg:fbg,
    // })
    // _inpGroupPrepend({
    //     placeholder:"Kategori",
    //     icon:'<i class="mdi mdi-rename-box text-primary"></i>',
    //     bg:"bg-dark text-light",
    //     attrSpan:`style="`+fsize+`"`,
        // isi:_inpComboBox({
        //     id:"kdKantor", 
        //     bg:"bg-primary text-light",
        //     data:_.dkantor,
        //     getCombo:true,
        //     attr:"text-dark;font-size: medium"
        // })
    // })

    // form image or file  
    // _inpGroupPrepend({
    //     icon:'<i class="mdi mdi-cellphone-android"></i>',
    //     bg:'bg-dark text-light',
    //     placeholder:_.ddata[ind].deskripsi,
    //     attrSpan:`style="font-size: medium;"`,
    //     isi:_img({
    //         id:"file",
    //         color:"black",
    //         func:"readFile(this)"
    //     })
    // })
    // _inpGroupPrepend({
    //     icon:'</i><i class="mdi mdi-folder-upload '+fcolor+'"></i>',
    //     bg:'bg-dark text-light',
    //     placeholder:_.ddata[ind].deskripsi,
    //     attrSpan:`style="font-size: medium;"`,
    //     isi:_inp({
    //         attr:'onchange="readURL(this)"',
    //         id:'image1',
    //         type:'file',
    //         cls:"form-control fzMfc",
    //     })
    // })
    // +`<div id="images"></div>`
    fdata="";
    if(inp.placeholder!=undefined){
        fdata=`placeholder="`+inp.placeholder+`"`;
    }
    if(inp.prof!=undefined){
        fdata+=inp.prof;
    }
    fbg="";
    if(inp.bg!=undefined){  
        fbg=inp.bg;
    }
    fisi=` <input type="`+inp.type+`" class="form-control `+inp.inpCls+`" id="`+inp.id+`" `+fdata+` style="`+inp.attr+`">`;
    if(inp.isi!=undefined){
        fisi=inp.isi;
    }
    fjudul="";
    if(inp.attrSpan!=undefined){
        fjudul=inp.placeholder;
    }
    return `
    <div class="input-group mb-3 `+inp.cls+`">
        <div class="input-group-prepend">
            <span class="input-group-text `+fbg+`" `+inp.attrSpan+`>
                `+inp.icon+fjudul+`
            </span>
        </div>
        `+fisi+`
    </div>
    `;
}
function _inpComboBox(inp){
    // ex 1
    // _inpComboBox({
    //     judul:"Jabatan",
    //     id:"kdJabatan",
    //     color:"black",  
    //     data:_.djabatan,
    //     bg:"bg-primary"
    //     method:"sejajar"
    // })

    // ex 2  result combo box
    // _inpComboBox({
    //     id:"kdKantor",
    //     data:_.dkantor,
    // bg:"bg-primary"
    //     getCombo:true
    // })

    //Ex3
    // _inpComboBox({
    //     id:"kdMemberTabel",
    //     data:_.dmember,
    //     change:"_memberTabelSelected(this)",
    //     bg:" btn-"+fcolor.split("-")[1],
    //     getCombo:true
    // })
    // _inpComboBox({
    //     id:"kdKantor", 
    //     bg:"bg-primary text-light",
    //     data:_.dkantor,
    //     getCombo:true,
    //     attr:"text-dark;font-size: medium"
    // })
    // tambah indexSelected untuk value / selected combo 
    // tambah  index untuk value index 
    // tambah inSelect untuk option saja
    // tambah change
    
    if(inp.indexSelected!=undefined &&inp.indexSelected>=0){
        inp.data.forEach((v,i) => {
            if(i==inp.indexSelected){
                inp.data[i].selected=1;
            }else{
                inp.data[i].selected=0;
            }
        })
    }

    fdata="";
    if(inp.change!=undefined){
        fdata="onchange='"+inp.change+"'";
    }
    fdata1="";
    if(inp.addOption!=undefined){
        fdata1=inp.addOption;
    }
    fselected="";
    let ind=0;
    inp.data.forEach(v => {
        fselected="selected";
        if(v.selected!=1){
            fselected="";
        }
        if(inp.index!=undefined){
            fdata1+=`<option value="`+ind+`" `+fselected+`>`+v.valueName+`</option>`;
        }else{
            fdata1+=`<option value="`+v.value+`" `+fselected+`>`+v.valueName+`</option>`;
        }
        ind++;
    });
    inp.isi=`<select id="`+inp.id+`" class="btn `+inp.bg+`" `+fdata+`  style="width: -moz-available; text-align: left;width: 100%;`+inp.attr+`">
            `+fdata1+`
            </select>`;
    if(inp.inSelect!=undefined){
        return fdata1;
    }
    if(inp.getCombo!=undefined){
        return `<select id="`+inp.id+`" class="btn `+inp.bg+`  form-control" `+fdata+` style="`+inp.attr+`">
                    `+fdata1+`
                </select>`;
    }
    if(inp.method==undefined){
       return _inpSorting(inp);
    }
    return _inpSejajar(inp);
}
function _inpButton(inp){
    // _inpButton({
    //     click:undefined,
    //     id:"tes",
    //     title:"inp button",
    //     color:"success",
        // judul:''
    // });
    fdata="";
    if(inp.click!=undefined){
        fdata=" onclick='"+inp.click+"' ";
    }
    if(inp.id!=undefined){
        fdata+=" id='"+inp.id+"' ";
    }
    if(inp.title!=undefined){
        fdata+=" title='"+inp.title+"' ";
    }
    // -lg
    color="primary";
    if(inp.color!=undefined){
        color=inp.color;
    }
    return `
    <div class="row" style="margin-left:5px;margin-bottom:10px;">
        `+_btn({color:color,attr:fdata,judul:inp.judul})+`
    </div>
    `;
}
function _inpDropdonwSelected(inp){

    // EX 1
    // _inpDropdonwSelected({
    //     judul:"Satuan",
    //     id:"satuan",
    //     idJudul:"jsatuan",
    //     idData:"dsatuan",
    //     data:_.djsatuan,
    //     bgSearch:"#283941",
    //     bg:" btn-"+fcolor.split("-")[1],
    //     idDropdonw:"idInpDropSatuan",
    //     func:"_selectSatuan",
    //     funcSearch:"_formSearchSatuan(this)"
    // })

    // function _selectSatuan(idForDrop,id,value,valueName){
    //     _.svKdJenis=value;
    //     $("#"+id).html(valueName.substring(0,50));
    //     return _showForDropSelect(idForDrop);
    // }

    // function _formSearchSatuan(v){
    //     // return _log(_.djenis[_.index]);
    //     _multiDropdonwSearch({
    //         data:_.djenis[_.index],
    //         idData:"djenis",
    //         id:"jenis",
    //         value:v.value,
    //         func:"_selectJenis",
    //         idDropdonw:"idInpDropjenis",
    //     })
    // }

    // Ex 2
    // _inpDropdonwSelected({
    //     judul:"Member",
    //     id:"memberc",
    //     idJudul:"member",
    //     idData:"msData",
    //     data:_.kdMember,
    //     bgSearch:"#4e8fae"
    // })
    // _tamp1 valuenya disimpan disini ya

    // Ex 3
        // _inpGroupPrepend({
        //     placeholder:"Kategori",
        //     icon:'<i class="mdi mdi-rename-box '+fcolor+'"></i>',
        //     bg:fbg,
        //     attrSpan:`style="width: `+fwidth+`;"`,
        //     isi:_inpDropdonwSelected({
        //         classDropdonw:"form-control p-0",
        //         judul:"Satuan",
        //         id:"satuan",
        //         idJudul:"jsatuan",
        //         idData:"dsatuan",
        //         data:_.djsatuan,
        //         bgSearch:"#283941",
        //         bg:" btn-"+fcolor.split("-")[1],
        //         idDropdonw:"idInpDropSatuan",
        //         func:"_selectSatuan",
        //         funcSearch:"_formSearchSatuan(this)"
        //     })
        // });
    
        //tambah inp.index:true untuk value index
        //tambahakan inputType:true, untuk menulis value

        // Ex4 
        // _inpDropdonwSelected({
        //     inputType:true,
        //     inputChange:"_changeValProduk",
        //     attrInput:"border-color: yellowgreen;",
        //     classDropdonw:"form-control p-0",
        //     judul:"Satuan",
        //     id:"satuan",
        //     idJudul:"jsatuan",
        //     idData:"dsatuan",
        //     data:_.djsatuan,
        //     bgSearch:"#283941",
        //     bg:" btn-"+fcolor.split("-")[1],
        //     idDropdonw:"idInpDropSatuan",
        //     func:"_selectSatuan",
        //     funcSearch:"_formSearchSatuan(this)"
        // })
        // function _changeValDinas(v) {
        //     if(!$('#dinas').hasClass('show')){
        //         $('#dinas').addClass("show");
        //     }
        //     _multiDropdonwSearch({
        //         data:_.dinas,
        //         idData:"ddinas",
        //         id:"dinas",
        //         value:v.value,
        //         func:"_selectDinas",
        //         idDropdonw:"idInpDropDinas",
        //     })
        // }
        // function _selectDinas(idForDrop,id,value,valueName){
        //     _.sfKdDinas=value;
        //     $("#"+id).val(valueName.substring(0,50));
        //     return _showForDropSelect(idForDrop);
        // }
        // function _formSearchDinas(v){
        //     _multiDropdonwSearch({
        //         data:_.dinas,
        //         idData:"ddinas",
        //         id:"dinas",
        //         value:v.value,
        //         func:"_selectDinas",
        //         idDropdonw:"idInpDropDinas",
        //     })
        // }

    fclassDropdonw="";
    if(inp.classDropdonw && inp.classDropdonw!=undefined){
        fclassDropdonw=inp.classDropdonw;
    }
    dropdonw=inp;
    fdata="";
    fid="idInpDropJudul";
    if(inp.idDropdonw!=undefined){
        fid=inp.idDropdonw;
    }
    ffuncSearch="_inpDropdonwSelectedSearch(this)";
    if(inp.funcSearch!=undefined){
        ffuncSearch=inp.funcSearch;
    }
    fbg="btn-secondary";
    if(inp.bg!=undefined){
        fbg=inp.bg;
    }
    inp.data.forEach((v,i) => {
        fval=v.value;
        if(inp.index){
            fval=i;
        }
        fdata1=`_selectedInpDropdonw('`+fval+`','`+v.valueName+`')`;
        if(inp.func!=undefined){
            fdata1=inp.func+`('`+inp.id+`','`+fid+`','`+fval+`','`+v.valueName+`')`;
        }
        fdata+=`
            <div class="row" style="margin:5px; text-align:left;">
                <button class="btn `+fbg+` btn-sm btn-block" style="text-align:left;" onclick="`+fdata1+`">`+v.valueName+`</button>
            </div>`;
    });
    
    if(inp.inputType!=undefined && inp.inputType){
        return `
            <div class="dropdown `+fclassDropdonw+`">
                <input type="text" class="btn dropdown-toggle" role="button" id="`+fid+`" onclick="_showForDropSelect('`+inp.id+`')" onchange="`+inp.inputChange+`(this,`+inp.id+`)" style="width: -moz-available; text-align: left;width: 100%; `+inp.attrInput+`" placeholder="`+inp.judul+`">
                <div class="dropdown-menu" id="`+inp.id+`" style="width: -moz-available; text-align: left;margin: 0px;">
                    <div style="overflow:auto; max-height:200px" id="`+inp.idData+`">
                        `+fdata+`
                    </div>
                </div>
            </div>
        `;
    }
    
    return `
        <div class="dropdown `+fclassDropdonw+`">
            <p class="btn `+fbg+` dropdown-toggle" role="button" id="`+fid+`" onclick="_showForDropSelect('`+inp.id+`')" style="width: -moz-available; text-align: left;width: 100%;">
                `+inp.judul+`
            </p>
            <div class="dropdown-menu" id="`+inp.id+`" style="width: -moz-available; text-align: left;margin: 0px;">
                <input type="text" class="form-control" onchange="`+ffuncSearch+`" placeholder="search.." style="background-color:`+inp.bgSearch+`; color:white;" value="" required="">
                <div style="overflow:auto; max-height:200px" id="`+inp.idData+`">
                    `+fdata+`
                </div>
            </div>
        </div>
    `;
}
function _inpSejajar(inp) {
    // _inpSejajar({
    //     attrRow:"margin-left:5px;margin-bottom:10px;",
    //     attrCol:"margin-left:5px;margin-bottom:10px;",
    //     attrLabel:"color:black",
    //     judul:"Judul",
    //     isi:_inp({
    //         type:"text",
    //         hint:"Permasalahan",
    //         id:"judul",
    //     })
    // })
    return `
    <div class="row" style="`+inp.attrRow+`">
        <div class="col m-auto" style="`+inp.attrCol+`">
            <label style="`+inp.attrLabel+`">`+inp.judul+`</label>
        </div>
        <div class="col m-auto" style="`+inp.attrCol+`">
            `+inp.isi+`
        </div>
    </div>`;
}
function _inpSorting(inp){
    // _inpSorting({
    //     judul:"texter",
    //     attr:'color:blue;',
    //     isi:'tester'
    // })
    return `
        <div class="row" style="margin-left:5px;margin-bottom:10px;">
            <label style="`+inp.attr+`">`+inp.judul+`</label>
            `+inp.isi+`
        </div>
    `;
}
function _inp(v){
    // _inp({
    //     hint:"Sisa Pembayaran",
    //     checked:undefined,
    //     attr:`style="color:blue;" disabled`,
    //     id:'sisa',
    //     type:'text',
    //     cls:"form-control fzMfc",
    // })
    // _inp({
    //     hint:"ini input ",
    //     checked:undefined,
    //     attr:'color:blue',
    //     id:'inp',
    //     type:'text',
    //     cls:undefined,
    // })
    fdata='';
    fdata=`placeholder="`+v.hint+`" `;
    if(v.checked!=undefined && v.checked){
        fdata='checked ';
    }
    fcls='form-control';
    if(v.cls!=undefined){
        fcls=v.cls;
    }
    return `
        <input type="`+v.type+`" class="`+fcls+`" id="`+v.id+`" `+v.attr+` `+fdata+`>
    `;
}
function _checkbok(v){
    // _checkbok({
    //     id:"checklist",
    //     text:"Ingatkan",
    //      attr:''
    // })
    fres=`<input type="checkbox" class="form-control `+v.cls+`" id="`+v.id+`" `+v.attr+`>`
    if(v.text!=undefined){
        fres+=`
            <label class="custom-control-label" for="customCheck">`+v.text+`</label>
        `;
    }
    return fres;
}
function _inpFunc(v,id){
    // _inpFunc({
    //     hint:'',
    //     func:'',
    //     id:'',
    //     type:'',
    //     attr:'color:blue',
    //  cls:undefined,
    // })
    fdata=`placeholder="`+v.hint+`" `;
    if(v.func!=undefined){
        fdata+=" onchange='"+v.func.substring(0,v.func.length-1)+"this,"+id+`)`+"'";
    }
    if(v.checked!=undefined && v.checked){
        fdata='checked ';
    }
    fcls='form-control';
    if(v.cls!=undefined){
        fcls=v.cls;
    }
    return `
        <input type="`+v.type+`" class="`+fcls+`" id="`+v.id+`" style="`+v.attr+`" `+fdata+`>
    `;
}
function _textArea(v){
    // _textArea({
    //     hint:"Keterangan",
    //     id:"keterangan"+keyCode+""+i,
    //     row:"3",
    //     text:v.keteranganx,
    //     attr:''
    // })
    frow="3";
    if(v.row!=undefined){
        frow=v.row;
    }
    ftext="";
    if(v.text!=undefined){
        ftext=v.text;
    }
    return `<textarea class="form-control" id="`+v.id+`" placeholder="`+v.hint+`" rows="`+frow+`" style='`+v.attr+`'>`+ftext+`</textarea>`;
}
function _inpImageView(v){
    // +_inpImageView({
    //     id:"file",
    //     idView:"files",
    //     judul:"File Pertimbangan Teknis (PDF)",
    //     color:"black",
    //     func:"readFile(this)"
    // })
    // _inpImageView({
    //     id:"image",
    //     idView:"images",
    //     func:"readURL(this)",
    //     judul:"Upload File",
    //     class:'',
    //     attrRow:"margin-left:5px;margin-bottom:10px;",
    //     attrCol:"margin-left:5px;margin-bottom:10px;",
    //     attrLabel:"color:white",
    // })
    v.isi=_img(v);
    var fdata=`<div id="images"></div>`;
    if(v.idView!=undefined){
        fdata=`<div id="`+v.idView+`"></div>`;
    }
    if(v.method==undefined){
        return _inpSejajar(v)+fdata;
    }
    return _inpSorting(v)+fdata;;
}
function _img(v){
    // _img({
    //     func:'',
    //     id:'',
    //     class:''
    // })
    fclass="v-money form-control";
    if(v.class!=undefined){
        fclass=v.class;
    }
    return `<input type="file" id="`+v.id+`" class="`+fclass+`"  onchange="`+v.func+`"/>`;
}
function _lines(v){
    // lines({
    //     attr:'background:white;'
    // })
    return `<hr class='mb-4' style="`+v.attr+`">`;
}
function _btn(v){
    // _btn({
    //      color:"primary",
    //     judul:"Tambah Data",
    //     attr:"style='float:right;'",
    //     class:"btn btn-`+v.color+` btn-block"
    // })
    fclass=`btn btn-`+v.color+` btn-block`;
    if(v.class!=undefined){
        fclass=v.class;
    }
    return ` <button class="`+fclass+`" `+v.attr+`>`+v.judul+`</button>`;
}
function _btnIcon(v){
    fdata="";
    if(v.click!=undefined){
        fdata=" onclick='"+v.click+"' ";
    }
    if(v.id!=undefined){
        fdata+=" id='"+v.id+"' ";
    }
    if(v.title!=undefined){
        fdata+=" title='"+v.title+"' ";
    }
    return `    
        <div class="form-group m-auto">
            <div class="input-group">
                <div class="input-group-append">
                    `+v.icon+`
                </div>
                `+_btn({
                    class:"form-control btn btn-sm btn-"+v.color,
                    attr:fdata,
                    judul:v.judul
                })+`
            </div>
        </div>
    `;
}
function _btnGroup(v,id){
    // infoSupport=[];
    // infoSupport.push({ 
    //     clsBtn:`btn-secondary shadow btn-block fzMfc`
    //     ,func:"onOffForm(this)"
    //     ,icon:`<i class="mdi mdi-file-lock  "></i>Form Pekerjaan`
    //     ,title:"Form Pekerjaan"
    // });
    // _btnGroup(infoSupport1,i)
    fdata=``;
    v.forEach((v1,i) => {
        fdata1=v1.func;
        if(id!=undefined){
            try {
                fdata1=v1.func.substring(0,v1.func.length-1)+id+`)`;
            } catch (error) {
                fdata1='';
            }
        }
        ftam="";
        if(v1.title!=null){
            ftam="title='"+v1.title+"'";
        }
        fdata+=`<button type="button" id="bt`+i+``+id+`" class="btn btn-sm `+v1.clsBtn+`" onclick="`+fdata1+`" `+ftam+`>`+v1.icon+`</button>`;
    });
    return `
        <div class="btn-group mr-2">
            `+fdata+`
        </div>
    `;
}
function _btnGroupTd(v,id){
    // _btnGroupTd([{ 
    //     clsBtn:`btn-success`,
    //     icon:`<i class="mdi mdi-cloud-check text-light"></i>Donwload`,
    //     func:"_add()",
    //     title:"Donwload"
    // }])
    
    // infoSupport=[];
    // infoSupport.push({ 
    //     clsBtn:`btn-outline-primary`
    //     ,func:"_add()"
    //     ,icon:`<i class="mdi mdi-note-plus text-dark"></i> Tambah Data`
    //     ,title:"Tambah Data"
    // })
        
    // infoSupport1.push({ 
    //     clsBtn:`btn-outline-warning`
    //     ,func:"_upd()"
    //     ,icon:`<i class="mdi mdi-grease-pencil"></i>`
    //     ,title:"Perbarui"
    // });
    // _btnGroupTd(infoSupport)
    fdata=``;
    frowspan="colspan='"+v.length+"'";
    fstyle=" style='padding-left:0px; padding-right:0px'";
    fstyle1=" style='padding-left:0px;'";
    v.forEach((v1,i) => {
        fdata1=v1.func;
        if(id!=undefined){
            try {
                fdata1=v1.func.substring(0,v1.func.length-1)+id+`)`;
            } catch (error) {
                fdata1='';
            }
        }
        ftam="";
        if(v1.title!=null){
            ftam="title='"+v1.title+"'";
        }
        
        if(i>0){
            frowspan="";
        }
        if(i==v.length-1){
            fdata+=`<td `+frowspan+fstyle1+`><button type="button" class="btn btn-sm `+v1.clsBtn+`" onclick="`+fdata1+`" `+ftam+`>`+v1.icon+`</button></td>`;
        }else{
            fdata+=`<td `+frowspan+fstyle+`><button type="button" class="btn btn-sm `+v1.clsBtn+`" onclick="`+fdata1+`" `+ftam+`>`+v1.icon+`</button></td>`;
        }
    });
    return fdata;
}
function _btnDropdown(v){
    // _btnDropdown({
    //     clsBtn:`btn-outline-light`,
    //     icon:`<i class="mdi mdi-cloud-download mr-2"></i>Donwload`,
    //     title:"Donwload",
    //     sub:[{
    //         text:"PREVIEW",
    //         url:"",
    //         attr:"onclick='donwload()'"
    //     },{
    //         text:"Data Produk",
    //         url:"",
    //         attr:"onclick='donwload()'"
    //     }]
    // })
    fdata=``;
    v.sub.forEach((v1,i1)=>{
        if(v1.attr!=undefined){
            fdata+=`
                <button class="dropdown-item" `+v1.attr+`>`+v1.text+`</button>
            `;
        }else{
            fdata+=`
                <a class="dropdown-item" href="`+v1.url+`">`+v1.text+`</a>
            `;
        }
    });
    ftam="";
    if(v.title!=null){
        ftam="title='"+v.title+"'";
    }

    return `
        <div class="btn-group">
            <button type="button" class="btn `+v.clsBtn+` dropdown-toggle" data-toggle="dropdown" aria-expanded="false" `+ftam+`>`+v.icon+`</button>
            <div class="dropdown-menu" x-placement="bottom-start" style="position: absolute; will-change: transform; top: 0px; left: 0px; transform: translate3d(0px, 40px, 0px);">
                `+fdata+`
            </div>
        </div>
    `;
}
function _text(v){
    v.isi=_span(v);
    if(v.method==undefined){
        return _inpSejajar(v);
    }
    return _inpSorting(v);;
}
function _span(v){
    // _span({text:"ini span",id:"span",cls:'form-control'})
    // _span({text:_$(10),id:"span",cls:'badge bg-warning'})
    return `<span id='`+v.id+`' class="`+v.cls+`" style="border: none;">`+v.text+`</span>`;
}
function _fileIcon(v){
    // untuk read excell dll 
    // _fileIcon({
    //     id:"file",
    //     icon:'<i class="form-control mdi mdi-upload bg-warning"></i>',
    //     func:"_selected(this)",
    //     color:"dark"
    // })
    return `    
        <div class="form-group m-auto">
            <div class="input-group">
                <div class="input-group-append">
                    `+v.icon+`
                </div>
                `+_img({
                    id:v.id,
                    class:"form-control btn btn-sm btn-"+v.color,
                    func:v.func
                })+`
            </div>
        </div>
    `;
}
function _sejajar(v) {
    // _sejajar({
    //     data:[{
    //         isi:_btn({
    //             color:"primary",
    //             judul:`<i class="mdi mdi-book-plus"></i>Tambah Faktur`,
    //             attr:"style='float:right;' onclick='_addFaktur()'",
    //             class:"btn btn-primary btn-block"
    //         })
    //     },{
    //         isi:_btn({
    //             color:"primary",
    //             judul:`<i class="mdi mdi-book-plus"></i>Tambah Faktur`,
    //             attr:"style='float:right;' onclick='_tambahFaktur()'",
    //             class:"btn btn-primary btn-block"
    //         })
    //     },{
    //         isi:_btn({
    //             color:"primary",
    //             judul:`<i class="mdi mdi-book-plus"></i>Tambah Faktur`,
    //             attr:"style='float:right;' onclick='_tambahFaktur()'",
    //             class:"btn btn-primary btn-block"
    //         })
    //     }]
    // });


    fclass="row ";
    fattr="";
    if(v.class!=undefined){
        fclass+=v.class;
        fattr=v.attr;
    }
    fdata="";
    v.data.forEach(v1=> {
        fdata+=`
        <div class="col m-auto" `+v.attrCol+`>
            `+v1.isi+`
        </div>
        `;
    });
    return `
    <div class="`+fclass+`" `+fattr+`>
        `+fdata+`
    </div>`;
}
function __formGroup(v){
    // standar
    // __formGroup({
    //     hint:"Username",
    //     attr:"",
    //     class:"form-control-user",
    //     type:"text",
    //     id:"username"
    // })

    // langsung
    // __formGroup({  
    //     isi:_inp({
    //     hint:"Username",
    //     checked:undefined,
    //     attr:"",
    //     type:"text",
    //     id:"username"
    // })
    // })

    if(v.isi!=undefined){
        return `
            <div class="form-group">
                `+v.isi+`
            </div>
        `;
    }
    return`
        <div class="form-group">
            `+_inp(v)+`
        </div>
    `;
}
function _textH(v){
    // _textH({
    //     heading:"1",
    //     class:undefined,
    //     text:"Welcome !!!"
    // })
    fclass="text-gray-900 mb-4";
    if(v.class!=undefined){
        fclass=v.class;
    }
    return `
        <h`+v.heading+` class="h`+v.heading+` `+fclass+`">`+v.text+`</h`+v.heading+`>
    `;
}
function _textCenter(v){
    // _textCenter({
    //     text:"Welcome !!!"
    // })
    return `
    <div class="text-center">
        `+v.text+`
    </div>
    `;
}