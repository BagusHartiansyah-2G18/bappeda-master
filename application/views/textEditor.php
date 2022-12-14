<html><head>
                    <title>TAPD</title>
                    <meta name="description" content="Tim Anggaran Pendapatan Daerah">
                    <link href="http://localhost:8080/tapd/assets/bgSupportCss/2G18-min.png" rel="icon">
                    <style type="text/css">/* Chart.js */
                        @-webkit-keyframes chartjs-render-animation{from{opacity:0.99}to{opacity:1}}
                        @keyframes chartjs-render-animation{from{opacity:0.99}to{opacity:1}}.chartjs-render-monitor{-webkit-animation:chartjs-render-animation 0.001s;animation:chartjs-render-animation 0.001s;}</style></head><body style="background-color: #eee;padding:0px;min-height: 0px;" themebg-pattern="theme1"><div id="start">
                        <script src="http://localhost:8080/tapd/assets/bootstrap/dist/js/jquery.js"></script>
                    </div>
                    <script src="http://localhost:8080/tapd/assets/thema/able-lite/act.js"></script>
                    <div id="head">
        <link rel="stylesheet" href="http://localhost:8080/tapd/assets/thema/able-lite/assets/pages/waves/css/waves.min.css" type="text/css" media="all">
        <link rel="stylesheet" type="text/css" href="http://localhost:8080/tapd/assets/thema/able-lite/assets/css/bootstrap/css/bootstrap.min.css">
        <link rel="stylesheet" href="http://localhost:8080/tapd/assets/thema/able-lite/assets/pages/waves/css/waves.min.css" type="text/css" media="all">
        <link rel="stylesheet" type="text/css" href="http://localhost:8080/tapd/assets/thema/able-lite/assets/icon/themify-icons/themify-icons.css">
        <link rel="stylesheet" type="text/css" href="http://localhost:8080/tapd/assets/thema/able-lite/assets/css/font-awesome-n.min.css">
        <link rel="stylesheet" type="text/css" href="http://localhost:8080/tapd/assets/thema/able-lite/assets/css/font-awesome.min.css">
        <link rel="stylesheet" type="text/css" href="http://localhost:8080/tapd/assets/thema/able-lite/assets/css/jquery.mCustomScrollbar.css">
        <link rel="stylesheet" type="text/css" href="http://localhost:8080/tapd/assets/thema/able-lite/assets/css/style.css">
        <link rel="stylesheet" href="http://localhost:8080/tapd/assets/web2G18.css">
        <link rel="stylesheet" href="http://localhost:8080/tapd/assets/bootstrap/icon/css/materialdesignicons.min.css">
        <link rel="stylesheet" type="text/css" href="http://localhost:8080/tapd/assets/bootstrap/dist/css/_reset.scss">
        <link rel="stylesheet" type="text/css" href="http://localhost:8080/tapd/assets/bootstrap/dist/css/_data-tables.scss">
        <link rel="stylesheet" type="text/css" href="http://localhost:8080/tapd/assets/bootstrap/dist/css/dataTables.bootstrap4.css">
        <style>
            .pcoded .pcoded-header[header-theme="theme1"] {
                background: #476caa;
            }
            .pcoded[fream-type="theme1"] .main-menu .main-menu-header:before,
            .pcoded[fream-type="theme1"] .page-header:before {
                background: rgba(23, 28, 36, 0.5);
            }
        </style>
        <?php echo $css; ?>
        </div>
        <div id="body">
            <div id="pcoded" class="pcoded iscollapsed" nav-type="st2" theme-layout="vertical" vertical-placement="left" vertical-layout="wide" pcoded-device-type="desktop" vertical-nav-type="expanded" vertical-effect="shrink" vnavigation-view="view1" fream-type="theme1" sidebar-img="false" sidebar-img-type="img1" layout-type="light">
                <div class="pcoded-overlay-box"></div>
                    <div class="pcoded-container navbar-wrapper">

                            
    <nav class="navbar header-navbar pcoded-header iscollapsed" header-theme="theme1" pcoded-header-position="fixed">
        <div class="navbar-wrapper">
            <div class="navbar-logo">
                <a class="mobile-menu waves-effect waves-light" id="mobile-collapse" href="#!">
                    <i class="ti-menu"></i>
                </a>
                <div class="mobile-search waves-effect waves-light">
                    <div class="header-search">
                        <div class="main-search morphsearch-search">
                            <div class="input-group">
                                <span class="input-group-prepend search-close"><i class="ti-close input-group-text"></i></span>
                                <input type="text" class="form-control" placeholder="Enter Keyword">
                                <span class="input-group-append search-btn"><i class="ti-search input-group-text"></i></span>
                            </div>
                        </div>
                    </div>
                </div>
                <a href="index.html">
                    <img src="http://localhost:8080/tapd/assets//bgSupportCss/logoksb1.png" style="width: 40px;">
                </a>
                <div class="sidebar-brand-text mx-3 text-white">SUMBAWA BARAT</div>
                <a class="mobile-options waves-effect waves-light">
                    <i class="ti-more"></i>
                </a>
            </div>
            <div class="navbar-container container-fluid">
                <ul class="nav-left">
                    <li>
                        <div class="sidebar_toggle"><a href="javascript:void(0)"><i class="ti-menu"></i></a></div>
                    </li>
                    <li>
                        <a href="#!" onclick="javascript:toggleFullScreen()" class="waves-effect waves-light">
                            <i class="ti-fullscreen"></i>
                        </a>
                    </li>
                </ul>
                <ul class="nav-right">
                    <li class="header-notification">
                        <a href="#!" class="waves-effect waves-light">
                            <i class="ti-bell"></i>
                            <span class="badge bg-c-red"></span>
                        </a>
                        <ul class="show-notification" id="shownotification" style="max-height: 450px;overflow: auto;">
                            
        <li class="bg-primary">
            <button type="button">
                <label class="badge badge-info btn-m" style="top: 5px;">
                    <h6> <i class="mdi mdi-information-outline"></i> Informasi System</h6>
                </label>
            </button>
                        </li></ul>
                    </li>
                    <li class="user-profile header-notification">
                        <a href="#!" class="waves-effect waves-light">
                            <img src="http://localhost:8080/tapd/assets/bgSupportCss/boy.png" class="img-radius" alt="User-Profile-Image">
                            <span><?php echo $this->session->nmMember ?></span>
                            <i class="ti-angle-down"></i>
                        </a>
                        <ul class="show-notification profile-notification">
                            
            <li class="waves-effect waves-light">
                <a href="#">
                    <i class="mdi mdi-face"></i>Profile
                </a>
            </li>
        
            <li class="waves-effect waves-light">
                <a href="#">
                    <i class="mdi mdi-settings"></i>Settings
                </a>
            </li>
        
            <li class="waves-effect waves-light">
                <a href="http://localhost:8080/tapd/index.php/control/logout" undefined="">
                    <i class="mdi mdi-exit-to-app"></i>Logout
                </a>
            </li>
        
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
                            
    <div class="pcoded-main-container" style="margin-top: 56px;">
        <div class="pcoded-wrapper">

                                    
            <nav class="pcoded-navbar" navbar-theme="themelight1" active-item-theme="theme1" sub-item-theme="theme2" active-item-style="style0" pcoded-navbar-position="fixed">
                <div class="sidebar_toggle"><a href="#"><i class="icon-close icons"></i></a></div>
                <div class="pcoded-inner-navbar main-menu mCustomScrollbar _mCS_1" style="height: calc(100% - 56px);"><div id="mCSB_1" class="mCustomScrollBox mCS-light mCSB_vertical_horizontal mCSB_inside" style="max-height: none; margin-right:0px;" tabindex="0"><div id="mCSB_1_container_wrapper" class="mCSB_container_wrapper mCS_x_hidden mCS_no_scrollbar_x"><div id="mCSB_1_container" class="mCSB_container" style="position: relative; top: -1px; left: 0px; width: 100%;" dir="ltr">
                    <div class="">
                        <div class="main-menu-header" style="background-image:url(http://localhost:8080/tapd/assets/bgSupportCss/kantorBupati.jpg); height:150px">
                            <img class="img-80 img-radius mCS_img_loaded" src="http://localhost:8080/tapd/assets/bgSupportCss/bupatiWakil.png" style="width:150px" alt="User-Profile-Image">
                        </div>
                        <div class="main-menu-content">
                            <ul>
                                <li class="more-details">
                                    <a href="user-profile.html"><i class="ti-user"></i>View Profile</a>
                                    <a href="#!"><i class="ti-settings"></i>Settings</a>
                                    <a href="auth-normal-sign-in.html"><i class="ti-layout-sidebar-left"></i>Logout</a>
                                </li>
                            </ul>
                            
                            <ul class="pcoded-item pcoded-left-item" item-border="true" item-border-style="none" subitem-border="true">
                                <li class="active pcoded-trigger">
                                    <a href="http://localhost:8080/tapd/index.php/control/dashboard/null" class="waves-effect waves-dark">
                                        <span class="pcoded-micon"><i class="mdi mdi-home menu-icon"></i><b>D</b></span>
                                        <span class="pcoded-mtext">Beranda</span>
                                        <span class="pcoded-mcaret"></span>
                                    </a>
                                </li>
                            </ul>
                        
                            <ul class="pcoded-item pcoded-left-item" item-border="true" item-border-style="none" subitem-border="true">
                                <li class="pcoded-hasmenu" dropdown-icon="style3" subitem-icon="style7">
                                    <a href="javascript:void(0)" class="waves-effect waves-dark">
                                        <span class="pcoded-micon"><i class="mdi mdi-note-plus menu-icon"></i><b>A</b></span>
                                        <span class="pcoded-mtext">Basis Data</span>
                                        <span class="pcoded-mcaret"></span>
                                    </a><ul class="pcoded-submenu">
                                        <li class="">
                                            <a href="http://localhost:8080/tapd/index.php/control/dinas" class="waves-effect waves-dark">
                                                <span class="pcoded-micon"><i class="ti-angle-right"></i></span>
                                                <span class="pcoded-mtext">Dinas</span>
                                                <span class="pcoded-mcaret"></span>
                                            </a>
                                        </li>
                                        <li class="">
                                            <a href="http://localhost:8080/tapd/index.php/control/akun" class="waves-effect waves-dark">
                                                <span class="pcoded-micon"><i class="ti-angle-right"></i></span>
                                                <span class="pcoded-mtext">Akun</span>
                                                <span class="pcoded-mcaret"></span>
                                            </a>
                                        </li>
                                        <li class="">
                                            <a href="http://localhost:8080/tapd/index.php/control/renstra" class="waves-effect waves-dark">
                                                <span class="pcoded-micon"><i class="ti-angle-right"></i></span>
                                                <span class="pcoded-mtext">Renstra</span>
                                                <span class="pcoded-mcaret"></span>
                                            </a>
                                        </li>
                                        <li class="">
                                            <a href="http://localhost:8080/tapd/index.php/control/apbd" class="waves-effect waves-dark">
                                                <span class="pcoded-micon"><i class="ti-angle-right"></i></span>
                                                <span class="pcoded-mtext">APBD</span>
                                                <span class="pcoded-mcaret"></span>
                                            </a>
                                        </li></ul></li>
                            </ul>
                            <ul class="pcoded-item pcoded-left-item" item-border="true" item-border-style="none" subitem-border="true">
                                <li class=" pcoded-trigger">
                                    <a href="http://localhost:8080/tapd/index.php/control/usulan" class="waves-effect waves-dark">
                                        <span class="pcoded-micon"><i class="mdi mdi-note-plus menu-icon"></i><b>D</b></span>
                                        <span class="pcoded-mtext">Usulan</span>
                                        <span class="pcoded-mcaret"></span>
                                    </a>
                                </li>
                            </ul>
                        
                            <ul class="pcoded-item pcoded-left-item" item-border="true" item-border-style="none" subitem-border="true">
                                <li class=" pcoded-trigger">
                                    <a href="http://localhost:8080/tapd/index.php/control/disposisi" class="waves-effect waves-dark">
                                        <span class="pcoded-micon"><i class="mdi mdi-cart-outline menu-icon"></i><b>D</b></span>
                                        <span class="pcoded-mtext">Disposisi</span>
                                        <span class="pcoded-mcaret"></span>
                                    </a>
                                </li>
                            </ul>
                        
                            <ul class="pcoded-item pcoded-left-item" item-border="true" item-border-style="none" subitem-border="true">
                                <li class=" pcoded-trigger">
                                    <a href="http://localhost:8080/tapd/index.php/control/kajianTeknis" class="waves-effect waves-dark">
                                        <span class="pcoded-micon"><i class="mdi mdi-transcribe menu-icon"></i><b>D</b></span>
                                        <span class="pcoded-mtext">Kajian Teknis</span>
                                        <span class="pcoded-mcaret"></span>
                                    </a>
                                </li>
                            </ul>
                        
                            <ul class="pcoded-item pcoded-left-item" item-border="true" item-border-style="none" subitem-border="true">
                                <li class=" pcoded-trigger">
                                    <a href="http://localhost:8080/tapd/index.php/control/forum" class="waves-effect waves-dark">
                                        <span class="pcoded-micon"><i class="mdi mdi-book-open menu-icon"></i><b>D</b></span>
                                        <span class="pcoded-mtext">Forum TAPD</span>
                                        <span class="pcoded-mcaret"></span>
                                    </a>
                                </li>
                            </ul>
                        
                            <ul class="pcoded-item pcoded-left-item" item-border="true" item-border-style="none" subitem-border="true">
                                <li class=" pcoded-trigger">
                                    <a href="http://localhost:8080/tapd/index.php/control/notulen" class="waves-effect waves-dark">
                                        <span class="pcoded-micon"><i class="mdi mdi-settings-box menu-icon"></i><b>D</b></span>
                                        <span class="pcoded-mtext">Notulen</span>
                                        <span class="pcoded-mcaret"></span>
                                    </a>
                                </li>
                            </ul>
                        
                            <ul class="pcoded-item pcoded-left-item" item-border="true" item-border-style="none" subitem-border="true">
                                <li class=" pcoded-trigger">
                                    <a href="#inp" class="waves-effect waves-dark">
                                        <span class="pcoded-micon"><i class="mdi mdi-settings-box menu-icon"></i><b>D</b></span>
                                        <span class="pcoded-mtext">Status Usulan</span>
                                        <span class="pcoded-mcaret"></span>
                                    </a>
                                </li>
                            </ul>
                        
                            <ul class="pcoded-item pcoded-left-item" item-border="true" item-border-style="none" subitem-border="true">
                                <li class=" pcoded-trigger">
                                    <a href="http://localhost:8080/tapd/index.php/control/penyetoran" class="waves-effect waves-dark">
                                        <span class="pcoded-micon"><i class="mdi mdi-book-open menu-icon"></i><b>D</b></span>
                                        <span class="pcoded-mtext">Referensi</span>
                                        <span class="pcoded-mcaret"></span>
                                    </a>
                                </li>
                            </ul>
                        
                        </div>
                    </div>

                </div></div><div id="mCSB_1_scrollbar_vertical" class="mCSB_scrollTools mCSB_1_scrollbar mCS-light mCSB_scrollTools_vertical" style="display: block;"><div class="mCSB_draggerContainer"><div id="mCSB_1_dragger_vertical" class="mCSB_dragger" style="position: absolute; min-height: 30px; display: block; height: 167px; max-height: 350.517px; top: 0px;"><div class="mCSB_dragger_bar" style="line-height: 30px;"></div></div><div class="mCSB_draggerRail"></div></div></div><div id="mCSB_1_scrollbar_horizontal" class="mCSB_scrollTools mCSB_1_scrollbar mCS-light mCSB_scrollTools_horizontal" style="display: none;"><div class="mCSB_draggerContainer"><div id="mCSB_1_dragger_horizontal" class="mCSB_dragger" style="position: absolute; min-width: 30px; width: 0px; left: 0px;"><div class="mCSB_dragger_bar"></div></div><div class="mCSB_draggerRail"></div></div></div></div></div>
            </nav>

                <div class="pcoded-content">
                    <div class="page-header" style="background-image:url(http://localhost:8080/tapd/assets/bgSupportCss/bgForm.png); height:150px;">
                        <div class="page-block">
                            <div class="row align-items-center">
                                <div class="col-md-8">
                                    <div class="page-header-title">
                                        <h5 class="m-b-10">Dashboard</h5>
                                    </div>
                                </div>
                                <div class="col-md-4">
                                    <ul class="breadcrumb">
                                        <li class="breadcrumb-item">
                                            <a href="index.html"> <i class="fa fa-home"></i> </a>
                                        </li>
                                        <li class="breadcrumb-item"><a href="#!">Dashboard</a></li>
                                        <li class="breadcrumb-item"><a href="#!">Login</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="pcoded-inner-content">
                        <div class="main-body">
                            <div class="page-wrapper">
                                <div class="page-body">

                                                        
                <script src="https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.5.207/pdf.js"> </script>
        
                <div class="row">
                    <div class="col-sm-12">
                        <!-- Bootstrap tab card start -->
                        <div class="card">
                            <div class="card-header" style="padding: 30px; padding-left:20px">
                                <h5 class="col-sm-8 text-info">NOTULENSI</h5>
                                
                                <div class="card-header-right">
                                    <button type="button" class="btn btn-sm btn-outline-primary" onclick="_add()" title="Tambah Data"><i class="mdi mdi-note-plus text-primary"></i>Tambah Peraturan</button>
                                </div>
                            </div>
                            <div class="card-block">
                                
                                <div id="tabelShow" style="margin: auto;width:100%">
                                    <textarea id="noise" name="noise" class="widgEditor nothing">&lt;p&gt;widgEditor &lt;strong&gt;automatically&lt;/strong&gt; integrates the content that was in the textarea!&lt;/p&gt;</textarea>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="loading"></div>
                <div id="footer">
            <script type="text/javascript" src="http://localhost:8080/tapd/assets/thema/able-lite/assets/js/jquery/jquery.min.js "></script>
            <script type="text/javascript" src="http://localhost:8080/tapd/assets/thema/able-lite/assets/js/jquery-ui/jquery-ui.min.js "></script>
            <script type="text/javascript" src="http://localhost:8080/tapd/assets/thema/able-lite/assets/js/popper.js/popper.min.js"></script>
            <script type="text/javascript" src="http://localhost:8080/tapd/assets/thema/able-lite/assets/js/bootstrap/js/bootstrap.min.js "></script>
            <script src="http://localhost:8080/tapd/assets/thema/able-lite/assets/pages/waves/js/waves.min.js"></script>
            <script type="text/javascript" src="http://localhost:8080/tapd/assets/thema/able-lite/assets/js/jquery-slimscroll/jquery.slimscroll.js"></script>
            <script src="http://localhost:8080/tapd/assets/thema/able-lite/assets/js/jquery.mCustomScrollbar.concat.min.js "></script>
            <script src="http://localhost:8080/tapd/assets/thema/able-lite/assets/js/pcoded.min.js"></script>
            <script src="http://localhost:8080/tapd/assets/thema/able-lite/assets/js/vertical/vertical-layout.min.js "></script>
            <script type="text/javascript" src="http://localhost:8080/tapd/assets/thema/able-lite/assets/js/script.js "></script>
            
            <script src="http://localhost:8080/tapd/assets/bootstrap/jsTabel/datatables.net/jquery.dataTables.js"></script>
            <script src="http://localhost:8080/tapd/assets/bootstrap/jsTabel/datatables.net-bs4/dataTables.bootstrap4.js"></script>
            <script src="http://localhost:8080/tapd/assets/bootstrap/jsTabel/data-table.js"></script>
            <script src="http://localhost:8080/tapd/assets/bootstrap/jsTabel/jquery.dataTables.js"></script>
            <script src="http://localhost:8080/tapd/assets/bootstrap/jsTabel/dataTables.bootstrap4.js"></script>
        </div>
        <div id="toast" style="background: none;"></div>

        <div class="modal" id="modal" data-keyboard="false" tabindex="-1" data-backdrop="static" aria-modal="true">
            <div class="modal-dialog modal-dialog-centered d-flex justify-content-center" id="modalContent" role="document">
            
            </div>
            
        </div>
    </div>

<script>
    $('.fixed-button').toggle();
</script>