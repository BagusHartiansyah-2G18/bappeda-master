<?php
	 $dbName ="C:/xampp/htdocs/access/data3.mdb";
    $db = new PDO("odbc:DRIVER={Microsoft Access Driver (*.mdb)}; DBQ=$dbName; Uid=; Pwd=;");
	$nama=$_POST['nama'];
	$data="<tr align='center'><td>ID</td><td>Nama</td></tr>";
	$sql=$db->query("select * from USERINFO_DETAIL where nama like '%".$nama."%' ");
	$no=1;
	while ($query=$sql->fetch()) {
		if($no<=7)
		{
			$data.="
			<tr>
				<td>".$query['ID']."</td>				
				<td><input type='button' style='width:100%' onclick='clic()' value='".$query['nama']."'></td>
			</tr>";
		}
		$no++;
	}
	echo $data;
?>
<!-- <td><button style='width: 100%' onclick='ok()'>".$query['nama']."</button></td> -->