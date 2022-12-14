
<?php 
    $koneksi=new mysqli("localhost","root","","sinaraya"); 
    $no=1;
    $query=mysqli_query($koneksi,'select * from penggajian where id_user%2');
    while($result=mysqli_fetch_array($query))
    {
        echo "
        <table><tr>
                 <th>No</th>
                 <th width='60'>".$result['id_user']."</th>
                 <th>penempatan</th>
                 <th>penempatan?</th> 
                 <th rowspan='25' align='center' width='10'>
        ";
        for ($i=1; $i<=25;$i++)
        {
            echo"I<br>";
        }
        echo "
        </th>
         <th>No</th>
         <th width='60'>NOMOR?</th>
         <th>penempatan</th>
         <th  width='30%'>penempatan?</th>   
        </tr>
        <tr>
         <th width='80'>nama</th>
         <th width='80'>nama?</th>
         <th >bagian</th>
         <th >bagian?</th> 
         <th width='80'>nama</th>
         <th width='80'>nama?</th>
         <th >bagian</th>
         <th >bagian?</th>    
        </tr>
        <tr>
            <th colspan='4'><hr width='100%'></th> <th colspan='4'><hr width='100%'></th>
        </tr>
        <tr>
            <th>dari tgl</th>
            <th>..........</th>
            
                <th align='center'>/</th>
           
            
            <th>...........</th>
            <th>dari tgl</th>
            <th>..........</th>
            <th align='center'>/</th>
            <th>...........</th>
        </tr>
        <tr>
            <th colspan='4' height='100%'><hr width='100%'></th>
            <th colspan='4' height='100%'><hr width='100%'></th>
        </tr>
        <tr>
         <th>jns pekerjaan</th>
         <th>gaji harian</th>
         <th>absensi</th>
         <th >jumlah absensi</th>    
         <th>jenis pekerjaan</th>
         <th>gaji harian</th>
         <th>absensi</th>
         <th>jumlah absensi</th>   
        </tr>";
        for ($i=1; $i<=8;$i++)
        {
            echo "<tr>
             <th width='80%'>".$i.". jns pekerjaan</th>
             <th width='80%'>gaji harian</th>
             <th width='80%'>absensi</th>
             <th width='80%'>jumlah absensi</th>    
             <th width='80%'>".$i.". jns pekerjaan</th>
             <th width='80%'>gaji harian</th>
             <th width='80%'>absensi</th>
             <th width='80%'>jumlah absensi</th>   
            </tr> ";
        }
        echo"
            <tr>
            <th align='center' colspan='2'>total</th>
            <th  align='center'  colspan='2'>.....</th>
            <th  align='center'  colspan='2'>total</th>
            <th  align='center'  colspan='2'>.....</th>
        </tr>
        <tr>
            <th>Jumlah Hari Kerja</th>
            <th>.........</th>
            <th>pembulatan</th>
            <th>..........</th>
            <th>Jumlah Hari Kerja</th>
            <th>.........</th>
            <th>pembulatan</th>
            <th>..........</th>
        </tr>
        <tr>
            <th colspan='4'><br><br></th>
            <th colspan='4'><br><br></th>
        </tr>
        <tr>
            <th align='center' colspan='4'>pandaan.....tgl</th>
             <th align='center' colspan='4'>pandaan.....tgl</th>
        </tr>
        <tr>
            <th align='center' colspan='4'>diterima oleh</th>
             <th align='center' colspan='4'>diterima oleh</th>
        </tr>
        <tr>
            <th colspan='4' align='center' ><br><br><br></th>
             <th colspan='4' align='center'><br><br><br></th>
        </tr>
        <tr>
            <th colspan='4' align='center'>Wulan meidite</th>
            <th colspan='4' align='center'>Wulan meidite</th>
        </tr>
       
    </table>";
}
 ?>
