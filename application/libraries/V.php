<?php
   
    class V{
        var $nmKeyTabel=array();
        public $app=[
            "rxxx"=>['Mk','x','OA'],
            "kd"=>"MFC2G18-04",
            "nm"=>"E-MASTER",
            "nama"=>"M Software Center",
            "logo"=>"1.png",
            "copyright"=>"Copyright © BappedaKSB",
            "loader"=>'loader.webp',
            "unik"=>"MFC-",
            "qmem"=>"bp",
            "domain"=>"bappedaksb.com"
        ];
        var $kdApp="MFC2G18-04";//06 tgl/10/bulan/21/tahun
        function _getUrl($nama){
            switch(strtolower($nama)){
                case "usulan":return "control/usulan"; break;
                case "disposisi":   return "control/disposisi"; break;
                case "1":      return "control/usulan"; break;
                case "2":      return "control/usulan"; break;
                case "3":      return "control/usulan"; break;

                
            }
        }
        public function _setBaseUrl($url){
            $this->url=$url;
        }
        public function _getAssetUrl(){
            return $this->url."assets/";
        }
        public function _getCss(){
            $fsrc=$this->_getAssetUrl()."fs_componen/";
            return '
                <link rel="stylesheet" type="text/css" href="'.$fsrc.'bootstrap/dist/css/bootstrap-grid.css">
                <link rel="stylesheet" type="text/css" href="'.$fsrc.'bootstrap/dist/css/bootstrap-grid.css.map">
                <link rel="stylesheet" type="text/css" href="'.$fsrc.'bootstrap/dist/css/bootstrap-grid.min.css">
                <link rel="stylesheet" type="text/css" href="'.$fsrc.'bootstrap/dist/css/bootstrap-grid.min.css.map">
                <link rel="stylesheet" type="text/css" href="'.$fsrc.'bootstrap/dist/css/bootstrap-reboot.css">
                <link rel="stylesheet" type="text/css" href="'.$fsrc.'bootstrap/dist/css/bootstrap-reboot.css.map">
                <link rel="stylesheet" type="text/css" href="'.$fsrc.'bootstrap/dist/css/bootstrap-reboot.min.css">
                <link rel="stylesheet" type="text/css" href="'.$fsrc.'bootstrap/dist/css/bootstrap-reboot.min.css.map">
                <link rel="stylesheet" type="text/css" href="'.$fsrc.'bootstrap/dist/css/bootstrap.css">
                <link rel="stylesheet" type="text/css" href="'.$fsrc.'bootstrap/dist/css/bootstrap.css.map">
                <link rel="stylesheet" type="text/css" href="'.$fsrc.'bootstrap/dist/css/bootstrap.min.css">
                <link rel="stylesheet" type="text/css" href="'.$fsrc.'bootstrap/dist/css/bootstrap.min.css.map">
                <link rel="stylesheet" type="text/css" href="'.$fsrc.'bootstrap/dist/css/carousel.css">
                <link rel="stylesheet" href="'.$fsrc.'bootstrap/dist/css/bootstrap-icons.css">
                <link rel="stylesheet" href="'.$fsrc.'bootstrap/dist/css/bootstap-table-button.css">
                
                <link rel="stylesheet" href="'.$fsrc.'mfc.css">
                <link rel="stylesheet" href="'.$fsrc.'bootstrap/icon/css/materialdesignicons.min.css">
                
                <link href="'.$fsrc.'plugins/toastr//toastr.css" rel="stylesheet"/>

                <link href="'.$fsrc.'plugins/sweetalert2/sweetalert2.min.css" rel="stylesheet"/>
            ';
            // <link rel="stylesheet" href="'.$fsrc.'bootstrap/dist/css/style.css">
            // <link rel="stylesheet" type="text/css" href="'.$this->_getAssetUrl().'bootstrap/dist/css/dashboard.css">
            return ;
        }
        public function _getJs(){
            $fsrc=$this->_getAssetUrl()."fs_componen/";
            return '<script src="'.$fsrc.'bootstrap/dist/js/bootstrap.bundle.js"></script>
                <script src="'.$fsrc.'bootstrap/dist/js/bootstrap.bundle.js.map"></script>
                <script src="'.$fsrc.'bootstrap/dist/js/bootstrap.bundle.min.js"></script>
                <script src="'.$fsrc.'bootstrap/dist/js/bootstrap.bundle.min.js.map"></script>
                <script src="'.$fsrc.'bootstrap/dist/js/bootstrap.js"></script>
                <script src="'.$fsrc.'bootstrap/dist/js/bootstrap.js.map"></script>
                <script src="'.$fsrc.'bootstrap/dist/js/bootstrap.min.js.map"></script>
                <script src="'.$fsrc.'bootstrap/dist/js/bootstrap.min.js"></script> 
                
                <script src="'.$fsrc.'plugins/toastr/toastr.min.js"></script>
                
                <script src="'.$fsrc.'plugins/sweetalert2/sweetalert2.min.js"></script>
                <script src="'.$fsrc.'plugins/sweetalert2/sweetalert2.all.min.js"></script>
                <script src="'.$this->_getAssetUrl().'Library/FileSaver/src/FileSaver.js"></script>

            ';
            // <script src="'.$this->_getAssetUrl().'bootstrap/dist/js/dashboard.js"></script>
        }
        public function _getJsTabel(){
            $furl=$this->_getAssetUrl()."fs_componen/plugins/";
            $furl1=$this->_getAssetUrl()."fs_componen/bower_components/datatables.net-bs/";
            return '
            
                
                <script src="'.$furl.'datatables/jquery.dataTables.min.js"></script>
                <script src="'.$furl.'datatables/jquery.dataTables.js"></script>

                <link rel="stylesheet" type="text/css" href="'.$furl.'datatables-bs4/css/dataTables.bootstrap4.min.css">
                <script src="'.$furl.'datatables-bs4/js/dataTables.bootstrap4.js"></script>

                <script src="'.$furl.'datatables-buttons/js/dataTables.buttons.min.js"></script>
                
                <script src="'.$furl.'datatables-buttons/js/buttons.bootstrap4.min.js"></script>

                <script src="'.$furl.'datatables-buttons/js/buttons.html5.min.js"></script>

                <script src="'.$furl.'datatables-buttons/js/buttons.print.min.js"></script>

                <script src="'.$furl.'datatables-buttons/js/buttons.colVis.min.js"></script>

                <script src="'.$furl1.'plugins/JSZip-2.5.0/jszip.min.js"></script>
                <script src="'.$furl1.'plugins/pdfmake-0.1.36/pdfmake.min.js"></script>
                <script src="'.$furl1.'plugins/pdfmake-0.1.36/vfs_fonts.js"></script>
            ';
            // return `
            //     <script src="`+assert+furl1+`JSZip-2.5.0/jszip.min.js"></script>
            //     <script src="`+assert+furl1+`pdfmake-0.1.36/pdfmake.min.js"></script>
            //     <script src="`+assert+furl1+`pdfmake-0.1.36/vfs_fonts.js"></script>
            //     `;
        }
        public function _getJsmin(){
            return '<script src="'.$this->_getAssetUrl().'/fs_componen/bower_components/bootstrap/dist/js/jquery.js"></script>';
        }
        public function _getJsChart(){
            // <script src="'.$this->_getAssetUrl().'/fs_componen/chart/Chart.js"></script>
            //     <script src="'.$this->_getAssetUrl().'/fs_componen/chart/jquery.sparkline.js"></script>
            //     <script src="'.$this->_getAssetUrl().'/fs_componen/chart/sparkline-chart.js"></script>
            //     <script class="include" type="text/javascript" src="'.$this->_getAssetUrl().'/fs_componen/chart/jquery.dcjqaccordion.2.7.js"></script>
            //     <script src="'.$this->_getAssetUrl().'/fs_componen/chart/raphael.min.js"></script>
            //     <script src="'.$this->_getAssetUrl().'/fs_componen/chart/morris.min.js"></script>
            return '
                <script src="'.$this->_getAssetUrl().'/fs_componen/charts/charts-bundle/Chart.bundle.js"></script>

                <script src="'.$this->_getAssetUrl().'/fs_componen/charts/c3charts/c3.min.js"></script>
                <script src="'.$this->_getAssetUrl().'/fs_componen/charts/c3charts/d3-5.4.0.min.js"></script>
                
                <script src="'.$this->_getAssetUrl().'/fs_componen/charts/chartist-bundle/chartist-plugin-threshold.js"></script>
                <script src="'.$this->_getAssetUrl().'/fs_componen/charts/chartist-bundle/chartist.min.js"></script>

                <script src="'.$this->_getAssetUrl().'/fs_componen/charts/morris-bundle/morris.js"></script>
                <script src="'.$this->_getAssetUrl().'/fs_componen/charts/morris-bundle/raphael.min.js"></script>

                <script src="'.$this->_getAssetUrl().'/fs_componen/charts/sparkline/jquery.sparkline.js"></script>
                
            ';
        }
        
        function _libTextEditor($head){
            if($head){
                return '
                <script src="'.$this->_getAssetUrl().'Library/textEditor/plugins/global/plugins.bundle.js" type="text/javascript"></script>
                <script src="'.$this->_getAssetUrl().'Library/textEditor/js/scripts.bundle.js" type="text/javascript"></script>
                ';
            }
            $fdata=[
                "textEditor/plugins/custom/tinymce/plugins/advlist/plugin.js",
                "textEditor/plugins/custom/tinymce/plugins/autolink/plugin.js",
                "textEditor/plugins/custom/tinymce/plugins/lists/plugin.js",
                "textEditor/plugins/custom/tinymce/plugins/link/plugin.js",
                "textEditor/plugins/custom/tinymce/plugins/image/plugin.js",
                "textEditor/plugins/custom/tinymce/plugins/charmap/plugin.js",
                "textEditor/plugins/custom/tinymce/plugins/print/plugin.js",
                "textEditor/plugins/custom/tinymce/plugins/preview/plugin.js",
                "textEditor/plugins/custom/tinymce/plugins/hr/plugin.js",
                "textEditor/plugins/custom/tinymce/plugins/anchor/plugin.js",
                "textEditor/plugins/custom/tinymce/plugins/pagebreak/plugin.js",
                "textEditor/plugins/custom/tinymce/plugins/searchreplace/plugin.js",
                "textEditor/plugins/custom/tinymce/plugins/wordcount/plugin.js",
                "textEditor/plugins/custom/tinymce/plugins/visualblocks/plugin.js",
                "textEditor/plugins/custom/tinymce/plugins/visualchars/plugin.js",
                "textEditor/plugins/custom/tinymce/plugins/code/plugin.js",
                "textEditor/plugins/custom/tinymce/plugins/fullscreen/plugin.js",
                "textEditor/plugins/custom/tinymce/plugins/insertdatetime/plugin.js",
                "textEditor/plugins/custom/tinymce/plugins/nonbreaking/plugin.js",
                "textEditor/plugins/custom/tinymce/plugins/save/plugin.js",
                "textEditor/plugins/custom/tinymce/plugins/table/plugin.js",
                "textEditor/plugins/custom/tinymce/plugins/directionality/plugin.js",
                "textEditor/plugins/custom/tinymce/plugins/emoticons/plugin.js",
                "textEditor/plugins/custom/tinymce/plugins/template/plugin.js",
                "textEditor/plugins/custom/tinymce/plugins/paste/plugin.js",
                "textEditor/plugins/custom/tinymce/plugins/textpattern/plugin.js",
                "textEditor/plugins/custom/tinymce/plugins/responsivefilemanager/plugin.js",
                "textEditor/plugins/custom/tinymce/plugins/emoticons/js/emojis.js"
            ];
            $fhasil="";
            foreach ($fdata as $key => $v) {
                $fhasil.='<script src="'.$this->_getAssetUrl().'Library/'.$v.'" type="text/javascript"></script>';
            }            
            // return "";
            //      <link rel="stylesheet" href="'+assert+'Library/textEditor/plugins/custom/tinymce/skins/ui/oxide/content.min.css" type="text/css" media="all">
            //      <link rel="stylesheet" href="'+assert+'Library/textEditor/plugins/custom/tinymce/skins/content/default/content.css" type="text/css" media="all"></link>
            return '
                <script src="'.$this->_getAssetUrl().'Library/textEditor/plugins/custom/tinymce/tinymce.bundle.js" type="text/javascript"></script>
                <link rel="stylesheet" href="'.$this->_getAssetUrl().'Library/textEditor/plugins/custom/tinymce/skins/ui/oxide/skin.min.css" type="text/css" media="all">
            '.$fhasil;
        }
        function _html($v){
            // System local BAPPEDA LITBANG Kabupaten Sumbawa Barat
            return "
            <!DOCTYPE html>
            <html>
                <head>
                    <title>".$this->app['nm']."</title>
                    <meta name='description' content='".$this->app['nama']."'>
                    <link href='".$this->_getAssetUrl()."fs_css/logo/".$this->app['logo']."' rel='icon'>
                    <div id='start'>
                        ".$this->_getJsmin()."
                    </div>
                    <div id='head'>
                    </div>
                </head>
                <body style='background-color: white;padding:0px;min-height: 0px;'>
                    <div id='body'>
                        
                    </div>
                    <div id='loading'>
                        <div style='background-color:white;'>
                            <div style='margin:auto; display: block;width:max-content; height:800px'>
                                <img src='".$this->_getAssetUrl()."fs_css/".$this->app['loader']."' style='margin-top:50%;'>
                            </div>
                        </div>
                    </div>
                    <div id='footer'>
                    </div>
                    <div class='modal' id='modal'  data-keyboard='false' tabindex='-1'data-backdrop='static' aria-modal='true'>
                        <div class='modal-dialog modal-dialog-centered d-flex justify-content-center' id='modalContent' role='document'>
                        
                        </div>
                        
                    </div>

                </body>
            </html>
            ";
        }
        public function _getJsMaster($namaFolder){
            return'
                <script src="'.$this->_getAssetUrl()."jsMaster/"."$namaFolder".'/index.js"></script>
                <script src="'.$this->_getAssetUrl()."jsMaster/".'M-HTML.js"></script>
                <script src="'.$this->_getAssetUrl()."jsMaster/".'M-DATA.js"></script>
                <script src="'.$this->_getAssetUrl()."jsMaster/".'M-HTML-FORM.js"></script>
                <script src="'.$this->_getAssetUrl()."jsMaster/".'M.js"></script>
                <script src="'.$this->_getAssetUrl()."jsMaster/".'V.js"></script>
                <script src="'.$this->_getAssetUrl()."Library/excel/lib/".'xlsx.js"></script>
                <script src="'.$this->_getAssetUrl()."Library/pdf/".'pdf.js"></script>
            ';
            // <script src="https://cdnjs.cloudflare.com/ajax/libs/xlsx/0.8.0/jszip.js"></script>
            // <script src="https://cdnjs.cloudflare.com/ajax/libs/xlsx/0.8.0/xlsx.js"></script>
            // 
            //     <script src="'.$this->_getAssetUrl()."excel/lib/".'zip.js"></script>

        }
        function _qCekKey($kodeForm,$kodeMember){
            return "SELECT 
                * 
            FROM member a 
            JOIN appKey b on
                a.kdMember1 =b.kdMember
            WHERE b.kdFitur='".$kodeForm."' AND b.kdMember='".$kodeMember."' AND b.kunci=0";
        }
        function _isCode(){
            return "1933f89iG";
        }
        function _backCode($add){
            return substr($add,4,8).$this->_isCode().substr($add,8,12);
        }
        function _backCodes($add){
            if($this->_isCode()==substr($add,8,9)){
                return true;
            }
            return false;
        }
        function _xxx($data){
            $data=[substr($data,0,2),substr($data,3,1),substr($data,4,2)];
            $isback=true;
            foreach ($data as $key => $value) {
                if($value!=$this->app['rxxx'][$key]){
                    $isback=0;
                }
            }
            return $isback;
        }
        function _getBasisData(){
            return array_merge(
                $this->app,
                [
                    'assert'=>$this->_getAssetUrl(),
                    // 'code'=>$this->_backCode($this->enc->encrypt($this->mbgs->_isCode())),
                    'param'=>null,
                    
                ]
            );
        }
    }
?>