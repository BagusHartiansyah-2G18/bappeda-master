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
 
 

$dbNamefungsi ="C:/xampp/htdocs/access/data2.mdb";
$dbfungsi = new PDO("odbc:DRIVER={Microsoft Access Driver (*.mdb)}; DBQ=$dbNamefungsi; Uid=; Pwd=;");


$judul=$_POST['judul'];		
if ($judul == "all"){
	$sqlket=("select * from USERINFO_DETAIL");

	$queryket=$dbfungsi->query($sqlket);
	while ($ket= $queryket->fetch()){
		echo "<li>".$ket['nama']."</br>
	<a href=\"LOL\">".$ket['nama']."</a></li>";
	}
}
else {
	$sqlket=("select * from USERINFO_DETAIL where nama LIKE '%$judul%'");

	$queryket=$dbfungsi->query($sqlket);
	while ($ket= $queryket->fetch()){
		//echo "<li>".$ket['nama']."</br><a href=\"LOL\">".$ket['nama']."</a></li>";
		echo $ket['ID']." ";
	}
}

?>