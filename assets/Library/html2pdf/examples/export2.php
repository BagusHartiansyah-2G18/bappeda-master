<?php
	ob_start();
    // include(dirname(__FILE__).'/tes.php');
    include 'C:/xampp/htdocs/html2pdf/html2pdf-4.4.0/tesreportako2.php';
    $content = ob_get_clean();

    // convert to PDF
    require_once(dirname(__FILE__).'/../html2pdf.class.php');
    try
    {
        $html2pdf = new HTML2PDF('L', 'A5', 'fr');
        $html2pdf->writeHTML($content, isset($_GET['vuehtml']));
        $html2pdf->Output('tes.pdf');
    }
    catch(HTML2PDF_exception $e) {
        echo $e;
        exit;
    }
?>