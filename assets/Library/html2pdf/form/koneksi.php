<?php 

$dbName ="C:/xampp/htdocs/access/data3.mdb";
if (!file_exists($dbName)) {
    die("Could not find database file.");
}
$db = new PDO("odbc:DRIVER={Microsoft Access Driver (*.mdb)}; DBQ=$dbName; Uid=; Pwd=;");
/*
$sql="select * from USERINFO";
$query=$db->query($sql);

$numarray=1;
while ($temp=$query->fetch()){
	$array[$numarray] =  $temp['USERID'];
	$numarray=$numarray + 1;
}*/

?>