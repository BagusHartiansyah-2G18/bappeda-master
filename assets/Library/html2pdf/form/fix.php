<?php 

$dbName ="C:/xampp/htdocs/access/dataok.mdb";
if (!file_exists($dbName)) {
    die("Could not find database file.");
}
$db = new PDO("odbc:DRIVER={Microsoft Access Driver (*.mdb)}; DBQ=$dbName; Uid=; Pwd=;");

$nama = $_POST['nama'];
$dateawal = $_POST['tgl_awal'];
$dateakhir = $_POST['tgl_ahir'];

$sql="select * from USERINFO where Name like '%$nama%'";
$query=$db->query($sql);

$numarray=1;
while ($temp=$query->fetch()){
	$array[$numarray] =  $temp['USERID'];
	$numarray=$numarray + 1;
}

$tempnumarray=$numarray;
$numarray=1;
$looprecord = 1;
$totalrecord = $tempnumarray;
//$halfrecord = round( $totalrecord/2);
			
	
function f_KetGolongan($gaji,$golongan,$keterangan,$jam)
		{
			$dbNamefungsi ="C:/xampp/htdocs/access/dataok.mdb";
if (!file_exists($dbNamefungsi)) {
    die("Could not find database file.");
}
$dbfungsi = new PDO("odbc:DRIVER={Microsoft Access Driver (*.mdb)}; DBQ=$dbNamefungsi; Uid=; Pwd=;");

			$sqlNormal=("select * from JP_GAJI where Golongan ='Normal' and Keterangan = 'Shift 1'");
			$queryNormal=$dbfungsi->query($sqlNormal);
				while ($searchNormal= $queryNormal->fetch()){
					$var3gaji = $searchNormal['Gaji'];
				}


			if ($golongan == "Lembur" and $keterangan == "Senin-Jumat"){
			$sqlL1=("select * from JP_GAJI where Golongan ='$golongan' and Keterangan = '$keterangan'");
			$queryL1=$dbfungsi->query($sqlL1);
				while ($searchL1= $queryL1->fetch()){
					$var1gaji = $searchL1['Gaji'];
				}
				return ($var1gaji*$jam)+$var3gaji;
			}
			elseif ($golongan == "Lembur" and $keterangan == "Sabtu-Minggu"){
				$sqlL2=("select * from JP_GAJI where Golongan ='Normal' and Keterangan = 'Shift 1'");
			$queryL2=$dbfungsi->query($sqlL2);
				while ($searchL2= $queryL2->fetch()){
					$var2gaji = $searchL2['Gaji'];
				}
				return $var2gaji*2;
			}
			else {
				return $gaji;
			}
	}		
	

			
			
function f_JP($golongan,$keterangan,$jam)
	{
		if ($golongan == "Lembur" and $keterangan == "Senin-Jumat"){
				return " (".$golongan." ".$jam." Jam)";
			}
			elseif ($golongan == "Lembur" and $keterangan == "Sabtu-Minggu"){
				return " (".$golongan." ".$keterangan.")";
			}
	}	
					

try {
for($looprecord;$looprecord<=$totalrecord;$looprecord++)
{	
	echo "
	<table>
    	<tr>
        <th>";
			
			$sqlganjil=("select * from USERINFO_DETAIL where ID = $array[$numarray]");
			$queryganjil=$db->query($sqlganjil);
				while ($searchganjil= $queryganjil->fetch()){
			?>
		<table>
        <tr>
         <th width='20'>No ID</th>
         <th width='160'><?php echo $searchganjil['ID']; ?></th>
         <th width='80'>Penempatan</th>
         <th width='140'><?php echo $searchganjil['jabatan']; ?></th>    
         
         
        </tr>    
        <tr>
         <th width='80'>nama</th>
         <th width='80'><?php echo $searchganjil['nama']; ?></th>
         <th width='100'>Bagian</th>
         <th width='100'><?php echo $searchganjil['bagian']; ?></th>    
           
        </tr>
        <tr>
            <th colspan="4"><hr width="100%"></th>
        </tr>
        </table>
        <table>
        <tr>
        <th colspan="2"><?php echo "Tanggal Awal : ".substr($dateawal,8,2)."-".substr($dateawal,5,2)."-".substr($dateawal,0,4) ; ?></th>
        <th colspan="3"><?php echo "Tanggal Akhir : ".substr($dateakhir,8,2)."-".substr($dateakhir,5,2),"-".substr($dateakhir,0,4); ?></th>
        </tr>
        <tr>
        <th width="10">NO</th>
         <th width='170'>Jenis Pekerjaan</th>
         <th width='80'>Gaji Harian</th>
         <th width='100'>Absensi</th>
         <th width='100'>Total Absensi</th>   
        </tr> 
       <?php 
			$sqlket = ("SELECT USERINFO_DETAIL.ID, USERINFO_JENIS_PEKERJAAN.jenis_pekerjaan, Count(USERINFO_JENIS_PEKERJAAN.tanggal) AS CountOftanggal, USERINFO_JENIS_PEKERJAAN.golongan, JP_GAJI.Keterangan, JP_GAJI.Gaji, USERINFO_JENIS_PEKERJAAN.waktu
FROM (USERINFO_DETAIL INNER JOIN USERINFO_JENIS_PEKERJAAN ON USERINFO_DETAIL.ID = USERINFO_JENIS_PEKERJAAN.ID) INNER JOIN JP_GAJI ON (USERINFO_JENIS_PEKERJAAN.keterangan = JP_GAJI.Keterangan) AND (USERINFO_JENIS_PEKERJAAN.golongan = JP_GAJI.Golongan)
WHERE (((USERINFO_JENIS_PEKERJAAN.tanggal) Between #$dateawal# And #$dateakhir#))
GROUP BY USERINFO_DETAIL.ID, USERINFO_JENIS_PEKERJAAN.jenis_pekerjaan, USERINFO_JENIS_PEKERJAAN.golongan, JP_GAJI.Keterangan, JP_GAJI.Gaji, USERINFO_JENIS_PEKERJAAN.waktu
HAVING (((USERINFO_DETAIL.ID)=$array[$numarray]));
");
			$totalgaji = 0;
			$totalhari = 0;
			$nojp = 1;
			$queryket=$db->query($sqlket);
			while ($ket= $queryket->fetch()){
            echo "<tr>
			<th>$nojp</th>
             <th>".$ket['jenis_pekerjaan'].f_JP($ket['golongan'],$ket['Keterangan'],$ket['waktu'])."</th>
             <th  align='right'>".$ket['Gaji']."</th>
             <th>".$ket['CountOftanggal']."</th>
             <th  align='right'>".f_KetGolongan($ket['Gaji'],$ket['golongan'],$ket['Keterangan'],$ket['waktu'])*$ket['CountOftanggal']."</th>    
            </tr> ";
			$totalgaji = $totalgaji + (doubleval(f_KetGolongan($ket['Gaji'],$ket['golongan'],$ket['Keterangan'],$ket['waktu']))*doubleval($ket['CountOftanggal']));
			$totalhari = $totalhari + intval($ket['CountOftanggal']);
			$nojp = $nojp + 1;
        };
		 echo"
            <tr>
            <th align='right' colspan='3'>total</th>
            <th  colspan='2'  align='right'>Rp ".$totalgaji."</th>
        </tr>
        <tr>
            <th colspan='2'>Jumlah Hari Kerja</th>
            <th>".$totalhari."</th>
            <th>Pembulatan</th>
            <th  align='right'>Rp ".$totalgaji."</th>
        </tr>
        <tr>
            <th colspan='5'><br><br></th>
        </tr>
        <tr>
            <th align='center' colspan='5'>Pandaan ".date('d-m-Y')."</th>

        </tr>
        <tr>
            <th align='center' colspan='5'>Diterima Oleh</th>

        </tr>
        <tr>
            <th colspan='5' align='center' ><br><br><br></th>

        </tr>
        <tr>
            <th colspan='5' align='center'>Wulan Meidite</th>

        </tr>";?>   
       </table>
              
       <?php
			
			}
		echo"
        </th>
        
        <th>";
        for ($i=1; $i<=28;$i++)
        {
            echo"I<br>";
        }
		echo "
        </th>
        
        <th>";
		
			$sqlgenap=("select * from USERINFO_DETAIL where ID = $array[$numarray]");
			$querygenap=$db->query($sqlgenap);
				while ($searchgenap= $querygenap->fetch()){
			?>
		<table>
        <tr>
         <th width='20'>No ID</th>
         <th width='160'><?php echo $searchgenap['ID']; ?></th>
         <th width='80'>Penempatan</th>
         <th width='140'><?php echo $searchgenap['jabatan']; ?></th>    
         
         
        </tr>    
        <tr>
         <th width='80'>nama</th>
         <th width='80'><?php echo $searchgenap['nama']; ?></th>
         <th width='100'>Bagian</th>
         <th width='100'><?php echo $searchgenap['bagian']; ?></th>    
           
        </tr>
        <tr>
            <th colspan="4"><hr width="100%"></th>
        </tr>
        </table>
        <table>
         <tr>
        <th colspan="2"><?php echo "Tanggal Awal : ".substr($dateawal,8,2)."-".substr($dateawal,5,2)."-".substr($dateawal,0,4) ; ?></th>
        <th colspan="3"><?php echo "Tanggal Akhir : ".substr($dateakhir,8,2)."-".substr($dateakhir,5,2),"-".substr($dateakhir,0,4); ?></th>
        </tr>
        <th width="10">NO</th>
         <th width='170'>Jenis Pekerjaan</th>
         <th width='80'>Gaji Harian</th>
         <th width='100'>Absensi</th>
         <th width='100'>Total Absensi</th>   
        </tr> 
       <!--</table>
       <table border="1">-->
       <?php 
			$sqlket=("SELECT USERINFO_DETAIL.ID, USERINFO_JENIS_PEKERJAAN.jenis_pekerjaan, Count(USERINFO_JENIS_PEKERJAAN.tanggal) AS CountOftanggal, USERINFO_JENIS_PEKERJAAN.golongan, JP_GAJI.Keterangan, JP_GAJI.Gaji, USERINFO_JENIS_PEKERJAAN.waktu
FROM (USERINFO_DETAIL INNER JOIN USERINFO_JENIS_PEKERJAAN ON USERINFO_DETAIL.ID = USERINFO_JENIS_PEKERJAAN.ID) INNER JOIN JP_GAJI ON (USERINFO_JENIS_PEKERJAAN.keterangan = JP_GAJI.Keterangan) AND (USERINFO_JENIS_PEKERJAAN.golongan = JP_GAJI.Golongan)
WHERE (((USERINFO_JENIS_PEKERJAAN.tanggal) Between #$dateawal# And #$dateakhir#))
GROUP BY USERINFO_DETAIL.ID, USERINFO_JENIS_PEKERJAAN.jenis_pekerjaan, USERINFO_JENIS_PEKERJAAN.golongan, JP_GAJI.Keterangan, JP_GAJI.Gaji, USERINFO_JENIS_PEKERJAAN.waktu
HAVING (((USERINFO_DETAIL.ID)=$array[$numarray]));
");
			$totalgaji = 0;
			$totalhari = 0;
			$nojp = 1;
			$queryket=$db->query($sqlket);
			while ($ket= $queryket->fetch()){
            echo "<tr>
			<th>$nojp</th>
             <th>".$ket['jenis_pekerjaan'].f_JP($ket['golongan'],$ket['Keterangan'],$ket['waktu'])."</th>
             <th  align='right'>".$ket['Gaji']."</th>
             <th>".$ket['CountOftanggal']."</th>
             <th  align='right'>".f_KetGolongan($ket['Gaji'],$ket['golongan'],$ket['Keterangan'],$ket['waktu'])*$ket['CountOftanggal']."</th>    
            </tr> ";
			$totalgaji = $totalgaji + (doubleval(f_KetGolongan($ket['Gaji'],$ket['golongan'],$ket['Keterangan'],$ket['waktu']))*doubleval($ket['CountOftanggal']));
			$totalhari = $totalhari + intval($ket['CountOftanggal']);
			$nojp = $nojp + 1;
        };
		  echo"
            <tr>
            <th align='right' colspan='3'>total</th>
            <th  colspan='2'  align='right'>Rp ".$totalgaji."</th>
        </tr>
        <tr>
            <th colspan='2'>Jumlah Hari Kerja</th>
            <th>".$totalhari."</th>
            <th>Pembulatan</th>
            <th  align='right'>Rp ".$totalgaji."</th>
        </tr>
        <tr>
            <th colspan='5'><br><br></th>
        </tr>
        <tr>
            <th align='center' colspan='5'>Pandaan ".date('d-m-Y')."</th>

        </tr>
        <tr>
            <th align='center' colspan='5'>Diterima Oleh</th>

        </tr>
        <tr>
            <th colspan='5' align='center' ><br><br><br></th>

        </tr>
        <tr>
            <th colspan='5' align='center'>Wulan Meidite</th>

        </tr>";?> 
       </table>
              
       <?php
			
			}
			
			
			$numarray=$numarray + 1;
		echo"
        </th>
   </table>";
}
}
catch (Exception $e) {
    echo 'Caught exception: ',  $e->getMessage(), "\n";
}
?>