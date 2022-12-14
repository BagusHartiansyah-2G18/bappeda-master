function _log(nama,data){
    console.log(nama);
    console.log(data);
}
async function _post(url,data){
    _swal({
        type:'loading',
        title:'Loading',
        text:'Mohon Menunggu...'
    });
    return new Promise(function(res){
        $.ajax({
            type:'post',
            url:router+url,
            data:{
                    data:btoa(JSON.stringify(data)),
                    code:btoa(myCode)
                },
            success:function(respon)
            {
                swal.clickCancel();
                res(respon);
            },
            error:function(){
                swal.clickCancel();
                _toast({
                        bg:'e',
                        msg:'Proses bermasalah !!!'
                    })
            },
            timeOut:10000 // 10 detik
        })
    })
}
async function _postNoLoad(url,data){
    return new Promise(function(res){
        $.ajax({
            type:'post',
            url:router+url,
            data:{
                    data:btoa(JSON.stringify(data)),
                    code:btoa(myCode)
                },
            success:function(respon)
            {
                res(respon);
            }
        })
    })
}
async function _postFile(url,data,img){
    if(img.length==0){
        img="";
    }
    _swal({
        type:'loading',
        title:'Loading',
        text:'Mohon Menunggu...'
    });
    return new Promise(function(res){
        $.ajax({
            type:'post',
            url:router+url,
            data:{
                    data:btoa(JSON.stringify(data)),
                    file:img,
                    code:btoa(myCode)
                },
            success:function(respon)
            {
                swal.clickCancel();
                res(respon);
            },
            error:function(){
                swal.clickCancel();
                _toast({
                        bg:'e',
                        msg:'Proses bermasalah !!!'
                    })
            },
            timeOut:20000 // 20 detik
        })
    })
}
function _isNull(val){
    if(val==null || val.length==0){
        return true;
    }
    return false;
}
function _redirect(url){
    window.location.href = router+url;
}
function _redirectOpen(url){
    // param={
    //     kdPekerjaan :_.ddata[ind].kdPekerjaan,
    //     kdProduk    :_.ddata[ind].kdProduk,
    //     kdSub       :_.ddata[ind].kdSub,
    // }
    // _redirectOpen("control/subPekerjaan/"+btoa(JSON.stringify(param)));
    window.open(router+url, '_blank');
}
function _reload(){
   return location.reload();
}
function _checkstrNum(val){
    var split=val.split('.');
    var res="";
    for(let a=0;a<split.length;a++){
        res+=split[a];
    }
    ;
    split=res.split(",");
    res="";
    for(let a=0;a<split.length;a++){
        res+=split[a];
    }
    return res;
}
function _search(data,search){
    if(data.trim().toUpperCase()==search.trim().toUpperCase()){
        return true;
    }
    var count=data.trim().toUpperCase().split(search.trim().toUpperCase());
    if(count.length>1){
        return true;
    }
    return false;
}
function _toast(v){
    // _toast({
    //     bg:'e',
    //     msg:'Maaf tester'
    // })
    toastr.options.timeOut = 1500; // 1.5s
    switch (v.bg) {
        case 'i':
            toastr.info(v.msg);
        break;
        case 'w':
            toastr.warning(v.msg);
        break;
        case 'e':
            toastr.error(v.msg);
        break;
        case 's':
            toastr.success(v.msg);
        break;
    }
}
function _swal(v){
    // _swal({
    //     type:true,
    //     title:'Error',
    //     text:'Terjadi kesalahan'
    // })
    switch (v.type) {
        case 'loading':
            return swal.fire({
                title:v.title,
                text:v.text,
                onOpen: function () {
                  swal.showLoading()
                }
            })
        break;
    }
}
function _searchVal(val,val2){
    if(val2.toUpperCase()==val.toUpperCase()){
        return true;
    }
    var count=val.toUpperCase().split(val2.toUpperCase());
    if(count.length>1){
        return true;
    }
    return false;
}
function _setchartBar(id){
    var ctx = document.getElementById(id).getContext('2d');
    var myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels:chart[0].judul,
            datasets:chart[0].value
        },
        options: {
            scales: {
                yAxes: [{

                }]
            },
                    legend: {
            display: true,
            position: 'bottom',

            labels: {
                fontColor: '#71748d',
                fontFamily: 'Circular Std Book',
                fontSize: 14,
            }
        },

        scales: {
            xAxes: [{
                ticks: {
                    fontSize: 14,
                    fontFamily: 'Circular Std Book',
                    fontColor: '#71748d',
                }
            }],
            yAxes: [{
                ticks: {
                    fontSize: 14,
                    fontFamily: 'Circular Std Book',
                    fontColor: '#71748d',
                }
            }]
        }
    }});
}
function _setChartPie(id){
    var ctx = document.getElementById(id).getContext('2d');
    var myChart = new Chart(ctx, {
        type: 'pie',
        data: {
            labels:chart[0].judul,
            datasets:chart[0].value
        },
        options: {
                legend: {
                    display: true,
                    position: 'bottom',

                labels: {
                    fontColor: '#71748d',
                    fontFamily: 'Circular Std Book',
                    fontSize: 14,
                }
        },

        
    }});
}
function _show(id) {
    $('#'+id).modal("toggle");
    // _modalHide(id);
    // $('.modal-backdrop').modal('hide');
    // document.getElementById(id).classList.toggle("show");
}
function _showForDropSelect(id) {
    fdata=document.getElementById(id).classList.length;
    if(fdata==2){
        $('#'+id).removeClass("show");
    }else{
        $('#'+id).addClass("show");
    }
}
function _modalHide(id) {
    $('#'+id).modal("hide");
    idToast="toast";
}
function _inpDropdonwSelectedSearch(val){
    fdata="";
    dropdonw.data.forEach(v => {
        fkondisi=_search(v.valueName,val.value);
        if(fkondisi){
            fdata+=`
            <div class="row" style="margin:5px; text-align:left;">
                <button class="btn btn-primary btn-sm btn-block fzMfc" style="text-align:left;" onclick="_selectedInpDropdonw('`+v.value+`','`+v.valueName+`')">`+v.valueName+`</button>
            </div>`;
        }
    });
    return $("#"+dropdonw.idData).html(fdata);
}
function _multiDropdonwSearch(v){
    fdata="";
    v.data.forEach((val,i) => {
        fkondisi=_search(val.valueName,v.value);
        if(fkondisi){
            fval=val.value;
            if(v.index){
                fval=i;
            }
            fdata1=v.func+`('`+v.id+`','`+v.idDropdonw+`','`+fval+`','`+val.valueName+`')`;
            fdata+=`
            <div class="row" style="margin:5px; text-align:left;">
                <button class="btn btn-block `+v.cls+`" style="text-align:left;" onclick="`+fdata1+`">`+val.valueName+`</button>
            </div>`;
        }
    });
    return $("#"+v.idData).html(fdata);
}
function _selectedInpDropdonw(value,valueName){
    _tamp1=value;
    _tamp2=valueName;
    // 
    $("#idInpDropJudul").html(valueName.substring(0,37));
    return _showForDropSelect(dropdonw.id);
    
}
function _setModalContent(content){
    $('#modalContent').html(content);
    return $('#modal').modal("show");
}
function _startTabel(id,all){
    $(document).ready(function() {
        if(all==undefined){
            return $('#'+id).DataTable({
                "pageLength": _pageLength
            }); 
        }else if(all){
            return $('#'+id).DataTable({
                // buttons: true
                // dom: 'Bfrtip',
                pageLength: _pageLength,
                dom: 'Blfrtip',
                lengthMenu: [ [10, 25, 50, -1], [10, 25, 50, "All"]],
                buttons: [
                    { extend: 'pdf', className: 'btn btn-success buttons-copy buttons-html5',title:_judulExpJS},
                    { extend: 'excel', className: 'btn btn-primary buttons-copy buttons-html5 mr-3',title:_judulExpJS}
                    // 'copy', 'csv', 'excel', 'pdf', 'print'
                ],
                
            });
        }else{
            return $('#'+id).DataTable({
                // buttons: true
                // dom: 'Bfrtip',
                pageLength: _pageLength,
                dom: 'Blfrtip',
                lengthMenu: [ [10, 25, 50, -1], [10, 25, 50, "All"]],
                buttons: [
                    { extend: 'copy', className: 'btn btn-secondary buttons-copy buttons-html5' ,title:_judulExpJS},
                    { extend: 'csv', className: 'btn btn-warning buttons-copy buttons-html5' ,title:_judulExpJS},
                    { extend: 'excel', className: 'btn btn-outline-primary bg-primary text-dark buttons-copy buttons-html5' ,title:_judulExpJS},
                    { extend: 'pdf', className: 'btn btn-success buttons-copy buttons-html5' ,title:_judulExpJS},
                    { extend: 'print', className: 'btn btn-info buttons-copy buttons-html5 mr-3',title:_judulExpJS }
                    // 'copy', 'csv', 'excel', 'pdf', 'print'
                ],
                
            });
        }
    });


    // $(document).ready(function() {
    //     // $('#'+id).DataTable();
        
        // $('#'+id).DataTable({
        //     // buttons: true
        //     // dom: 'Bfrtip',
        //     dom: 'Blfrtip',
        //     lengthMenu: [ [10, 25, 50, -1], [10, 25, 50, "All"]],
        //     buttons: [
        //         { extend: 'pdf', className: 'btn btn-success buttons-copy buttons-html5' },
        //         { extend: 'excel', className: 'btn btn-primary buttons-copy buttons-html5 mr-3' }
        //         // 'copy', 'csv', 'excel', 'pdf', 'print'
        //     ],
            
        // });
    // });
}
function _startTextEditor(){
    jQuery(document).ready(function() {
        wizardEl = KTUtil.get('kt_wizard_v3');
        formEl = $('#kt_form');
        tinymce.init({
            mode : "textareas",
            //menubar : false,
            forced_root_block : false,
            force_br_newlines : true,
            force_p_newlines : false,
            height: 500,
            plugins: [
                "advlist autolink lists link image charmap print preview hr anchor pagebreak",
                "searchreplace wordcount visualblocks visualchars code fullscreen",
                "insertdatetime nonbreaking save table directionality",
                "emoticons template paste  textpattern responsivefilemanager"
            ],
            toolbar: "insertfile undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image responsivefilemanager",

            external_filemanager_path: _assertR + "/filemanager/",
            filemanager_title:"Responsive Filemanager" ,
            external_plugins: { "filemanager" : _assertR + "/filemanager/plugin.min.js"},
            image_advtab: true,        
        });
    })

    var site_url = 'https://bappedaksb.com/';
    var base_url = 'https://bappedaksb.com/';

    var KTAppOptions = {
        "colors": {
            "state": {
                "brand": "#5d78ff",
                "dark": "#282a3c",
                "light": "#ffffff",
                "primary": "#5867dd",
                "success": "#34bfa3",
                "info": "#36a3f7",
                "warning": "#ffb822",
                "danger": "#fd3995"
            },
            "base": {
                "label": [
                    "#c5cbe3",
                    "#a1a8c3",
                    "#3d4465",
                    "#3e4466"
                ],
                "shape": [
                    "#f0f3ff",
                    "#d9dffa",
                    "#afb4d4",
                    "#646c9a"
                ]
            }
        }
    };
}

// on off
function _toggle(name) {
    $(name).toggle();
}
function _collapse(name) {
    $(name).collapse();
}

// read img 
function readURL(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();
        new Promise(function(res){
            var img = new Image;
            reader.readAsDataURL(input.files[0]);
            reader.onload = function (e) {
                img.src = reader.result;
                res({
                    src :img.src,
                    nama:input.files.item(0).name,
                    size:input.files.item(0).size,
                    type:input.files.item(0).type
                });
            }
        }).then(resp=>{
            
            // console.log("Bagus H");
            if(resp.size<=img.size){
                nama=resp.nama.split(".");
                var checked=false;
                img.fileName.forEach(v => {
                    if(nama[1].toUpperCase()==v.toUpperCase()){
                        checked=true;
                    }
                });
                if(checked){
                    if(img.data.length+1<=img.maxUpload){
                        img.data.push(resp);
                        // console.log(_getImage());
                        $('#'+img.idView).html(_getImage());
                    }else{
                        return _toast({bg:'e', msg:"cukup "+img.maxUpload+" file photo saja !!!"});
                    }
                }else{
                    var ket="";
                    img.fileName.forEach(v => {
                        ket+=v+" ";
                    });
                    _toast({bg:'e', msg:"Format File Harus "+ket+" !!!"});
                }
            }else{
                _toast({bg:'e', msg:"Ukuran File Maksimal "+(img.size/1000000)+" MB !!!"});
            }
        })
    }
}
function _getImage(){
    var tam=`
    <div class="table-border-style">
      <div class="table-responsive">
        <table class="table" id="dataTabel">
        <thead>
            <tr>
            <th>no</th>
            <th>Nama</th>
            <th colspan="2" style="text-align:center;">Action</th>
            </tr>
            </thead>
            <tbody>
    `;
    for(let a=0;a<img.data.length;a++){
      tam+=`
      <tr>
          <td>`+(a+1)+`</td>
          <td>`+img.data[a].nama+`</td>
          <td>`+
            _btnGroup([{ 
                clsBtn:`btn-outline-warning`
                ,func:`_viewImage(`+a+`)`
                ,icon:`<i class="mdi mdi-eye"></i>`
                ,title:"Lihat Gambar"
            },
            { 
                clsBtn:`btn-outline-danger`
                ,func:`_deleteImage(`+a+`)`
                ,icon:`<i class="mdi mdi-delete-forever"></i>`
                ,title:"Delete"
            }])
          +`
          </td>
      </tr>
      `;
    }
    tam+=`
          </tbody>
          </table>
      </div>
      </div>
    `;
    return tam;
}
function _viewImage(ind){
  return  window.open(img.data[ind].src,'Image');
}
function _deleteImage(ind){
  img.data.splice(ind,1);
  $('#'+img.idView).html(_getImage());


}
function _resetImg(){
    img.data=[];
    $('#images').html('');
}

// read pdf 
function readFile(v){
    var file = v.files[0];
    var fileReader = new FileReader();

    new Promise(function(res){
        fileReader.onload = function() {
            var typedarray = new Uint8Array(this.result);
            return res({
                size    :file.size,
                nama    :file.name,
                type    :"application/pdf",
                data    :btoa(Uint8ToString(typedarray))
            })
            
        }
        fileReader.readAsArrayBuffer(file);
    }).then(resp=>{
        if(resp.size<=_file.size){
            nama=resp.nama.split(".");
            var checked=false;
            // console.log(nama);
            _file.fileName.forEach(v => {
                if(nama[nama.length-1]==v){
                    checked=true;
                }
            });
            if(checked){
                if(_file.data.length+1<=_file.maxUpload){
                    // console.log("ok");
                    _file.data.push(resp);
                    // console.log(_getImage());
                    // $('#'+_file.idView).html(_getImage());
                }else{
                    return _toast({isi:"cukup "+_file.maxUpload+" file saja !!!"});
                }
            }else{
                // console.log("file name");
                var ket="";
                _file.fileName.forEach(v => {
                    ket+=v+" ";
                });
                _toast({isi:"Format File Harus "+ket+" !!!"});
            }
        }else{
            // console.log("size");
            _toast({isi:"Ukuran File Maksimal "+(_file.size/1000000)+" MB !!!"});
        }
    });
    
    // console.log(fileReader);
}
function Uint8ToString(u8a){
    var CHUNK_SZ = 0x8000;
    var c = [];
    for (var i=0; i < u8a.length; i+=CHUNK_SZ) {
      c.push(String.fromCharCode.apply(null, u8a.subarray(i, i+CHUNK_SZ)));
    }
    return c.join("");
  }

function _checkIndex(v,value){
    fdata=null;
    v.forEach((v1,i) => {
        if(v1.valueName==value || v1.value==value){
            fdata=i;
        }
    });
    return fdata;
}


function _$(val){
    var tam="";
    if(val==null || val=='null'){
        return '';
    }
    if(uang.format(val).substring(0,1)=="$"){
        // _log(uang.format(val).substring(1),"D")   
        tam=uang.format(val).substring(1);
    }else{
        tam=uang.format(val);
    }
    
    return tam.substring(0,tam.length-4);
}

function _getKodeRandom(tambahan){
    frandomBack=(date.toLocaleDateString()+"|");
    return "2G18/"+btoa(tambahan).substr(0,10)+(Math.floor(Math.random()*15000));
}

function _forHideLine() {
    return jQuery(document).ready(function($){
        //set animation timing
        var animationDelay = 2500,
            //loading bar effect
            barAnimationDelay = 3800,
            barWaiting = barAnimationDelay - 3000, //3000 is the duration of the transition on the loading bar - set in the scss/css file
            //letters effect
            lettersDelay = 50,
            //type effect
            typeLettersDelay = 150,
            selectionDuration = 500,
            typeAnimationDelay = selectionDuration + 800,
            //clip effect
            revealDuration = 600,
            revealAnimationDelay = 1500;
    
        initHeadline();
    
    
        function initHeadline() {
            //insert <i> element for each letter of a changing word
            singleLetters($('.hero-section.letters').find('.title__effect'));
            //initialise headline animation
            animateHeadline($('.hero-section'));
        }
    
        function singleLetters($words) {
            $words.each(function(){
                var word = $(this),
              letters = word.text().split(''),
              selected = word.hasClass('is-visible');
    
          var newLetters = letters.join('');
          word.html(newLetters).css('opacity', 1);
            });
        }
    
        function animateHeadline($headlines) {
            var duration = animationDelay;
            $headlines.each(function() {
                var headline = $(this);
    
                if (headline.hasClass('clip')){
                    var spanWrapper = headline.find('.hero-section__words'),
                        newWidth = spanWrapper.width() + 10
                    spanWrapper.css('width', newWidth);
                } else {
                    //assign to .hero-section__words the width of its longest word
                    var words = headline.find('.hero-section__words .title__effect'),
                          width = 0;
    
                    $(window).load(function() {
              words.each(function() {
                var wordWidth = $(this).width();
                if (wordWidth > width) width = wordWidth;
              });
    
              headline.find('.hero-section__words').css('width', width);
            });
                };
    
                //trigger animation
                setTimeout(function(){ hideWord( headline.find('.is-visible').eq(0) ) }, duration);
            });
        }
    
        function hideWord($word) {
            var nextWord = takeNext($word);
    
            if($word.parents('.hero-section').hasClass('clip')) {
                $word.parents('.hero-section__words').animate({ width : '2px' }, revealDuration, function(){
                    switchWord($word, nextWord);
                    showWord(nextWord);
                });
    
            } else {
                switchWord($word, nextWord);
                setTimeout(function(){ hideWord(nextWord) }, animationDelay);
            }
        }
    
        function showWord($word, $duration) {
            if($word.parents('.hero-section').hasClass('clip')) {
                $word.parents('.hero-section__words').animate({ 'width' : $word.width() + 10 }, revealDuration, function(){
                    setTimeout(function(){ hideWord($word) }, revealAnimationDelay);
                });
            }
        }
    
        function hideLetter($letter, $word, $bool, $duration) {
            $letter.removeClass('in').addClass('out');
    
            if(!$letter.is(':last-child')) {
                 setTimeout(function(){ hideLetter($letter.next(), $word, $bool, $duration); }, $duration);
            } else if($bool) {
                 setTimeout(function(){ hideWord(takeNext($word)) }, animationDelay);
            }
    
            if($letter.is(':last-child') && $('html').hasClass('no-csstransitions')) {
                var nextWord = takeNext($word);
                switchWord($word, nextWord);
            }
        }
    
        function showLetter($letter, $word, $bool, $duration) {
            $letter.addClass('in').removeClass('out');
    
            if(!$letter.is(':last-child')) {
                setTimeout(function(){ showLetter($letter.next(), $word, $bool, $duration); }, $duration);
            } else {
                if(!$bool) { setTimeout(function(){ hideWord($word) }, animationDelay) }
            }
        }
    
        function takeNext($word) {
            return (!$word.is(':last-child')) ? $word.next() : $word.parent().children().eq(0);
        }
    
        function takePrev($word) {
            return (!$word.is(':first-child')) ? $word.prev() : $word.parent().children().last();
        }
    
        function switchWord($oldWord, $newWord) {
            $oldWord.removeClass('is-visible').addClass('is-hidden');
            $newWord.removeClass('is-hidden').addClass('is-visible');
        }
    });
    
}
function _scroll(id){
    var bgs = document.getElementById(id);
    window.scrollTo(bgs.offsetLeft,bgs.offsetTop);
}
function _readExcel(id){
    // var input = document.getElementById(id)
    return new Promise(function(res){
        readXlsxFile(id.files[0], { dateFormat: 'MM/DD/YY' }).then(function(data) {
                res({
                    exec:true,
                    data:JSON.parse(JSON.stringify(data, null, 2))
                })},
            function (error) {
                res({
                    exec:false,
                    msg:error
                });
            }
        )
    })
    
}
function _trueChecked(val,no){
    // _trueChecked(1,Number(v['value'])) 
    if(val==1){
        switch(no){
            case 1: return "checked";
        }
    }
    return "";
}
function _getKeyRay(data) {
    // digunakan untuk mendapatkan key dan judul 1 array yang didalamnya terdapat array
    ftam={
        key:[],
        judul:[]
    };
    try {// jika non array
        data[0].forEach((v,i) => {
            ftam.key.push(i);
            ftam.judul.push(v);
        });
    } catch (error) {
        
    }
    return ftam;
}
function _valforQuery(val){
    val=String(val);
    split=val.split('"');
    splitx1=val.split("'");

    res="";
    for(a=0;a<split.length;a++){
        if(a>0){
            res+='"';
        }
        res+=split[a];
    }
    if(res!="" && splitx1.length==1){
        return "'"+res+"'";
    }
    res="";
    for(a=0;a<splitx1.length;a++){
        if(a>0){
            res+="'";
        }
        res+=splitx1[a];
    }
    return '"'+res+'"';
}
function _getDataChecked(data) {
    ftam=[];
    data.forEach(v => {
        if(v.checked){
            ftam.push(v);
        }
    });
    return ftam;
}

function _getValProggresMinMax(min,max) {
    fnilai=parseFloat((min*100)/max);
    return {
        cls:_bgMinMax(fnilai,true),
        value:fnilai+"%"
    };
}
function _bgMinMax(fnilai,fkondisi) {
    fbg="bg-secondary";
    if(fkondisi){
        if(fnilai<=40){
            fbg="bg-danger";
        }else if(fnilai>40 && fnilai<=80){
            fbg="bg-warning";
        }else if(fnilai>80 && fnilai<100){
            fbg="bg-info";
        }else if(fnilai>=100){
            fbg="bg-success";
        }
    }else{
        if(fnilai<=40){
            fbg="bg-success";
        }else if(fnilai>40 && fnilai<=80){
            fbg="bg-info";
        }else if(fnilai>80 && fnilai<100){
            fbg="bg-warning";
        }else if(fnilai>=100){
            fbg="bg-danger";
        }
    }
    return fbg;
}
function _getValProggresMaxMin(min,max) {
    // _log(min,max);
    fnilai=parseFloat((min*100)/max);
    return {
        cls:_bgMinMax(fnilai,false),
        value:fnilai+"%"
    };
}
function _hitungHari(dateMin,dateMax){
    // =_hitungHari(_.ddata[i].ins,new Date().toISOString().split('T')[0]);
    // "06/30/2019"
    // "07/30/2019"
    var date1 = new Date(dateMin);
	var date2 = new Date(dateMax);
    var Difference_In_Time = date2.getTime() - date1.getTime();
    var hari = Difference_In_Time / (1000 * 3600 * 24);
    // console.log(hari);
    
    return hari;
}
function _startEditorTiny(v) {
    // _startEditorTiny({url:'http://localhost/xmfc'});
    // tinymce.get('isi').getContent()
    // tinymce.get('isi').setContent(_.dt[ind].keterangan);
    // +`
    //     <div class="kt-wizard-v3__content" data-ktwizard-type="step-content">
    //         <div class="kt-form__section kt-form__section--first">
    //             <div class="kt-wizard-v3__form">
    //                 <div class="form-group">
    //                     <textarea class="form-control" id="isi" name="isi" rows="8">`+_.keterangan+`</textarea>
    //                 </div>
    //             </div>
    //         </div>
    //     </div>
    //     +`
    //     <textarea class="form-control" id="isi" name="isi" rows="8"><div style="text-align: center;">
    //         `+_.keterangan+`
    //     </textarea>`
    //     `
    var site_url = v.url;
    var base_url =v.url;

    jQuery(document).ready(function() {
        wizardEl = KTUtil.get('kt_wizard_v3');
        formEl = $('#kt_form');
        tinymce.init({
            mode : "textareas",
            //menubar : false,
            forced_root_block : false,
            force_br_newlines : true,
            force_p_newlines : false,
            height: 500,
            plugins: [
                "advlist autolink lists link image charmap print preview hr anchor pagebreak",
                "searchreplace wordcount visualblocks visualchars code fullscreen",
                "insertdatetime nonbreaking save table directionality",
                "emoticons template paste  textpattern responsivefilemanager"
            ],
            toolbar: "insertfile undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image responsivefilemanager",

            external_filemanager_path: base_url + "/assets/",
            filemanager_title:"Responsive Filemanager" ,
            external_plugins: { "filemanager" : base_url + "/filemanager/plugin.min.js"},
            image_advtab: true,        
        });
    })
}