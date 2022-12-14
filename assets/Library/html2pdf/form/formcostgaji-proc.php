<?php 
$dbName ="C:/xampp/htdocs/access/data2.mdb";
if (!file_exists($dbName)) {
    die("Could not find database file.");
}
$db = new PDO("odbc:DRIVER={Microsoft Access Driver (*.mdb)}; DBQ=$dbName; Uid=; Pwd=;");

$ket = $_POST['ket'];
$gaji = $_POST['gaji'];
//$uang = $_POST['uang'];
$sql = "UPDATE JP_GAJI SET Gaji = '$gaji' where Keterangan = '$ket'";
//$sql = "INSERT INTO JP_GAJI values (6,'Normal','SD','10')";

try {
if ($db->query($sql)) 
{	
	echo "
	<script>
	alert('Update Berhasil ...');
	window.location = 'formcostgaji.php';
	</script>
	";			
}
}
catch (Exception $e) {
    echo 'Caught exception: ',  $e->getMessage(), "\n";
}
?>