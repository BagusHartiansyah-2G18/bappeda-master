<style type="text/css">
    table
    {
        text-align: left;
    }
</style>
<?php 
    $dbName ="C:/xampp/htdocs/access/data2.mdb";
    $db = new PDO("odbc:DRIVER={Microsoft Access Driver (*.mdb)}; DBQ=$dbName; Uid=; Pwd=;");
    $tgl_awal="2/2/2018";
    $tgl_ahir="2/25/2018";
    $sql="SELECT DISTINCT penggajian.id_user, USERINFO_DETAIL.nama,penggajian.penempatan,penggajian.bagian
    FROM penggajian INNER JOIN USERINFO_DETAIL ON penggajian.id_user = USERINFO_DETAIL.ID where penggajian.tanggal between #".$tgl_awal."# and #".$tgl_ahir."#";
    $query=$db->query($sql);
    $id=array();
    $nama=array();
    $penempatan=array();
    $bagian=array();
    //bts yang ini untuk lembur
    $id_lembur1=array();
    $hari_lembur=array();
    $total_lembur=array();
    //bts
    $no=1;
    while ($result=$query->fetch()) {
        $id[$no]=$result['id_user'];
        $nama[$no]=$result['nama'];
        $penempatan[$no]=$result['penempatan'];
        $bagian[$no]=$result['bagian'];
        $no++;
    }
   
    $simpan_lembur;
    for($no1=1;$no1<($no-1);$no1++)
    {
        // for($nop=1;$nop<5;$nop++)
        // {
        //     echo "string";
        // }
         $sql1="SELECT penggajian.pekerjaan, Count(penggajian.pekerjaan) AS total, Gaji_Harian.Gaji, (total*Gaji_Harian.Gaji) AS total1 FROM (penggajian INNER JOIN Gaji_Harian ON penggajian.id_gaji = Gaji_Harian.ID) INNER JOIN Gaji_Lembur ON penggajian.id_lembur = Gaji_Lembur.ID 
            WHERE  (((penggajian.id_user)=".$id[$no1].") AND ((penggajian.tanggal) Between #".$tgl_awal."# And #".$tgl_ahir."#))
            GROUP BY penggajian.pekerjaan, Gaji_Harian.Gaji, penggajian.id_user";
        $query1=$db->query($sql1);
        
        // while ($data=$query1->fetch()){
        //     //echo $data['pekerjaan'];
        // }
        $sql1="SELECT penggajian.id_lembur, Count(penggajian.id_lembur) AS le, Gaji_Lembur.Gaji, (le*Gaji_Lembur.Gaji) AS tot, penggajian.id_user FROM penggajian INNER JOIN Gaji_Lembur ON penggajian.id_lembur = Gaji_Lembur.ID WHERE (((penggajian.tanggal) Between #".$tgl_awal."# And #".$tgl_ahir."#)) 
            GROUP BY penggajian.id_lembur, Gaji_Lembur.Gaji, penggajian.id_user
            HAVING (((penggajian.id_user)=".$id[$no1]."))";
        $query=$db->query($sql1);
        $no_lembur=1;
        while ($data1=$query->fetch()) {
            $id_lembur1[$no_lembur]=$data1['id_lembur'];
            $hari_lembur[$no_lembur]=$data1['le'];
            $total_lembur[$no_lembur]=$data1['tot'];
            $no_lembur++;
        }
        //echo $data['total']."/".$data1['tot'];
        echo "<table border = '1'>
        <tr>
            <th>
                <table >
                    <tr>
                         <th >No</th>
                         <th>".$id[$no1]."</th>
                         <th>penempatan</th>
                         <th>".$penempatan[$no1]."</th> 
                         <th rowspan='25'  >
                        </th>
                    </tr>
                    <tr>
                         <th>nama</th>
                         <th>".substr($nama[$no1],0,10)."</th>
                         <th >bagian</th>
                         <th >".$bagian[$no1]."</th>            
                    </tr>
                    <tr>
                        <th colspan='4'><hr %'></th> <th colspan='4'><hr></th>
                    </tr>
                    <tr>
                        <th>dari tgl</th>
                        <th>".$tgl_awal."</th>                        
                        <th >/</th>                                        
                        <th>".$tgl_ahir."</th>
                    </tr>
                    <tr>
                        <th colspan='4'><hr></th>
                    </tr>
                    <tr>
                     <th>jns pekerjaan</th>
                     <th>gaji harian</th>
                     <th>absensi</th>
                     <th>Jml absensi</th>
                     </th><th>";    	
                     $garis=0;
                     $i=1;
                     $simpantampil="";
                     $total_gaji=0;
                     $no_lembur=1;
                     $datasementara="";
                while ($data=$query1->fetch()) 
                {

                    if(!empty($id_lembur1[$no_lembur]))
                    {
                      $data['total1']+=$total_lembur[$no_lembur];
                       $datasementara='/'.$id_lembur1[$no_lembur].'/'.$hari_lembur[$no_lembur].'/'.$total_lembur[$no_lembur]; 
                        $no_lembur++;                   
                    }
                    else
                    {
                        $datasementara="";
                    }
                    $garis++;
                   $simpantampil.="<tr>
                     <th '>".$i.". ".$data['pekerjaan']."</th>
                     <th '>".$data['Gaji']."</th>  
                     <th '>".$data['total']."</th>
                     <th '>".$data['total1'].$datasementara."</th>    
                     ";
                    $total_gaji+=$data['total1'];
                     $i++;
                }
                echo $simpantampil;
                $simpantampil1="";
                for ($garis;$garis<=8;$garis++)
                {           
                    $simpantampil1.="<tr>
                     <th '>".$i.". - </th>
                     <th '> - </th>
                     <th '> - </th>
                     <th '> - </th>    
                     ";       
                     $i++;                             
                }
                echo $simpantampil1;
            echo"</th><th>
                <tr>
                    <th  colspan='2'>total</th>
                    <th  colspan='2'>".$total_gaji."</th>
                </tr>
                <tr>
                    <th>Jml Hari Kerja</th>
                    <th>.........</th>
                    <th>pembulatan</th>
                    <th>..........</th>
                </tr>
                <tr>
                    <th colspan='4'><br><br></th>
                </tr>
                <tr>
                    <th  colspan='4'>pandaan.....tgl</th>
                </tr>
                <tr>
                    <th  colspan='4'>diterima oleh</th>
                </tr>
                <tr>
                    <th colspan='4'  ><br><br><br></th>
                </tr>
                <tr>
                    <th colspan='4' >Wulan meidite</th>
                </tr>
           
            </table>";
        ?>
         </th>
         <th>
        <?php
		    for ($i=1; $i<=29;$i++)
            {
                echo"I<br>";
            }
		?>
        </th>
        <th>
        <?php
        echo "
            <table>
                <tr>
                     <th>No</th>
                     <th>".$id[$no1]."</th>
                     <th>penempatan</th>
                     <th>".$penempatan[$no1]."</th> 
                     <th rowspan='25'  >
                    </th>
                </tr>
                <tr>
                     <th>nama</th>
                     <th>".substr($nama[$no1],0,10)."</th>
                     <th >bagian</th>
                     <th >".$bagian[$no1]."</th>             
                </tr>
                <tr>
                    <th colspan='4'><hr %'></th> <th colspan='4'><hr %'></th>
                </tr>
                <tr>
                    <th>dari tgl</th>
                    <th>".$tgl_awal."</th>                        
                    <th >/</th>                                        
                    <th>".$tgl_ahir."</th>
                </tr>
                <tr>
                    <th colspan='4'><hr %'></th>
                </tr>
                <tr>
                 <th>jns pekerjaan</th>
                 <th>gaji harian</th>
                 <th>absensi</th>
                 <th >Jml absensi</th>
                 </th><th>";
            echo $simpantampil.$simpantampil1;
            echo"</th><th>
                <tr>
                    <th  colspan='2'>total</th>
                    <th    colspan='2'>".$total_gaji."</th>
                </tr>
                <tr>
                    <th>Jml Hari Kerja</th>
                    <th>.........</th>
                    <th>pembulatan</th>
                    <th>..........</th>
                </tr>
                <tr>
                    <th colspan='4'><br><br></th>
                </tr>
                <tr>
                    <th  colspan='4'>pandaan.....tgl</th>
                </tr>
                <tr>
                    <th  colspan='4'>diterima oleh</th>
                </tr>
                <tr>
                    <th colspan='4'  ><br><br><br></th>
                </tr>
                <tr>
                    <th colspan='4' >Wulan meidite</th>
                </tr>
       </table> 
    </th></tr>
 </table>";
	}
  ?>