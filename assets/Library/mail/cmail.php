<?php
    
    class cmail{
        public function send($datax,$pdf,$namaFile,$mailx){
            // return print_r($mail->user);
            require 'phpmailer_5/phpmailerautoload.php';
            $mail = new PHPMailer();
            $mail->isSMTP();          
            $mail->CharSet = 'UTF-8';        
            $mail->Host = 'smtp.gmail.com';  
            $mail->SMTPAuth = true;                     
            $mail->SMTPDebug = 2;

            $mail->Username =$mailx['user'];
            $mail->Password =$mailx['pass'];
            $mail->SMTPSecure = 'ssl';                   
            $mail->Port = 465;  //revisar configuracion del puerto pues depende de cada host                          

            $mail->From =$mailx['user'];
            $mail->FromName =$mailx['nama'];

            foreach($datax[0]['demail'] as $i => $v){
                $mail->addAddress($v['email'],$v['nama']);
            };
            // $mail->addAddress("bagushartiansyah07@gmail.com","Bagus ");
            // $mail->addAddress("tapdsekretariat@gmail.com","Bagus ");

            $mail->isHTML(true);

            $mail->addStringAttachment($pdf,$namaFile);
            // $mail->AddStringAttachment($attachment, $namaFile, 'base64', 'application/pdf');
            $mail->Subject = $datax[0]['semail'];
            $mail->Body    = "<h1>".$datax[0]['jemail']."</h1>";
            if(!$mail->send()) {
                return [
                    "exec"=>false,
                    "msg"=>$mail->ErrorInfo
                ];
            } else {
                return [
                    "exec"=>true,
                    "msg"=>"SUKSES"
                ];
            }
        }
    }
?>

