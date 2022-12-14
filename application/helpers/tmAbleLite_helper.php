<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

    function _tmHead(){
        $fcolorHeader="#476caa";
        $fcolorHindBg2="background: rgba(23, 28, 36, 0.5);";
        $CI =& get_instance();
        $furl=$CI->mbgs->_getAssetUrl()."thema/able-lite/";
        return $CI->mbgs->_libTextEditor(true).'
            <link rel="stylesheet" href="'.$furl.'assets/pages/waves/css/waves.min.css" type="text/css" media="all">
            <link rel="stylesheet" type="text/css" href="'.$furl.'assets/css/bootstrap/css/bootstrap.min.css">
            <link rel="stylesheet" href="'.$furl.'assets/pages/waves/css/waves.min.css" type="text/css" media="all">
            <link rel="stylesheet" type="text/css" href="'.$furl.'assets/icon/themify-icons/themify-icons.css">
            <link rel="stylesheet" type="text/css" href="'.$furl.'assets/css/font-awesome-n.min.css">
            <link rel="stylesheet" type="text/css" href="'.$furl.'assets/css/font-awesome.min.css">
            <link rel="stylesheet" type="text/css" href="'.$furl.'assets/css/jquery.mCustomScrollbar.css">
            <link rel="stylesheet" type="text/css" href="'.$furl.'assets/css/style.css">
            <style>
                .pcoded .pcoded-header[header-theme="theme1"] {
                    background: '.$fcolorHeader.';
                }
                .pcoded[fream-type="theme1"] .main-menu .main-menu-header:before,
                .pcoded[fream-type="theme1"] .page-header:before {
                    '.$fcolorHindBg2.'
                }
            </style>
        ';
    }
    function _tmFooter(){
        $CI =& get_instance();
        $furl=$CI->mbgs->_getAssetUrl()."thema/able-lite/";
        return '
            <script type="text/javascript" src="'.$furl.'assets/js/jquery/jquery.min.js "></script>
            <script type="text/javascript" src="'.$furl.'assets/js/jquery-ui/jquery-ui.min.js "></script>
            <script type="text/javascript" src="'.$furl.'assets/js/popper.js/popper.min.js"></script>
            <script type="text/javascript" src="'.$furl.'assets/js/bootstrap/js/bootstrap.min.js "></script>
            <script src="'.$furl.'assets/pages/waves/js/waves.min.js"></script>
            <script type="text/javascript" src="'.$furl.'assets/js/jquery-slimscroll/jquery.slimscroll.js"></script>
            <script src="'.$furl.'assets/js/jquery.mCustomScrollbar.concat.min.js "></script>
            <script src="'.$furl.'assets/js/pcoded.min.js"></script>
            <script src="'.$furl.'assets/js/vertical/vertical-layout.min.js "></script>
            <script type="text/javascript" src="'.$furl.'assets/js/script.js "></script>
        '
        .$CI->mbgs->_libTextEditor(false)
        .$CI->mbgs->_getJsTabel();
    }
    function _tmLoader(){
        return `
            <div class="theme-loader">
                <div class="loader-track">
                    <div class="preloader-wrapper">
                        <div class="spinner-layer spinner-blue">
                            <div class="circle-clipper left">
                                <div class="circle"></div>
                            </div>
                            <div class="gap-patch">
                                <div class="circle"></div>
                            </div>
                            <div class="circle-clipper right">
                                <div class="circle"></div>
                            </div>
                        </div>
                        <div class="spinner-layer spinner-red">
                            <div class="circle-clipper left">
                                <div class="circle"></div>
                            </div>
                            <div class="gap-patch">
                                <div class="circle"></div>
                            </div>
                            <div class="circle-clipper right">
                                <div class="circle"></div>
                            </div>
                        </div>
    
                        <div class="spinner-layer spinner-yellow">
                            <div class="circle-clipper left">
                                <div class="circle"></div>
                            </div>
                            <div class="gap-patch">
                                <div class="circle"></div>
                            </div>
                            <div class="circle-clipper right">
                                <div class="circle"></div>
                            </div>
                        </div>
    
                        <div class="spinner-layer spinner-green">
                            <div class="circle-clipper left">
                                <div class="circle"></div>
                            </div>
                            <div class="gap-patch">
                                <div class="circle"></div>
                            </div>
                            <div class="circle-clipper right">
                                <div class="circle"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }
    function _tmSetting($p){
        $CI =& get_instance();
        // hg height
        // bg background,
        // wd width
        // nm nama 
        // pg page 
        // ic icon 
        // ac active
        // ha hak akses 
        // kdJab kd jabatan 
        $_=array();
        $router=base_url();
        $fs_css=$router."assets/fs_css/";

        $user=[1,2,3,4,5];
        $admin=[2,3,4,5];
        $monitor=[3,4,5];
        $super=[3,4,5];
        $dev=[5];

        $_['kdJab']=$p['kdJab'];
        $_['nav']=[
            "bg"=>"style='background-color:none;'",
            "logo"=>$fs_css."logo/tapd1.png",
            "logo1"=>$fs_css."/bupatiWakil.png",
            "bgLogo"=>$fs_css."/kantorBupati.jpg",
            "hgLogo2"=>"150px",
            "wdLogo"=>"50px;",
            "nm"=>$p['nm'],
            "nama"=>$p['nama'],
            "user"=>$p['user'],
            "bgNama"=>"text-light",
            "pgStart"=>$p['pgStart'],
            "pgEnd"=>$p['pgEnd'],
            "form"=>"",
            "moto"=>"Tata Administrasi Bangun Jalan Pikiran"
        ];
        $_['menu']=array();
        
        // menu 1
        $menuSupport=array();
        array_push($menuSupport,[
            "nm"=>"Beranda",
            "ic"=>'<i class="mdi mdi-home menu-icon"></i>',
            "url"=>"",
            "ac"=>"",
            "ha"=>$user,
            "subMenu"=>[]

        ]);
        array_push($_['menu'],[
            "nm"=>null,
            "menu"=>$menuSupport
        ]);

        // menu 2
        $menuSupport=array();
        array_push($menuSupport,[
            "nm"=>"Basis Data",
            "ic"=>'<i class="mdi mdi-note-plus menu-icon"></i>',
            "url"=>"#",
            "ac"=>"",
            "ha"=>$user,
            "subMenu"=>[
                [
                    "url"=>$router."control/dinas",
                    "menu"=>"Dinas",
                    "status"=>"active",
                    "status"=>""
                ],
                [
                    "url"=>$router."control/akun",
                    "menu"=>"Akun",
                    "status"=>"active",
                    "status"=>""
                ],
            ]

        ]);
        array_push($_['menu'],[
            "nm"=>null,
            "menu"=>$menuSupport
        ]);
            

        // header
        $_['header']=[
            "nama"=>"",
            "ic"=>$fs_css."/boy.png",
            "style"=>"background-color: #3a4f5573;",
            "style1"=>'style="background-image:url('.$fs_css."bgForm.png".'); height:'.$_['nav']['hgLogo2'].';"',
            "contentDropList"=>[
                [
                    "url"=>"",
                    "onclick"=>"",
                    "icon"=>'<i class="mdi mdi-face"></i>',
                    "nama"=>"Profile"
                ],
                [
                    "url"=>"",
                    "onclick"=>"",
                    "icon"=>'<i class="mdi mdi-settings"></i>',
                    "nama"=>"Settings"
                ],
                [
                    "url"=>"",
                    "onclick"=>"",
                    "icon"=>'<i class="mdi mdi-exit-to-app"></i>',
                    "nama"=>"Logout"
                ]
            ]
        ];

        // notif
        $_['notif']=[
            [
                "url"=>"",
                "bg"=>"",
                "icon"=>'<i class="mdi mdi-file-check"></i>',
                "src"=>$fs_css."informasi.png",
                "textSmall"=>"Nama Sistem",
                "text"=>"SIA DATANG !!! "
            ],
            [
                "url"=>"",
                "bg"=>"",
                "icon"=>'<i class="mdi mdi-file-check"></i>',
                "src"=>$fs_css."informasi.png",
                "textSmall"=>"Mei 25, 2021",
                "text"=>"Dikembangkan oleh : Tim IT MFC"
            ],
            [
                "url"=>"",
                "bg"=>"",
                "icon"=>'<i class="mdi mdi-file-check"></i>',
                "src"=>$fs_css."informasi.png",
                "textSmall"=>"Mei 25, 2021",
                "text"=>"Sistem di Luncurkan"
            ],
        ];
        $_['notifT']=true;
        return $_;
    }
    function _tmHeader($st){
        // $st=_tmSetting($p);
        
        $fdata='
            <li class="bg-primary">
                <button type="button">
                    <label class="badge badge-info btn-m" style="top: 5px;">
                        <h6> <i class="mdi mdi-information-outline"></i> Informasi System</h6>
                    </label>
                </button
            </li>
        ';
        foreach ($st['notif'] as $key => $v) {
            $fdata.=_TmContentDropCenterIcon($v);
        }
        if($st['notifT']){
            $fdata.='
            <li class="bg-secondary">
                <button type="button" class="btn btn-sm btn-success" 
                    onclick="_mengertiNotif()" title="Preview Document">
                        <i class="mdi mdi-comment-check-outline"></i>
                        Saya Mengerti
                </button>
            </li>';
        }
    
    
        $fdata1="";
        foreach ($st['header']['contentDropList'] as $key => $v) {
            $url="#";
            if($v['url']!=""){
                $url=$v['url'];
            }
            $fdata1.='
                <li class="waves-effect waves-light">
                    <a href="'.$v['url'].'" '.$v['onclick'].'>
                        '.$v['icon'].$v['nama'].'
                    </a>
                </li>
            ';
        }
        return '
            <nav class="navbar header-navbar pcoded-header" style="background: #2c2d2e;">
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
                            <img src="'.$st['nav']['logo'].'" style="width: '.$st['nav']['wdLogo'].'" >
                        </a>
                        <div class="sidebar-brand-text mx-3 '.$st['nav']['bgNama'].'">'.$st['nav']['nm'].'</div>
                        <a class="mobile-options waves-effect waves-light">
                            <i class="ti-more"></i>
                        </a>
                    </div>
                    <div class="navbar-container">
                        <ul class="nav-left">
                            <li>
                                <div class="sidebar_toggle"><a href="javascript:void(0)"><i class="ti-menu"></i></a></div>
                            </li>
                            <li>
                                <a href="#!" onclick="javascript:toggleFullScreen()" class="waves-effect waves-light">
                                    <i class="ti-fullscreen"></i>
                                </a>
                            </li>
                            <li>
                                <a href="#!" class="waves-effect waves-light animet1" style="">
                                    '.$st['nav']['moto'].'
                                </a>
                                
                            </li>
                        </ul>
                        <ul class="nav-right">
                            <li class="header-notification">
                                <a href="#!" class="waves-effect waves-light">
                                    <i class="ti-bell"></i>
                                    <span class="badge bg-c-red"></span>
                                </a>
                                <ul class="show-notification" id="shownotification" style="max-height: 450px;overflow: auto; ">
                                    '.$fdata.'
                                </ul>
                            </li>
                            <li class="user-profile header-notification">
                                <a href="#!" class="waves-effect waves-light">
                                    <img src="'.$st['header']['ic'].'" class="img-radius" alt="User-Profile-Image">
                                    <span>'.substr($st['nav']['user'],0,7).'</span>
                                    <i class="ti-angle-down"></i>
                                </a>
                                <ul class="show-notification profile-notification" style="width: auto;">
                                    '.$fdata1.'
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        ';
    }
    function _tmNavbar($st){
        // $st=_tmSetting($p);
        $fdata="";
        foreach ($st['menu'] as $key => $v) {
            $faktifMenu=$v['menu'][0]['ac'];
            $ftamSubMenu="";
            $menu=$v['menu'][0];
            foreach ($menu['ha'] as $key1 => $vx) {
                if($st['kdJab']==$vx){
                    if(count($menu['subMenu'])>0){
                        $ftamSubMenu='<ul class="pcoded-submenu">';
                    }
                    if(count($menu['subMenu'])>0){
                        $fdata.='
                            <ul class="pcoded-item pcoded-left-item">
                                <li class="pcoded-hasmenu '.$faktifMenu.'">
                                    <a href="javascript:void(0)" class="waves-effect waves-dark">
                                        <span class="pcoded-micon"><b>A</b></span>
                                        <span class="pcoded-mtext">'.$menu['nm'].'</span>
                                        <span class="pcoded-mcaret"></span>
                                    </a>';
                                    
                                    foreach ($menu['subMenu'] as $key2 => $vm) {
                                        $ftamSubMenu.='
                                        <li class="'.$vm['status'].'">
                                            <a href="'.$vm['url'].'" class="waves-effect waves-dark">
                                                <span class="pcoded-micon"><i class="ti-angle-right"></i></span>
                                                <span class="pcoded-mtext">'.$vm['menu'].'</span>
                                                <span class="pcoded-mcaret"></span>
                                            </a>
                                        </li>';
                                    }
                                    if($ftamSubMenu!=""){
                                        $fdata.=$ftamSubMenu."</ul>";
                                    }
                            $fdata.='</li>
                            </ul>';
                    }else{
                        $fdata.='
                            <ul class="pcoded-item pcoded-left-item" item-border="true" item-border-style="none" subitem-border="true">
                                <li class="'.$faktifMenu.' pcoded-trigger">
                                    <a href="'.$menu['url'].'" class="waves-effect waves-dark">
                                        <span class="pcoded-micon">'.$menu['ic'].'<b>D</b></span>
                                        <span class="pcoded-mtext">'.$menu['nm'].'</span>
                                        <span class="pcoded-mcaret"></span>
                                    </a>
                                </li>
                            </ul>
                        ';
                    }
                }
            }
        }
       // return `
       // <ul class="navbar-nav sidebar sidebar-light accordion col" id="accordionSidebar" style="padding:0px;max-width:max-content;">
       //     <a class="sidebar-brand d-flex align-items-center justify-content-center" `+navBar.BG+` href="index.html">
       //         <div class="sidebar-brand-icon">
       //             <img src="`+navBar.Logo+`">
       //         </div>
       //         <div class="sidebar-brand-text mx-3">`+navBar.nama+`</div>
       //     </a>
       //     <hr class="sidebar-divider my-0">
       //     `+fdata+`
       //     <div class="version" id="version-ruangadmin">2G18/V1</div>
       // </ul>
       // `;
       return '
       <nav class="pcoded-navbar">
           <div class="sidebar_toggle"><a href="#"><i class="icon-close icons"></i></a></div>
           <div class="pcoded-inner-navbar main-menu" style="margin-top: 4%;">
               <div class="">
                   <div class="main-menu-header" style="background-image:url('.$st['nav']['bgLogo'].'); height:'.$st['nav']['hgLogo2'].'">
                       <img class="img-80 img-radius" src="'.$st['nav']['logo1'].'" style="width:'.$st['nav']['hgLogo2'].'" alt="User-Profile-Image">
                   </div>
                   <div class="main-menu-content">
                       <ul>
                           <li class="more-details">
                               <a href="user-profile.html"><i class="ti-user"></i>View Profile</a>
                               <a href="#!"><i class="ti-settings"></i>Settings</a>
                               <a href="auth-normal-sign-in.html"><i class="ti-layout-sidebar-left"></i>Logout</a>
                           </li>
                       </ul>
                       '.$fdata.'
                   </div>
               </div>
   
           </div>
       </nav>';
       
   }
    function _TmContentDropCenterIcon($px){
        $fdata="";
        if($px==null){
            return ``;
        }
    
        // list.push({url:"",bg:"bg-primary",icon:`<i class="mdi mdi-file-check"></i>`,textSmall:"April 25, 2021",text:"Sistem di Rencanakan"});
    
        $fdata.='
            <li class="waves-effect waves-light '.$px['bg'].'">
                <a href="'.$px['url'].'" class="waves-effect waves-light">
                    <div class="media">
                        <img class="d-flex align-self-center img-radius" src="'.$px['src'].'" alt="Generic placeholder image">
                        <div class="media-body">
                            <h5 class="notification-user">'.$px['textSmall'].'</h5>
                            <p class="notification-msg">'.$px['text'].'</p>
                        </div>
                    </div>
                </a>
            </li>';
        return $fdata;
    }
    function _startTm($p){
        // $p=[
        //     "pgStart"=>"",
        //     "pgEnd"=>"",
        //     "nm"=>"",
        //     "kdJab"=>3,
        //     "idBody"=>"bodyTM1" // body content
        // ];
        $st=_tmSetting($p);
        
        $st['menu'][$p['ind']]['menu'][0]['ac']='active';
        // print_r($st['menu'][$p['ind']]['menu']);
        if($p['index']!=null){
            $st['menu'][$p['ind']]['menu'][0]['subMenu'][$p['index']]['ac']='active';
        }
        return [
            "head"=>_tmHead(),
            "tmFooter"=>_tmFooter(),
            "tmBody"=>_tmLoader().'
                    <div id="pcoded" class="pcoded">
                        <div class="pcoded-overlay-box"></div>
                            <div class="pcoded-container navbar-wrapper">
                                '._tmHeader($st).'
                                <div class="pcoded-main" id="main-pcoded" style="margin-top: 4%;">
                                    <div class="pcoded-wrapper">

                                    '._tmNavbar($st).'

                                        <div class="pcoded-content">

                                            <div class="page-header" '.$st['header']['style1'].'>
                                                <div class="page-block">
                                                    <div class="row align-items-center">
                                                        <div class="col-md-8">
                                                            <div class="page-header-title">
                                                                <h5 class="m-b-10">'.$st['nav']['pgStart'].'</h5>
                                                            </div>
                                                        </div>
                                                        <div class="col-md-4">
                                                            <ul class="breadcrumb">
                                                                <li class="breadcrumb-item">
                                                                    <a href="index.html"> <i class="fa fa-home"></i> </a>
                                                                </li>
                                                                <li class="breadcrumb-item"><a href="#!">'.$st['nav']['pgStart'].'</a></li>
                                                                    '.$st['nav']['pgEnd'].'
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div class="pcoded-inner-content">
                                                <div class="main-body">
                                                    <div class="page-wrapper">
                                                        <div class="page-body" id="'.$p['idBody'].'>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                '
        ];
    }
?>
