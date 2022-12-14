<?php
	ob_start();
    // include(dirname(__FILE__).'/tes.php');
    include '../tesbenar.php';
    $content = ob_get_clean();

    // convert to PDF
    require_once(dirname(__FILE__).'/../html2pdf.class.php');
    try
    {
        $html2pdf = new HTML2PDF('p', 'a5', 'fr');
        $html2pdf->writeHTML($content, isset($_GET['vuehtml']));
        $html2pdf->Output('tes.pdf');
        // $html2pdf->pdf->IncludeJS("print(true);");
        // $html2pdf->
    }
    catch(HTML2PDF_exception $e) {
        echo $e;
        exit;
    }
?>