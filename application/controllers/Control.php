<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Control extends CI_Controller {
    function __construct(){
        parent::__construct();
    
        $this->mbgs->_setBaseUrl(base_url());
        $_=array();
        $this->_['assert']=$this->mbgs->_getAssetUrl();
        $this->_['code']=$this->mbgs->_backCode($this->enc->encrypt($this->mbgs->_isCode()));
        $this->_['param']=null;
        $this->_['qlogin']=true;
        
    }
    public function dashboard($val){ // start login E- beranda
        // return print_r($val);
        if($val!=null && $val!="null"){
            $baseEND=json_decode((base64_decode($val)));
            // return print_r($baseEND);
            $username   =$baseEND->{'username'};
            $password   =$baseEND->{'password'};
            // $tahun   =$baseEND->{'tahun'};
            $tam=" and kdApp='MFC2G18-07'";
            if($username=="dev"){
                $tam="";
            }
            $q="select * from member where 
                    UPPER(nmMember)=UPPER('".$username."') and 
                    UPPER(password)=UPPER('".$password."') and 
                    kdJabatan>=2 and 
                    kdDinas='5.01.5.05.0.00.01.0000' 
                ".$tam;
            $member=$this->qexec->_func($q);
            
            $sess=array(
                'kdMember'=>$member[0]['kdMember'],
                'kd'    =>$member[0]['kdMember'],
                'nmMember'=>$member[0]['nmMember'],
                'nama'=>$member[0]['nmMember'],
                'password'=>$member[0]['password'],
                'kdDinas'=>$member[0]['kdDinas'],
                'email'=>$member[0]['email'],
                'kdJabatan'=>$member[0]['kdJabatan'],
                'tahun'=>0,
                'sistem'=>'beranda'
            );
            
            // $res=$this->mbgs->_getAllFile("/fs_sistem/session");
            // $this->mbgs->_removeFile($res,$this->mbgs->_getIpClient()."=");
            
            // // return print_r($_SERVER);
            // $this->mbgs->_expTxt($this->mbgs->_getIpClient()."=",json_encode($sess));
            // // sess
            $this->sess->set_userdata($sess);
            $nama=$member[0]['nmMember'];
        }else{
            // $this->_keamanan("Bagus H");
            if($this->sess->kdMember==null) {
                return $this->logout();
            }
            $nama=$this->sess->nmMember;
        }
        return redirect("control/agenda");
        $this->_['page']="dashboard";
        $this->_['html']=$this->mbgs->_html($this->_);
		$this->load->view('index',$this->_);
        
    }
    public function jabatan($val){
        if($val!=null && !empty($val) && $val!='null'){
            $this->sess->tahun=$val;
        }
        $this->_['page']="jabatan";
        $this->_['html']=$this->mbgs->_html($this->_);
		$this->load->view('index',$this->_);
    }
    public function dinas(){
        if($this->sess->kdMember==null) {
            return $this->logout();
        }
        $nama=$this->sess->nmMember;
        $this->_['page']="dinas";
        $this->_['html']=$this->mbgs->_html($this->_);
		$this->load->view('index',$this->_);
    }
    public function member(){
        if($this->sess->kdMember==null) {
            return $this->logout();
        }
        $nama=$this->sess->nmMember;
        $this->_['page']="member";
        $this->_['html']=$this->mbgs->_html($this->_);
		$this->load->view('index',$this->_);
    }
    public function tahun(){
        if($this->sess->kdMember==null) {
            return $this->logout();
        }
        $this->_['page']="tahun";
        $this->_['html']=$this->mbgs->_html($this->_);
		$this->load->view('index',$this->_);
    }
    public function renstra(){
        if($this->sess->kdMember==null) {
            return $this->logout();
        }
        $nama=$this->sess->nmMember;
        $this->_['page']="renstra";
        $this->_['html']=$this->mbgs->_html($this->_);
		$this->load->view('index',$this->_);
    }
    public function rekening(){
        if($this->sess->kdMember==null) {
            return $this->logout();
        }
        $nama=$this->sess->nmMember;
        $this->_['page']="rekening";
        $this->_['html']=$this->mbgs->_html($this->_);
		$this->load->view('index',$this->_);
    }
    
    public function export(){
        if($this->sess->kdMember==null) {
            return $this->logout();
        }
        $this->_['page']="export";
        $this->_['html']=$this->mbgs->_html($this->_);
		$this->load->view('index',$this->_);
    }


    public function adminGroup(){
        if($this->sess->kdMember==null) {
            return $this->logout();
        }
        $nama=$this->sess->nmMember;
        $this->_['page']="adminGroup";
        $this->_['html']=$this->mbgs->_html($this->_);
		$this->load->view('index',$this->_);
    }
    public function ebkunci(){
        if($this->sess->kdMember==null) {
            return $this->logout();
        }
        $nama=$this->sess->nmMember;
        $this->_['page']="ebkunci";
        $this->_['html']=$this->mbgs->_html($this->_);
		$this->load->view('index',$this->_);
    }
    public function ebkunciOpd(){
        if($this->sess->kdMember==null) {
            return $this->logout();
        }
        $nama=$this->sess->nmMember;
        $this->_['page']="ebkunciOpd";
        $this->_['html']=$this->mbgs->_html($this->_);
		$this->load->view('index',$this->_);
    }
    public function ssh(){
        if($this->sess->kdMember==null) {
            return $this->logout();
        }
        $nama=$this->sess->nmMember;
        $this->_['page']="ssh";
        $this->_['html']=$this->mbgs->_html($this->_);
		$this->load->view('index',$this->_);
    }


    // musrenbang
    public function prioritas(){
        if($this->sess->kdMember==null) {
            return $this->logout();
        }
        $nama=$this->sess->nmMember;
        $this->_['page']="prioritas";
        $this->_['html']=$this->mbgs->_html($this->_);
		$this->load->view('index',$this->_);
    }
    public function subPrioritas($param){
        if($this->sess->kdMember==null) {
            return $this->logout();
        }
        $nama=$this->sess->nmMember;
        $this->_['page']="subPrioritas";
        $this->_['param']=$param;
        $this->_['html']=$this->mbgs->_html($this->_);
		$this->load->view('index',$this->_);
    }
    public function muskunci(){
        if($this->sess->kdMember==null) {
            return $this->logout();
        }
        $nama=$this->sess->nmMember;
        $this->_['page']="muskunci";
        $this->_['html']=$this->mbgs->_html($this->_);
		$this->load->view('index',$this->_);
    }
    

    // branda
    public function agenda(){
        if($this->sess->kdMember==null) {
            return $this->logout();
        }
        $nama=$this->sess->nmMember;
        $this->_['page']="agenda";
        $this->_['html']=$this->mbgs->_html($this->_);
		$this->load->view('index',$this->_);
    }
    public function produk(){
        if($this->sess->kdMember==null) {
            return $this->logout();
        }
        $nama=$this->sess->nmMember;
        $this->_['page']="produk";
        $this->_['html']=$this->mbgs->_html($this->_);
		$this->load->view('index',$this->_);
    }
    public function ppid(){
        if($this->sess->kdMember==null) {
            return $this->logout();
        }
        $nama=$this->sess->nmMember;
        $this->_['page']="ppid";
        $this->_['html']=$this->mbgs->_html($this->_);
		$this->load->view('index',$this->_);
    }
    public function profil(){
        if($this->sess->kdMember==null) {
            return $this->logout();
        }
        $nama=$this->sess->nmMember;
        $this->_['page']="profil";
        $this->_['html']=$this->mbgs->_html($this->_);
		$this->load->view('index',$this->_);
    }
    public function kontak(){
        if($this->sess->kdMember==null) {
            return $this->logout();
        }
        $nama=$this->sess->nmMember;
        $this->_['page']="kontak";
        $this->_['html']=$this->mbgs->_html($this->_);
		$this->load->view('index',$this->_);
    }
    
    
    function rincianBelanja($val){
        if($this->sess->kdMember==null) {
            return $this->logout();
        }
        $nama=$this->sess->nmMember;
        $this->_['page']="rincianBelanja";
        $this->_['param']=$val;
        $this->_['html']=$this->mbgs->_html($this->_);
		$this->load->view('index',$this->_);
    }
    public function lapoOpd(){
        if($this->sess->kdMember==null) {
            return $this->logout();
        }
        $nama=$this->sess->nmMember;
        $this->_['page']="lapoOpd";
        $this->_['html']=$this->mbgs->_html($this->_);
		$this->load->view('index',$this->_);
    }


    // data ku
    
    public function setIku(){
        if($this->sess->kdMember==null) {
            return $this->logout();
        }
        $nama=$this->sess->nmMember;
        $this->_['page']="setIku";
        $this->_['html']=$this->mbgs->_html($this->_);
		$this->load->view('index',$this->_);
    }
    public function setIkd(){
        if($this->sess->kdMember==null) {
            return $this->logout();
        }
        $nama=$this->sess->nmMember;
        $this->_['page']="setIkd";
        $this->_['html']=$this->mbgs->_html($this->_);
		$this->load->view('index',$this->_);
    }
    public function setSpm(){
        if($this->sess->kdMember==null) {
            return $this->logout();
        }
        $nama=$this->sess->nmMember;
        $this->_['page']="setSpm";
        $this->_['html']=$this->mbgs->_html($this->_);
		$this->load->view('index',$this->_);
    }


    public function logout(){
        $this->sess->sess_destroy();
        header("Location: https://bappedaksb.com");
        // return redirect("control");
    }
}
