<?php
    include '../../file/query.php';
    $ds=new query();
    $ds1=new query();
    $ds->koneksi('julia_ajjwa');
    $ds1->koneksi('julia_ajjwa');
	ob_start();
    // include(dirname(__FILE__).'/tes.php');
    $nota=$_GET['status'];
    if ($nota=='nota') {        
        $kertas='p';
        $ukuran='a4';   

        $ds->select("no","no_nota");
        $data=mysqli_fetch_array($ds->sql);
        $nomor=0;
        if ($data['no']=="0") {
            $nomor++;
            $ds->insert("no_nota","'".$nomor."'");
        }else{
            //cuma buat ngecek aja
            $ds->query1("SELECT penjualan_produk.id,SUM(penjualan_produk.jumlah)AS totitem,produk.nama,produk.harga_jual,produk.id,(produk.stok_akhir-penjualan_produk.jumlah)as sisastok,penjualan_produk.total,penjualan_produk.bayar,penjualan_produk.kembalian,penjualan_produk.ppn,penjualan_produk.disc FROM penjualan_produk JOIN produk ON penjualan_produk.id_produk=produk.id WHERE penjualan_produk.id_user='".$_POST['kartu']."' and penjualan_produk.nota='BELUM' GROUP BY penjualan_produk.id_produk");
            $count_produk=mysqli_num_rows($ds->sql);
            if ($count_produk>0) {
                // echo $count_produk."bgs<br>";
                $nomor=$data['no']+1;
                $ds->query1("update no_nota set no='".$nomor."'");
            }
        }     
        echo '
                <table border="" style="font-size: 9px;">  
                    <tr>              
                        <td>'.$nomor.'</td>                
                        <td colspan="3" style=" text-align: center;">Julia Ajjwa</td>           
                            
                    </tr>
                    <tr>                        
                        <td colspan="4" style=" text-align: center;">Skin Care & Facial Treatment</td>                      
                    </tr>
                    <tr>                       
                        <td style="width: 10px; text-align: center;">NO</td>            
                        <td style="width: 100px; text-align: center;">ITEM</td>
                        <td style="width: 30px;  text-align: center;">Qty</td>
                        <td style="width: 30px;  text-align: center;">Price</td>
                    </tr>
            ';       
            $ds->query1("SELECT penjualan_produk.id,SUM(penjualan_produk.jumlah)AS totitem,produk.nama,produk.harga_jual,produk.id,(produk.stok_akhir-penjualan_produk.jumlah)as sisastok,penjualan_produk.total,penjualan_produk.bayar,penjualan_produk.kembalian,penjualan_produk.ppn,penjualan_produk.disc FROM penjualan_produk JOIN produk ON penjualan_produk.id_produk=produk.id WHERE penjualan_produk.id_user='".$_POST['kartu']."' and penjualan_produk.nota='BELUM' GROUP BY penjualan_produk.id_produk");
            $count_produk=mysqli_num_rows($ds->sql);
            $i=1;
            $baris=0;
            $ppn=0;
            $disc=0;
            $tota=0;
            $bayar=0;
            $kembalian=0;
            if ($count_produk!=0) {
                while ($data=mysqli_fetch_array($ds->sql)) {
                    $disc=$data['disc'];
                    $ppn=$data['ppn'];
                    $tota=$data['total'];
                    $bayar=$data['bayar'];
                    $kembalian=$data['kembalian'];
                    echo "
                        <tr>
                            <td style='text-align: center;'>".$i."</td>         
                            <td>".$ds1->bgs_uang($data['nama'])."</td>
                            <td>".$ds1->bgs_uang($data['totitem'])."</td>
                            <td>".$ds1->bgs_uang($data['harga_jual'])."</td>
                        </tr>                        
                    ";
                    $i++;
                    $baris++;
                }
            }
            

            $ds->update("penjualan_produk","no_nota='".$nomor."'","nota='BELUM' and id_user='".$_POST['kartu']."'");
            $ds->query1("SELECT poin_bulanan_gratis.id,poin_bulanan_gratis.id_user,user.nama,user.password,waktu_treatment.waktu,poin_bulanan_gratis.tgl_treatmen,poin_bulanan_gratis.pilihan_treatment,poin_bulanan_gratis.ppn,poin_bulanan_gratis.disc,poin_bulanan_gratis.total_bayar,poin_bulanan_gratis.bayar,poin_bulanan_gratis.kembalian FROM `poin_bulanan_gratis` JOIN user ON poin_bulanan_gratis.id_user=user.password JOIN waktu_treatment ON poin_bulanan_gratis.id_waktu_treatment=waktu_treatment.id WHERE poin_bulanan_gratis.nota='BELUM' AND poin_bulanan_gratis.status='TERPROSES' AND id_user='".$_POST['kartu']."' ORDER BY `poin_bulanan_gratis`.`tgl_treatmen` ASC");
            $count_produk1=mysqli_num_rows($ds->sql);
            $ppn1=0;
            $disc1=0;
            $total=0;
            $bayar1=0;
            $kembalian1=0;
            if ($count_produk1!=0) {
                $data=mysqli_fetch_array($ds->sql);
                $disc1=$data['disc'];
                $ppn1=$data['ppn'];
                $total=$data['total_bayar']+$tota;
                $bayar1=$data['bayar']+$bayar;
                $kembalian1=$data['kembalian']+$kembalian;
                $jumtreatment=explode("+",$data['pilihan_treatment']);    
                if (count($jumtreatment)==1) {
                    $ds1->selwer("*","treatment_price_list","id='".$jumtreatment[0]."' and status='AKTIF'");
                    $tem=mysqli_fetch_array($ds1->sql);        
                    echo "
                         <tr>
                            <td style='text-align: center;'>".$i."</td>         
                            <td>".substr($data['pilihan_treatment'],0,24)."</td>
                            <td>1</td>
                            <td>".$ds1->bgs_uang($tem['harga'])."</td>
                        </tr>                        
                    ";
                    $i++;
                    $baris++;
                }else{
                    for($a=0;$a<count($jumtreatment);$a++){
                        // print_r($jumtreatment[1]);
                        // $ds1->selwer("*","treatment_price_list"," nama ='".$jumtreatment[$a]."' and status='AKTIF'");
                        // echo $jumtreatment[1];
                        $ds1->query1("SELECT * FROM `treatment_price_list` WHERE id='".$jumtreatment[$a]."' and status='AKTIF'");
                        $tem=mysqli_fetch_array($ds1->sql);
                        echo "
                            <tr>
                                <td style='text-align: center;'>".$i."</td>         
                                <td>".substr($tem['nama'],0,21)."</td>
                                <td>1</td>
                                <td>".$ds1->bgs_uang($tem['harga'])."</td>
                            </tr>                            
                        ";
                        $i++;
                        $baris++;
                    }
                }
            }  
            $ds->update("poin_bulanan_gratis","no_nota='".$nomor."'","nota='BELUM' and status='TERPROSES' and id_user='".$_POST['kartu']."'");  
            // echo $baris;
            for ($i=$i; $i<18; $i++) { 
                if ($i==18-1) {
                    echo "
                        <tr>
                            <td style='text-align: center;'></td>         
                            <td></td>
                            <td>Produk</td>
                            <td>Treatment</td>
                        </tr>
                    ";
                }else{
                    echo "
                        <tr>
                            <td style='text-align: center;'>".$i.
                            "</td>         
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                    ";
                }
            }
            echo '
                <tr>                          
                    <td></td>
                    <td style="text-align: left;">PPN :</td> 
                    <td>'.$ds1->bgs_uang($ppn).'</td>     
                    <td>'.$ds1->bgs_uang($ppn1).'</td>
                </tr>
                <tr>                    
                    <td></td>
                    <td style="text-align: left;">Disc :</td>    
                    <td>'.$ds1->bgs_uang($disc).'</td> 
                    <td>'.$ds1->bgs_uang($disc1).'</td>
                </tr>
                <tr>                    
                    <td></td>
                    <td style="text-align: left;">Total :</td>        
                    <td colspan="2" style="text-align: left;">'.$ds1->bgs_uang(($total+$tota)).'</td>
                </tr>
                 <tr>                        
                    <td></td>
                    <td></td>
                    <td colspan=2><hr width="auto"></td>
                </tr>
                <tr>                        
                    <td></td>
                    <td style="text-align: left;" >Pembayaran :</td>       
                    <td colspan="2" style="text-align: left;">'.$ds1->bgs_uang(($bayar1+$bayar)).'</td>
                </tr>
                <tr>                                    
                    <td></td>
                    <td style="text-align: left;">Kembalian :</td>        
                    <td colspan="2" style="text-align: left;">'.$ds1->bgs_uang(substr($kembalian1,0,8)).'</td>
                </tr>       
                <tr>                            
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>                        
                    <td style="text-align: center;" colspan="4">Your Facial Skin Health is Our Motivation</td>
                </tr>
                <tr>                            
                    <td style="text-align: center;" colspan="4">Thank You For Your Visit</td>
                </tr>
                <tr>                            
                    <td style="text-align: center;" colspan="4">Jl. Siwalankerto Utara, Pasar LKMK AA7-Surabaya</td>       
                </tr>   
            </table>
            ';
            $ds->update("poin_bulanan_gratis","nota='SUDAH'"," id_user='".$_POST['kartu']."'");
            $ds->update("penjualan_produk","nota='SUDAH'"," id_user='".$_POST['kartu']."'");
        // include '../../file/notatransaksi.php';

        // laporan treatment
    }else if($nota=="ltreatment"){
        $kertas='L';
        $ukuran='a4';
        $tamb="";
        if (!empty($_POST['tgl1'])) {
            if (!empty($_POST['ttreatment']) ){
                $tamb="+".$_POST['ttreatment'];
            }
            $ds->query1("
                SELECT pbg.id,pbg.tgl_treatmen,pbg.pilihan_treatment,pbg.total_bayar,user.nama,wt.waktu from poin_bulanan_gratis as pbg JOIN user ON pbg.id_user=user.password JOIN waktu_treatment as wt ON pbg.id_waktu_treatment=wt.id WHERE pbg.status='TERPROSES' AND user.password LIKE '%".$_POST['nama1']."%' AND wt.waktu LIKE '%".$_POST['waktu']."%' AND (pbg.tgl_treatmen BETWEEN '".$_POST['tgl']."' AND '".$_POST['tgl1']."') AND pbg.pilihan_treatment LIKE '%".$_POST['ptreatment'].$tamb."%' ORDER BY pbg.tgl_treatmen ".$_POST['jenis']."
            ");
        }else{
             if (!empty($_POST['ttreatment'])) {
               $tamb="+".$_POST['ttreatment'];
            }
            $ds->query1("
                SELECT pbg.id,pbg.tgl_treatmen,pbg.pilihan_treatment,pbg.total_bayar,user.nama,wt.waktu from poin_bulanan_gratis as pbg JOIN user ON pbg.id_user=user.password JOIN waktu_treatment as wt ON pbg.id_waktu_treatment=wt.id WHERE pbg.status='TERPROSES' AND user.nama LIKE '%".$_POST['nama1']."%' AND wt.waktu LIKE '%".$_POST['waktu']."%' AND pbg.tgl_treatmen LIKE '%".$_POST['tgl']."%' AND pbg.pilihan_treatment LIKE '%".$_POST['ptreatment'].$tamb."%' ORDER BY pbg.tgl_treatmen ".$_POST['jenis']."
            ");
        }
        $total_semuanya=0;
        $count=mysqli_num_rows($ds->sql);
        if ($count>0) {
            echo "
                <table border='1' style='font-size: 13px;''>
                    <tr>
                        <td style='text-align: center;'>No</td>
                        <td style='text-align: center;'>Nama</td>
                        <td style='text-align: center;'>Waktu</td>
                        <td style='text-align: center;'>Tanggal</td>
                        <td colspan='2' style='text-align: center;'>Pilihan Treatment</td>
                        <td style='text-align: center;'>Total Pembayaran</td>
                    </tr>
            ";
            $no=1;
            while ($data=mysqli_fetch_array($ds->sql)) {
                echo "
                     <tr>
                        <td>".$no."</td>
                        <td>".$data['nama']."</td>
                        <td>".$data['waktu']."</td>
                        <td>".$data['tgl_treatmen']."</td>
                        ";
                        $explodeT=explode("+",$data['pilihan_treatment']);
                        if (count($explodeT)==1) {
                            echo "
                                <td>".$data['pilihan_treatment']."</td>
                                <td></td>
                            ";   
                        }else{
                            echo "
                                <td>".$explodeT[0]."</td>
                                <td>".$explodeT[1]."</td>
                            ";
                        }
                    echo "
                        <td>".$ds1->bgs_uang($data['total_bayar'])."</td>
                    </tr>
                ";
                $total_semuanya+=$data['total_bayar'];
                $no++;
                
            }
            echo "  
                 <tr>  
                    <td colspan='6' text-align='center'>Total Semua Penjualan</td>                     
                    <td style='text-align: center;'>".$ds1->bgs_uang($total_semuanya)."</td>
                </tr>
                </table>
            "; 
        }else{
            echo "DATA YANG ANDA CARI TIDAK ADA";
        }
    
        
    } else if($nota=="poin"){
        $kertas='L';
        $ukuran='a4';
        switch ($_POST['urutkan']) {
            case 1:
                $urutkan='poin_bonus.poin';
                break;            
            case 2:
                $urutkan='poin_bonus.bulan';
                break;
            case 3:
                $urutkan='poin_bonus.uang';
                break;
            
            case 4:
                $urutkan='poin_bonus.tgl';
                break;
            case 5:
                $urutkan='simpan_idbonus.total_poin';
                break;            
            case 6:
                $urutkan='simpan_idbonus.total_bulan';
                break;
            case 7:
                $urutkan='bonus.uang';
                break;
            
            case 8:
                $urutkan='simpan_idbonus.tgl';
                break;
        }
        if ($_POST['laporan']=='free'){
            if (!empty($_POST['tgl']) and !empty($_POST['tgl1']) AND !empty($_POST['id'])) {
                // BETWEEN
                $ds->query1("SELECT poin_bonus.poin,poin_bonus.uang,poin_bonus.bulan,poin_bonus.tgl,user.nama,user.password FROM poin_bonus JOIN user ON user.id=poin_bonus.id WHERE poin_bonus.terbayar='SUDAH'AND user.password='".$_POST['id']."' AND poin_bonus.tgl BETWEEN  '".$_POST['tgl']."' and '".$_POST['tgl1']."'  ORDER by ".$urutkan." ".$_POST['jenis']."");
            }elseif (!empty($_POST['tgl']) AND !empty($_POST['id'])) {
                // gunakan tanggal
                $ds->query1("SELECT poin_bonus.poin,poin_bonus.uang,poin_bonus.bulan,poin_bonus.tgl,user.nama,user.password FROM poin_bonus JOIN user ON user.id=poin_bonus.id WHERE poin_bonus.terbayar='SUDAH'AND user.password='".$_POST['id']."' AND poin_bonus.tgl like '%".$_POST['tgl']."%'  ORDER by ".$urutkan." ".$_POST['jenis']."");
            }else{
               
                if (!empty($_POST['id'])) {
                    // gunakan id_user
                    $ds->query1("SELECT poin_bonus.poin,poin_bonus.uang,poin_bonus.bulan,poin_bonus.tgl,user.nama,user.password FROM poin_bonus JOIN user ON user.id=poin_bonus.id WHERE poin_bonus.terbayar='SUDAH'AND user.password='".$_POST['id']."'  ORDER by ".$urutkan." ".$_POST['jenis']."");
                }else if (!empty($_POST['tgl']) and !empty($_POST['tgl1'])) {                                
                    $ds->query1("SELECT poin_bonus.poin,poin_bonus.uang,poin_bonus.bulan,poin_bonus.tgl,user.nama,user.password FROM poin_bonus JOIN user ON user.id=poin_bonus.id WHERE poin_bonus.terbayar='SUDAH' AND poin_bonus.tgl BETWEEN  '".$_POST['tgl']."' and '".$_POST['tgl1']."'  ORDER by ".$urutkan." ".$_POST['jenis']."");
                }elseif (!empty($_POST['tgl'])) {
                    // gunakan tanggal
                    $ds->query1("SELECT poin_bonus.poin,poin_bonus.uang,poin_bonus.bulan,poin_bonus.tgl,user.nama,user.password FROM poin_bonus JOIN user ON user.id=poin_bonus.id WHERE poin_bonus.terbayar='SUDAH' AND poin_bonus.tgl like '%".$_POST['tgl']."%'  ORDER by ".$urutkan." ".$_POST['jenis']."");
                }else{
                     // tanpa id
                    $ds->query1("SELECT poin_bonus.poin,poin_bonus.uang,poin_bonus.bulan,poin_bonus.tgl,user.nama,user.password FROM poin_bonus JOIN user ON user.id=poin_bonus.id WHERE poin_bonus.terbayar='SUDAH' ORDER by ".$urutkan." ".$_POST['jenis']."");
                }                                                      
            } 

            echo "
                <table border='1' style='font-size: 13px;'>
                    <tr>
                        <td>Nama</td>
                        <td>ID</td>
                        <td>Bulan</td>
                        <td>Poin</td>
                        <td>Fee</td>
                        <td>Tanggal</td>
                    </tr>
                
            ";

            while ($data=mysqli_fetch_array($ds->sql)) {
                echo "
                    <tr>
                        <td>".$data['nama']."</td>
                        <td>".$data['password']."</td>
                        <td>".$data['bulan']."</td>
                        <td>".$ds1->bgs_uang($data['poin'])."</td>
                        <td>".$ds1->bgs_uang($data['uang'])."</td>
                        <td>".$data['tgl']."</td>
                    </tr>
                ";
            }
            echo "
                </table>
            ";

            // bonus            
        }else{
            if (!empty($_POST['tgl']) and !empty($_POST['tgl1']) AND !empty($_POST['id'])) {
                // BETWEEN
                $ds->query1("SELECT simpan_idbonus.id_bonus,simpan_idbonus.total_bulan,simpan_idbonus.total_poin,simpan_idbonus.tgl,user.nama,user.password,bonus.uang,bonus.tambahan FROM simpan_idbonus JOIN user ON user.id=simpan_idbonus.id_user JOIN bonus ON simpan_idbonus.id_bonus=bonus.id WHERE simpan_idbonus.status!='AKTIF' AND user.password='".$_POST['id']."' AND simpan_idbonus.tgl BETWEEN  '".$_POST['tgl']."' and '".$_POST['tgl1']."' ORDER by ".$urutkan." ".$_POST['jenis']."");
            }elseif (!empty($_POST['tgl']) AND !empty($_POST['id'])) {
                // gunakan tanggal
                $ds->query1("SELECT simpan_idbonus.id_bonus,simpan_idbonus.total_bulan,simpan_idbonus.total_poin,simpan_idbonus.tgl,user.nama,user.password,bonus.uang,bonus.tambahan FROM simpan_idbonus JOIN user ON user.id=simpan_idbonus.id_user JOIN bonus ON simpan_idbonus.id_bonus=bonus.id WHERE simpan_idbonus.status!='AKTIF' AND user.password='".$_POST['id']."'AND poin_bonus.tgl like '%".$_POST['tgl']."%' ORDER by ".$urutkan." ".$_POST['jenis']."");
            }else{               
                if (!empty($_POST['id'])) {
                    // gunakan id_user
                    $ds->query1("SELECT simpan_idbonus.id_bonus,simpan_idbonus.total_bulan,simpan_idbonus.total_poin,simpan_idbonus.tgl,user.nama,user.password,bonus.uang,bonus.tambahan FROM simpan_idbonus JOIN user ON user.id=simpan_idbonus.id_user JOIN bonus ON simpan_idbonus.id_bonus=bonus.id WHERE simpan_idbonus.status!='AKTIF' AND user.password='".$_POST['id']."' ORDER by ".$urutkan." ".$_POST['jenis']."");               
                }else if (!empty($_POST['tgl']) and !empty($_POST['tgl1'])) {        
                    $ds->query1("SELECT simpan_idbonus.id_bonus,simpan_idbonus.total_bulan,simpan_idbonus.total_poin,simpan_idbonus.tgl,user.nama,user.password,bonus.uang,bonus.tambahan FROM simpan_idbonus JOIN user ON user.id=simpan_idbonus.id_user JOIN bonus ON simpan_idbonus.id_bonus=bonus.id WHERE simpan_idbonus.status!='AKTIF' AND simpan_idbonus.tgl BETWEEN  '".$_POST['tgl']."' and '".$_POST['tgl1']."' ORDER by ".$urutkan." ".$_POST['jenis'].""); 
                }elseif (!empty($_POST['tgl'])) {
                    // gunakan tanggal
                   $ds->query1("SELECT simpan_idbonus.id_bonus,simpan_idbonus.total_bulan,simpan_idbonus.total_poin,simpan_idbonus.tgl,user.nama,user.password,bonus.uang,bonus.tambahan FROM simpan_idbonus JOIN user ON user.id=simpan_idbonus.id_user JOIN bonus ON simpan_idbonus.id_bonus=bonus.id WHERE simpan_idbonus.status!='AKTIF' AND poin_bonus.tgl like '%".$_POST['tgl']."%' ORDER by ".$urutkan." ".$_POST['jenis']."");
                }else{
                     // tanpa id
                    $ds->query1("SELECT simpan_idbonus.id_bonus,simpan_idbonus.total_bulan,simpan_idbonus.total_poin,simpan_idbonus.tgl,user.nama,user.password,bonus.uang,bonus.tambahan FROM simpan_idbonus JOIN user ON user.id=simpan_idbonus.id_user JOIN bonus ON simpan_idbonus.id_bonus=bonus.id WHERE simpan_idbonus.status!='AKTIF' ORDER by ".$urutkan." ".$_POST['jenis']."");
                }                                                      
            } 

            echo "
                <table border='1'>
                    <tr>
                        <td>Nama</td>
                        <td>ID</td>
                        <td>Bulan</td>
                        <td>Poin</td>
                        <td>Bonus</td>
                        <td>Tambahan</td>
                        <td>Tanggal</td>
                    </tr>               
            ";
            while ($data=mysqli_fetch_array($ds->sql)) {
                echo "
                    <tr>
                        <td>".$data['nama']."</td>
                        <td>".$data['password']."</td>
                        <td>".$data['total_bulan']."</td>
                        <td>".$ds1->bgs_uang($data['total_poin'])."</td>
                        <td>".$ds1->bgs_uang($data['uang'])."</td>
                        <td>".$data['tambahan']."</td>
                        <td>".$data['tgl']."</td>
                    </tr>
                ";
            }
            echo "
                 </table>
            ";

        }
        
        //laporan produk
    } else{
        $kertas='L';
        $ukuran='a4';
        switch ($_POST['urutkan']) {
            case 1:
                $urutkan='produk.nama';
                break;            
            case 2:
                $urutkan='produk.harga_beli';
                break;
            case 3:
                $urutkan='produk.harga_jual';
                break;
            
            case 4:
                $urutkan='produk.stok_awal';
                break;
            case 5:
               $urutkan='produk.stok_awal';
                break;
            case 6:
                $urutkan='jj_item';
                break;
        }
        // include 'alllaporan.php';   
        if ($_POST['laporan']=='all') {            
            if (!empty($_POST['tgl']) and !empty($_POST['tgl1'])) {                          
                $ds->query1("
                        SELECT produk.id,produk.nama,produk.id_kategori,produk.harga_beli,produk.harga_jual,produk.stok_awal,produk.stok_akhir,SUM(penjualan_produk.jumlah)as jj_item,(sum(penjualan_produk.jumlah)* produk.harga_beli) as tbeli,(sum(penjualan_produk.jumlah)* produk.harga_jual) as tjual,penjualan_produk.tgl,penjualan_produk.no_nota FROM produk JOIN penjualan_produk ON produk.id=penjualan_produk.id_produk WHERE produk.nama LIKE '%".$_POST['item']."%' AND penjualan_produk.id_user like '%".$_POST['id']."%' AND ( penjualan_produk.tgl BETWEEN '".$_POST['tgl']."' AND '".$_POST['tgl1']."') and penjualan_produk.status='TERJUAL' GROUP BY penjualan_produk.id_produk ORDER by ".$urutkan." ".$_POST['jenis']."
                    ");
            }elseif (!empty($_POST['tgl'])) {                     
                // echo "bagaga".$_POST['jenis']." <br>";                     
                $ds->query1("
                       SELECT produk.id,produk.nama,produk.id_kategori,produk.harga_beli,produk.harga_jual,produk.stok_awal,produk.stok_akhir,SUM(penjualan_produk.jumlah)as jj_item,(sum(penjualan_produk.jumlah)* produk.harga_beli) as tbeli,(sum(penjualan_produk.jumlah)* produk.harga_jual) as tjual,penjualan_produk.tgl,penjualan_produk.no_nota FROM produk JOIN penjualan_produk ON produk.id=penjualan_produk.id_produk WHERE produk.nama LIKE '%".$_POST['item']."%' AND penjualan_produk.id_user like '%".$_POST['id']."%' and penjualan_produk.tgl like '%".$_POST['tgl']."%' and penjualan_produk.status='TERJUAL' GROUP BY penjualan_produk.id_produk ORDER by ".$urutkan." ".$_POST['jenis']."
                    ");                
            }else{
                $ds->query1("
                    SELECT produk.id,produk.nama,produk.id_kategori,produk.harga_beli,produk.harga_jual,produk.stok_awal,produk.stok_akhir,SUM(penjualan_produk.jumlah)as jj_item,(sum(penjualan_produk.jumlah)* produk.harga_beli) as tbeli,(sum(penjualan_produk.jumlah)* produk.harga_jual) as tjual,penjualan_produk.tgl,penjualan_produk.no_nota FROM produk JOIN penjualan_produk ON produk.id=penjualan_produk.id_produk WHERE  produk.nama LIKE '%".$_POST['item']."%' AND penjualan_produk.id_user like '%".$_POST['id']."%' and penjualan_produk.status='TERJUAL' GROUP BY penjualan_produk.id_produk  ORDER by ".$urutkan." ".$_POST['jenis']."
                ");
            }   
            echo "
                <table border='1' style='font-size: 13px;'>
                    <tr>
                        <td style='color:red;'>NO</td>
                        <td>ITEM</td>";                        
                        if (empty($_POST['id'])) {
                           echo "
                                <td>Harga Beli</td>
                           ";
                        }
                        

            echo "
                        <td>Harga Jual</td>";
                        if (empty($_POST['id'])) {
                           echo "
                                <td>Stok Awal</td>
                                <td>Stok Akhir</td>
                           ";
                        }
            echo "
                        <td>Penjualan</td>
                        ";
                    if (empty($_POST['id'])) {
                           echo "
                                <td>Total Beli</td>
                           ";
                        }
            echo "
                        <td>Total Jual</td>
                        <td>No Nota</td>
                    </tr>
            ";
            $total_semuanya=0;
            // $count=0;
            // if (!empty($ds->sql)) {
            //     $count=mysqli_num_rows($ds->sql);
            // }        
            $count=mysqli_num_rows($ds->sql);
            if ($count>0) {
                $o=1;
                while ($data=mysqli_fetch_array($ds->sql)) {
                    echo "
                        <tr>
                            <td>".$o."</td>
                            <td>".$data['nama']."</td>";
                        if (empty($_POST['id'])) {
                           echo "
                                <td>".$ds1->bgs_uang($data['harga_beli'])."</td>                                
                           ";
                        }
                            
                    echo " <td>".$ds1->bgs_uang($data['harga_jual'])."</td>";
                        if (empty($_POST['id'])) {
                           echo "
                                <td>".$ds1->bgs_uang($data['stok_awal'])."</td>
                                <td>".$ds1->bgs_uang($data['stok_akhir'])."</td>
                           ";
                        }
                            
                    echo "<td>".$ds1->bgs_uang($data['jj_item'])."</td>";
                        if (empty($_POST['id'])) {
                           echo "
                                <td>".$ds1->bgs_uang($data['tbeli'])."</td>                              
                           ";
                        }
                            
                    echo "
                        <td>".$ds1->bgs_uang($data['tjual'])."</td>
                        <td>".$data['no_nota']."</td>
                        </tr>
                    ";
                    $o++;
                }                
            }
            echo "  
                </table>
            "; 


        // batasnya
        }else if($_POST['laporan']=="lost"){
             if (!empty($_POST['tgl']) and !empty($_POST['tgl1'])) {                          
                $ds->query1("
                        SELECT produk.id,produk.nama,produk.id_kategori,produk.harga_beli,produk.harga_jual,produk.stok_awal,produk.stok_akhir,SUM(penjualan_produk.jumlah)as jj_item,(sum(penjualan_produk.jumlah)* produk.harga_beli) as tbeli,(sum(penjualan_produk.jumlah)* produk.harga_jual) as tjual,penjualan_produk.tgl,brgfree.free,brgfree.lost,(brgfree.free*produk.harga_beli)AS totfree,(brgfree.lost*produk.harga_beli)AS totlost FROM produk JOIN penjualan_produk ON produk.id=penjualan_produk.id_produk JOIN brgfree ON brgfree.id_produk=produk.id WHERE produk.nama LIKE '%".$_POST['item']."%' AND ( penjualan_produk.tgl BETWEEN '".$_POST['tgl']."' AND '".$_POST['tgl1']."') GROUP BY penjualan_produk.id_produk ORDER BY ".$urutkan." ".$_POST['jenis']."
                    ");
            }elseif (!empty($_POST['tgl'])) {                                  
                $ds->query1("
                        SELECT produk.id,produk.nama,produk.id_kategori,produk.harga_beli,produk.harga_jual,produk.stok_awal,produk.stok_akhir,SUM(penjualan_produk.jumlah)as jj_item,(sum(penjualan_produk.jumlah)* produk.harga_beli) as tbeli,(sum(penjualan_produk.jumlah)* produk.harga_jual) as tjual,penjualan_produk.tgl,brgfree.free,brgfree.lost,(brgfree.free*produk.harga_beli)AS totfree,(brgfree.lost*produk.harga_beli)AS totlost FROM produk JOIN penjualan_produk ON produk.id=penjualan_produk.id_produk JOIN brgfree ON brgfree.id_produk=produk.id WHERE produk.nama LIKE '%".$_POST['item']."%' and penjualan_produk.tgl like '%".$_POST['tgl']."%' GROUP BY penjualan_produk.id_produk ORDER BY ".$urutkan." ".$_POST['jenis']."                      
                    ");                
            }else{
                $ds->query1("
                   SELECT produk.id,produk.nama,produk.id_kategori,produk.harga_beli,produk.harga_jual,produk.stok_awal,produk.stok_akhir,SUM(penjualan_produk.jumlah)as jj_item,(sum(penjualan_produk.jumlah)* produk.harga_beli) as tbeli,(sum(penjualan_produk.jumlah)* produk.harga_jual) as tjual,penjualan_produk.tgl,brgfree.free,brgfree.lost,(brgfree.free*produk.harga_beli)AS totfree,(brgfree.lost*produk.harga_beli)AS totlost FROM produk JOIN penjualan_produk ON produk.id=penjualan_produk.id_produk JOIN brgfree ON brgfree.id_produk=produk.id WHERE produk.nama LIKE '%".$_POST['item']."%' GROUP BY penjualan_produk.id_produk ORDER BY ".$urutkan." ".$_POST['jenis']."
                ");
            }   
            echo "
                <table border='1' style='font-size: 13px;'>
                    <tr>
                        <td>No</td>
                        <td>ITEM</td>                        
                        <td>Harga Jual</td>
                        <td>Stok Awal</td>
                        <td>Stok Akhir</td>
                        <td>Penjualan</td>
                        <td>Total Beli</td>
                        <td>Total Jual</td>
                        <td>Intertain</td>
                        <td>Total Intertain</td>
                        <td>Spoil</td>
                        <td>Total Spoil</td>
                    </tr> ";
            $count=mysqli_num_rows($ds->sql);
            if ($count>0) {
                $o=1;
                while ($data=mysqli_fetch_array($ds->sql)) {
                    echo "
                        <tr>
                            <td>".$o."</td>
                            <td>".$data['nama']."</td>
                            <td>".$ds1->bgs_uang($data['harga_beli'])."</td>
                            <td>".$ds1->bgs_uang($data['harga_jual'])."</td>
                            <td>".$ds1->bgs_uang($data['stok_awal'])."</td>
                            <td>".$ds1->bgs_uang($data['stok_akhir'])."</td>
                            <td>".$ds1->bgs_uang($data['jj_item'])."</td>
                            <td>".$ds1->bgs_uang($data['tbeli'])."</td>
                            <td>".$ds1->bgs_uang($data['tjual'])."</td>
                            <td>".$ds1->bgs_uang($data['free'])."</td>
                            <td>".$ds1->bgs_uang($data['totfree'])."</td>
                            <td>".$ds1->bgs_uang($data['lost'])."</td>
                            <td>".$ds1->bgs_uang($data['totlost'])."</td>
                        </tr>
                    ";
                    $o++;
                }                
            }
             echo "  
                </table>
            "; 
        }
    }
    
    $content = ob_get_clean();

    // convert to PDF
    require_once('../html2pdf.class.php');
    try
    {
        $html2pdf = new HTML2PDF($kertas,$ukuran, 'fr');
        $html2pdf->writeHTML($content, isset($_GET['vuehtml']));
        $html2pdf->Output('tes.pdf');
        // $html2pdf = new HTML2PDF('P', 'A4', 'fr', true, 'UTF-8', 0);
        // $html2pdf->writeHTML($content, isset($_GET['vuehtml']));
        // $html2pdf->createIndex('Sommaire', 25, 12, false, true, 1);
        // $html2pdf->Output('bookmark.pdf');
    }
    catch(HTML2PDF_exception $e) {
        echo $e;
        exit;
    }
?>