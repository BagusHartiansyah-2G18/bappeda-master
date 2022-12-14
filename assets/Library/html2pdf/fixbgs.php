<?php 
    $koneksi=new mysqli("localhost","root","","sinaraya"); 
    $no=1;
    $query=mysqli_query($koneksi,'select * from penggajian');
$numarray=1;
while ($temp=mysqli_fetch_array($query)){
	$array[$numarray] =  $temp['nama'];
	$numarray=$numarray + 1;
}
$numarray=1;
$looprecord = 1;
$totalrecord = ceil(mysqli_num_rows($query));
$halfrecord = round( $totalrecord/2);
try {
    for($looprecord;$looprecord<=$halfrecord;$looprecord++)
    {	
    	echo "
        <table>
            <tr>
            <th>";
            if ($numarray % 2 !=0 )
            {
                $ganjil=mysqli_query($koneksi,"select * from penggajian where nama = '$array[$numarray]'");
                while ($searchganjil=mysqli_fetch_array($ganjil)){
                //echo $searchganjil['id_user'].$searchganjil['jenis_pekerjaan'];
                ?>
                        <table>
                        <tr>
                         <th width='80'>No</th>
                         <th width='80'><?php echo $searchganjil['id_user'].$searchganjil['jenis_pekerjaan']; ?></th>
                         <th width='100'>penempatan</th>
                         <th width='100'>penempatan?</th>    
                         
                         
                        </tr>    
                        <tr>
                         <th width='80'>nama</th>
                         <th width='80'>nama?</th>
                         <th width='100'>bagian</th>
                         <th width='100'>bagian?</th>    
                           
                        </tr>
                        <tr>
                            <th colspan="4"><hr width="100%"></th>
                        </tr>
                        <tr>
                         <th width='80'>jns pekerjaan</th>
                         <th width='80'>gaji harian</th>
                         <th width='100'>absensi</th>
                         <th width='100'>jumlah absensi</th>   
                        </tr> 
                       </table>
                       <table>
                       <?php 
                    for ($i=1; $i<=8;$i++)
                        {
                            echo "<tr>
                             <th width='80%'>".$i.". jns pekerjaan</th>
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
                $genap=mysqli_query($koneksi,"select * from penggajian where nama = '$array[$numarray]'");
                while ($searchgenap=mysqli_fetch_array($genap)){        
                //echo $searchgenap['id_user'].$searchgenap['jenis_pekerjaan'];
                ?>
                    <table>
                    <tr>
                     <th width='80'>No</th>
                     <th width='80'><?php echo $searchgenap['id_user'] .$searchgenap['jenis_pekerjaan']; ?></th>
                     <th width='100'>penempatan</th>
                     <th width='100'>penempatan?</th>    
                     
                     
                    </tr>    
                    <tr>
                     <th width='80'>nama</th>
                     <th width='80'>nama?</th>
                     <th width='100'>bagian</th>
                     <th width='100'>bagian?</th>    
                       
                    </tr>
                    <tr>
                        <th colspan="4"><hr width="100%"></th>
                    </tr>
                    <tr>
                     <th width='80'>jns pekerjaan</th>
                     <th width='80'>gaji harian</th>
                     <th width='100'>absensi</th>
                     <th width='100'>jumlah absensi</th>   
                    </tr> 
                   </table>
                   <table>
                   <?php 
                for ($i=1; $i<=8;$i++)
                    {
                        echo "<tr>
                         <th width='80%'>".$i.". jns pekerjaan</th>
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
            $numarray=$numarray + 1;
            echo"
            </th>
            </tr>
       </table>";
    }
}
catch (Exception $e) {
    echo 'Caught exception: ',  $e->getMessage(), "\n";
}
?>