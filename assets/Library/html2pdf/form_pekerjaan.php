<form method="POST">
<table>
<tr><td width=‘80’>ID</td><td><input type='text' name='id'></td>
	<!-- <td><input type="button" name="cari1" value="CARI"></td></tr> -->
<tr><td width=‘80’>Nama</td><td><input type='text' name='nama'></td>
	<!-- <td><input type="button" name="cari2" value="CARI"></td></tr> -->
<tr><td width=‘80’>Jenis Pekerjaan</td><td><select name='jp'>
<?php 

$dbName ="C:/xampp/htdocs/access/data2.mdb";
if (!file_exists($dbName)) {
    die("Could not find database file.");
}
$db = new PDO("odbc:DRIVER={Microsoft Access Driver (*.mdb)}; DBQ=$dbName; Uid=; Pwd=;");

$sql="select * from USERINFO";
$query=$db->query($sql);

$numarray=1;
while ($temp=$query->fetch()){
	$array[$numarray] =  $temp['USERID'];
	$numarray=$numarray + 1;
}

$sqljp=("select * from Jenis_Pekerjaan");
		$queryjp=$db->query($sqljp);
		while ($searchjp= $queryjp->fetch()){

			echo"	
				<option value='".$searchjp['ID']."'>".$searchjp['jenis_pekerjaan']."</option>	
			
			";
		}
		echo "</td></tr>";		
?>
<tr><td width=‘80’>Lembur</td><td><select name='lembur'>
<?php 
$sqljp=("select * from Gaji_Lembur");
		$queryjp=$db->query($sqljp);
		while ($searchjp= $queryjp->fetch()){

			echo"	
				<option value='".$searchjp['ID']."'>".$searchjp['Hari']."</option>	
			
			";
		}
		echo "</td></tr>";		
?>
<tr><td colspan="2" align="center"><input type="submit" name="button1" value="SUBMIT"></td></tr>
</table></form>