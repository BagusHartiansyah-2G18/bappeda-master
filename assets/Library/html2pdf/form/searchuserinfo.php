<?php
 /*include "db.php";
 
 $judul=$_POST["judul"];
 
  
 $result=mysql_query("SELECT * FROM artikel where judul like '%$judul%' ");
 $found=mysql_num_rows($result);
 
 if($found>0){
    while($row=mysql_fetch_array($result)){
    echo "<li>$row[judul]</br>
            <a href=\"$row[link]\">$row[link]</a></li>";
    }   
 }else{
    echo "<li>Tidak ada artikel yang ditemukan <li>";
 }*/
 
$judul=$_POST['judul'];	
//echo "<form method='post' action='formcostgaji-proc.php'>";	
if ($judul == "Normal"){
	echo "<select name='ket'>
	        <option id='normal1'>Shift 1</option>
            <option id='normal2'>Shift 2</option>
            <option id='normal3'>Shift 3</option>
         	</select>";
}
else {
	echo "<select name='ket'>
	        <option id='lembur1'>Senin-Jumat</option>
            <option id='lembur2'>Sabtu-Minggu</option>
         	</select>";
	}
//echo "<input type='submit' value='INPUT DATA'></form>";	

?>