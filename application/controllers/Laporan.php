<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Laporan extends CI_Controller {
    var $assert="";
    private $bgs;
    function __construct(){
        parent::__construct();
        $lbgs=new LibBGS();
        $this->mbgs->_setBaseUrl(base_url());
        $_=array();
        $this->_['assert']=$this->mbgs->_getAssetUrl();
        // $this->_['logo']=$this->mbgs->app['logo'];
        // $this->startLokal();
    }
    function startLokal(){
        $res=$this->mbgs->_getAllFile("/fs_sistem/session");
        $data="";
        foreach ($res as $key => $value) {
            $exp=explode($this->mbgs->_getIpClient()."=",$value['nama']);
            if(count($exp)>1){
                $data=$this->mbgs->_readFileTxt($value['file']);
            }
        }
        if(strlen($data)==0){
            return $this->mbgs->resF("session");
        }
        $data=json_decode($data);
        $session=array(
            'kdMember'=>$data->{'kdMember'},
            'nmMember'=>$data->{'nmMember'},
            'kdJabatan'=>$data->{'kdJabatan'},
            'kdKantor'=>$data->{'kdKantor'},
            'nmKantor'=>$data->{'nmKantor'},
            'username'=>$data->{'username'},
            'password'=>$data->{'password'},
        );
        $this->sess->set_userdata($session);
        $this->kdMember=$this->sess->kdMember;
        $this->kdMember1=$this->sess->kdMember1;
        $this->nmMember=$this->sess->nmMember;
        $this->kdJabatan=$this->sess->kdJabatan;
        $this->kdKantor=$this->sess->kdKantor;
        $this->nmKantor=$this->sess->nmKantor;
    }
    function previewFile($val){
        $baseEND=json_decode((base64_decode($val)));
        $files   =$baseEND->{'files'};
        // return print_r($files);
        $this->lbgs->previewPdf(base_url().$files);
    }
    function rincianBelanja($val){
        $baseEND=json_decode((base64_decode($val)));
        $this->_['nmTahapan']=$baseEND->{'nmTahapan'};

        $kdDinas    =$baseEND->{'kdDinas'};
        $kdSub      =$baseEND->{'kdSub'};
        $tahapan    =$baseEND->{'tahapan'};
        $tahun      =$baseEND->{'tahun'};
        $pdf        =$baseEND->{'pdf'};
        $this->_['totalPagu']=$baseEND->{'totalPagu'};
        
        $this->_['tahun']=$tahun;
        // $tabel      =$baseEND->{'tabel'};
        // $renstra    =$baseEND->{'renstra'};
        

        $this->_['drenstra']=$this->qexec->_func(_renstraOpd($kdDinas,$tahun," and a.kdSub=".$this->mbgs->_valforQuery($kdSub)));
        $this->_['dinas']=$this->qexec->_func(_dinas(" where kdDinas='".$kdDinas."'"));

        $v=array();
        $v['kdSub']=$kdSub;
        $v['tahapan']=$tahapan;
        $v['kdDinas']=$kdDinas;
        $v['tahun']=$tahun;
        $this->_['dtDetailRincian']=$this->qexec->_func(_judulRBelanja($v));
        // return print_r($this->_['dtDetailRincian']);
        foreach ($this->_['dtDetailRincian'] as $key => $v1) {
            $v['kdJudul']=$v1['kdJudul'];
            $this->_['dtDetailRincian'][$key]['detail']=$this->qexec->_func(_detailRBelanja($v));
        }

        // $data=$this->qexec->_func(_dpekerjaan($this->sess->kdKantor," and a.final=0 "));
        // return print_r(_tabelRincianBelanja($this->_));
        
        if(!$pdf){ // untuk export exccell
            $file="rincianBelanja";
            header("Content-type: application/vnd-ms-excel");
            header("Content-Disposition: attachment; filename=".$file.".xls");
            $html=_informasiRenstra($this->_)
            ._informasiIndikator($this->_)
            ._tabelRincianBelanja($this->_);
            return print_r($html);
        }

        $dlaporan=array();
        array_push($dlaporan,[
            "ORIENTATION"	=>"L",
            "FORMAT"		=>"legal",
            "name"			=>"rese",
            // "preview"       =>true,
            // "preview"       =>false,
            "html"          =>_headerLapiran($this->_)
                            ._informasiRenstra($this->_)
                            ._informasiIndikator($this->_)
                            ._tabelRincianBelanja($this->_)
                            // .$renstra
                            // .$tabel
        ]);
        
        
        // return print_r($baseEND);
        // return print_r($baseEND);
        // $dlaporan=$this->getDataLaporan($baseEND);
        return $this->lbgs->cetakTC($dlaporan);
    }
    function lapoOpd($val){
        $baseEND=json_decode((base64_decode($val)));
        $kdDinas    =$baseEND->{'kdDinas'};
        $nmDinas    =$baseEND->{'nmDinas'};
        $pdf        =$baseEND->{'pdf'};
        $tahun      =$this->sess->tahun;


        
        $drenstra=$this->qexec->_func(_renstraOpd($kdDinas,$tahun,""));

        if(!$pdf){ // untuk export exccell
            $file="LaporanKegiatanOpd";
            header("Content-type: application/vnd-ms-excel");
            header("Content-Disposition: attachment; filename=".$file.".xls");
            $html=_lapoBelanjaOpd($drenstra,$kdDinas,$nmDinas);
            return print_r($html);
        }

        $dlaporan=array();
        array_push($dlaporan,[
            "ORIENTATION"	=>"L",
            "FORMAT"		=>"legal",
            "name"			=>"rese",
            // "preview"       =>true,
            "preview"       =>false,
            "html"          =>_lapoBelanjaOpd($drenstra,$kdDinas,$nmDinas)
        ]);
        return $this->lbgs->cetakTC($dlaporan);
    }
    
}