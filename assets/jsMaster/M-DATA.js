function _fmember(){
    fsize="130px;";
    fcolor='text-dark';
    fbg="bg-secondary text-dark";
    return _inpDropdonwSelected({
                inputType:true,
                inputChange:"_changeValDinas",
                attrInput:"border-color: yellowgreen; font-size:15px;",
                classDropdonw:"form-control p-0 fzMfc mb-2",
                judul:"Dinas",
                id:"dinas",
                idJudul:"jdinas",
                idData:"ddinas",
                data:_.dinas,
                bgSearch:"#283941",
                bg:" btn-"+fcolor.split("-")[1]+" fzMfc",
                idDropdonw:"idInpDropDinas",
                func:"_selectDinas",
                funcSearch:"_formSearchDinas(this)"
            })
            +_inpGroupPrepend({
                placeholder:"Jabatan",
                icon:'<i class="mdi mdi-cube-outline text-primary fzMfc"></i>',
                bg:"bg-dark text-light",
                isi:_inpComboBox({
                    id:"kdJabatan", 
                    bg:"bg-primary text-light fzMfc",
                    data:_.jabatan,
                    getCombo:true,
                    attr:"text-dark;"
                })
            })
            +_inpGroupPrepend({
                id:"username",placeholder:"Username",
                cls:'mt-4',attr:";",type:"text",icon:'<i class="mdi mdi-home '+fcolor+'"></i>',
                inpCls:'fzMfc',
                bg:'bg-info text-light fzMfc'
            })
            +_inpGroupPrepend({
                id:"password",placeholder:"Password",
                cls:'mt-4',attr:";",type:"password",icon:'<i class="mdi mdi-key '+fcolor+'"></i>',
                bg:'bg-info text-light fzMfc',inpCls:'fzMfc',
            })
            +_inpGroupPrepend({
                id:"nik",placeholder:"Nik",
                cls:'mt-4',attr:";",type:"text",icon:'<i class="mdi mdi-home '+fcolor+'"></i>',
                bg:'bg-info text-light fzMfc',inpCls:'fzMfc',
            })
            +_inpGroupPrepend({
                id:"email",placeholder:"Email",
                cls:'mt-4',attr:";",type:"email",icon:'<i class="mdi mdi-key '+fcolor+'"></i>',
                bg:'bg-info text-light fzMfc',inpCls:'fzMfc',
            })
}
function _fjabatan(){
    fsize="130px;";
    fcolor='text-dark';
    fbg="bg-secondary text-dark";
    return _inpGroupPrepend({
            id:"jabatan",placeholder:"Jabatan",
            cls:'mt-4',attr:";",type:"text",icon:'<i class="mdi mdi-ladder '+fcolor+'"></i>',
            inpCls:'fzMfc',
            bg:'bg-info text-light fzMfc'
        });
}
function _fdinas(kd){
    fsize="130px;";
    fcolor='text-dark';
    fbg="bg-secondary text-dark";
    ftam='';
    if(kd){
        ftam=_inpGroupPrepend({
            id:"kdDinas",placeholder:"Kode",
            cls:'mt-4',attr:";",type:"text",icon:'<i class="mdi mdi-file-key '+fcolor+'"></i>',
            inpCls:'fzMfc',
            bg:'bg-info text-light fzMfc'
        });
    }
    return ftam+_inpGroupPrepend({
                id:"nmDinas",placeholder:"Nama",
                cls:'mt-4',attr:";",type:"text",icon:'<i class="mdi mdi-office-building '+fcolor+'"></i>',
                bg:'bg-info text-light fzMfc',inpCls:'fzMfc',
            })
            +_inpGroupPrepend({
                id:"kadis",placeholder:"Kadis",
                cls:'mt-4',attr:";",type:"text",icon:'<i class="mdi mdi-account-group-outline '+fcolor+'"></i>',
                inpCls:'fzMfc',
                bg:'bg-info text-light fzMfc'
            })
            +_inpGroupPrepend({
                id:"nip",placeholder:"Nip",
                cls:'mt-4',attr:";",type:"text",icon:'<i class="mdi mdi-script-text-key '+fcolor+'"></i>',
                bg:'bg-info text-light fzMfc',inpCls:'fzMfc',
            })
}

function _ftahun(){
    fsize="130px;";
    fcolor='text-dark';
    fbg="bg-secondary text-dark";
    return _inpGroupPrepend({
            id:"nama",placeholder:"Tahun",
            cls:'mt-4',attr:";",type:"text",icon:'<i class="mdi mdi-ladder '+fcolor+'"></i>',
            inpCls:'fzMfc',
            bg:'bg-info text-light fzMfc'
        })
        +_inpGroupPrepend({
            placeholder:"Status",
            icon:'<i class="mdi mdi-cube-outline text-primary fzMfc"></i>',
            bg:"bg-dark text-light",
            isi:_inpComboBox({
                id:"status", 
                bg:"bg-primary text-light fzMfc",
                data:_.status,
                getCombo:true,
                attr:"text-dark;",
                change:"_changeStatus(this)",
            })
        })
        +`
            <div id="onOff" style="display:none">`
                +_inpGroupPrepend({
                    id:"perubahan",placeholder:"Perubahan Ke",
                    cls:'mt-4',type:"number",icon:'<i class="mdi mdi-ladder '+fcolor+'"></i>',
                    inpCls:'fzMfc',
                    bg:'bg-info text-light fzMfc'
})
            +`</div>
        `;
}
function _fagenda(){
    fsize="130px;";
    fcolor='text-dark';
    fbg="bg-secondary text-dark";
    return _lines({})
        +`<div id='btnAdd'>
            `+_inpSejajar({
                attrRow:"margin-left:5px;margin-bottom:10px;",
                attrLabel:"color:black",
                judul:"",
                isi:_btn({
                        judul:"Simpan",
                        attr:"style='float:right;' onclick='addData()'",
                        class:"btn btn-primary btn-block fzMfc"
                    })
            })
        +`</div>`
        +`<div id='btnUpd' style='display:none; margin-left:5px;margin-bottom:10px;'>
            `+_sejajar({
                data:[{
                    isi:_btn({
                        judul:"Batalkan",
                        attr:"style='float:right;' onclick='btlData()'",
                        class:"btn btn-secondary btn-block fzMfc"
                    })
                },{
                    isi:_btn({
                        judul:"Simpan Perubahan",
                        attr:"style='float:right;' onclick='updDatax()'",
                        class:"btn btn-warning btn-block fzMfc"
                    })
                }]
            })
        +`</div>`
        +`<div id='btnFinal' style='display:none; margin-left:5px;margin-bottom:10px;'>
            `+_sejajar({
                data:[{
                    isi:_btn({
                        judul:"Batalkan",
                        attr:"style='float:right;' onclick='btlDataFinal()'",
                        class:"btn btn-secondary btn-block fzMfc"
                    })
                },{
                    isi:_btn({
                        judul:"Arsipkan Agenda",
                        attr:"style='float:right;' onclick='updDataxFinal()'",
                        class:"btn btn-success btn-block fzMfc"
                    })
                }]
            })
        +`</div>`
        +_inpSejajar({
            attrRow:"margin-left:5px;margin-bottom:10px;",
            attrLabel:"color:black",
            judul:"Judul Agenda",
            isi:_inp({
                type:"text",
                hint:"Judul Agenda",
                id:"judul",
                cls:"form-control fzMfc"
            })
        })
        // +_inpSejajar({
        //     attrRow:"margin-left:5px;margin-bottom:10px;",
        //     attrLabel:"color:black",
        //     judul:"Sub Kegiatan",
        //     isi:_inpDropdonwSelected({
        //             judul:"Sub Kegiatan",
        //             id:"subc",
        //             idJudul:"sub",
        //             idData:"msData",
        //             data:_.sub,
        //             bgSearch:"#4e8fae; font-size:14px;",
        //             bg:"btn-primary fzMfc"
        //         })
        // })
        +_inpSejajar({
            attrRow:"margin-left:5px;margin-bottom:10px;",
            attrLabel:"color:black",
            judul:"Hari",
            isi:_inp({
                type:"text",
                hint:"Hari",
                id:"hari",
                cls:"form-control fzMfc"
            })
        })
        +_inpSejajar({
            attrRow:"margin-left:5px;margin-bottom:10px;",
            attrLabel:"color:black",
            judul:"Tanggal",
            isi:_inpSejajar({
                    judul:"Mulai",
                    attr:'color:blue;',
                    isi:_inp({
                        type:"date",
                        hint:"Tanggal",
                        id:"tglS",
                        cls:"form-control fzMfc"
                    })
                })
                +_inpSejajar({
                    judul:"Berakhir",
                    attr:'color:blue;',
                    isi:_inp({
                        type:"date",
                        hint:"Tanggal",
                        id:"tglE",
                        cls:"form-control fzMfc"
                    })
                })
            
        })
        +_inpSejajar({
            attrRow:"margin-left:5px;margin-bottom:10px;",
            attrLabel:"color:black",
            judul:"Waktu",
            isi:_inp({
                type:"time",
                hint:"Waktu",
                id:"waktu",
                cls:"form-control fzMfc"
            })
        })
        +_inpSejajar({
            attrRow:"margin-left:5px;margin-bottom:10px;",
            attrLabel:"color:black",
            judul:"Tempat",
            isi:_inp({
                type:"text",
                hint:"Tempat",
                id:"tempat",
                cls:"form-control fzMfc"
            })
        })
        +`<div id='ffile'>
            `+_inpImageView({
                attrRow:"margin-left:5px;margin-bottom:10px;",
                id:"image",
                idView:"images",
                func:"readURL(this)",
                judul:"Poster / Banner / Dokumentasi (IMG)",
                color:"black",
                // method:"Bagus H"
            })
        +`</div>
        <div class="kt-wizard-v3__content" data-ktwizard-type="step-content">
            <div class="kt-form__section kt-form__section--first">
                <div class="kt-wizard-v3__form">
                    <div class="form-group">
                        <textarea class="form-control" id="isi" name="isi" rows="8">`+_.keterangan+`</textarea>
                    </div>
                </div>
            </div>
        </div>`
        
        ;
}
function _fproduk(){
    fsize="130px;";
    fcolor='text-dark';
    fbg="bg-secondary text-dark";
    return _lines({})
        +`<div id='btnAdd'>
            `+_inpSejajar({
                attrRow:"margin-left:5px;margin-bottom:10px;",
                attrLabel:"color:black",
                judul:"",
                isi:_btn({
                        judul:"Simpan",
                        attr:"style='float:right;' onclick='addData()'",
                        class:"btn btn-success btn-block fzMfc"
                    })
            })
        +`</div>`
        +`<div id='btnUpd' style='display:none; margin-left:5px;margin-bottom:10px;'>
            `+_sejajar({
                data:[{
                    isi:_btn({
                        judul:"Batalkan",
                        attr:"style='float:right;' onclick='btlData()'",
                        class:"btn btn-secondary btn-block fzMfc"
                    })
                },{
                    isi:_btn({
                        judul:"Simpan Perubahan",
                        attr:"style='float:right;' onclick='updDatax()'",
                        class:"btn btn-success btn-block fzMfc"
                    })
                }]
            })
        +`</div>`
        +_inpSejajar({
            attrRow:"margin-left:5px;margin-bottom:10px;",
            attrLabel:"color:black",
            judul:"Judul",
            isi:_inp({
                type:"text",
                hint:"Judul",
                id:"judul",
                cls:"form-control fzMfc"
            })
        })
        
        +_inpSejajar({
            attrRow:"margin-left:5px;margin-bottom:10px;",
            attrLabel:"color:black",
            judul:"Keterangan",
            isi:_textArea({
                hint:"Keterangan",
                id:"keterangan",
                row:"3",
                text:'',
                attr:''
            })
        })
        +_inpSejajar({
            attrRow:"margin-left:5px;margin-bottom:10px;",
            attrLabel:"color:black",
            judul:"Kategori",
            isi:_sejajar({
                data:[{
                    isi:_inpDropdonwSelected({
                        judul:"List Kategori",
                        id:"subc",
                        idJudul:"sub",
                        idData:"msData",
                        data:_.kategori,
                        bgSearch:"#4e8fae; font-size:14px;",
                        bg:"btn-primary fzMfc"
                    })
                },{
                    isi:_btn({
                        judul:`<i class="mdi mdi-book-plus"></i>Tambah Kategori`,
                        attr:"style='float:right;' onclick='_tambahKategori()'",
                        class:"btn btn-primary  fzMfc"
                    })
                }]
            })
        })
        +`<div id='ffile'>
            `+_inpImageView({
                attrRow:"margin-left:5px;margin-bottom:10px;",
                id:"image",
                idView:"images",
                func:"readURL(this)",
                judul:"Cover File (IMG)",
                color:"black",
                // method:"Bagus H"
            })
            +_inpImageView({
                attrRow:"margin-left:5px;margin-bottom:10px;",
                id:"file",
                idView:"files",
                judul:"File Produk (PDF)",
                color:"black",
                func:"readFile(this)"
            })
        +`</div>`
        
        // +`
        // <div class="kt-wizard-v3__content" data-ktwizard-type="step-content">
        //     <div class="kt-form__section kt-form__section--first">
        //         <div class="kt-wizard-v3__form">
        //             <div class="form-group">
        //                 <textarea class="form-control" id="isi" name="isi" rows="8">`+_.keterangan+`</textarea>
        //             </div>
        //         </div>
        //     </div>
        // </div>`
        ;
}
function _fKategoriUmum(){
    fsize="130px;";
    fcolor='text-dark';
    fbg="bg-secondary text-dark";
    return _inpSejajar({
            attrRow:"margin-left:5px;margin-bottom:10px;",
            attrLabel:"color:black",
            judul:"Kategori",
            isi:_inp({
                type:"text",
                hint:"Judul Kategori",
                id:"nmKate",
                cls:"form-control fzMfc"
            })
        });
}

function _fprioritas(){
    fsize="130px;";
    fcolor='text-dark';
    fbg="bg-secondary text-dark";
    return _inpGroupPrepend({
            id:"id",placeholder:"Id",
            cls:'mt-4',attr:";",type:"number",icon:'<i class="mdi mdi-ladder '+fcolor+'"></i>',
            inpCls:'fzMfc',
            bg:'bg-info text-light fzMfc',
            prof:"disabled"
        })
        +_inpGroupPrepend({
            id:"nama",placeholder:"Prioritas",
            cls:'mt-4',attr:";",type:"text",icon:'<i class="mdi mdi-ladder '+fcolor+'"></i>',
            inpCls:'fzMfc',
            bg:'bg-info text-light fzMfc'
        });
}

function _fiku(ins){
    fsize="130px;";
    fcolor='text-dark';
    fbg="bg-secondary text-dark";
    return _inpGroupPrepend({
            id:"kdIku",placeholder:"Id",
            cls:'mt-4',attr:";",type:"number",icon:'<i class="mdi mdi-ladder '+fcolor+'"></i>',
            inpCls:'fzMfc',
            bg:'bg-info text-light fzMfc',
            prof:"disabled"
        })
        +_inpGroupPrepend({
            id:"nmIku",placeholder:"Indikator",
            cls:'mt-4',attr:";",type:"text",icon:'<i class="mdi mdi-apple-keyboard-command '+fcolor+'"></i>',
            inpCls:'fzMfc',
            bg:'bg-info text-light fzMfc'
        })
        +_inpGroupPrepend({
            id:"ketIku",placeholder:"Tujuan",
            cls:'mt-4',attr:";",type:"text",icon:'<i class="mdi mdi-arrow-projectile '+fcolor+'"></i>',
            inpCls:'fzMfc',
            bg:'bg-info text-light fzMfc'
        })
        +_inpGroupPrepend({
            id:"sasIku",placeholder:"Sasaran",
            cls:'mt-4',attr:";",type:"text",icon:'<i class="mdi mdi-origin '+fcolor+'"></i>',
            inpCls:'fzMfc',
            bg:'bg-info text-light fzMfc'
        })
        +_inpGroupPrepend({
            id:"satuan",placeholder:"Satuan Data",
            cls:'mt-4',attr:";",type:"text",icon:'<i class="mdi mdi-head-flash '+fcolor+'"></i>',
            inpCls:'fzMfc',
            bg:'bg-info text-light fzMfc'
        })
        +(
            ins?
            _inpImageView({
                id:"image",
                idView:"images",
                func:"readURL(this)",
                judul:"File Ikon",
                class:'',
                attrRow:"margin-left:5px;margin-bottom:10px;",
                attrCol:"margin-left:5px;margin-bottom:10px;",
                attrLabel:"color:black",
            }):''
        );
}
function _getValueTahun(tahun,vth) {
    fres=[];
    fcont=tahun.length-1;
    let a=0;
    while (fcont>=0) {
        fres[a]={tahun:tahun[fcont].nama,value:0,target:0,realisasi:0,capaian:0};
        vth.forEach(v1 => {
            if(v1.tahun==tahun[fcont].nama){
                fres[a]={tahun:tahun[fcont].nama,value:v1.realisasi,target:v1.target,realisasi:v1.realisasi,capaian:v1.capaian};
            }
        })
        fcont--;
        a++;
    }
    return fres;
}
function _fsetValIku(vx){
    fsize="130px;";
    fcolor='text-dark';
    fbg="bg-secondary text-dark";
    return _inpGroupPrepend({
            id:"indikator",placeholder:'Indikator',
            cls:'mt-4',attr:";",type:"text",icon:'<i class="mdi mdi-apple-keyboard-command '+fcolor+'"></i>',
            inpCls:'fzMfc',
            bg:'bg-info text-light fzMfc',
            prof:"disabled value='"+vx.judul+"'",
            attrSpan:`style="width:`+fsize+`"`,
        })
        +_inpGroupPrepend({
            id:"satuan",placeholder:'Satuan Data',
            cls:'mt-4',attr:";",type:"text",icon:'<i class="mdi mdi-head-flash '+fcolor+'"></i>',
            inpCls:'fzMfc',
            bg:'bg-info text-light fzMfc',
            prof:"disabled value='"+vx.satuan+"' ",
            attrSpan:`style="width:`+fsize+`"`,
        })
        +_inpGroupPrepend({
            id:"target",placeholder:"Target",
            cls:'mt-4',attr:";",type:"text",icon:'<i class="mdi mdi-origin '+fcolor+'"></i>',
            inpCls:'fzMfc',
            bg:'bg-info text-light fzMfc',
            prof:"value='"+vx.target+"'",
            attrSpan:`style="width:`+fsize+`"`,
        })
        +_inpGroupPrepend({
            id:"realisasi",placeholder:"Realisasi",
            cls:'mt-4',attr:";",type:"text",icon:'<i class="mdi mdi-arrow-projectile '+fcolor+'"></i>',
            inpCls:'fzMfc',
            bg:'bg-info text-light fzMfc',
            prof:"value='"+vx.realisasi+"'",
            attrSpan:`style="width:`+fsize+`"`,
        })
        +_inpGroupPrepend({
            id:"capaian",placeholder:"Capaian",
            cls:'mt-4',attr:";",type:"text",icon:'<i class="mdi mdi-radar '+fcolor+'"></i>',
            inpCls:'fzMfc',
            bg:'bg-info text-light fzMfc',
            prof:"value='"+vx.capaian+"'",
            attrSpan:`style="width:`+fsize+`"`,
        });
}
