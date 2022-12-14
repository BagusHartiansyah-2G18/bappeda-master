<body>
<font size="6">
<?php 

$dbName ="C:/xampp/htdocs/access/data.mdb";
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

$bulanawal=2;
$bulanakhir=3;

$tglawal=2;
$tglakhir=10;

$tglbulantahun = "2/1/2018";
		$sub_tgl = intval(substr($tglbulantahun,2,1));
		$sub_bulan = intval(substr($tglbulantahun,0,1));
		$sub_tahun = intval(substr($tglbulantahun,4,4));
		

$tempnumarray=$numarray;
$numarray=1;
$looprecord = 1;
$totalrecord = $tempnumarray;
$halfrecord = round( $totalrecord/2);


function f_gajiharian($jp)
		{

			$dbNamefungsi ="C:/xampp/htdocs/access/data.mdb";
			$dbfungsi = new PDO("odbc:DRIVER={Microsoft Access Driver (*.mdb)}; DBQ=$dbNamefungsi; Uid=; Pwd=;");
			$a=0;
			//$b= $ket;
		$sqlgaji=("select * from JP_GAJI where jenis_pekerjaan = '$jp' and keterangan ='Normal'");
		$querygaji=$dbfungsi->query($sqlgaji);
		while ($gaji= $querygaji->fetch()){
				$a = $gaji['gaji'];
		
		}
			
			return $a;
		}
		
		
		function f_seleksipekerjaan($id,$jp,$bulanawal,$bulanakhir,$tglawal,$tglakhir)
		{

		$dbNamefungsi ="C:/xampp/htdocs/access/data.mdb";
		$dbfungsi = new PDO("odbc:DRIVER={Microsoft Access Driver (*.mdb)}; DBQ=$dbNamefungsi; Uid=; Pwd=;");
		$jumlahjp=0;
		$lembur = 0;
		$normal = 0;
		
		$xbulan = $bulanawal;
		for ($x=$tglawal;$x<=$tglakhir;$x++){
			$seachbulan = $xbulan."/".$x."/2018";
			$sqlpekerjaan=("select * from USERINFO_JENIS_PEKERJAAN where ID = $id and tanggal= '$seachbulan' and jenis_pekerjaan='$jp'");
			$querypekerjaan=$dbfungsi->query($sqlpekerjaan);
			while ($pekerjaan = $querypekerjaan->fetch()){
					$jumlahjp = $jumlahjp+1;
			}
		}
		return $jumlahjp;
			
	}
	
	
	function f_totalharikerja($id,$jp,$bulanawal,$bulanakhir,$tglawal,$tglakhir){
		$total = 0;
		$dbNamefungsi ="C:/xampp/htdocs/access/data.mdb";
		$dbfungsi = new PDO("odbc:DRIVER={Microsoft Access Driver (*.mdb)}; DBQ=$dbNamefungsi; Uid=; Pwd=;");
				
		$sqlket=("SELECT JP_GAJI.jenis_pekerjaan FROM JP_GAJI GROUP BY JP_GAJI.jenis_pekerjaan");
			$queryket=$dbfungsi->query($sqlket);
			while ($ket= $queryket->fetch()){
					$total = $total + f_seleksipekerjaan($id,$ket['jenis_pekerjaan'],$bulanawal,$bulanakhir,$tglawal,$tglakhir);
			}
			return $total;
	}
			
			
function f_totalperjp($id,$jp,$bulanawal,$bulanakhir,$tglawal,$tglakhir)
		{

		$dbNamefungsi ="C:/xampp/htdocs/access/data.mdb";
		$dbfungsi = new PDO("odbc:DRIVER={Microsoft Access Driver (*.mdb)}; DBQ=$dbNamefungsi; Uid=; Pwd=;");
		$jumlahjp=0;
		$lembur = 0;
		$normal = 0;
		$totalgaji = 0;
		$gaji = 0;
		
		$xbulan = $bulanawal;
		for ($x=$tglawal;$x<=$tglakhir;$x++){
			$seachbulan = $xbulan."/".$x."/2018";
			$sqlpekerjaan=("select * from USERINFO_JENIS_PEKERJAAN where ID = $id and tanggal= '$seachbulan' and jenis_pekerjaan='$jp'");
			$querypekerjaan=$dbfungsi->query($sqlpekerjaan);
			while ($pekerjaan = $querypekerjaan->fetch()){
					$jumlahjp = $jumlahjp+1;
					$normal = $normal + 1;
					if ($pekerjaan['keterangan'] == 'Lembur'){
						
						$lembur = $lembur + 1;
					}
			}
		}
		
		
		$sqltotalnormal=("SELECT * FROM JP_GAJI where jenis_pekerjaan='$jp' and keterangan = 'Normal'");
		$querytotalnormal=$dbfungsi->query($sqltotalnormal);
		while ($totalnormal = $querytotalnormal->fetch()){
				$gajinormal = $totalnormal['gaji'] ;
		}
		
		$sqltotallembur=("SELECT * FROM JP_GAJI where jenis_pekerjaan='$jp' and keterangan = 'Lembur'");
		$querytotallembur=$dbfungsi->query($sqltotallembur);
		while ($totallembur= $querytotallembur->fetch()){
				$gajilembur = $totallembur['gaji'] ;
		}		
		
		for ($a=1;$a<=$normal;$a++){
			
				if ($lembur != 0){
					$totalgaji = $gajilembur + $totalgaji;
					$lembur = $lembur - 1;
				}
				else {
					$totalgaji = $gajinormal + $totalgaji;
				}
		}
		
		return $totalgaji;
			
	}
			
			
function f_total($id,$jp,$bulanawal,$bulanakhir,$tglawal,$tglakhir)
		{
			$total =0;
			$dbNamefungsi ="C:/xampp/htdocs/access/data.mdb";
			$dbfungsi = new PDO("odbc:DRIVER={Microsoft Access Driver (*.mdb)}; DBQ=$dbNamefungsi; Uid=; Pwd=;");
		
			$sqlket=("SELECT JP_GAJI.jenis_pekerjaan FROM JP_GAJI GROUP BY JP_GAJI.jenis_pekerjaan");
			$queryket=$dbfungsi->query($sqlket);
			while ($ket= $queryket->fetch()){
				$total = $total + f_totalperjp($id,$ket['jenis_pekerjaan'],$bulanawal,$bulanakhir,$tglawal,$tglakhir);
			}
		return $total;
	}			
	
		
		function f_cekpekerjaan($id,$jp)
		{
			
		
		$dbNamefungsi ="C:/xampp/htdocs/access/data.mdb";
		$dbfungsi = new PDO("odbc:DRIVER={Microsoft Access Driver (*.mdb)}; DBQ=$dbNamefungsi; Uid=; Pwd=;");
				
			$sqlpekerjaan=("select * from USERINFO_JENIS_PEKERJAAN where ID = $id ");
			
			$querypekerjaan=$dbfungsi->query($sqlpekerjaan);
			while (($pekerjaan = $querypekerjaan->fetch())){
				if ($pekerjaan['jenis_pekerjaan']==$jp){
				return $jp;}
			}
			
			
		}
		
		
		
try {
for($looprecord;$looprecord<=2;$looprecord++)
{
	echo "
	<table>
    	<tr>
        <th>";
	    	if ($numarray % 2 !=0 )
			{
				
				$sqlganjil=("select * from USERINFO_DETAIL where ID = $array[$numarray]");
				$queryganjil=$db->query($sqlganjil);
					while ($searchganjil= $queryganjil->fetch()){
				?>
				<table >
	        <tr>
	         <th width='70'>No</th>
	         <th width='100'  align="center"><?php echo $searchganjil['ID']; ?></th>
	         <th width='80'>penempatan</th>
	         <th width='100' align="center"><?php echo $searchganjil['jabatan']; ?></th>    
	                 
	        </tr>    
	        <tr>
	         <th width='80'>nama</th>
	         <th width='100'  align="center"><?php echo substr($searchganjil['nama'],0,10); ?></th>
	         <th width='80'>bagian</th>
	         <th width='100'  align="center"><?php echo $searchganjil['bagian']; ?></th>    
	           
	        </tr>
	        <tr>
	            <th colspan="4"><hr width="100%"></th>
	        </tr>
	        <tr>
	         <th width='70'>Jenis Pekerjaan</th>
	         <th width='80'>Gaji Harian</th>
	         <th width='100'>Absensi</th>
	         <th width='100'>Total Absensi</th>   
	        </tr> 
	       </table>
	       <table>
	       <?php 
		   /*$kalimat = "Belajar PHP di Duniailkom";
	$sub_kalimat = substr($kalimat,8,3);
	echo $sub_kalimat;
	// PHP*/
			
		   //$sqlket=("selec+t * from USERINFO_JENIS_PEKERJAAN where ID = $array[$numarray]");
			//	$queryket=$db->query($sqlket);
	    //while ($ket= $queryket->fetch()){
			//$xbulan = $bulanawal;
			//for ($x=$tglawal;$x<=$tglakhir;$x++){
				//$seachbulan = $xbulan."/".$x."/2018";
				//$sqlket=("select * from USERINFO_JENIS_PEKERJAAN where ID = $array[$numarray]  and tanggal= '$seachbulan'");
				$sqlket=("SELECT JP_GAJI.jenis_pekerjaan FROM JP_GAJI GROUP BY JP_GAJI.jenis_pekerjaan");
				$queryket=$db->query($sqlket);
				while ($ket= $queryket->fetch()){
	            echo "<tr>
	             <th width='80'>".f_cekpekerjaan($array[$numarray],$ket['jenis_pekerjaan'])."</th>
	             <th width='80'>".f_gajiharian($ket['jenis_pekerjaan'])."</th>
	             <th width='80'>".f_seleksipekerjaan($array[$numarray],$ket['jenis_pekerjaan'],$bulanawal,$bulanawal,$tglawal,$tglakhir)."</th>
	             <th width='80'>".f_totalperjp($array[$numarray],$ket['jenis_pekerjaan'],$bulanawal,$bulanawal,$tglawal,$tglakhir)."</th>    
	            </tr> ";
	        };
			 echo"
	            <tr>
	            <th align='center' colspan='2'>total</th>
	            <th  align='center'  colspan='2'>".f_total($array[$numarray],$ket['jenis_pekerjaan'],$bulanawal,$bulanawal,$tglawal,$tglakhir)."</th>
	        </tr>
	        <tr>
	            <th>Jumlah Hari Kerja</th>
	            <th>".f_totalharikerja($array[$numarray],$ket['jenis_pekerjaan'],$bulanawal,$bulanawal,$tglawal,$tglakhir)."</th>
	            <th>pembulatan</th>
	            <th>..........</th>
	        </tr>
	        <tr>
	            <th colspan='4'><br><br></th>
	        </tr>
	        <tr>
	            <th align='center' colspan='4'>pandaan.....tgl</th>

	        </tr>
	        <tr>
	            <th align='center' colspan='4'>diterima oleh</th>

	        </tr>
	        <tr>
	            <th colspan='4' align='center' ><br><br><br></th>

	        </tr>
	        <tr>
	            <th colspan='4' align='center'>Wulan meidite</th>

	        </tr>";?>   
	       </table>
	              
	       <?php
				}
				}
				$numarray=$numarray + 1;
			echo"
        </th>
        
        <th>";
        for ($i=1; $i<=25;$i++)
        {
            echo"I<br>";
        }
		echo "
        </th>
        
        <th>";
		if ($numarray % 2 == 0 )
		{
			if ($numarray != $totalrecord){
				$sqlgenap=("select * from USERINFO_DETAIL where ID = $array[$numarray]");
			$querygenap=$db->query($sqlgenap);
				while ($searchgenap= $querygenap->fetch()){
			?>
			<table>
        <tr>
         <th width='80'>No</th>
         <th width='80'><?php echo $searchgenap['ID']; ?></th>
         <th width='100'>penempatan</th>
         <th width='100'><?php echo $searchgenap['jabatan']; ?></th>                    
        </tr>    
        <tr>
         <th width='80'>nama</th>
         <th width='80'><?php echo $searchgenap['nama']; ?></th>
         <th width='100'>bagian</th>
         <th width='100'><?php echo $searchgenap['bagian']; ?></th>    
           
        </tr>
        <tr>
            <th colspan="4"><hr width="100%"></th>
        </tr>
        <tr>
         <th width='80'>Jenis Pekerjaan</th>
         <th width='80'>Gaji Harian</th>
         <th width='100'>Absensi</th>
         <th width='100'>Total Absensi</th>   
        </tr> 
       </table>
       <table>
       <?php 
	   $sqlket=("select * from USERINFO_JENIS_PEKERJAAN where ID = $array[$numarray]");
			$queryket=$db->query($sqlket);
    while ($ket= $queryket->fetch())
        {
            echo "<tr>
             <th width='80%'>".$ket['jenis_pekerjaan'].". jns pekerjaan</th>
             <th width='80%'>gaji harian</th>
             <th width='80%'>absensi</th>
             <th width='80%'>jumlah absensi</th>    
            </tr> ";
        }echo"
            <tr>
            <th align='center' colspan='2'>total</th>
            <th  align='center'  colspan='2'>.....</th>
        </tr>
        <tr>
            <th>Jumlah Hari Kerja</th>
            <th>.........</th>
            <th>pembulatan</th>
            <th>..........</th>
        </tr>
        <tr>
            <th colspan='4'><br><br></th>
        </tr>
        <tr>
            <th align='center' colspan='4'>pandaan.....tgl</th>

        </tr>
        <tr>
            <th align='center' colspan='4'>diterima oleh</th>

        </tr>
        <tr>
            <th colspan='4' align='center' ><br><br><br></th>

        </tr>
        <tr>
            <th colspan='4' align='center'>Wulan meidite</th>

        </tr>";?>   
       </table>
              
       <?php
			
			}
			}
			
			}
			$numarray=$numarray + 1;
		echo"
        </th></tr>
   </table>";
}
}
catch (Exception $e) {
    echo 'Caught exception: ',  $e->getMessage(), "\n";
}
?>
</font>
</body>