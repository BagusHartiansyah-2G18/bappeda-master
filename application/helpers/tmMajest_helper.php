<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

    function _tmHead(){
        $CI =& get_instance();
        $furl=$CI->mbgs->_getAssetUrl()."thema/majest/";
        return '
            <link rel="stylesheet" href="'.$furl.'vendors/base/vendor.bundle.base.css">
            <link rel="stylesheet" href="'.$furl.'vendors/datatables.net-bs4/dataTables.bootstrap4.css">
            <link rel="stylesheet" href="'.$furl.'css/style.css">
        ';
    }
    function _tmFooter(){
        $CI =& get_instance();
        $furl=$CI->mbgs->_getAssetUrl()."thema/majest/";
        return '
                <script src="'.$furl.'lib/jquery/jquery.min.js"></script>
                <script src="'.$furl.'vendors/base/vendor.bundle.base.js"></script>
                <script src="'.$furl.'vendors/chart.js/Chart.min.js"></script>
                <script src="'.$furl.'js/off-canvas.js"></script>
                <script src="'.$furl.'js/hoverable-collapse.js"></script>
                <script src="'.$furl.'js/template.js"></script>
                <script src="'.$furl.'js/dashboard.js"></script>
        ';
    }
    function _tmLoader(){
        return '';
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
            "logo"=>$fs_css."logo/dev-mini.png",
            "logo1"=>$fs_css."/bupatiWakil.png",
            "bgLogo"=>$fs_css."/kantorBupati.jpg",
            "hgLogo2"=>"150px",
            "wdLogo"=>"32px;",
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
                    "ic"=>'<i class="mdi mdi-face"></i>',
                    "nm"=>"Profile"
                ],
                [
                    "url"=>"",
                    "onclick"=>"",
                    "ic"=>'<i class="mdi mdi-settings"></i>',
                    "nm"=>"Settings"
                ],
                [
                    "url"=>"",
                    "onclick"=>"",
                    "ic"=>'<i class="mdi mdi-exit-to-app"></i>',
                    "nm"=>"Logout"
                ]
            ]
        ];

        // notif
        $_['notif']=[
            [
                "url"=>"",
                "bg"=>"",
                "icon"=>'<i class="fa fa-bolt"></i>',
                "src"=>$fs_css."informasi.png",
                "textSmall"=>"Nama Sistem",
                "text"=>"SI NOTARIS"
            ],
            [
                "url"=>"",
                "bg"=>"",
                "icon"=>'<i class="fa fa-bolt"></i>',
                "src"=>$fs_css."informasi.png",
                "textSmall"=>"Mei 25, 2021",
                "text"=>"Dikembangkan oleh : Tim IT MFC"
            ],
            [
                "url"=>"",
                "bg"=>"",
                "icon"=>'<i class="fa fa-bolt"></i>',
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
        
        $fdata='';
        foreach ($st['notif'] as $key => $v) {
            $fdata.='
            <a class="dropdown-item" href="'.$v['url'].'">
                <div class="item-thumbnail">
                    <div class="item-icon bg-info">
                        <i class="mdi mdi-image-filter-vintage mx-0"></i>
                    </div>
                </div>
                <div class="item-content">
                    <h6 class="font-weight-normal">'.$v['text'].'</h6>
                    <p class="font-weight-light small-text mb-0 text-muted">
                        '.$v['textSmall'].'
                    </p>
                </div>
            </a>
            ';
        }
        if($st['notifT']){
            $fdata.='
            <div class="bg-secondary p-3">
                <button type="button" class="btn btn-sm btn-success" 
                    onclick="_mengertiNotif()" title="Preview Document">
                        <i class="mdi mdi-comment-check-outline"></i>
                        Saya Mengerti
                </button>
            </div>';
        }
    
    
        // $fdata1="";
        // foreach ($st['header']['contentDropList'] as $key => $v) {
        //     $url="#";
        //     if($v['url']!=""){
        //         $url=$v['url'];
        //     }
        //     $fdata1.='
        //         <li class="waves-effect waves-light">
        //             <a href="'.$v['url'].'" '.$v['onclick'].'>
        //                 '.$v['icon'].$v['nama'].'
        //             </a>
        //         </li>
        //     ';
        // }
        return '
            <nav class="navbar col-lg-12 col-12 p-0 fixed-top d-flex flex-row"> 
                <div class="navbar-brand-wrapper d-flex justify-content-center" >
                <div class="navbar-brand-inner-wrapper d-flex justify-content-between align-items-center w-100">  
                    <a class="navbar-brand brand-logo " style="background: none;box-shadow: none;border: none;" href="#">
                        <div class="sidebar-brand-icon row">
                            <img src="'.$st['nav']['logo'].'" style="width:'.$st['nav']['wdLogo'].'">
                            <div class="sidebar-brand-text mx-3">'.$st['nav']['nm'].'</div>    
                        </div>
                    </a>
                
                    <a class="navbar-brand brand-logo-mini" href="#"><img src="'.$st['nav']['logo'].'" alt="logo"/></a>
                    <button class="navbar-toggler navbar-toggler align-self-center" type="button" data-toggle="minimize">
                    <span class="mdi mdi-sort-variant"></span>
                    </button>
                </div>  
                </div>
                <div class="navbar-menu-wrapper d-flex align-items-center justify-content-end" '.$st['nav']['bg'].'>
                <ul class="navbar-nav navbar-nav-right">
                    <li class="nav-item dropdown mr-4">
                        <a class="nav-link count-indicator dropdown-toggle d-flex align-items-center justify-content-center notification-dropdown" id="notificationDropdown" href="#" data-toggle="dropdown" aria-expanded="true">
                            <i class="mdi mdi-bell mx-0"></i>
                            <span class="count"></span>
                        </a>
                        <div id="headerinfo" class="dropdown-menu dropdown-menu-right navbar-dropdown"   aria-labelledby="notificationDropdown">
                            <div class="bg-primary mb-0 dropdown-header">
                                <i class="mdi mdi-bell mr-2 "></i>INFORMASI
                            </div>
                            '.$fdata.'
                        </div>
                    </li>
                    <li class="user-profile header-notification">
                        <li class="nav-item nav-profile dropdown">
                            <a class="nav-link dropdown-toggle" href="#" data-toggle="dropdown" id="profileDropdown" style="color: #fff;">
                                <img src="'.$st['header']['ic'].'" alt="profile"/>
                                <span class="nav-profile-name" style="color: #383098">'.substr($st['nav']['user'],0,7).'</span>
                            </a>
                            <div class="dropdown-menu dropdown-menu-right navbar-dropdown" aria-labelledby="profileDropdown">
                            '._contentDropList($st['header']['contentDropList']).'
                            </div>
                        </li>
                    </li>
                </ul>
                <button class="navbar-toggler navbar-toggler-right d-lg-none align-self-center" type="button" data-toggle="offcanvas">
                    <span class="mdi mdi-menu"></span>
                </button>
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
                        $fdata.='
                            <li class="nav-item '.$faktifMenu.'">
                                <a class="nav-link" data-toggle="collapse" href="#bgs'.$key1.'" aria-expanded="false" aria-controls="auth">
                                '.$menu['ic'].'
                                <span class="menu-title">'.$menu['nm'].'</span>
                                <i class="menu-arrow"></i>
                                </a>
                                <div class="collapse" id="bgs'.$key1.'">
                                    <ul class="nav flex-column sub-menu">
                                    ';
                                    foreach ($menu['subMenu'] as $key2 => $vm) {
                                        $fdata.='
                                            <li class="nav-item '.$vm['status'].'"> 
                                                <a class="nav-link" href="'.$vm['url'].'">
                                                    '.$vm['menu'].'
                                                </a>
                                            </li>';
                                    }
                            $fdata.='
                                    </ul>
                                </div>
                            </li>';
                    }else{
                        $fdata.='
                            <li class="nav-item">
                                <a class="nav-link '.$faktifMenu.'" href="'.$menu['url'].'">
                                '.$menu['ic'].'
                                <span class="menu-title">'.$menu['nm'].'</span>
                                </a>
                            </li>
                        ';
                    }
                }
            }
        }

        // return `
        // `;
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
        <nav class="sidebar sidebar-offcanvas" id="sidebar">
            <ul class="nav">
                '.$fdata.'
            </ul>
       </nav>
       ';
       
    }
    function _pgFooter(){
        return '
        ';
    }
    function _contentDropList($list){
        $fdata='';
        foreach ($list as $key => $v) {
            // return print_r($v);
            if(empty($v['url'])){
                $fdata.='
                <a class="dropdown-item" href="#" onclick="'.$v['onclick'].'">
                    '.$v['ic'].' '.$v['nm'].'
                </a>';
            }else{
                $fdata.='
                    <a class="dropdown-item" href="'.$v['url'].'">
                        '.$v['ic'].' '.$v['nm'].'
                    </a>';
            }
        }
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
        // return print_r($p);
        $st=_tmSetting($p);
        
        $st['menu'][$p['ind']]['menu'][0]['ac']='active';
        // return print_r($st['kdJab']);
        if($p['index']!=null){
            $st['menu'][$p['ind']]['menu'][0]['subMenu'][$p['index']]['ac']='active';
        }
        return [
            "head"=>_tmHead(),
            "tmFooter"=>_tmFooter(),
            "tmBody"=>_tmHeader($st)
                        .'<div class="container-fluit page-body-wrapper">
                            '._tmNavbar($st).'
                            <div class="main-panel">
                                <div class="content-wrapper" id="'.$p['idBody'].'>
                                </div>
                            </div>
                        </div>'
        ];
    }
?>
