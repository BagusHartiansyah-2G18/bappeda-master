function _currentPage(num,position){
    if(num==position){
        return "active";
    }
    return "";
}
function _headerLogin(v,active){
    _.sfUrl=`http://localhost/bappedax/control/`;
    // _headerLogin({
    //     logo:"fs_css/logo/dev-mini.png",
    //     nama:"3. contoh header page umum ",
    //     clsNama:"text-success"
    // })
    return `    
        <header class="header" style="padding: 0px;">
            <nav class="navbar navbar-expand-lg navbar-light " style="background-color:darkgoldenrod;">
                <div class="navbar-header">
                    <!-- Logo <img class="logo-alt" src="/static/images/logo.png" alt="logo"> Logo -->
                    <div class="navbar-brand">
                        <a href="/">
                            <img class="logo" src="`+assert+`fs_css/BAPPEDA1.png" height="50" alt="logo">
                            
                        </a>
                    </div>
                    

                    <!-- Collapse nav button -->
                    <div class="nav-collapse">
                        <span></span>
                    </div>
                    <!-- /Collapse nav button -->
                </div>
                <!-- <a class="navbar-brand border-bottom border-top p-2" href="`+_.sfUrl+`">PARIRI LEMA BARIRI<i></i></a>  -->
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
            
                <div class="collapse navbar-collapse " id="navbarSupportedContent">
                    `+
                    _sejajar({
                            class:"row",
                            attr:`style="width: 100%; "`,
                            data:[
                                {
                            //     isi:`
                            //     <ul class="navbar-nav mr-auto topnav" style="width: 100%; font-size:18px">
                            //         <li class="nav-item ">
                            //             <a class="nav-link `+(active==1?'active':'')+`" style="color: white;" href="`+_.sfUrl+`">BERANDA <span class="sr-only">(current)</span></a>
                            //         </li>
                            //         <li class="nav-item ">
                            //             <a class="nav-link `+(active==2?'active':'')+`" style="color: white;" href="`+_.sfUrl+`agenda">AGENDA</a>
                            //         </li>
                            //         <li class="nav-item ">
                            //             <a class="nav-link `+(active==3?'active':'')+`" style="color: white;" href="`+_.sfUrl+`produk">PRODUK</a>
                            //         </li>
                            //         <li class="nav-item ">
                            //             <a class="nav-link `+(active==4?'active':'')+`" style="color: white;" href="`+_.sfUrl+`profil">PROFIL</a>
                            //         </li>
                            //         <li class="nav-item ">
                            //             <a class="nav-link `+(active==5?'active':'')+`" style="color: white;" href="`+_.sfUrl+`kontak">KONTAK</a>
                            //         </li>
                            //         <!-- <li class="nav-item dropdown">
                            //             <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            //                 Dropdown
                            //             </a>
                            //             <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                            //                 <a class="dropdown-item" href="#">Action</a>
                            //                 <a class="dropdown-item" href="#">Another action</a>
                            //                 <div class="dropdown-divider"></div>
                            //                 <a class="dropdown-item" href="#">Something else here</a>
                            //             </div>
                            //         </li> 
                            //         <li class="nav-item">
                            //         <a class="nav-link disabled" href="#">Disabled</a>
                            //         </li> -->
                            //     </ul>
                            //     `
                            // },{
                                isi:`
                                <div class="col-lg-12"  style="text-align: right;">
                                    <div class="icon topnav">
                                        <a href="`+_.sfUrl+`" style="color: yellow;" class="bi bi-facebook mr-2" ></a>
                                        <a href="`+_.sfUrl+`" style="color: yellow;" class="bi bi-instagram mr-2"></a>
                                        <a href="`+_.sfUrl+`" style="color: yellow;" class="bi bi-mailbox mr-2"></a>
                                    </div>
                                </div>
                                `
                                    // `<h7 class="heading" style='font-family: Georgia, "Times New Roman", Times, serif; color:rgba(0,0,0,.7); text-align:center;'>
                                    //     <b>VISI : TERWUJUDNYA KSB BAIK BERLANDASKAN GOTONG ROYONG</b>
                                    // </h7>`
                            }]
                        })
                    +`
                </div>
            </nav>
            
        </header>
    `;
}
function _slider(){
    // slider=[];
    // slider.push({url:assert+"fs_css/1.jpg",color:"background-image:url("+assert+"bgSupportCss/1.jpg);background-size: cover;margin-bottom:0px;margin-top: 5%;",id:"Iklan"});
    // slider.push({url:assert+"fs_css/2.jpg"});
    // _slider()
    // margin-top: 5%;
    fdata="";
    fdata1="";
    fdata2="height: 100%;width: 100%;";
    fdata3="";
    if(slider[0].color!=undefined){
        fdata3=slider[0].color;
    }
    slider.forEach((v,i) => {
        if(v.size!=undefined){
            fdata2="height: "+v.size+"px;";
        }
        cls="";
        if(i==0){
            cls="active";
        }
        fdata+=`<li data-target="#`+slider[0].id+`" data-slide-to="0" class="`+cls+`"></li>`;
        fdata1+=`
                <div class="carousel-item `+cls+` ">
                    <div class="container">
                        <div class="carousel-caption text-right">
                            <img style="`+fdata2+`" src="`+v.url+`">
                        </div>
                    </div>
                </div>`;
    });
    return `
    <div id="`+slider[0].id+`" class="carousel slide" style=" `+fdata3+`" data-ride="carousel">
        <ol class="carousel-indicators">
        `+fdata+`
        </ol>
        <div class="carousel-inner">
            `+fdata1+`
        </div>
        <a class="carousel-control-prev" href="#`+slider[0].id+`" role="button" data-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
        </a>
        <a class="carousel-control-next" href="#`+slider[0].id+`" role="button" data-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
        </a>
    </div>
    `;
}
function _fiIcon(judul){
    // _fiIcon({
    //     icon:'<i class="mdi mdi-file-check"></i>'
    //     ,text:"Data Produk"
    //     ,clsHeader:"bg-primary"
    //     ,btn:_btn({
    //             color:"primary",
    //             judul:"Tambah Data",
    //             attr:"style='float:right;'",
    //             class:"btn btn-success btn-block"
    //         }),
    //     attrBody:"background-color:#e2b04d;padding:10px; ",
    //     isi:`<div id='tabelShow' style="margin: auto;">
    //             isinya disini ya
    //         </div>`
    // }
    if(judul!=null){
        fdata=`
            <div class="col-9  mt-auto mb-auto">
                <h5>`+judul.text+`</h5>
            </div>
            <div class="col-2  mt-auto mb-auto" style="text-align: right;">
                `+judul.btn+`
            </div>
        `;
        if(judul.btn==undefined){
            fdata=`
                <div class="col-11  mt-auto mb-auto">
                    <h5>`+judul.text+`</h5>
                </div>
            `;
        }
        if(judul.icon==undefined){
            judul.icon="";
        }
        judul1=`
            <div class="card table-card p-0 mb-0">
                <div class="card-header `+judul.clsHeader+`">
                    <div class="row">
                        <div class="col-auto  mt-auto mb-auto">
                            `+judul.icon+`
                        </div>
                        `+fdata+`
                        </div>
                    </div>
                </div>
            </div>
        `;
    }else{
        judul1="";
    }
    fsize=12;
    if(judul.sizeCol!=undefined){
        fsize=judul.sizeCol;
    }
    fid="Informasi";
    if(judul.id!=undefined){
        fid=judul.id;
    }
    return `
        <section id="`+fid+`" class="content-section" style="width: 100%;">
            <div class="col-`+fsize+` p-0">
                `+judul1+`
                <div class="card-block" style="`+judul.attrBody+`">
                    `+judul.isi+`
                </div>
            </div>
        </section>
    `;
}
function _fi2Kolom(v){
    // _fi2Kolom({
    //     attr:'margin: auto;',
    //     cls:'',
    //     attrName:"",
    //     attrVal:"",
    //     data:[]
    // })
    var fdata=`
        <table style="`+v.attr+`" class="table `+v.cls+`">`;
    v.data.forEach(v => {
        fdata+=`
            <tr>
                <td style="`+v.attrName+`">
                    `+v.valueName+`
                </td>
                <td style="text-align:center;">
                    :
                </td>
                <td style="`+v.attrVal+`">
                    `+v.value+`
                </td>
            </tr>
        `;
    });
    return fdata+=`</table>`;
}
function _progressBar(v){
    // _progressBar({
        // cls:"bg-primary",
        // value:"10%"
    // })
    // progress-bar-striped progress-bar-animated
    return `
        <div class="progress">
            <div class="progress-bar `+v.cls+`" style="width:`+v.value+`"></div>
        </div>
    `;
}
function _footer(data){
    // _footer({
    //     id:'tester',
    //     attr:'background-color:dark',
    //     cls:'container bg-warning'
    // })
    return `
        <div id="`+data.id+`" class="`+data.cls+`" style="`+data.attr+`">
            <div class="row">
                <div class="col-lg-12"  style="text-align: center;">
                    <div class="icon">
                        <i class="bi bi-facebook"></i>
                        <i class="bi bi-instagram"></i>
                        <i class="bi bi-mailbox"></i>
                    </div>
                </div>
                <div class="col-lg-12">
                    <div style="text-align: center;">
                        <p>
                            <span>©`+data.nama+`</span>
                        </p>
                    </div>
                </div>
                
            </div>
        </div>
    `;
}
function _tabelResponsive(v){
    // datax=[];
    // datax.push({
    //     valueName:"Dinas",
    //     value:"Bappeda"
    // });
    // datax.push({
    //     valueName:"Usulan",
    //     value:"Pembahasan"
    // });
    // return _tabelResponsive(
    //     {
    //         id:"dataTabel"
    //         ,isi:_tabel(
    //             {
    //                 data:datax
    //                 ,no:1
    //                 ,kolom:[
    //                     "value","valueName"
    //                 ]
    //                 ,namaKolom:[
    //                     "Nama","Keterangan"
    //                 ]
    //             })
    //     });
    fdata="table-striped table-bordered";
    if(v.class!=undefined){
        fdata=v.class;
    }
    fattr="";
    if(v.attr!=undefined){
        fattr=v.attr;
    }
    return `
    <div class="bootstrap-data-table-panel">
        <div class="table-responsive" `+fattr+`>
            <table id="`+v.id+`" class="table `+fdata+`" style="width:100%">
                `+v.isi+`
            </table>
        </div>
    </div>
    `;
}
function _tabelInput(v){
    var fdata=`
    <thead>
        <tr>`,fno=false,faction=false;
    
    if(v.no>0){
        fdata+=`<th>no</th>`;
        fno=true;
    }
    v.namaKolom.forEach(v1 => {
        fdata+=`<th>`+v1+`</th>`;
    });
    if(v.action!=null || v.action!=undefined){
        fdata+=`<th>Action</th>`;
        faction=true;
        if(v.action.length==0){
            v.action.push({ 
                clsBtn:`btn-outline-danger`
                ,icon:`<i class="mdi mdi-lock"></i>`
                ,title:"TERKUNCI"
            });
        }
    }
    fdata+=`</tr>
        </thead>
        <tbody>`;
    v.data.forEach((v1,i1) => {
        fdata+=`
            <tr>`;
            if(fno){
                fdata+=`<td>`+v.no+`</td>`;
                v.no+=1;
            }
        v.kolom.forEach((v2,i2) => {
            f1data=v2.split("$");
            if(f1data.length==2){
                fdata+=`<td>`+_$(v1[f1data[0]])+`</td>`;
            }else{
                if(v2=="checkbox"){
                    if(v.func!=undefined){
                        fdata+=`<td>`+_inp({type:"checkbox", attr:" onchange='"+v.func.substring(0,v.func.length-1)+i1+",this)' "+_trueChecked(1,Number(v1['value']))})+`</td>`;
                    }else{
                        fdata+=`<td>`+_inp({type:"checkbox"})+`</td>`;
                    }
                }else{
                    fdata+=`<td>`+v1[v2]+`</td>`;
                }
            }
        });
        if(faction){
            fdata+=`<td>`+_inpFunc(v.action.isi,v.no-2)+`</td>`;
        }
        fdata+=`</tr>`;
    });

   return fdata+=`</tbody>`;
}
function _tabel(v){
    // _tabel(
    // {
    //     data:_.dusulan
    //     ,no:1
    //     ,kolom:[
    //         "nmDinas","nmUsulan","checkbox"
    //     ]
    //     ,namaKolom:[
    //         "Nama Dinas","Usulan","Action"
    //     ]
    // })
    var fdata=`
    <thead>
        <tr>`,fno=false,faction=false;
    
    if(v.no>0){
        fdata+=`<th>no</th>`;
        fno=true;
    }else{
        v.no=1;
    }
    v.namaKolom.forEach(v1 => {
        fdata+=`<th>`+v1+`</th>`;
    });
    if(v.action!=null || v.action!=undefined){
        fdata+=`<th>Action</th>`;
        faction=true;
        if(v.action.length==0){
            v.action.push({ 
                clsBtn:`btn-outline-danger`
                ,icon:`<i class="mdi mdi-lock"></i>`
                ,title:"TERKUNCI"
            });
        }
    }
    fdata+=`</tr>
        </thead>
        <tbody>`;
    v.data.forEach((v1,i1) => {
        fdata+=`
            <tr>`;
            if(fno){
                fdata+=`<td>`+v.no+`</td>`;
            }
            v.no+=1;
        v.kolom.forEach((v2,i2) => {
            // f1data=v2.split("$");
            // if(f1data.length==2){
            //     fdata+=`<td>`+_$(v1[f1data[0]])+`</td>`;
            // }else{
            //     if(v2=="checkbox"){
            //         if(v.func!=undefined){
            //             fdata+=`<td>`+_inp({type:"checkbox", attr:" onchange='"+v.func.substring(0,v.func.length-1)+i1+",this)' "+_trueChecked(1,Number(v1['value']))})+`</td>`;
            //         }else{
            //             fdata+=`<td>`+_inp({type:"checkbox"})+`</td>`;
            //         }
            //     }else{
            //         fdata+=`<td>`+v1[v2]+`</td>`;
            //     }
            // }
            kond=true;
            f1data=v2.split("$");
            if(f1data.length==2){
                fdata+=`<td>`+_$(v1[f1data[0]])+`</td>`;
                kond=false;
            }
            if(v2=="checkbox" && kond){
                // console.log(v1['checked']);
                if(v.func!=undefined){
                    kond=false;
                    fdata+=`<td>`+_inp({type:"checkbox", attr:" onchange='"+v.func.substring(0,v.func.length-1)+i1+",this)'",checked:_trueChecked(1,Number(v1['checked']))  })+`</td>`;
                }else{
                    
                    kond=false;
                    fdata+=`<td>`+_inp({type:"checkbox" ,attr:"", checked:_trueChecked(1,Number(v1['checked']))})+`</td>`;
                }
            }
            f1data=v2.split("+");
            if(f1data.length==2){
                fdata+=`<td>`+_$(
                    Number(v1[f1data[0]])+Number(v1[f1data[1]])
                    )+`</td>`;
                kond=false;
            }
            f1data=v2.split("-");
            if(f1data.length==2){
                fdata+=`<td>`+_$(
                    Number(v1[f1data[0]])-Number(v1[f1data[1]])
                )+`</td>`;
                kond=false;
            }
            f1data=v2.split("*");
            if(f1data.length==2){
                fdata+=`<td>`+_$(
                    Number(v1[f1data[0]])*Number(v1[f1data[1]])
                )+`</td>`;
                kond=false;
            }
            f1data=v2.split("/");
            if(f1data.length==2){
                fdata+=`<td>`+_$(
                    Number(v1[f1data[0]])/Number(v1[f1data[1]])
                )+`</td>`;
                kond=false;
            }
            if(kond){
                fdata+=`<td>`+v1[v2]+`</td>`;
            }
        });
        if(faction){
            fdata+=`<td style="min-width: 15%;">`+_btnGroup(v.action,v.no-2)+`</td>`;
        }
        fdata+=`</tr>`;
        if(v.subKolom!=undefined && v.subKolom.length>0){
            fdata+=`
            <tr id="`+v.subKolom[0]+(v.no-2)+`" style="display: none;">`;
                if(fno){
                    fdata+=`<td>`+(v.no-1)+`</td>`;
                }
            v.kolom.forEach((v3,i3) => {
                fdata+=`<td>`+v1[v3]+`</td>`;
            })
            if(faction){
                fdata+=`<td style="min-width: 15%;">`+_btnGroup(v.action,v.no-2)+`</td>`;
            }
            fdata+=`</tr>`;
        }
        
    });

   return fdata+=`</tbody>`;
}
function _tabelForExcel(v){
    var fdata=`
    <thead>
        <tr>`,fno=false,faction=false;
    
    if(v.no>0){
        fdata+=`<th>no</th>`;
        fno=true;
    }
    v.namaKolom.forEach(v1 => {
        fdata+=`<th>`+v1+`</th>`;
    });
    if(v.action!=null || v.action!=undefined){
        fdata+=`<th>Action</th>`;
        faction=true;
        if(v.action.length==0){
            v.action.push({ 
                clsBtn:`btn-outline-danger`
                ,icon:`<i class="mdi mdi-lock"></i>`
                ,title:"TERKUNCI"
            });
        }
    }
    fdata+=`</tr>
        </thead>
        <tbody>`;
    v.data.splice(0,1);
    v.data.forEach((v1,i1) => {
        fdata+=`
            <tr>`;
            if(fno){
                fdata+=`<td>`+v.no+`</td>`;
                v.no+=1;
            }
        v.kolom.forEach((v2,i2) => {
            try {
                f1data=v2.split("$");
                if(f1data.length==2){
                    fdata+=`<td>`+_$(v1[Number(f1data[0])])+`</td>`;
                }else{
                    if(v2=="checkbox"){
                        if(v.func!=undefined){
                            fdata+=`<td>`+_inp({type:"checkbox", attr:" onchange='"+v.func.substring(0,v.func.length-1)+i1+",this)' "})+`</td>`;
                        }else{
                            fdata+=`<td>`+_inp({type:"checkbox"})+`</td>`;
                        }
                    }else{
                        fdata+=`<td>`+v1[v2]+`</td>`;
                    }
                }
            } catch (error) {
                if(v1[v2]!=null){
                    fdata+=`<td>`+v1[v2]+`</td>`;
                }else{
                    fdata+=`<td></td>`;
                }
            }
        });
        if(faction){
            fdata+=`<td>`+_btnGroup(v.action,v.no-2)+`</td>`;
        }
        fdata+=`</tr>`;
    });

   return fdata+=`</tbody>`;
}

function _modalCenterContent(judul,form){
    _setModalContent(`
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title">`+judul+`</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
               `+form+`
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
            </div>
        </div>
    `);
}
function _modalShowImage(v){
    // _modalShowImage({
    //     judul:"",
    //     style:undefined,
    //     file:upload/fileDisposisi/`+_.ddisposisi[ind].data[0].files+`
    // })
    fstyle=`style="width: 400px; "`;//height: 264px;
    if(v.style!=undefined){
        fstyle=v.style;
    }

    fjudul=`Tampilan Gambar`;
    if(v.judul!=undefined){
        fjudul=v.judul;
    }

    return _modalCenterContent(fjudul,`<img src="`+assert+v.file+`" `+fstyle+`>`);
}
function _modalEx1(v){
    // data-dismiss="modal"
    // _modalEx1({
    //     judul:"Tambah Data".toUpperCase(),
    //     icon:`<i class="mdi mdi-note-plus"></i>`,
    //     cform:`text-light`,
    //     bg:undefined,
    //     minWidth:"500px; font-size: medium;",
    //     isi:fkantor(),
    //     footer:_btn({
    //                 color:"primary shadow",
    //                 judul:"Close",
    //                 attr:`style='float:right; padding:5px;font-size: medium;' onclick="_modalHide('modal')"`,
    //                 class:"btn btn-secondary"
    //             })
    //             +_btn({
    //                 color:"primary shadow",
    //                 judul:"SIMPAN",
    //                 attr:"style='float:right; padding:5px;font-size: medium;' onclick='addDataed()'",
    //                 class:"btn btn-primary"
    //             })
    // });
    fmin="500px";
    if(v.minWidth!=undefined){
        fmin=v.minWidth;
    }
    fdata=`style="min-width:`+fmin+`"`;
    fdata1=`bg-primary`;
    fdata2=`style="background-color:#adadad !important;"`
    if(v.bg!=undefined){
        fdata1=v.bg;
    }
    _setModalContent(`
        <div class="modal-content" `+fdata+`>
            <div class="modal-header `+fdata1+`" >
                <h5 class="modal-title" style="width: 100%;font-size: medium;">
                    <div class="row">
                        <div class="col-auto">
                            `+v.icon+`
                        </div>
                        <div class="col-10">
                            `+v.judul+`
                        </div>
                    </div>
                </h5>
                <button type="button" class="close" onclick="_modalHide('modal')">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
               `+v.isi+`
            </div>
            <div class="modal-footer" `+fdata2+`>
                `+v.footer+`
            </div>
        </div>
    `);
    // idToast="modalToast";
}

function _container(v){
    // viewWebsite=_container({
    //     container:true,
    //     center:true,
    //     size:undefined,
    // id :"idContainer",
    //     form:"",
    //         full:"-fluid"
    //         attr:""
    // });
    fres=`
        <div class="col-xl-10 col-lg-12 col-md-9">
        `+v.form+`
        </div>
    `;
    if(v.size!=undefined){
        fres=`
            <div class="`+v.size+`">
            `+v.form+`
            </div>
        `;
    }

    if(v.center){
        fres=`
            <div class="row justify-content-center">
                `+fres+`
            </div>
        `;
    }
    if(v.container){
        fres=`
            <div id="`+v.id+`" class="container`+v.full+`" style="`+v.attr+`">
                `+fres+`
            </div>
        `;
    }
    return fres;
}
function _formNoHeader(v){
    // console.log(v.kolom);
    // viewWebsite=_formNoHeader({
    //     shadow:true,
    //     kolom:[
    //         {
    //             size:"6",form:""
    //         },{
    //             form:""
    //         }
    //     ]
    // });
    // style
    // _formNoHeader({
    //     shadow:true,
    //     kolom:[
    //         {
    //             size:"3",form:_formTambahMember()
    //         },{
    //             size:"9",
    //             form:`<div id='tabelShow' class="card shadow p-4">`
    //                 +setTabel()
    //             +`</div>`
    //         }
    //     ]
    // }),
    // o-hidden border-0 shadow-lg my-5 
    fres="";
    v.kolom.forEach(v1=> {
        fsize=v.kolom[0].size;
        if(v1.size!=undefined){
            fsize=v1.size;
        }

        fres+=`<div class="col-lg-`+fsize+` " style="`+v1.style+`">`+v1.form+`</div>`;
    });
    fres=`
    <div class="card-body p-0" id="`+v.id+`" style="`+v.style+`">
        <div class="row">
            `+fres+`
        </div>
    </div>`;
    if(v.shadow){
        fres=`
            <div class="card shadow `+v.cls+`">
                `+fres+`
            </div>
        `;
    }
    return fres;
}
function _formIcon(v){
    // _formIcon({
    //     icon:'<i class="mdi mdi-file-check"></i>'
    //     ,text:"Data Kantor",
    //         classJudul
    //     ,btn:infoSupport,
    //     isi:`<div id='tabelShow' style="margin: auto;">`
    //             +setTabel()
    //         +`</div>`,
    //     id:"form1",
    //     sizeCol:undefined,
    // bgHeader:"bg-light",
    // attrHeader:`style="background-image: url('http://localhost:8080/sbm/assets/files/bsupport/bg_a6.jpg');"`,
    // bgForm:"#b1b1b1"
    // })

    // _formIcon({
    //     icon:'<i class="mdi mdi-file-check"></i>',
    //     text:"Penjualan Tertinggi Bulan "+data.nmk,
    //     classJudul:undefined,
    //     btn:infoSupport,
    //     isi:`<div id='tpengeluaranK' class="card shadow p-4">` // k kemaren
    //             +setTabelK()
    //         +`</div>`,
    //     id:"form1",
    //     sizeCol:undefined,
    // })
    if(v!=null){
        fsplit=v.classJudul.split("col");
        fcol="col-9";
        if(fsplit.length>1){
            fcol='';
        }
        fdata=`
            <div class="`+fcol+` mt-auto mb-auto `+v.classJudul+`">
                `+v.text+`
            </div>
            <div class="col-2  mt-auto mb-auto" style="text-align: right;">
                `+v.btn+`
            </div>
        `;
        if(v.btn==undefined){
            fdata=`
                <div class="col-11  mt-auto mb-auto `+v.classJudul+`">
                    `+v.text+`
                </div>
            `;
        }
        if(v.icon==undefined){
            v.icon="";
        }
        // </div>
        fdata=`
            <div class="card table-card p-0 mb-0 `+v.bgHeader+`" `+v.attrHeader+`>
                <div class="card-header">
                    <div class="row">
                        <div class="col-auto  mt-auto mb-auto">
                            `+v.icon+`
                        </div>
                        `+fdata+`
                        
                    </div>
                </div>
            </div>
        `;
    }else{
        fdata="";
    }
    fsize=12;
    if(v.sizeCol!=undefined){
        fsize=v.sizeCol;
    }
    fid="Informasi";
    if(v.id!=undefined){
        fid=v.id;
    }

    fbgForm="#fff";
    if(v.bgForm!=undefined){
        fbgForm=v.bgForm;
    }
    return `
        <section id="`+fid+`" class="content-section bg-light" style="width: 100%;">
            <div class="col-`+fsize+` p-0">
                `+fdata+`
                <div class="card-block" style="padding:10px; background:`+fbgForm+`;">
                    `+v.isi+`
                </div>
            </div>
        </section>
    `;
}
function _tbl2Col(informasi,tambahan){
    // infoSupport=[];
    // infoSupport.push({name:"Kabupaten",value:_.dmember[ind].kabupaten});
    // _tbl2Col(infoSupport)
    var fdata=`
        <div class="col">
            <table style="margin: auto;" class="table">`;
    
    informasi.forEach(v => {
        fdata+=`
            <tr>
                <td style="text-align:`+informasi[0].align+`;">
                    `+v.name+`
                </td>
                <td style="text-align:left;">
                    :
                </td>
                <td style="text-align:left;">
                    `+v.value+`
                </td>
            </tr>
        `;
    });
    if(tambahan==undefined){
        return fdata+=`</table></div>`;
    }
    return fdata+=`</table>`+tambahan+`</div>`;
}
function _tbl2ColIcon(informasi,tambahan,modeHorizontal){
    // infoSupport=[];
    // infoSupport.push({name:"Kabupaten",value:_.dmember[ind].kabupaten});
    // _tbl2Col(infoSupport)
    var fdata=`
        <div class="col">
            <table style="margin: auto;" class="table">`;
    
    informasi.forEach((v,i) => {
        if(modeHorizontal){
            if(i==0){
                fdata+=`<tr>`;    
            }
        }else{
            fdata+=`<tr>`;    
        }
        fdata+=`
                <td style="text-align:`+informasi[0].align+`; padding:0px;">
                    `+v.icon+`
                </td>
                <td style="text-align:left;">
                    <b>`+v.name+`</b><br>
                    `+v.value+`
                </td>
        `;
        if(modeHorizontal){
            if(informasi.length-1==i){
                fdata+=`</tr>`;    
            }
        }else{
            fdata+=`</tr>`;    
        }
    });
    if(tambahan==undefined){
        return fdata+=`</table></div>`;
    }
    return fdata+=`</table>`+tambahan+`</div>`;
}
function _tabx(v) {
    // $('#tab1').removeClass("active");
    // $('#contentTab1').removeClass("active");

    // $('#tab0').addClass("active");
    // $('#contentTab0').addClass("active");
    // _tabx({
    //     active:1,
    //     start:0,
    //     attrNav:`style="background-color: sienna;"`,
    //     style:`style="width: 50%;text-align: center;"`,
    //     attrContent:'',
    //     tab:[{
    //         judul:"<b>DATA PRODUK</b>",
    //         isi:`<div id='tabelShow' class="card shadow p-4">`
    //                 +setTabel()
    //             +`</div>`,
    //         // onclick:`_checkUpdTabel()`
    //     },{
    //         judul:"<b>TAMBAH PRODUK</b>",
    //         isi:_form1(),
    //         // onclick:`_checkUpdTabel()`
    //     }]
    // })
    if(v.start==undefined){
        v.start=0;
    }
    ftab="";
    fcontent="";
    v.tab.forEach((v1,i1) => {
        faktif="";
        if(v.active==i1){
            faktif="active";
        }
        fonclick="";
        if(v1.onclick!=undefined){
            fonclick=` onclick="`+v1.onclick.substring(1,v1.onclick.length-1)+i1+`)"`;
        }
        ftab+=`
            <li class="nav-item" `+v.style+` `+fonclick+`>
                <a class="nav-link `+faktif+`" data-toggle="tab" id="tab`+(i1+v.start)+`" href="#contentTab`+(i1+v.start)+`" role="tab">`+v1.judul+`</a>
            </li>
        `;
        fcontent+=`
            <div class="tab-pane `+faktif+`" id="contentTab`+(i1+v.start)+`" role="tabpanel">
                `+v1.isi+`
            </div>
        `;
    });

    // console.log(v.attrNav)
    return`
        <div class="col-lg-12 p-0">
            <!-- Nav tabs -->
            <ul class="nav nav-tabs  tabs" role="tablist" `+v.attrNav+`>
                `+ftab+`
            </ul>
            <!-- Tab panes -->
            <div class="tab-content tabs card-block" `+v.attrContent+`>
                `+fcontent+`
            </div>
        </div>
    `;
}
function _formCollspan(v){
    // _formCollspan({
    //     id:"ffaktur",
    //     attrHeader:`style="background-color: aliceblue;"`,
    //     attr:`style="margin-bottom: 20px;"`,
    //     icon:`<i class="mdi mdi-file-check"></i>`,
    //     judul:"Form Data Belanja",
    //     show:"",
    //     isi:`<div class="col-md-9 grid-margin" style="margin:auto;" id="iformFaktur">`
    //         +_formAddFaktur(true)
    //     +`</div>`,
    // });
    return `
    <div class="card shadow mb-4">
        <!-- Card Header - Accordion -->
        <a href="#`+v.id+`" class="d-block card-header py-3 " data-toggle="collapse" role="button" aria-expanded="true" aria-controls="collapseCardExample" `+v.attrHeader+`>
            <div class="row">
                <div class="col-auto  mt-auto mb-auto">
                    `+v.icon+`
                </div>
                
                <div class="col-10  mt-auto mb-auto">
                    <h6 class="m-0 font-weight-bold text-primary">`+v.judul+`</h6>
                </div>
                <div class="col-auto  mt-auto mb-auto dropdown-toggle" style="text-align: end;">
                </div>
            </div>
        </a>
        <!-- Card Content - Collapse -->
        <div class="collapse `+v.show+`" id="`+v.id+`" `+v.attr+`>
            <div class="card-body">
                `+v.isi+`
            </div>
        </div>
    </div>`;
}
function _galeryx1(val) {
    // _galeryx1({
    //     row:3,
    //     url:_urlMaster,
    //     data:_.agenda
    //     // [
    //     //     {judul:'Badan Perencanaan Pembangunan Daerah',keterangan:'Penelitian dan Pengabdian (Bappeda dan Litbang) Kabupaten Sumbawa Barat (KSB), melaksanakan lomba penelitan tahun 2021',url:'lokeld'},
    //     //     {judul:'Badan Perencanaan Pembangunan Daerah',keterangan:'Penelitian dan Pengabdian (Bappeda dan Litbang) Kabupaten Sumbawa Barat (KSB), melaksanakan lomba penelitan tahun 2021',url:'lokeld'},
    //     //     {judul:'Badan Perencanaan Pembangunan Daerah',keterangan:'Penelitian dan Pengabdian (Bappeda dan Litbang) Kabupaten Sumbawa Barat (KSB), melaksanakan lomba penelitan tahun 2021',url:'lokeld'},
    //     //     {judul:'Badan Perencanaan Pembangunan Daerah',keterangan:'Penelitian dan Pengabdian (Bappeda dan Litbang) Kabupaten Sumbawa Barat (KSB), melaksanakan lomba penelitan tahun 2021',url:'lokeld'},
    //     //     {judul:'Badan Perencanaan Pembangunan Daerah',keterangan:'Penelitian dan Pengabdian (Bappeda dan Litbang) Kabupaten Sumbawa Barat (KSB), melaksanakan lomba penelitan tahun 2021',url:'lokeld'}
    //     // ],
    // })
    width='100px';
    height='100px';
    _tahun=2;
    router='';

    fkDiv=true;
    fres='';
    fcount=1;
    val.data.forEach((v,i) => {
        if(fkDiv){// start
            fres+=`<div class="row">`;
            fkDiv=false;
        }

        fres+=`
            <div class="col-md-4 bg-light p-1">
                <div class="row no-gutters border rounded overflow-hidden flex-md-row m-1 shadow-sm h-md-250 position-relative">`
                    +_formNoHeader({
                        shadow:true,
                        cls:"",
                        id :"idContainer",
                        style:`padding:5px !important;`,
                        kolom:[
                            {
                                size:"6",form:`
                                    <h4 class="mb-0 text-primary">`+v.judul+`</h4>
                                    <p class="card-text mb-auto">
                                        `
                                        // +(
                                        //     v.judul.length+v.keterangan.length>70 && v.judul.length<70?
                                        //     v.keterangan.substring(0,10)
                                        //     :v.keterangan.substring(0,10)
                                        // )
                                    +`</p>
                                    <a href="`+val.url+v.url+`" class="stretched-link btn btn-info">Preview page</a>
                                `
                            },{
                                size:"6",form:`<img src="`+val.assets+`assets/fs_sistem/upload/image/`+v.img+`" class="bd-placeholder-img btn-outline-success my-2 my-sm-0" style="width: inherit;">`
                                
                                // style:"background: rgba(41, 0, 74, 0.3);"
                            },
                            // ,{
                            //     size:"2",form:_tbl2ColIcon(infoSupport)
                            //     // style:"background: rgba(41, 0, 74, 0.3);"
                            // }
                        ]
                    })   
            +`</div>
            </div>
        `;
        fcount++;
        if((fcount-1)==val.row || (val.data.length-1==i)){
            fres+=`</div>`;
            fcount=1;
            fkDiv=true;
        }
    });
    return fres;
    return `<div class="row">
                        <div class="col-md-4 bg-light p-1">
                            <div class="row no-gutters border rounded overflow-hidden flex-md-row m-1 shadow-sm h-md-250 position-relative">
                                <div class="col-sm-7 p-2 d-flex flex-column position-static">
                                    <h3 class="mb-0 text-primary">Member System</h3>
                                    <div class="mb-1 text-muted">Pengaturan Tahun `+_tahun+`</div>
                                    <p class="card-text mb-auto">
                                        Mengatur tentang akses data pengguna terhadap beberapa sistem yang tersedia
                                    </p>
                                    <a href="`+router+`control/member" class="stretched-link">Continue page</a>
                                </div>
                                <div class="col-auto d-none d-lg-block">
                                    <img src="`+assert+`icon/people.svg" class="bd-placeholder-img btn-outline-success my-2 my-sm-0" width="`+width+`" height="`+height+`" >
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4 bg-light p-1">
                            <div class="row no-gutters border rounded overflow-hidden flex-md-row m-1 shadow-sm h-md-250 position-relative">
                                <div class="col-sm-7 p-2 d-flex flex-column position-static">
                                    <h3 class="mb-0 text-primary">Kunci Sistem</h3>
                                    <div class="mb-1 text-muted">Pengaturan Tahun `+_tahun+`</div>
                                    <p class="card-text mb-auto">
                                        Mengatur tentang penguncian aksi - aksi yang dilakukan oleh pengguna, yang terdapat didalam sistem
                                    </p>
                                    <a href="`+router+`control/kunci" class="stretched-link">Continue page</a>
                                </div>
                                <div class="col-auto d-none d-lg-block">
                                    <img src="`+assert+`icon/key_1.svg" class="bd-placeholder-img btn-outline-success my-2 my-sm-0" width="`+width+`" height="`+height+`" >
                                </div>
                            </div>
                        </div>
                    <div>`
}
function _galeryx2(val) {
    // _galeryx2({
    //     row:3,
    //     url:assert+"fs_sistem/upload/files/",
    //     data:_.produk
    //     // [
    //     //     {judul:'Badan Perencanaan Pembangunan Daerah',keterangan:'Penelitian dan Pengabdian (Bappeda dan Litbang) Kabupaten Sumbawa Barat (KSB), melaksanakan lomba penelitan tahun 2021',url:'lokeld',img:'/fs_css/w5.jpg'},
    //     //     {judul:'Badan Perencanaan Pembangunan Daerah',keterangan:'Penelitian dan Pengabdian (Bappeda dan Litbang) Kabupaten Sumbawa Barat (KSB), melaksanakan lomba penelitan tahun 2021',url:'lokeld',img:'/fs_sistem/slider/lap.PNG'},
    //     //     {judul:'Badan Perencanaan Pembangunan Daerah',keterangan:'Penelitian dan Pengabdian (Bappeda dan Litbang) Kabupaten Sumbawa Barat (KSB), melaksanakan lomba penelitan tahun 2021',url:'lokeld',img:'/fs_sistem/slider/lap.PNG'},
    //     //     {judul:'Badan Perencanaan Pembangunan Daerah',keterangan:'Penelitian dan Pengabdian (Bappeda dan Litbang) Kabupaten Sumbawa Barat (KSB), melaksanakan lomba penelitan tahun 2021',url:'lokeld',img:'/fs_sistem/slider/lap.PNG'},
    //     //     {judul:'Badan Perencanaan Pembangunan Daerah',keterangan:'Penelitian dan Pengabdian (Bappeda dan Litbang) Kabupaten Sumbawa Barat (KSB), melaksanakan lomba penelitan tahun 2021',url:'lokeld',img:'/fs_sistem/slider/lap.PNG'}
    //     // ],
    // })
    width='100px';
    height='100px';
    _tahun=2;
    router='';

    fkDiv=true;
    fres='';
    fcount=1;
    val.data.forEach((v,i) => {
        if(fkDiv){// start
            fres+=`<div class="row">`;
            fkDiv=false;
        }

        fres+=`
            <div class="col-md-4 bg-light p-1">
                <div class="row no-gutters border rounded overflow-hidden flex-md-row m-1 shadow-sm h-md-250 position-relative">
                    <div style='background-image:url("`+val.url+'assets/fs_sistem/upload/image/'+v.img+`"); height: 150px;background-size: cover;width: 100%;'> </div>
                    <div class="btn-secondary" style="width:100%"> 
                        `+_textCenter({text:`<a onclick="_redirectOpen('`+val.url+v.file+`')" class="stretched-link btn"><h5 class="mb-0">`+v.judul+`</h5></a>`
                        })+`
                        <p class="card-text pl-2 pr-2 mb-auto">
                            `+(v.keterangan.length>70?v.keterangan.substring(0,70)+'...':v.keterangan)+`
                        </p>
                    </div>`
                    // +_formNoHeader({
                    //     shadow:true,
                    //     cls:"",
                    //     id :"idContainer",
                    //     style:`padding:5px !important;`,
                    //     kolom:[
                    //         {
                    //             size:"6",form:`
                                    // <h4 class="mb-0 text-primary">`+v.judul+`</h4>
                                    // <p class="card-text mb-auto">
                                    //     `+v.keterangan.substring(0,70)+`...
                                    // </p>
                                    // <a href="`+val.url+v.url+`" class="stretched-link btn btn-info">Preview page</a>
                    //             `
                    //         },{
                    //             size:"6",form:
                                
                    //             // style:"background: rgba(41, 0, 74, 0.3);"
                    //         },
                    //         // ,{
                    //         //     size:"2",form:_tbl2ColIcon(infoSupport)
                    //         //     // style:"background: rgba(41, 0, 74, 0.3);"
                    //         // }
                    //     ]
                    // })   
            +`</div>
            </div>
        `;
        fcount++;
        if((fcount-1)==val.row || (val.data.length-1==i)){
            fres+=`</div>`;
            fcount=1;
            fkDiv=true;
        }
    });
    return fres;
}
function _galeryx3(val) {
    // {
    //     data:[],
    //     row:3,
        // url:'',
    // }
    width='100px';
    height='100px';
    _tahun=2;
    router='';

    fkDiv=true;
    fres='';
    fcount=1;
    val.data.forEach((v,i) => {
        if(fkDiv){// start
            fres+=`<div class="row">`;
            fkDiv=false;
        }

        fres+=`
            <div class="col p-1 " style="`+val.style+`">
                <div class="row no-gutters border rounded overflow-hidden flex-md-row m-1 shadow-sm h-md-250 position-relative">
                    <div style='height:auto;background-size: cover;width: 100%;text-align: center;' class="p-3"> 
                        `+v.img+`
                        `+_textCenter({
                            text:`<a href="`+val.url+v.url+`" class="stretched-link btn">
                                <h5>
                                    `+v.judul+`
                                </h5>
                                <p>
                                    `+v.keterangan.substring(0,70)+(v.keterangan.length>70?'...':'')+`
                                </p>
                                
                            </a>`
                        })+`
                    </div>`
            +`</div>
            </div>
        `;
        fcount++;
        if((fcount-1)==val.row || (val.data.length-1==i)){
            fres+=`</div>`;
            fcount=1;
            fkDiv=true;
        }
    });
    return fres;
}