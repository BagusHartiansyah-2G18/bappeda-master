function _onload(data){
    $('#loading').html(_cssToast());
    praKecamatan=data.praKecamatan;
    praTerima   =data.praTerima;
    console.log(praTerima);
    presentasePra=_persentase(praKecamatan,praTerima);
   
    kecamatan   =data.kecamatan;
    kecTerima   =data.kecTerima;
    presentaseKec=_persentase(kecamatan,kecTerima);
    
    forum       =data.forum;
    forumTerima =data.forumTerima;
    presentaseFor=_persentase(forum,forumTerima);
    
    kabupaten   =data.kabupaten;
    kabTerima   =data.kabTerima;
    presentaseKab=_persentase(kabupaten,kabTerima);
    
    tTerima     =data.tTerima;
    tTerima=_totalNull(tTerima);
    
    tTerimaKec  =data.tTerimaKec;
    tTerimaKec=_totalNull(tTerimaKec);
    
    tTerimaForum=data.tTerimaForum;
    tTerimaForum=_totalNull(tTerimaForum);

    tTerimaKab  =data.tTerimaKab;
    tTerimaKab=_totalNull(tTerimaKab);

    tmp.dinas   =data.dinas;
    dt.dinas    =data.dinas;

    dt.kecamatan=data.namaKecamatan;


    _praU=data.praU;
    _praT=data.praT;
    _praTo=data.praTo;

    _kecU=data.kecU;
    _kecT=data.kecT;
    _kecTo=data.kecTo;

    _forumU=data.forumU;
    _forumT=data.forumT;
    _forumTo=data.forumTo;

    _kabU=data.kabU;
    _kabT=data.kabT;
    _kabTo=data.kabTo;

    kdDinas="0";
    
    _allDataUsulan=[praKecamatan,kecamatan,forum,kabupaten];
    _allDataDiterima=[praTerima,kecTerima,forumTerima,kabTerima];
    _allDataDitolak=[(praKecamatan-praTerima),(kecamatan-kecTerima),(forum-forumTerima),(kabupaten-kabTerima)];
    _allUsulanDiterma=[tTerima,tTerimaKec,tTerimaForum,tTerimaKab];

    _namaKec    =data.namaKec;

    // console.log(_allUsulanDiterma);
    $('#body').html(_dashboarViewPublic(_form()));
    $('#footer').html(data.footer);
    $('.fixed-button').toggle();
    $( "#pages" ).trigger( "click" );
}
function _form(){
    return `
    
    <div class="col-xl-12">
        <div class="card proj-progress-card">
            <div class="card-block">
                <div class="row">
                    <div class="col-xl-3 col-md-6">
                        <h6>MUSRENBANG PRA KECAMATAN</h6>
                        <div>
                            <button class="btn waves-effect waves-light btn-inverse" style="width:  90%;  text-align: left;">
                                <i class="fa fa-arrow-right" aria-hidden="true"></i>
                                Usulan Masuk <label class="badge badge-inverse-primary" style="font-size: 15px; top:0; float: right;">`+praKecamatan+`</label>
                            </button>
                            <button class="btn waves-effect waves-light btn-primary" style="width:  90%;  text-align: left;">
                                <div class="text-left">
                                    <h4>Rp. `+_$(tTerima)+`</h4>
                                    <p class="m-0">Total Anggaran</p>
                                </div>
                            </button>
                        </div>
                    </div>
                    <div class="col-xl-3 col-md-6">
                        <h6>MUSRENBANG KECAMATAN</h6>
                        <div>
                            <button class="btn waves-effect waves-light btn-inverse" style="width:  90%;  text-align: left;">
                                <i class="fa fa-arrow-right" aria-hidden="true"></i>
                                Usulan Masuk <label class="badge badge-inverse-primary" style="font-size: 15px; top:0; float: right;">`+kecamatan+`</label>
                            </button>
                            <button class="btn waves-effect waves-light btn-info" style="width:  90%;  text-align: left;">
                                <i class="fa fa-check" aria-hidden="true"></i>
                                Usulan Disetujui <label class="badge badge-inverse-info" style="font-size: 15px; top:0; float: right;">`+kecTerima+`</label>
                            </button>
                            <button class="btn waves-effect waves-light btn-primary" style="width:  90%;  text-align: left;">
                                <div class="text-left">
                                    <h4>Rp. `+_$(tTerimaKec)+`</h4>
                                    <p class="m-0">Total Anggaran</p>
                                </div>
                            </button>
                        </div>
                    </div>
                    <div class="col-xl-3 col-md-6">
                        <h6>MUSRENBANG FORUM</h6>
                        <button class="btn waves-effect waves-light btn-inverse" style="width:  90%;  text-align: left;">
                            <i class="fa fa-check" aria-hidden="true"></i>
                            Usulan Masuk <label class="badge badge-inverse-primary" style="font-size: 15px; top:0; float: right;">`+forum+`</label>
                        </button>
                        <button class="btn waves-effect waves-light btn-info" style="width:  90%;  text-align: left;">
                            <i class="fa fa-check" aria-hidden="true"></i>
                            Usulan Disetujui <label class="badge badge-inverse-info" style="font-size: 15px; top:0; float: right;">`+forumTerima+`</label>
                        </button>
                        <button class="btn waves-effect waves-light btn-primary" style="width:  90%;  text-align: left;">
                            <div class="text-left">
                                <h4>Rp. `+_$(tTerimaForum)+`</h4>
                                <p class="m-0">Total Anggaran</p>
                            </div>
                        </button>
                    </div>
                    <div class="col-xl-3 col-md-6">
                        <h6>MUSRENBANG KABUPATEN</h6>
                        <button class="btn waves-effect waves-light btn-inverse" style="width:  90%;  text-align: left;">
                            <i class="fa fa-arrow-right" aria-hidden="true"></i>
                            Usulan Masuk <label class="badge badge-inverse-primary" style="font-size: 15px; top:0; float: right;">`+kabupaten+`</label>
                        </button>
                        <button class="btn waves-effect waves-light btn-info" style="width:  90%;  text-align: left;">
                            <i class="fa fa-check" aria-hidden="true"></i>
                            Usulan Disetujui <label class="badge badge-inverse-info" style="font-size: 15px; top:0; float: right;">`+kabTerima+`</label>
                        </button>
                        <button class="btn waves-effect waves-light btn-danger" style="width:  90%;  text-align: left;color: black;">
                            <i class="fa fa-window-close" aria-hidden="true"></i>
                            Ditolak <label class="badge badge-inverse-info" style="font-size: 15px; top:0; float: right;">`+(kabupaten-kabTerima)+`</label>
                        </button>
                        <button class="btn waves-effect waves-light btn-primary" style="width:  90%;  text-align: left;">
                            <div class="text-left">
                                <h4>Rp. `+_$(tTerimaKab)+`</h4>
                                <p class="m-0">Total Anggaran</p>
                            </div>
                        </button>
                    </div>
                </div>
                
            </div>
        </div>
    </div>

    <div class="col-12">
        <div class="card table-card">
            <div class="card-header">
                <h5>Informasi Usulan</h5>
                <div class="card-header-right">
                    <ul class="list-unstyled card-option" style="width: 30px;">
                        <li><i class="fa fa open-card-option fa-wrench"></i></li>
                        <li><i class="fa fa-window-maximize full-card"></i></li>
                        <li><i class="fa fa-minus minimize-card"></i></li>
                        <li><i class="fa fa-refresh reload-card"></i></li>
                        <li><i class="fa fa-trash close-card"></i></li>
                    </ul>
                </div>
            </div>
            <div class="card-block">
            
                <div class="card-body"><div style="position: absolute; inset: 0px; overflow: hidden; pointer-events: none; visibility: hidden; z-index: -1;" class="chartjs-size-monitor"><div class="chartjs-size-monitor-expand" style="position:absolute;left:0;top:0;right:0;bottom:0;overflow:hidden;pointer-events:none;visibility:hidden;z-index:-1;"><div style="position:absolute;width:1000000px;height:1000000px;left:0;top:0"></div></div><div class="chartjs-size-monitor-shrink" style="position:absolute;left:0;top:0;right:0;bottom:0;overflow:hidden;pointer-events:none;visibility:hidden;z-index:-1;"><div style="position:absolute;width:200%;height:200%;left:0; top:0"></div></div></div>
                    <canvas id="chartjs_line" style="display: block; width: 458px; height: 229px;" width="458" height="229" class="chartjs-render-monitor"></canvas>
                </div>

            </div>
        </div>
    </div>


    <div class="col-12">
        <div class="card table-card">
            <div class="card-header">
                <h5>Informasi Usulan</h5>
                <div class="card-header-right">
                    <ul class="list-unstyled card-option" style="width: 30px;">
                        <li><i class="fa fa open-card-option fa-wrench"></i></li>
                        <li><i class="fa fa-window-maximize full-card"></i></li>
                        <li><i class="fa fa-minus minimize-card"></i></li>
                        <li><i class="fa fa-refresh reload-card"></i></li>
                        <li><i class="fa fa-trash close-card"></i></li>
                    </ul>
                </div>
            </div>
            <div class="card-block">
                <div class="row" style="margin-top: 10px;">
                    <div class="col-xl-3 col-md-6" style="padding-left: 30px;">
                        <h6>MUSRENBANG PRA KEC <br>Rekap Usulan</h6>
                        <h5 class="m-b-30 f-w-700">`+praKecamatan+`<span class="text-c-green m-l-10">+`+presentasePra+`%</span></h5>
                        <div class="progress">
                            <div class="progress-bar bg-c-red" style="width:`+presentasePra+`%"></div>
                        </div>
                    </div>
                    <div class="col-xl-3 col-md-6" style="padding-left: 30px;">
                        <h6>MUSRENBANG KECAMATAN <br>Rekap Usulan</h6>
                        <h5 class="m-b-30 f-w-700">`+kecamatan+`<span class="text-c-red m-l-10">+`+presentaseKec+`%</span></h5>
                        <div class="progress">
                            <div class="progress-bar bg-c-blue" style="width:`+presentaseKec+`%"></div>
                        </div>
                    </div>
                    <div class="col-xl-3 col-md-6" style="padding-left: 30px;">
                        <h6>MUSRENBANG FORUM<br>Rekap Usulan</h6>
                        <h5 class="m-b-30 f-w-700">`+forum+`<span class="text-c-green m-l-10">+`+presentaseFor+`%</span></h5>
                        <div class="progress">
                            <div class="progress-bar bg-c-green" style="width:`+presentaseFor+`%"></div>
                        </div>
                    </div>
                    <div class="col-xl-3 col-md-6" style="padding-left: 30px;">
                        <h6>MUSRENBANG KABUPATEN<br>Rekap Usulan</h6>
                        <h5 class="m-b-30 f-w-700">`+kabupaten+`<span class="text-c-green m-l-10">+`+presentaseKab+`%</span></h5>
                        <div class="progress">
                            <div class="progress-bar bg-c-yellow" style="width:`+presentaseKab+`%"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="col-12">
        <div class="card table-card">
            <div class="card-header">
                <h5>Tahapan PRA MUSRENBANG KECAMATAN</h5>
                <div class="card-header-right">
                    <ul class="list-unstyled card-option" style="width: 30px;">
                        <li><i class="fa fa open-card-option fa-wrench"></i></li>
                        <li><i class="fa fa-window-maximize full-card"></i></li>
                        <li><i class="fa fa-minus minimize-card"></i></li>
                        <li><i class="fa fa-refresh reload-card"></i></li>
                        <li><i class="fa fa-trash close-card"></i></li>
                    </ul>
                </div>
            </div>
            <div class="card-block">
            
                <div class="card-body"><div style="position: absolute; inset: 0px; overflow: hidden; pointer-events: none; visibility: hidden; z-index: -1;" class="chartjs-size-monitor"><div class="chartjs-size-monitor-expand" style="position:absolute;left:0;top:0;right:0;bottom:0;overflow:hidden;pointer-events:none;visibility:hidden;z-index:-1;"><div style="position:absolute;width:1000000px;height:1000000px;left:0;top:0"></div></div><div class="chartjs-size-monitor-shrink" style="position:absolute;left:0;top:0;right:0;bottom:0;overflow:hidden;pointer-events:none;visibility:hidden;z-index:-1;"><div style="position:absolute;width:200%;height:200%;left:0; top:0"></div></div></div>
                    <canvas id="chartjs_bar" style="display: block; width: 458px; height: 229px;" width="458" height="229" class="chartjs-render-monitor"></canvas>
                </div>

            </div>
        </div>
    </div>
    
    <div class="col-12">
        <div class="card table-card">
            <div class="card-header">
                <h5>Tahapan MUSRENBANG KECAMATAN</h5>
                <div class="card-header-right">
                    <ul class="list-unstyled card-option" style="width: 30px;">
                        <li><i class="fa fa open-card-option fa-wrench"></i></li>
                        <li><i class="fa fa-window-maximize full-card"></i></li>
                        <li><i class="fa fa-minus minimize-card"></i></li>
                        <li><i class="fa fa-refresh reload-card"></i></li>
                        <li><i class="fa fa-trash close-card"></i></li>
                    </ul>
                </div>
            </div>
            <div class="card-block">
            
                <div class="card-body"><div style="position: absolute; inset: 0px; overflow: hidden; pointer-events: none; visibility: hidden; z-index: -1;" class="chartjs-size-monitor"><div class="chartjs-size-monitor-expand" style="position:absolute;left:0;top:0;right:0;bottom:0;overflow:hidden;pointer-events:none;visibility:hidden;z-index:-1;"><div style="position:absolute;width:1000000px;height:1000000px;left:0;top:0"></div></div><div class="chartjs-size-monitor-shrink" style="position:absolute;left:0;top:0;right:0;bottom:0;overflow:hidden;pointer-events:none;visibility:hidden;z-index:-1;"><div style="position:absolute;width:200%;height:200%;left:0; top:0"></div></div></div>
                    <canvas id="chartjs_barKec" style="display: block; width: 458px; height: 229px;" width="458" height="229" class="chartjs-render-monitor"></canvas>
                </div>

            </div>
        </div>
    </div>
    
    <div class="col-12">
        <div class="card table-card">
            <div class="card-header">
                <h5>Tahapan FORUM OPD</h5>
                <div class="card-header-right">
                    <ul class="list-unstyled card-option" style="width: 30px;">
                        <li><i class="fa fa open-card-option fa-wrench"></i></li>
                        <li><i class="fa fa-window-maximize full-card"></i></li>
                        <li><i class="fa fa-minus minimize-card"></i></li>
                        <li><i class="fa fa-refresh reload-card"></i></li>
                        <li><i class="fa fa-trash close-card"></i></li>
                    </ul>
                </div>
            </div>
            <div class="card-block">
            
                <div class="card-body"><div style="position: absolute; inset: 0px; overflow: hidden; pointer-events: none; visibility: hidden; z-index: -1;" class="chartjs-size-monitor"><div class="chartjs-size-monitor-expand" style="position:absolute;left:0;top:0;right:0;bottom:0;overflow:hidden;pointer-events:none;visibility:hidden;z-index:-1;"><div style="position:absolute;width:1000000px;height:1000000px;left:0;top:0"></div></div><div class="chartjs-size-monitor-shrink" style="position:absolute;left:0;top:0;right:0;bottom:0;overflow:hidden;pointer-events:none;visibility:hidden;z-index:-1;"><div style="position:absolute;width:200%;height:200%;left:0; top:0"></div></div></div>
                    <canvas id="chartjs_barForum" style="display: block; width: 458px; height: 229px;" width="458" height="229" class="chartjs-render-monitor"></canvas>
                </div>

            </div>
        </div>
    </div>
    
    <div class="col-12">
        <div class="card table-card">
            <div class="card-header">
                <h5>Tahapan MUSRENBANG KABUPATEN</h5>
                <div class="card-header-right">
                    <ul class="list-unstyled card-option" style="width: 30px;">
                        <li><i class="fa fa open-card-option fa-wrench"></i></li>
                        <li><i class="fa fa-window-maximize full-card"></i></li>
                        <li><i class="fa fa-minus minimize-card"></i></li>
                        <li><i class="fa fa-refresh reload-card"></i></li>
                        <li><i class="fa fa-trash close-card"></i></li>
                    </ul>
                </div>
            </div>
            <div class="card-block">
            
                <div class="card-body"><div style="position: absolute; inset: 0px; overflow: hidden; pointer-events: none; visibility: hidden; z-index: -1;" class="chartjs-size-monitor"><div class="chartjs-size-monitor-expand" style="position:absolute;left:0;top:0;right:0;bottom:0;overflow:hidden;pointer-events:none;visibility:hidden;z-index:-1;"><div style="position:absolute;width:1000000px;height:1000000px;left:0;top:0"></div></div><div class="chartjs-size-monitor-shrink" style="position:absolute;left:0;top:0;right:0;bottom:0;overflow:hidden;pointer-events:none;visibility:hidden;z-index:-1;"><div style="position:absolute;width:200%;height:200%;left:0; top:0"></div></div></div>
                    <canvas id="chartjs_barKab" style="display: block; width: 458px; height: 229px;" width="458" height="229" class="chartjs-render-monitor"></canvas>
                </div>

            </div>
        </div>
    </div>`;
}
function _LgnDinasSelected(value,name){
    $('#sub').html(name.substring(0,65))
    kdDinas=value;
    _show('myContent');
}
function _searchDinas(){
    if($('#search').val().length==0){
        tmp.dinas=dt.dinas;
    }else{
        var tampung=[];
        for(a=0;a<dt.dinas.length;a++){
            if(_checkTrueValue(dt.dinas[a].nama,$('#search').val())){
                tampung.push(dt.dinas[a]);
            }
        }
        if(tampung.length!=0){
            tmp.dinas=tampung;
        }else{
            _showToast("Pencariannya tidak ditemukan");
        }
    }
    return $('#so_dinas').html(_dtDinasLoginSelected());
}
function _unduh(){
    paramsKey.kdDinas=kdDinas;
    paramsKey.kecamatan=$('#kecamatan').val();
    _redirectOpen("laporan/usulan/"+$('#tahapan').val()+"/"+btoa(JSON.stringify(paramsKey)));
}
