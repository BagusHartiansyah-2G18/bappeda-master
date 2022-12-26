<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class WsKomponen extends CI_Controller {
    function __construct(){
        parent::__construct();	
        // $this->load->helper('url','html_helper','mbgs_helper');

        $this->mbgs->_setBaseUrl(base_url());
        
        $_=array();
        $this->_['code']=$this->mbgs->_backCode($this->enc->encrypt($this->mbgs->_isCode()));
        $this->_=array_merge($this->_,$this->mbgs->_getBasisData());
        $this->_['footer']    =$this->mbgs->_getJs();

        $this->kd=$this->sess->kd;
        $this->nm=$this->sess->nama;
        $this->kdJabatan=$this->sess->kdJabatan;
        $this->kdDinas=$this->sess->kdDinas;
        $this->tahun=$this->sess->tahun;
        $this->sistem=$this->sess->sistem;

        $this->qtbl=_getNKA("c-prod",true);
        // $username=$this->sess->username;
        // $password=$this->sess->password;
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
    function _loadHelper(){
        switch ($this->sistem) {
            case 'renja':
                $this->load->helper("tmdashio_r_helper");
            break;
            case 'musrenbang':
                $this->load->helper("tmdashio_m_helper");
            break;
            case 'dataku':
                $this->load->helper("tmdashio_d_helper");
            break;
            case 'beranda':
                $this->load->helper("tmdashio_b_helper");
            break;
        }
    }
    function dashboard($page){
        $this->_loadHelper();
        
        $this->_=array_merge(
            $this->_,
            [
                "pgStart"=>"Login",
                "pgEnd"=>"Dashboard",
                "user"=>$this->nm,
                "kdJab"=>$this->kdJabatan,
                "idBody"=>"bodyTM",
                "ind"=>0,
                "index"=>0
            ]
        );
        $this->_=array_merge(
            $this->_
            ,
            _startTmx($this->_)
        );
        $this->_['head'].=$this->mbgs->_getCss().$this->mbgs->_getJsMaster($page);
        $this->_['footer'].=$this->mbgs->_getJsChart();
        $this->_['footer'] .=$this->mbgs->_getJsTabel();

        $this->_['tahun']=$this->qexec->_func(_tahunForOption(""));
        // $this->_['dinas']=$this->qexec->_func(_cbDinas(" where kdDinas='".$this->kdDinas."'"));
        return print_r(json_encode($this->_));
    }
    function jabatan($page){
        $this->_loadHelper();
        $this->_=array_merge(
            $this->_,
            [
                "pgStart"=>"Login",
                "pgEnd"=>"Dashboard",
                "user"=>$this->nm,
                "kdJab"=>$this->kdJabatan,
                "idBody"=>"bodyTM",
                "ind"=>1,
                "index"=>0
            ]
        );
        $this->_=array_merge(
            $this->_
            ,
            _startTm($this->_)
        );
        $this->_['head'].=$this->mbgs->_getCss().$this->mbgs->_getJsMaster($page);
        $this->_['footer'].=$this->mbgs->_getJsChart();
        $this->_['footer'] .=$this->mbgs->_getJsTabel();

        $this->_['jabatan']=$this->qexec->_func(_jabatan(""));
        // $this->_['dinas']=$this->qexec->_func(_cbDinas(" where kdDinas='".$this->kdDinas."'"));
        return print_r(json_encode($this->_));
    }
    function dinas($page){
        $this->_loadHelper();
        $this->_=array_merge(
            $this->_,
            [
                "pgStart"=>"Login",
                "pgEnd"=>"Dashboard",
                "user"=>$this->nm,
                "kdJab"=>$this->kdJabatan,
                "idBody"=>"bodyTM",
                "ind"=>1,
                "index"=>2
            ]
        );
        $this->_=array_merge(
            $this->_
            ,
            _startTm($this->_)
        );
        $this->_['head'].=$this->mbgs->_getCss().$this->mbgs->_getJsMaster($page);
        $this->_['footer'].=$this->mbgs->_getJsChart();
        $this->_['footer'] .=$this->mbgs->_getJsTabel();

        $this->_['dinas']=$this->qexec->_func(_dinas(" where taDinas='".$this->tahun."'"));
        return print_r(json_encode($this->_));
    }
    function member($page){
        $this->_loadHelper();
        $this->_=array_merge(
            $this->_,
            [
                "pgStart"=>"Login",
                "pgEnd"=>"Dashboard",
                "user"=>$this->nm,
                "kdJab"=>$this->kdJabatan,
                "idBody"=>"bodyTM",
                "ind"=>1,
                "index"=>3
            ]
        );
        $this->_=array_merge(
            $this->_
            ,
            _startTm($this->_)
        );
        $this->_['head'].=$this->mbgs->_getCss().$this->mbgs->_getJsMaster($page);
        $this->_['footer'].=$this->mbgs->_getJsChart();
        $this->_['footer'] .=$this->mbgs->_getJsTabel();

        $this->_['dinas']=$this->qexec->_func(_cbDinas(" where taDinas='".$this->tahun."'"));
        $this->_['jabatan']=$this->qexec->_func(_cbJabatan(""));
        $this->_['member']=$this->qexec->_func(_member(""));
        return print_r(json_encode($this->_));
    }
    function tahun($page){
        $this->_loadHelper();
        $this->_=array_merge(
            $this->_,
            [
                "pgStart"=>"Login",
                "pgEnd"=>"Dashboard",
                "user"=>$this->nm,
                "kdJab"=>$this->kdJabatan,
                "idBody"=>"bodyTM",
                "ind"=>1,
                "index"=>4
            ]
        );
        $this->_=array_merge(
            $this->_
            ,
            _startTm($this->_)
        );
        $this->_['head'].=$this->mbgs->_getCss().$this->mbgs->_getJsMaster($page);
        $this->_['footer'].=$this->mbgs->_getJsChart();
        $this->_['footer'] .=$this->mbgs->_getJsTabel();

        $this->_['tahun']=$this->qexec->_func(_tahun(""));
        // $this->_['dinas']=$this->qexec->_func(_cbDinas(" where kdDinas='".$this->kdDinas."'"));
        return print_r(json_encode($this->_));
    }
    function renstra($page){
        $this->_loadHelper();
        $this->_=array_merge(
            $this->_,
            [
                "pgStart"=>"Login",
                "pgEnd"=>"Dashboard",
                "user"=>$this->nm,
                "kdJab"=>$this->kdJabatan,
                "idBody"=>"bodyTM",
                "ind"=>1,
                "index"=>4
            ]
        );
        $this->_=array_merge(
            $this->_
            ,
            _startTm($this->_)
        );
        $this->_['head'].=$this->mbgs->_getCss().$this->mbgs->_getJsMaster($page);
        $this->_['footer'].=$this->mbgs->_getJsChart();
        $this->_['footer'] .=$this->mbgs->_getJsTabel();

        $this->_['renstra']=$this->qexec->_func(_renstraOpdGet("null",$this->tahun,""));
        // $this->_['dinas']=$this->qexec->_func(_cbDinas(" where kdDinas='".$this->kdDinas."'"));
        return print_r(json_encode($this->_));
    }
    function rekening($page){
        $this->_loadHelper();
        $this->_=array_merge(
            $this->_,
            [
                "pgStart"=>"Login",
                "pgEnd"=>"Dashboard",
                "user"=>$this->nm,
                "kdJab"=>$this->kdJabatan,
                "idBody"=>"bodyTM",
                "ind"=>1,
                "index"=>4
            ]
        );
        $this->_=array_merge(
            $this->_
            ,
            _startTm($this->_)
        );
        $this->_['head'].=$this->mbgs->_getCss().$this->mbgs->_getJsMaster($page);
        $this->_['footer'].=$this->mbgs->_getJsChart();
        $this->_['footer'] .=$this->mbgs->_getJsTabel();

        $this->_['rekening']=$this->qexec->_func(_RekeningB($this->tahun,""));
        // $this->_['dinas']=$this->qexec->_func(_cbDinas(" where kdDinas='".$this->kdDinas."'"));
        return print_r(json_encode($this->_));
    }
    

    // e renja
    function adminGroup($page){
        $this->load->helper("tmdashio_r_helper");
        $this->_=array_merge(
            $this->_,
            [
                "pgStart"=>"Login",
                "pgEnd"=>"Dashboard",
                "user"=>$this->nm,
                "kdJab"=>$this->kdJabatan,
                "idBody"=>"bodyTM",
                "ind"=>2,
                "index"=>0
            ]
        );
        $this->_=array_merge(
            $this->_
            ,
            _startTm($this->_)
        );
        $this->_['head'].=$this->mbgs->_getCss().$this->mbgs->_getJsMaster($page);
        $this->_['footer'].=$this->mbgs->_getJsChart();
        $this->_['footer'] .=$this->mbgs->_getJsTabel();

        $this->_['member']=$this->qexec->_func(_cbMember(" where kdJabatan=2"));
        if(count($this->_['member'])>0){
            $this->_['member'][0]['dinas']=$this->qexec->_func(_cbDinasForAG($this->_['member'][0]['value']," where taDinas='".$this->tahun."'"));
        }else{
            $this->_['member'][0]['dinas']=[];
        }
        return print_r(json_encode($this->_));
    }
    function ebkunci($page){
        $this->load->helper("tmdashio_r_helper");
        $this->_=array_merge(
            $this->_,
            [
                "pgStart"=>"Login",
                "pgEnd"=>"Dashboard",
                "user"=>$this->nm,
                "kdJab"=>$this->kdJabatan,
                "idBody"=>"bodyTM",
                "ind"=>3,
                "index"=>0
            ]
        );
        $this->_=array_merge(
            $this->_
            ,
            _startTm($this->_)
        );
        $this->_['head'].=$this->mbgs->_getCss().$this->mbgs->_getJsMaster($page);
        $this->_['footer'].=$this->mbgs->_getJsChart();
        $this->_['footer'] .=$this->mbgs->_getJsTabel();

        
        $this->_['dinas']=$this->qexec->_func(_cbDinas(" where taDinas='".$this->tahun."'"));
        $this->_['tahun']=$this->tahun;
        $dt=$this->_['dinas'][0];
        $this->_['dinas'][0]['data']=$this->qexec->_func(_keySub($dt['value'],$this->tahun,""));
        return print_r(json_encode($this->_));
    }
    function ebkunciOpd($page){
        $this->load->helper("tmdashio_r_helper");
        $this->_=array_merge(
            $this->_,
            [
                "pgStart"=>"Login",
                "pgEnd"=>"Dashboard",
                "user"=>$this->nm,
                "kdJab"=>$this->kdJabatan,
                "idBody"=>"bodyTM",
                "ind"=>4,
                "index"=>0
            ]
        );
        $this->_=array_merge(
            $this->_
            ,
            _startTm($this->_)
        );
        $this->_['head'].=$this->mbgs->_getCss().$this->mbgs->_getJsMaster($page);
        $this->_['footer'].=$this->mbgs->_getJsChart();
        $this->_['footer'] .=$this->mbgs->_getJsTabel();

        
        $this->_['dinas']=$this->qexec->_func(_dinas(""));
        $this->_['tahun']=$this->tahun;
        return print_r(json_encode($this->_));
    }
    function ssh($page){
        $this->load->helper("tmdashio_r_helper");
        $this->_=array_merge(
            $this->_,
            [
                "pgStart"=>"Login",
                "pgEnd"=>"Dashboard",
                "user"=>$this->nm,
                "kdJab"=>$this->kdJabatan,
                "idBody"=>"bodyTM",
                "ind"=>5,
                "index"=>0
            ]
        );
        $this->_=array_merge(
            $this->_
            ,
            _startTm($this->_)
        );
        $this->_['head'].=$this->mbgs->_getCss().$this->mbgs->_getJsMaster($page);
        $this->_['footer'] .=$this->mbgs->_getJsTabel();
        $this->_['ssh']=$this->qexec->_func(_dssh("where taSsh='".$this->tahun."'"));

        $this->_['footer'].=$this->mbgs->_getJsChart();
        return print_r(json_encode($this->_));
    }


    // e musrenbang
    function prioritas($page){
        $this->load->helper("tmdashio_m_helper");
        $this->_=array_merge(
            $this->_,
            [
                "pgStart"=>"Login",
                "pgEnd"=>"Dashboard",
                "user"=>$this->nm,
                "kdJab"=>$this->kdJabatan,
                "idBody"=>"bodyTM",
                "ind"=>2,
                "index"=>0
            ]
        );
        $this->_=array_merge(
            $this->_
            ,
            _startTm($this->_)
        );
        $this->_['head'].=$this->mbgs->_getCss().$this->mbgs->_getJsMaster($page);
        $this->_['footer'] .=$this->mbgs->_getJsTabel();
        $this->_['dt']=$this->qexec->_func(_prioritas(" where tahun='".$this->tahun."'"));

        $this->_['footer'].=$this->mbgs->_getJsChart();
        return print_r(json_encode($this->_));
    }
    function subPrioritas($page,$kdDinas){
        $this->load->helper("tmdashio_m_helper");
        $this->_=array_merge(
            $this->_,
            [
                "pgStart"=>"Login",
                "pgEnd"=>"Dashboard",
                "user"=>$this->nm,
                "kdJab"=>$this->kdJabatan,
                "idBody"=>"bodyTM",
                "ind"=>3,
                "index"=>0
            ]
        );
        $this->_=array_merge(
            $this->_
            ,
            _startTm($this->_)
        );
        $this->_['head'].=$this->mbgs->_getCss().$this->mbgs->_getJsMaster($page);
        $this->_['footer'] .=$this->mbgs->_getJsTabel();


        $this->_['dinas']=$this->qexec->_func(_cbDinas(" where taDinas='".$this->tahun."'"));
        if($kdDinas=="null"){
            $kdDinas=$this->_['dinas'][0]['value'];
        }
        

        $this->_['kdDinas']=$kdDinas;
        // return print_r($kdDinas);
        $this->_['dt']=$this->qexec->_func(_tamSubMusrenbang($this->tahun,$kdDinas,""));
        $this->_['prioritas']=$this->qexec->_func(_cbprioritas(" where tahun='".$this->tahun."'"));
        
        $this->_['tahun']=$this->tahun;
        $this->_['footer'].=$this->mbgs->_getJsChart();
        return print_r(json_encode($this->_));
    }
    function muskunci($page){
        $this->load->helper("tmdashio_m_helper");
        $this->_=array_merge(
            $this->_,
            [
                "pgStart"=>"Login",
                "pgEnd"=>"Dashboard",
                "user"=>$this->nm,
                "kdJab"=>$this->kdJabatan,
                "idBody"=>"bodyTM",
                "ind"=>4,
                "index"=>0
            ]
        );
        $this->_=array_merge(
            $this->_
            ,
            _startTm($this->_)
        );
        $this->_['tahapan']=$this->getTahapanMus($this->sess->tahapan);
        $this->_['head'].=$this->mbgs->_getCss().$this->mbgs->_getJsMaster($page);
        $this->_['footer'] .=$this->mbgs->_getJsTabel();
        
        $this->_['member']=$this->qexec->_func(_dinasMus(" where a.ta='".$this->tahun."' and a.kdApp='".$this->sess->kdApp."'"));

        $this->_['footer'].=$this->mbgs->_getJsChart();
        return print_r(json_encode($this->_));
    }
    function getTahapanMus($ind){
        switch ($ind) {
            case 1: return 'PRA MUSRENBANG';
            case 2: return 'MUSRENBANG KEC';
            case 3: return 'FORUM OPD';
            case 4: return 'MUSRENBANG KAB';
        }
    }

    // pengaturan
    function export($page){ // export
        $this->load->helper("tmdashio_r_helper");
        $this->_=array_merge(
            $this->_,
            [
                "pgStart"=>"Login",
                "pgEnd"=>"Dashboard",
                "user"=>$this->nm,
                "kdJab"=>$this->kdJabatan,
                "idBody"=>"bodyTM",
                "ind"=>6,
                "index"=>0
            ]
        );
        $this->_=array_merge(
            $this->_
            ,
            _startTm($this->_)
        );
        $this->_['head'].=$this->mbgs->_getCss().$this->mbgs->_getJsMaster($page);
        $this->_['footer'].=$this->mbgs->_getJsChart();
        $this->_['footer'] .=$this->mbgs->_getJsTabel();

        $this->_['tahun']=$this->qexec->_func(_cbTahun(""));
        // $this->_['dinas']=$this->qexec->_func(_cbDinas(" where kdDinas='".$this->kdDinas."'"));
        return print_r(json_encode($this->_));
    }

    // e Data Ku
    function setIku($page){
        $this->load->helper("tmdashio_d_helper");
        $this->_=array_merge(
            $this->_,
            [
                "pgStart"=>"Login",
                "pgEnd"=>"Dashboard",
                "user"=>$this->nm,
                "kdJab"=>$this->kdJabatan,
                "idBody"=>"bodyTM",
                "ind"=>2,
                "index"=>0
            ]
        );
        $this->_=array_merge(
            $this->_
            ,
            _startTm($this->_)
        );
        $this->_['head'].=$this->mbgs->_getCss().$this->mbgs->_getJsMaster($page);
        $this->_['footer'] .=$this->mbgs->_getJsTabel();
        $this->_['dt']=$this->qexec->_func(_iku(" where jenis='iku'"));
        foreach ($this->_['dt'] as $key => $v) {
            $this->_['dt'][$key]['tahun']=$this->qexec->_func(_getValiku1($v['kdIku']," and jenis='iku'"));
        }
        $this->_['tahun']=$this->qexec->_func(_tahunLimit5(" GROUP BY nama ")); 

        $this->_['footer'].=$this->mbgs->_getJsChart();
        return print_r(json_encode($this->_));
    }
    function setIkd($page){
        $this->load->helper("tmdashio_d_helper");
        $this->_=array_merge(
            $this->_,
            [
                "pgStart"=>"Login",
                "pgEnd"=>"Dashboard",
                "user"=>$this->nm,
                "kdJab"=>$this->kdJabatan,
                "idBody"=>"bodyTM",
                "ind"=>3,
                "index"=>0
            ]
        );
        $this->_=array_merge(
            $this->_
            ,
            _startTm($this->_)
        );
        $this->_['head'].=$this->mbgs->_getCss().$this->mbgs->_getJsMaster($page);
        $this->_['footer'] .=$this->mbgs->_getJsTabel();
        $this->_['dt']=$this->qexec->_func(_iku(" where jenis='ikd'"));
        foreach ($this->_['dt'] as $key => $v) {
            $this->_['dt'][$key]['tahun']=$this->qexec->_func(_getValiku1($v['kdIku']," and jenis='ikd'"));
        }
        $this->_['tahun']=$this->qexec->_func(_tahunLimit5(" GROUP BY nama ")); 

        $this->_['footer'].=$this->mbgs->_getJsChart();
        return print_r(json_encode($this->_));
    }
    function setSpm($page){
        $this->load->helper("tmdashio_d_helper");
        $this->_=array_merge(
            $this->_,
            [
                "pgStart"=>"Login",
                "pgEnd"=>"Dashboard",
                "user"=>$this->nm,
                "kdJab"=>$this->kdJabatan,
                "idBody"=>"bodyTM",
                "ind"=>4,
                "index"=>0
            ]
        );
        $this->_=array_merge(
            $this->_
            ,
            _startTm($this->_)
        );
        $this->_['head'].=$this->mbgs->_getCss().$this->mbgs->_getJsMaster($page);
        $this->_['footer'] .=$this->mbgs->_getJsTabel();
        $this->_['dt']=$this->qexec->_func(_iku(" where jenis='spm'"));
        foreach ($this->_['dt'] as $key => $v) {
            $this->_['dt'][$key]['tahun']=$this->qexec->_func(_getValiku1($v['kdIku']," and jenis='spm'"));
        }
        $this->_['tahun']=$this->qexec->_func(_tahunLimit5(" GROUP BY nama ")); 

        $this->_['footer'].=$this->mbgs->_getJsChart();
        return print_r(json_encode($this->_));
    }

    //beranda
    function agenda($page){
        $this->load->helper("tmdashio_b_helper");
        $this->_=array_merge(
            $this->_,
            [
                "pgStart"=>"Login",
                "pgEnd"=>"Dashboard",
                "user"=>$this->nm,
                "kdJab"=>$this->kdJabatan,
                "idBody"=>"bodyTM",
                "ind"=>0,
                "index"=>0
            ]
        );
        // return print_r($this->_);
        $this->_=array_merge(
            $this->_
            ,
            _startTm($this->_)
        );
        $this->_['head'].=$this->mbgs->_getCss().$this->mbgs->_getJsMaster($page).$this->mbgs->_libTextEditor(true);
        // $this->_['footer'].=$this->mbgs->_getJsChart();
        $this->_['footer'] .=$this->mbgs->_getJsTabel().$this->mbgs->_libTextEditor(false);

        // 
        $tamq=" and kdApp='MFC2G18-07' and kdMember='".$this->kd."'";
        if($this->kdJabatan>2){
            $tamq=" and kdApp='MFC2G18-07'";
        }
        $this->_['member']=$this->qexec->_func(_cbMember(" where kdJabatan=2".$tamq));
        // return print_r($this->_['member']);
        if (count($this->_['member'])>0) {
            $this->_['member'][0]['dt']=$this->qexec->_func(_agenda(" where kdMember='".$this->_['member'][0]['value']."'"));
        }
        return print_r(json_encode($this->_));
    }
    function produk($page){
        $this->load->helper("tmdashio_b_helper");
        $this->_=array_merge(
            $this->_,
            [
                "pgStart"=>"Login",
                "pgEnd"=>"Dashboard",
                "user"=>$this->nm,
                "kdJab"=>$this->kdJabatan,
                "idBody"=>"bodyTM",
                "ind"=>1,
                "index"=>0
            ]
        );
        $this->_=array_merge(
            $this->_
            ,
            _startTm($this->_)
        );
        $this->_['head'].=$this->mbgs->_getCss().$this->mbgs->_getJsMaster($page);
        $this->_['footer'].=$this->mbgs->_getJsChart();
        $this->_['footer'] .=$this->mbgs->_getJsTabel();

        $this->_['kategori']=$this->qexec->_func(_cbKategoriUmum("beranda-produk"," order by kdKate asc"));
        $this->_['dt']=$this->qexec->_func(_produk(""));
        return print_r(json_encode($this->_));
    }
    function ppid($page){
        $this->load->helper("tmdashio_b_helper");
        $this->_=array_merge(
            $this->_,
            [
                "pgStart"=>"Login",
                "pgEnd"=>"Dashboard",
                "user"=>$this->nm,
                "kdJab"=>$this->kdJabatan,
                "idBody"=>"bodyTM",
                "ind"=>7,
                "index"=>2
            ]
        );
        $this->_=array_merge(
            $this->_
            ,
            _startTm($this->_)
        );
        $this->_['head'].=$this->mbgs->_getCss().$this->mbgs->_getJsMaster($page);
        $this->_['footer'].=$this->mbgs->_getJsChart();
        $this->_['footer'] .=$this->mbgs->_getJsTabel();

        $this->_['dinas']=$this->qexec->_func(_dinas(" where taDinas='".$this->tahun."'"));
        return print_r(json_encode($this->_));
    }
    function profil($page){
        $this->load->helper("tmdashio_b_helper");
        $this->_=array_merge(
            $this->_,
            [
                "pgStart"=>"Login",
                "pgEnd"=>"Dashboard",
                "user"=>$this->nm,
                "kdJab"=>$this->kdJabatan,
                "idBody"=>"bodyTM",
                "ind"=>7,
                "index"=>2
            ]
        );
        $this->_=array_merge(
            $this->_
            ,
            _startTm($this->_)
        );
        $this->_['head'].=$this->mbgs->_getCss().$this->mbgs->_getJsMaster($page);
        $this->_['footer'].=$this->mbgs->_getJsChart();
        $this->_['footer'] .=$this->mbgs->_getJsTabel();

        $this->_['dinas']=$this->qexec->_func(_dinas(" where taDinas='".$this->tahun."'"));
        return print_r(json_encode($this->_));
    }
    function kontak($page){
        $this->load->helper("tmdashio_b_helper");
        $this->_=array_merge(
            $this->_,
            [
                "pgStart"=>"Login",
                "pgEnd"=>"Dashboard",
                "user"=>$this->nm,
                "kdJab"=>$this->kdJabatan,
                "idBody"=>"bodyTM",
                "ind"=>7,
                "index"=>2
            ]
        );
        $this->_=array_merge(
            $this->_
            ,
            _startTm($this->_)
        );
        $this->_['head'].=$this->mbgs->_getCss().$this->mbgs->_getJsMaster($page);
        $this->_['footer'].=$this->mbgs->_getJsChart();
        $this->_['footer'] .=$this->mbgs->_getJsTabel();

        $this->_['dinas']=$this->qexec->_func(_dinas(" where taDinas='".$this->tahun."'"));
        return print_r(json_encode($this->_));
    }
    
}
