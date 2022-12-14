<?php
    include '.\assets\Library\TCPDF\tcpdf.php';
    // include '.\assets\Library\mail\cmail.php';
    include 'Termal.php';
    // use Dompdf\Dompdf;
    class LibBGS extends Termal{
        protected $CI;
        public $filename;
        private $libTC;
        private $fpd;
        private $dom;
        private $cmail;
        var $mail=[
            "user"=>"tapdsekretariat@gmail.com",
            "pass"=>"@1@a@2@s@3@d",
            "nama"=>"Sekretariat Daerah"
        ];
        
        public function __construct(){
            // parent::__construct();
            
            $this->CI =& get_instance();
            $this->CI->load->library('M');
            $this->filename =$this->CI->m->_cnameFile("pdf");
            // $this->dom= new Dompdf();
            // $this->cmail= new cmail();
            include_once APPPATH . '/third_party/fpdf/fpdf.php';
        }
        public function cetakH2P($v){//html 2 pdf
            // [
            //     "html"          =>"<B>BAGUS HARTIANSYAH</B>",
            //     "kertas"        =>"A4",
            //     "oriantation"   =>"p",
            //     "preview"       =>false
            // ]
            if($preview){
                print_r($v['html']);
            }
            $_=array();
            $_['html']=$v['html'];
            ob_start();
            $this->CI->load->view('cetak',$_); 
            $content = ob_get_clean();
            require './assets/html2pdf/html2pdf.class.php';
            try
            {
                $html2pdf = new HTML2PDF($v['oriantation'], $v['kertas'], 'fr', true, 'UTF-8', array(0, 0, 0, 0));
                $html2pdf->writeHTML($content, isset($_GET['vuehtml']));
                ob_end_clean();
                $html2pdf->Output($this->filename);
            }
            catch(HTML2PDF_exception $e) {
                echo $e;
                exit;
            }
        }
        function cetakTC($vx1){
            $v=$vx1[0];
            $libTC= new TCPDF($v['ORIENTATION'], PDF_UNIT,$v['FORMAT'], true, 'UTF-8', false);
                // $libTC=$libTC.$key;
            
            $libTC->setPrintHeader(false);
            $libTC->SetCreator(PDF_CREATOR);
            $libTC->SetAuthor('Bagus Hartiansyah');
            $libTC->SetTitle('S-BM');
            
            $libTC->AddPage();
            // $libTC->SetFont('times', 'BI', 10);
            $libTC->SetFont('helvetica', '', 8);
            $tampHtml="";
            $previews=false;

            foreach ($vx1 as $key => $v) {
                // print_r($v);
                if($v['preview']){
                    $previews=true;
                }
            }
            // return print_r($previews);
            foreach ($vx1 as $key => $v) {
                $html=$v['html'];
                if($previews){
                    $tampHtml.=$html;
                }else{
                    if($key>0){
                        $libTC->AddPage($v['ORIENTATION']);
                    }
                    if($v['preview']){
                        $previews=true;
                    }
                    $tbl = <<<EOD
                    $html
EOD;
                    $libTC->writeHTML($tbl, true, false, false, false, '');
                }
            }
            if($previews){
                return print_r($tampHtml);
            }
            ob_end_clean(); 
            $libTC->Output($v['name'], 'I');
        }
        // function cetakTCEmail($vx1){ //versi output ke email
        //     $v=$vx1[0];
        //     // $libTC= new TCPDF($v['ORIENTATION'], PDF_UNIT,$v['FORMAT'], true, 'UTF-8', false);
        //         // $libTC=$libTC.$key;
            
        //     $libTC->setPrintHeader(false);
        //     $libTC->SetCreator(PDF_CREATOR);
        //     $libTC->SetAuthor('Bagus Hartiansyah');
        //     $libTC->SetTitle('S-BM');
            
        //     $libTC->AddPage();
        //     // $libTC->SetFont('times', 'BI', 10);
        //     $libTC->SetFont('helvetica', '', 8);
        //     $tampHtml="";
        //     $previews=false;

        //     foreach ($vx1 as $key => $v) {
        //         // print_r($v);
        //         if($v['preview']){
        //             $previews=true;
        //         }
        //     }
        //     // return print_r($previews);
        //     foreach ($vx1 as $key => $v) {
        //         $html=$v['html'];
        //         if($previews){
        //             $tampHtml.=$html;
        //         }else{
        //             if($key>0){
        //                 $libTC->AddPage($v['ORIENTATION']);
        //             }
        //             if($v['preview']){
        //                 $previews=true;
        //             }
        //             $tbl = <<<EOD
        //             $html
        //             EOD;
        //             $libTC->writeHTML($tbl, true, false, false, false, '');
        //         }
        //     }
        //     // if($previews){
        //     //     return print_r($tampHtml);
        //     // }
        //     return $libTC->Output($v['name'], 'S');
        // }
        public function cetakDom($view, $data = array()){ //domPdf
            $html = $this->ci()->load->view($view, $data, TRUE);
            $this->dom->load_html($html);
            $this->dom->render();
            $this->dom->stream($this->filename, array("Attachment" => false));
        }
        public function previewPdf($files){
            // return print_r($files);
            redirect($files);
            // $libTC = new TCPDF();
            // $libTC->Output($files, 'D');
            // $this->dom->stream($files, array("Attachment" => false));
            // exit(0);
           
            
        }
        function emailSendPDF($datax){
            // return print_r($this->cetakTCEmail($datax));
            $this->cmail->send(
                $datax,
                $this->cetakTCEmail($datax),
                "HasilPembahasan.pdf",
                $this->mail
            );
        }
    }
?>