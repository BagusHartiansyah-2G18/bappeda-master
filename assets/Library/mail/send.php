<?php
	require 'phpmailer_5/phpmailerautoload.php';
	// $mail=new PHPMailer();
	// $mail->Host="smtp.gmail.com";
	// $mail->SMTPAuth=true;
	// // $mail->Username="bagushartiansyah07@gmail.com";
	// // $mail->Password="07agustus1997B";
	// $mail->Username="tapdsekretariat@gmail.com";
	// $mail->Password="@1@a@2@s@3@d";
	// $mail->SMTPSecure="ssl";
	// $mail->Port=465;
	// $mail->Subject="tes";
	// $mail->Body="this body";
	// $mail->setFrom('bagushartiansyahc07@gmail.com','bagus');
	// $mail->addAddress('hello');
	// if ($mail->send()) {
	// 	echo "ok";
	// }else{
	// 	echo "no |".$mail->ErrorInfo;
	// }


	// $m = new PHPMailer;

	// $m->isSMTP();
	// $m->SMTPAuth = true;
	// $m->SMTPDebug = 2;

	// $m->Host = 'smtp.gmail.com';
	// $m->Username = 'tapdsekretariat@gmail.com';
	// $m->Password = '@1@a@2@s@3@d';
	// $m->SMTPSecure = 'ssl';
	// $m->Port = 465;

	// $m->From = 'bagushartiansyahc07@gmail.com';
	// $m->FromName = 'Bagus';

	// $m->Subject = 'Testing PHPMailer';
	// $m->Body = 'Body of the email. Testing PHPMailer.';

	// if (!$m->send()) {
	// 	echo 'Mailer Error: ' . $m->ErrorInfo;
	// } else {
	// 	echo 'Everything OK.';
	// }



	$mail = new PHPMailer();
    $mail->isSMTP();          
    $mail->CharSet = 'UTF-8';        
    $mail->Host = 'smtp.gmail.com';  
    $mail->SMTPAuth = true;                     
    // $mail->Username = 'mymail@gmail.com';
	// $mail->Password = '***';              

	// $mail->isSMTP();
	// $mail->SMTPAuth = true;
	$mail->SMTPDebug = 2;

	$mail->Username = 'tapdsekretariat@gmail.com';
	$mail->Password = '@1@a@2@s@3@d';
    $mail->SMTPSecure = 'ssl';                   
    $mail->Port = 465;  //revisar configuracion del puerto pues depende de cada host                          

    // $mail->setLanguage('es', PUBLIC_PATH . 'language/');
    $mail->From = 'tapdsekretariat@gmail.com';
    $mail->FromName = 'name';
	$mail->addAddress("bagushartiansyah07@gmail.com","Bagus ");
	$mail->addAddress("tapdsekretariat@gmail.com","Bagus ");
    // $mail->addBCC("$correoDestinatario");

    $mail->isHTML(true);

    $mail->Subject = 'Notificación ';
    $mail->Body    = "<h1>Contenido del correo</h1>";
    $mail->AltBody = "Contenido del correo en texto plano"; //es alternativo, para clientes que no soportan html

    if(!$mail->send()) {
        // Logger::debug('Mensaje no pudo ser enviado.');
		// Logger::debug('Mailer Error: ' . $mail->ErrorInfo);
		print_r($mail->ErrorInfo);
		print_r("ERROR");
        return false;
    } else {
		// Logger::debug('Mensaje ha sido enviado');
		print_r("SUKSES");
        return true;
    }


	// $mail = new PHPMailer;

	// $mail->isSMTP();                                      // Set mailer to use SMTP
	// $mail->Host = 'smtp1.example.com;smtp2.example.com';  // Specify main and backup SMTP servers
	// $mail->SMTPAuth = true;                               // Enable SMTP authentication
	// $mail->Username = 'tapdsekretariat@gmail.com';                 // SMTP username
	// $mail->Password = '@1@a@2@s@3@d';                           // SMTP password
	// $mail->SMTPSecure = 'tls';                            // Enable encryption, 'ssl' also accepted

	// $mail->From = 'tapdsekretariat@gmail.com';
	// $mail->FromName = 'Mailer';
	// $mail->addAddress('bagushartiansyahc07@gmail.com', 'Joe User');     // Add a recipient
	// // $mail->addAddress('ellen@example.com');               // Name is optional
	// $mail->addReplyTo('info@example.com', 'Information');
	// $mail->addCC('cc@example.com');
	// $mail->addBCC('bcc@example.com');

	// $mail->WordWrap = 50;                                 // Set word wrap to 50 characters
	// $mail->addAttachment('/var/tmp/file.tar.gz');         // Add attachments
	// $mail->addAttachment('/tmp/image.jpg', 'new.jpg');    // Optional name
	// $mail->isHTML(true);                                  // Set email format to HTML

	// $mail->Subject = 'Here is the subject';
	// $mail->Body    = 'This is the HTML message body <b>in bold!</b>';
	// $mail->AltBody = 'This is the body in plain text for non-HTML mail clients';

	// if(!$mail->send()) {
	// 	echo 'Message could not be sent.';
	// 	echo 'Mailer Error: ' . $mail->ErrorInfo;
	// } else {
	// 	echo 'Message has been sent';
	// }
?>