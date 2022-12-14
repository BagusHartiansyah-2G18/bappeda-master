function _onload(data){
    $('#body').html(data.tmBody);
    myCode=data.code;
    
    _.tahun=data.tahun;
    
    
    _.tahun.forEach((v) => {
        v.url='control/jabatan/'+(Number(v.perubahan)==0?v.judul:v.judul+"-"+v.perubahan);
        v.img='<span class="mdi mdi-database" style="font-size: 40px;color: blue;"></span>';
    });
    
    $('#bodyTM').html(_formData());
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
                +_formNoHeader({
                    shadow:false,
                    cls:"",
                    id :"idContainer",
                    style:`background-image:url('`+assert+`/fs_sistem/slider/1.jpg'); background-size: cover; min-height:600px`,
                    kolom:[
                        {
                            size:"12",form:_form2()
                        }
                    ]
                })
            +`</div>`;
}
function _form2(){
    hicon="200px";
    fsize="180px";
    infoSupport1=[];
    infoSupport1.push({name:"Facebook",value:'Komplek KTC',icon:'<span class="mdi mdi-database" style="font-size: 40px;color: blue;"></span>'});
    // infoSupport1.push({name:"Instagram",value:'087-863-731-101',icon:'<span class="mdi mdi-instagram" style="font-size: 40px;color: cornflowerblue;"></span>'});
    // // infoSupport1.push({name:"Telegram",value:'bappedaKsb@gmail.com',icon:'<span class="mdi mdi-cellphone-basic" style="font-size: 40px;color: blue;"></span>'});
    // infoSupport1.push({name:"Twitter",value:'bappedaKsb@gmail.com',icon:'<span class="mdi mdi-twitter" style="font-size: 40px;color: blue;"></span>'});
    // infoSupport1.push({name:"Website",value:'bappedaKsb@gmail.com',icon:'<span class="mdi mdi-search-web" style="font-size: 40px;color: yellowgreen;"></span>'});

    return `
    <div class="" style="margin: auto;padding: 30px; min-height:600px; background: rgba(255, 255, 255, 0.30);">`
        +`<div class="menu" style="margin-top:100px;color:black;padding:5px;">`
            +_galeryx3({
                style:'background-color:rgba(135, 166, 160, 0.4);',
                row:7,
                url:router,
                data:_.tahun
            })
        +`</div>
    </div>`;
    // +_textCenter({text:` <a class="small" href="forgot-password.html">Forgot Password?</a>`})+
    //     _textCenter({text:` <a class="small" href="register.html">Create an Account!</a>`})
}