<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

    // print data for array
    function _log($msg){
        echo "<pre>";
        print_r($msg);
    }
    function _headerLapiran($v){
        $CI =& get_instance();
        $w1="70%;";
        $w2="7%;";
        $w3="23%;";
        return '
            <table cellspacing="0" cellpadding="0" border="0" style="text-align: center; width:100%;" border="2">
                <tr>
                    <td style="width:10%; margin-top:20%;">
                        <img src="'.$v['assert'].'/fs_css/logo/'.$CI->mbgs->app['logo'].'" class="img-circle" width="50">
                    </td>
                    <td style="width:70%; margin-top:20%; font-size:15px;">
                        <br><br><b>RINCIAN BELANJA SUB KEGIATAN<br>
                        SATUAN KERJA PERANGKAT DAERAH</b><br>
                    </td>
                    <td style="width:20%; margin-top:20%;font-size:15px;">
                        <br><br><b>'.$v['nmTahapan'].'</b><br>
                    </td>
                </tr>
                <tr>
                    <td style="width:100%; font-size:13px;" rowspan="3">
                        <b>Pemerintah Kabupaten Sumbawa Barat Tahun Anggaran '.$v['tahun'].'</b><br>
                    </td>
                </tr>
            </table>
        ';
    }
    function _informasiRenstra($v){
        $dt=$v['drenstra'][0];
        $CI =& get_instance();
        $w1="15%;";
        $w2="15%;";
        $w3="70%;";
        return '<br><br>
        <table style="font-size:10px;" class="table">
            <tbody>
                <tr>
                    <td style="text-align:left;" width="'.$w1.'">
                        Dinas
                    </td>
                    <td style="text-align:left;" width="'.$w2.'">
                        :
                    </td>
                    <td style="text-align:left;" width="'.$w3.'">
                        '.$dt['nmDinas'].'
                    </td>
                </tr>
                <tr>
                    <td style="text-align:left;" width="'.$w1.'">
                        Urusan
                    </td>
                    <td style="text-align:left;" width="'.$w2.'">
                        :'.$dt['kdUrusan'].'
                    </td>
                    <td style="text-align:left;" width="'.$w3.'">
                        '.$dt['nmUrusan'].'
                    </td>
                </tr>
            
                <tr>
                    <td style="text-align:left;">
                        Bidang
                    </td>
                    <td style="text-align:left;">
                        :'.$dt['kdBidang'].'
                    </td>
                    <td style="text-align:left;">
                        '.$dt['nmBidang'].'
                    </td>
                </tr>
            
                <tr>
                    <td style="text-align:left;">
                        Program
                    </td>
                    <td style="text-align:left;">
                        :'.$dt['kdProg'].'
                    </td>
                    <td style="text-align:left;">
                        '.$dt['nmProg'].'
                    </td>
                </tr>
            
                <tr>
                    <td style="text-align:left;">
                        Kegiatan
                    </td>
                    <td style="text-align:left;">
                        :'.$dt['kdKeg'].'
                    </td>
                    <td style="text-align:left;">
                        '.$dt['nmKeg'].'
                    </td>
                </tr>
            
                <tr>
                    <td style="text-align:left;">
                        Sub Kegiatan
                    </td>
                    <td style="text-align:left;">
                        :'.$dt['kdSub'].'
                    </td>
                    <td style="text-align:left;">
                        '.$dt['nmSub'].'
                    </td>
                </tr>


                <tr>
                    <td style="text-align:left;">
                        Lokasi Kegiatan
                    </td>
                    <td style="text-align:left;">
                        :
                    </td>
                    <td style="text-align:left;">
                         
                    </td>
                </tr>
            
                <tr>
                    <td style="text-align:left;">
                        Waktu Pelaksanaan
                    </td>
                    <td style="text-align:left;">
                        :
                    </td>
                    <td style="text-align:left;">
                         
                    </td>
                </tr>
            
                <tr>
                    <td style="text-align:left;">
                        Kelompok Sasaran
                    </td>
                    <td style="text-align:left;">
                        :
                    </td>
                    <td style="text-align:left;">
                         
                    </td>
                </tr>

                <tr>
                    <td style="text-align:left;">
                        Belanja '.$v['tahun'].'
                    </td>
                    <td style="text-align:left;">
                        : Rp. '.$CI->mbgs->_uang($v['totalPagu']).'
                    </td>
                    <td style="text-align:left;">
                         
                    </td>
                </tr>
            </tbody>
        </table>
        ';
    }
    function _informasiIndikator($v){
        $dt=$v['drenstra'][0];
        $CI =& get_instance();
        $textC='style="text-align:center;"';
        $textL='style="text-align:left;"';
        
        $w1="10%;";
        $w2="80%;";
        $w3="10%;";
        return '<br><br>
        <table style="font-size:10px;" class="table" border="1">
            <tbody>
                <tr>
                    <td colspan="3" '.$textC.' width="100%">
                        Indikator & Tolok Ukur Kinerja Belanja
                    </td>
                </tr>
                <tr style="bakground-color:gray;">
                    <td  width="'.$w1.'" '.$textL.'>
                        Indikator
                    </td>
                    <td '.$textC.' width="'.$w2.'">
                        Tolok Ukur Kinerja
                    </td>
                    <td '.$textC.' width="'.$w3.'">
                        Target Kinerja
                    </td>
                </tr>
            
                <tr>
                    <td '.$textL.'>
                        Masukan
                    </td>
                    <td style="text-align:left;">
                        Jumlah Dana
                    </td>
                    <td style="text-align:left;">
                        '.$CI->mbgs->_uang($v['totalPagu']).'
                    </td>
                </tr>
            
                <tr>
                    <td style="text-align:left;">
                        Keluaran
                    </td>
                    <td style="text-align:left;">
                         
                    </td>
                    <td style="text-align:left;">
                         
                    </td>
                </tr>
            
                <tr>
                    <td style="text-align:left;">
                        Hasil
                    </td>
                    <td style="text-align:left;">
                         
                    </td>
                    <td style="text-align:left;">
                         
                    </td>
                </tr>
            
                <tr>
                    <td style="text-align:left;">
                        Kelompok<br>
                        Sasaran<br>
                        Kegiatan
                    </td>
                    <td style="text-align:left;">
                         
                    </td>
                    <td style="text-align:left;">
                         
                    </td>
                </tr>
            </tbody>
        </table>
        ';
    }
    function _tabelRincianBelanja($dt){
        $CI =& get_instance();
        $textC='style="text-align:center;"';
        $html='<br><br>
        <table cellspacing="0" cellpadding="1" border="1" style="font-size:10px;">
            <thead>
                <tr '.$textC.'>
                    <th rowspan="2" width="10%">Kode Rekening</th>
                    <th rowspan="2" width="35%">Uraian</th>
                    <th rowspan="2" width="15%">Detail Volume</th>
                    <th colspan="3" width="30%">Rincian Perhitungan</th>
                    <th rowspan="2" width="10%">Jumlah</th>
                </tr>
                <tr '.$textC.'>
                    <th width="10%">Vol</th>
                    <th width="10%">Sat</th>
                    <th width="10%">Harga Satuan</th>
                </tr>
            </thead>
            <tbody>';
        $kdApbd6="";$judul="";$kdSDana="";$kdApbd1="";$kdApbd2="";$kdApbd3="";$kdApbd4="";$kdApbd5="";
        foreach ($dt['dtDetailRincian'] as $a => $v) {
            if($a==0){ //for sub kegiatan saja
                $html.='
                    <tr class="font-weight-bold">
                        <td width="10%"></td>
                        <td colspan="5" width="80%">'.$v['kdSub']." - ".$v['nmSub'].'</td>
                        <td '.$textC.' width="10%"></td>
                    </tr>
                ';
            }
            if($kdApbd1!=$v['kdApbd1']){
                $html.='
                    <tr class="font-weight-bold">
                        <td class="pl-1">'.$v['kdApbd1'].'</td>
                        <td colspan="5" class="flag1">
                            '.$v['nmApbd1'].'
                        </td>               
                        <td '.$textC.'>'.$CI->mbgs->_uang(_getTotalAnak(0,$v['kdApbd1'],$dt['dtDetailRincian'])).'</td>
                    </tr>
                ';
                $kdApbd1=$v['kdApbd1'];
            }
            if($kdApbd2!=$v['kdApbd2']){
                $html.='
                    <tr class="font-weight-bold">
                        <td class="pl-1">'.$v['kdApbd2'].'</td>
                        <td colspan="5" class="flag1">
                        '.$v['nmApbd2'].'
                        </td>               
                        <td '.$textC.'>'.$CI->mbgs->_uang(_getTotalAnak(1,$v['kdApbd2'],$dt['dtDetailRincian'])).'</td>
                    </tr>
                ';
                $kdApbd2=$v['kdApbd2'];
            }
            if($kdApbd3!=$v['kdApbd3']){
                $html.='
                    <tr class="font-weight-bold">
                        <td class="pl-1">'.$v['kdApbd3'].'</td>
                        <td colspan="5" class="flag1">
                        '.$v['nmApbd3'].'
                        </td>               
                        <td '.$textC.'>'.$CI->mbgs->_uang(_getTotalAnak(2,$v['kdApbd3'],$dt['dtDetailRincian'])).'</td>
                    </tr>
                ';
                $kdApbd3=$v['kdApbd3'];
            }
            if($kdApbd4!=$v['kdApbd4']){
                $html.='
                    <tr class="font-weight-bold">
                        <td class="pl-1">'.$v['kdApbd4'].'</td>
                        <td colspan="5" class="flag1">
                        '.$v['nmApbd4'].'
                        </td>               
                        <td '.$textC.'>'.$CI->mbgs->_uang(_getTotalAnak(3,$v['kdApbd4'],$dt['dtDetailRincian'])).'</td>
                    </tr>
                ';
                $kdApbd4=$v['kdApbd4'];
            }
            if($kdApbd5!=$v['kdApbd5']){
                $html.='
                    <tr class="font-weight-bold">
                        <td class="pl-1">'.$v['kdApbd5'].'</td>
                        <td colspan="5" class="flag1">
                        '.$v['nmApbd5'].'
                        </td>               
                        <td '.$textC.'>'.$CI->mbgs->_uang(_getTotalAnak(4,$v['kdApbd5'],$dt['dtDetailRincian'])).'</td>
                    </tr>
                ';
                $kdApbd5=$v['kdApbd5'];
            }
    
            
            if($kdApbd6!=$v['kdApbd6']){
                $html.='
                    <tr class="font-weight-bold">
                        <td class="pl-1">'.$v['kdApbd6'].'</td>
                        <td colspan="5" class="flag1">
                        '.$v['nmApbd6'].'
                        </td>               
                        <td '.$textC.'>'.$CI->mbgs->_uang(_getTotalAnak(5,$v['kdApbd6'],$dt['dtDetailRincian'])).'</td>
                    </tr>
                ';
                $kdApbd6=$v['kdApbd6'];
            } 
            if($kdSDana!=$v['kdSDana']){
                $html.='
                    <tr class="font-weight-bold">
                        <td class="pl-1"></td>
                        <td colspan="5" class="flag1">
                        '.$v['nmSDana'].'
                        </td>               
                        <td '.$textC.'></td>
                    </tr>
                ';
                $kdSDana=$v['kdSDana'];
            }       
            if($judul!=$v['nama']){
                $html.='
                    <tr style="background-color: lightblue;">
                        <td class="pl-1"></td>
                        <td colspan="5" class="flag4">
                            '.$v['nama'].'
                        </td>
                        <td '.$textC.'>'.$CI->mbgs->_uang($v['jumlah']).'</td>
                    </tr>
                ';
                $judul=$v['nama'];
            }
            foreach ($v['detail'] as $b => $v1) {
                $html.='
                    <tr class="font-weight-bold">
                        <td class="pl-1"></td>
                        <td class="flag4" width="35%">
                        - '. $v1['uraian'].'
                        </td>
                        <td width="15%" '.$textC.'>
                            '._getDetailVolume($v1).'
                        </td>
                        <td width="10%" '.$textC.'>
                            '. $v1['volume'].'
                        </td>
                        <td width="10%" '.$textC.'>
                            '. $v1['satuanVol'].'
                        </td>
                        <td width="10%" '.$textC.'>
                            '.$CI->mbgs->_uang($v1['harga']).'
                        </td>
                        <td '.$textC.'>'.$CI->mbgs->_uang($v1['jumlah']).'</td>
                    </tr>
                ';
            }
        }
        // $CI->mbg->_gdate("d-m-yy");
        $dinas=$dt['dinas'][0];
        $today = getdate();
        return $html.'
                <tr class="font-weight-bold">
                    <td colspan="3">Keterangan :</td>
                    <td colspan="4" '.$textC.'>
                        <br><br>
                        Taliwang '.$today['mday'].' '.$CI->mbgs->_getBulan($today['mon']).' '.$today['year'].'<br>
                        '.$dinas['nmDinas'].' <br><br><br> <br><br>
                        '.$dinas['kadis'].'<br>
                        NIP.'.$dinas['nip'].'<br>
                    </td>
                </tr>
            </tbody>
        </table>';
    
    }
    function _getDetailVolume($data){
        $CI =& get_instance();
        $res="";
        if($data['jumlah1']>0){
            $res.=$CI->mbgs->_uang($data['jumlah1'])." ".$data['satuan1'];
        }if($data['jumlah2']>0){
            $res.=" x ".$CI->mbgs->_uang($data['jumlah2'])." ".$data['satuan2'];
        }if($data['jumlah3']>0){
            $res.=" x ".$CI->mbgs->_uang($data['jumlah3'])." ".$data['satuan3'];
        }
        return $res;
    }
    function _getTotalAnak($anak,$kode,$data){
        $total=0;
        for($a=0;$a<count($data);$a++){
            switch($anak){
                case 1:
                    if($data[$a]['kdApbd2']==$kode){
                        $total+=$data[$a]['jumlah'];
                    }
                break;
                case 2:
                    if($data[$a]['kdApbd3']==$kode){
                        $total+=$data[$a]['jumlah'];
                    }
                break;
                case 3:
                    if($data[$a]['kdApbd4']==$kode){
                        $total+=$data[$a]['jumlah'];
                    }
                break;
                case 4:
                    // return print_r($data[$a]);
                    if($data[$a]['kdApbd5']==$kode){
                        $total+=$data[$a]['jumlah'];
                    }
                break;
                case 5:
                    if($data[$a]['kdApbd6']==$kode){
                        $total+=$data[$a]['jumlah'];
                    }
                break;
                default:
                    if($data[$a]['kdApbd1']==$kode){
                        $total+=$data[$a]['jumlah'];
                    }
                break;
            }
        }
        return $total;
    }
    function _lapoBelanjaOpd($data,$kdDinas,$nmDinas){
        $CI =& get_instance();
        $w1="15%;";
        $w3="35%;";
        $html='<br><br>
        <table style="font-size:10px; width:100%;" class="table" >
            <tr>
                <td style="text-align:center">
                    <b>
                        Rekap Kegiatan OPD<br>
                        '.$kdDinas.' - '.$nmDinas.'
                    </b>
                </td>
            </tr>
        </table><br><br>
        <table style="font-size:10px;" class="table" border="2">
            <tbody>
                <tr style="background-color: cadetblue;font-size:13px; text-align:center">
                    <td width="5%">
                        No
                    </td>
                    <td width="'.$w1.'">
                        Kode
                    </td>
                    <td width="'.$w3.'">
                        Nama
                    </td>
                    <td width="'.$w1.'">
                        PRA RKA
                    </td>
                    <td width="'.$w1.'">
                        RKA
                    </td>
                    <td width="'.$w1.'">
                        RKA FINAL
                    </td>
                </tr>';

                foreach ($data as $key => $v) {
                    $html.='
                        <tr>
                            <td  width="5%">
                                '.($key+1).'
                            </td>
                            <td  width="'.$w1.'">
                                '.($v['kdSub']).'
                            </td>
                            <td  width="'.$w3.'">
                                '.($v['nmSub']).'
                            </td>
                            <td  width="'.$w1.'">
                                '.$CI->mbgs->_uang($v['totalPRARKA']).'
                            </td>
                            <td  width="'.$w1.'">
                                '.$CI->mbgs->_uang($v['totalRKA']).'
                            </td>
                            <td  width="'.$w1.'">
                                '.$CI->mbgs->_uang($v['totalRKAFINAL']).'
                            </td>
                        </tr>
                    ';
                }
        return $html.='</tbody>
        </table>
        ';
    }
?>