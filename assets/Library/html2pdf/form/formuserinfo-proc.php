<?php 
$dbName ="C:/xampp/htdocs/access/data2.mdb";
if (!file_exists($dbName)) {
    die("Could not find database file.");
}
$db = new PDO("odbc:DRIVER={Microsoft Access Driver (*.mdb)}; DBQ=$dbName; Uid=; Pwd=;");

$sqluserid="select * from USERINFO";
$queryuserid=$db->query($sqluserid);

$numarray=1;
while ($temp = $queryuserid->fetch()){
	$numarray=$temp['USERID'];
}
$numarray = $numarray + 1;

$nama = $_POST['nama'];
$gender = $_POST['gender'];
$badge = $_POST['badge'];
$ssn = $_POST['ssn'];
$jabatan = $_POST['jabatan'];
$bagian = $_POST['bagian'];

$sql = "INSERT INTO USERINFO (USERID,Badgenumber,SSN,Name,Gender) values ($numarray,'$badge','$ssn','$nama','$gender')";

$sql2 = "INSERT INTO USERINFO_DETAIL (ID,badgenumber,ssn,nama,jabatan,bagian) values ($numarray,'$badge','$ssn','$nama','$jabatan','$bagian')";

$sqlmatch="select * from USERINFO where Name = '$nama' and SSN = '$ssn' and Badgenumber = '$badge'";

$sql2update = "UPDATE USERINFO_DETAIL SET jabatan = '$jabatan',bagian = '$bagian' where nama = '$nama' and ssn = '$ssn' and badgenumber = '$badge'";//"UPDATE USERINFO_DETAIL SET (jabatan = '$jabatan',bagian = '$bagian') where (nama = '$nama')";
// "UPDATE USERINFO_DETAIL SET jabatan = '$jabatan',bagian = '$bagian' where nama = '$nama' and ssn = '$ssn' and badgenumber = '$badge'";
try {
	if ($db->query($sqlmatch)){
		if ($db->query($sql2update)) 
		{	
			echo "
			<script>
			alert('UPDATE Berhasil ...');
			window.location = 'formuserinfo.php';
			</script>
			";			
		}
	}
	else{
		if ($db->query($sql) and $db->query($sql2)) 
		{	
			echo "
			<script>
			alert('INPUT Berhasil ...');
			window.location = 'formuserinfo.php';
			</script>
			";			
		}
}
}
catch (Exception $e) {
    echo 'Caught exception: ',  $e->getMessage(), "\n";
}
?>