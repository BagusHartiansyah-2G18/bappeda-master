<?php
defined('BASEPATH') OR exit('No direct script access allowed');
// sess enc mbgs lbgs qexec
class Proses extends CI_Controller {
    private $bgs;
    function __construct(){
        parent::__construct();
        $this->_=array();
        
        
        $this->kd=$this->sess->kdMember;
        $this->nm=$this->sess->nama;
        $this->kdJabatan=$this->sess->kdMemberJabatan;
        $this->kdDinas=$this->sess->kdMemberDinas;
        $this->tahun=$this->sess->tahun;

        $this->qtbl=_getNKA("c-prod",true);
        // $this->qtbl['p-kant']['nm']
    }
	public function checkUser(){
        $kondisi=false;
        if($this->sess->kode==null){
            $data=$_POST['data'];
            if(empty($_POST['data'])){
                return redirect("control");
            }
            
            $baseEND=json_decode((base64_decode($data)));

            $kdDinas   =$baseEND->{'kdDinas'};
            $password   =$baseEND->{'password'};
            $username   =$baseEND->{'username'};
            $kondisi=true;
        }else{
            $password   =$this->sess->password;
            $username   =$this->sess->nama;
            $kdDinas   =$this->sess->kdMemberDinas;
        }
        $q="select * from member where kodeDinas='".$kdDinas."' and UPPER(nama)=UPPER('".$username."') and UPPER(password)=UPPER('".$password."')";
        // return print_r($q);
        $member=$this->qexec->_func($q);
        if(count($member)==1){
            // if($kondisi){//for login awal no sess
            //     if(substr($member[0]['kdJabatan'],5)<3){
            //         $pembahasan=$this->qexec->_func("SELECT tahun,noPembahasan,progres,finals,files FROM pembahasan ORDER by ins desc limit 1");
            //         if(count($pembahasan)==0){
            //             return $this->mbgs->resFalse("Sistem Tidak Dapat Digunakan ");
            //         }
            //     }
            //     return $this->mbgs->resTrue("Sukses");
            // }
            return $this->mbgs->resTrue("Sukses");
        }else{
            if($kondisi){//for login awal no sess
                return $this->mbgs->resFalse("user tidak dapat ditemukan !!!");
            }
        }
        print_r(json_encode($this->_));
    }


    // basis data
    public function insJabatan(){
        if($this->sess->kdMember==null){
            return $this->mbgs->resFalse("maaf, Pengguna tidak terdeteksi !!!");
        }else{
            $baseEND=json_decode((base64_decode($_POST['data'])));
            $jabatan   =$baseEND->{'jabatan'};
            
            $keyTabel="kdJabatan";
            $kdTabel=$this->qexec->_func("select ".$keyTabel." from jabatan ORDER BY cast(".$keyTabel." as int) DESC limit 1");
            if(count($kdTabel)>0){
                $kdTabel=$kdTabel[0][$keyTabel]+1;
            }else{
                $kdTabel=1;
            }
            $q="
                INSERT INTO jabatan(kdJabatan, kdJabatan1, nmJabatan) VALUES 
                (
                    ".$this->mbgs->_valforQuery($kdTabel).",
                    ".$this->mbgs->_valforQuery("jaba-".$kdTabel).",
                    ".$this->mbgs->_valforQuery($jabatan)."
                )
            ";
            // return print_r($q);
            $check=$this->qexec->_proc($q);
            if($check){
                $this->_['data']=$this->qexec->_func(_jabatan(""));
                return $this->mbgs->resTrue($this->_);
            }else{
                return $this->mbgs->resFalse("Terjadi Kesalahan dalam proses perubahan!!!");
            }
        }
    }
    public function updJabatan(){
        if($this->sess->kdMember==null){
            return $this->mbgs->resFalse("maaf, Pengguna tidak terdeteksi !!!");
        }else{
            $baseEND=json_decode((base64_decode($_POST['data'])));
            $kdJabatan  =$baseEND->{'kdJabatan'};
            $jabatan    =$baseEND->{'jabatan'};

            $q="
                update jabatan set nmJabatan=".$this->mbgs->_valforQuery($jabatan)."
                where kdJabatan=".$this->mbgs->_valforQuery($kdJabatan)."
            ";
            $check=$this->qexec->_proc($q);
            if($check){
                $this->_['data']=$this->qexec->_func(_jabatan(""));
                return $this->mbgs->resTrue($this->_);
            }else{
                return $this->mbgs->resFalse("Terjadi Kesalahan dalam proses perubahan!!!");
            }
        }
    }
    public function delJabatan(){
        if($this->sess->kdMember==null){
            return $this->mbgs->resFalse("maaf, Pengguna tidak terdeteksi !!!");
        }else{
            $baseEND=json_decode((base64_decode($_POST['data'])));
            $kdJabatan  =$baseEND->{'kdJabatan'};

            $q="
                delete from jabatan
                where kdJabatan=".$this->mbgs->_valforQuery($kdJabatan)."
            ";
            $check=$this->qexec->_proc($q);
            if($check){
                $this->_['data']=$this->qexec->_func(_jabatan(""));
                return $this->mbgs->resTrue($this->_);
            }else{
                return $this->mbgs->resFalse("Terjadi Kesalahan dalam proses perubahan!!!");
            }
        }
    }


    public function insDinas(){
        if($this->sess->kdMember==null){
            return $this->mbgs->resFalse("maaf, Pengguna tidak terdeteksi !!!");
        }else{
            $baseEND=json_decode((base64_decode($_POST['data'])));
            $kdDinas    =$baseEND->{'kdDinas'};
            $nmDinas    =$baseEND->{'nmDinas'};
            $kadis      =$baseEND->{'kadis'};
            $nip        =$baseEND->{'nip'};
            
            $q="
                INSERT INTO dinas(kdDinas, nmDinas,kadis, nip, taDinas) VALUES
                (
                    ".$this->mbgs->_valforQuery($kdDinas).",
                    ".$this->mbgs->_valforQuery($nmDinas).",
                    ".$this->mbgs->_valforQuery($kadis).",
                    ".$this->mbgs->_valforQuery($nip).",
                    ".$this->mbgs->_valforQuery($this->tahun)."
                )
            ";
            // return print_r($q);
            $check=$this->qexec->_proc($q);
            if($check){
                $this->_['data']=$this->qexec->_func(_dinas(" where taDinas='".$this->tahun."'"));
                return $this->mbgs->resTrue($this->_);
            }else{
                return $this->mbgs->resFalse("Terjadi Kesalahan dalam proses perubahan!!!");
            }
        }
    }
    public function updDinas(){
        if($this->sess->kdMember==null){
            return $this->mbgs->resFalse("maaf, Pengguna tidak terdeteksi !!!");
        }else{
            $baseEND=json_decode((base64_decode($_POST['data'])));
            $kdDinas    =$baseEND->{'kdDinas'};
            $nmDinas    =$baseEND->{'nmDinas'};
            $kadis      =$baseEND->{'kadis'};
            $nip        =$baseEND->{'nip'};
            
            $q="
                update dinas set 
                    nmDinas=".$this->mbgs->_valforQuery($nmDinas).",
                    kadis=".$this->mbgs->_valforQuery($kadis).", 
                    nip=".$this->mbgs->_valforQuery($nip)."
                where kdDinas=".$this->mbgs->_valforQuery($kdDinas)." and 
                taDinas=".$this->mbgs->_valforQuery($this->tahun)."
            ";
            // return print_r($q);
            $check=$this->qexec->_proc($q);
            if($check){
                $this->_['data']=$this->qexec->_func(_dinas(" where taDinas='".$this->tahun."'"));
                return $this->mbgs->resTrue($this->_);
            }else{
                return $this->mbgs->resFalse("Terjadi Kesalahan dalam proses perubahan!!!");
            }
        }
    }
    public function delDinas(){
        if($this->sess->kdMember==null){
            return $this->mbgs->resFalse("maaf, Pengguna tidak terdeteksi !!!");
        }else{
            $baseEND=json_decode((base64_decode($_POST['data'])));
            $kdDinas    =$baseEND->{'kdDinas'};
            
            $q="
                delete from dinas
                where kdDinas=".$this->mbgs->_valforQuery($kdDinas)." and 
                taDinas=".$this->mbgs->_valforQuery($this->tahun)."
            ";
            // return print_r($q);
            $check=$this->qexec->_proc($q);
            if($check){
                $this->_['data']=$this->qexec->_func(_dinas(" where taDinas='".$this->tahun."'"));
                return $this->mbgs->resTrue($this->_);
            }else{
                return $this->mbgs->resFalse("Terjadi Kesalahan dalam proses perubahan!!!");
            }
        }
    }

    public function insTahun(){
        if($this->sess->kdMember==null){
            return $this->mbgs->resFalse("maaf, Pengguna tidak terdeteksi !!!");
        }else{
            $baseEND=json_decode((base64_decode($_POST['data'])));
            $nama       =$baseEND->{'nama'};
            $status     =$baseEND->{'status'};
            $perubahan  =$baseEND->{'perubahan'};
            
            $q="
                INSERT INTO tahun(nama, perubahan,status) VALUES
                (
                    ".$this->mbgs->_valforQuery($nama).",
                    ".$this->mbgs->_valforQuery($perubahan).",
                    ".$this->mbgs->_valforQuery($status)."
                )
            ";
            // return print_r($q);
            $check=$this->qexec->_proc($q);
            if($check){
                $this->_['data']=$this->qexec->_func(_tahun(""));
                return $this->mbgs->resTrue($this->_);
            }else{
                return $this->mbgs->resFalse("Terjadi Kesalahan dalam proses penyimpanan !!!");
            }
        }
    }
    public function delTahun(){
        if($this->sess->kdMember==null){
            return $this->mbgs->resFalse("maaf, Pengguna tidak terdeteksi !!!");
        }else{
            $baseEND=json_decode((base64_decode($_POST['data'])));
            $nama       =$baseEND->{'nama'};
            $perubahan  =$baseEND->{'perubahan'};
            
            $q="
                delete from tahun
                where nama=".$this->mbgs->_valforQuery($nama)." and 
                perubahan=".$this->mbgs->_valforQuery($perubahan)."
            ";
            // return print_r($q);
            $check=$this->qexec->_proc($q);
            if($check){
                $this->_['data']=$this->qexec->_func(_tahun(""));
                return $this->mbgs->resTrue($this->_);
            }else{
                return $this->mbgs->resFalse("Terjadi Kesalahan dalam proses perubahan!!!");
            }
        }
    }
    public function tahunSelected(){
        if($this->sess->kdMember==null){
            return $this->mbgs->resFalse("maaf, Pengguna tidak terdeteksi !!!");
        }else{
            $baseEND=json_decode((base64_decode($_POST['data'])));
            $nama       =$baseEND->{'nama'};
            $perubahan  =$baseEND->{'perubahan'};
            
            $q="
                update tahun set selected=0;
                update tahun set selected=1
                where nama=".$this->mbgs->_valforQuery($nama)." and 
                    perubahan=".$this->mbgs->_valforQuery($perubahan)."
            ";
            // return print_r($q);
            $check=$this->qexec->_multiProc($q);
            if($check){
                $this->_['data']=$this->qexec->_func(_tahun(""));
                return $this->mbgs->resTrue($this->_);
            }else{
                return $this->mbgs->resFalse("Terjadi Kesalahan dalam proses perubahan!!!");
            }
        }
    }
    
    
    
    
    

    function insMember(){
        if($this->sess->kdMember==null){
            return $this->mbgs->resFalse("maaf, Pengguna tidak terdeteksi !!!");
        }
        // $portal=$this->_keamanan($_POST['code'],_getNKA("c-prod",false));
        // if($portal['exec']){
        $baseEND=json_decode((base64_decode($_POST['data'])));
    
        $kdJabatan   =$baseEND->{'kdJabatan'};
        $username    =$baseEND->{'username'};
        $password    =$baseEND->{'password'};
        $nik         =$baseEND->{'nik'};
        $email       =$baseEND->{'email'};
        $kdDinas     =$baseEND->{'kdDinas'};
        
        $keyTabel="kdMember";
        $kdTabel=$this->qexec->_func("select ".$keyTabel." from member ORDER BY cast(".$keyTabel." as int) DESC limit 1");
        if(count($kdTabel)>0){
            $kdTabel=$kdTabel[0][$keyTabel]+1;
        }else{
            $kdTabel=1;
        }

        $kdMemberx=$this->mbgs->app['unik'].$this->qtbl['p-memb']['nm'].$kdTabel;
        
        $q="INSERT INTO member(kdMember,kdMember1, kdDinas, nmMember, nik, password, email,kdJabatan) VALUES(
            ".$this->mbgs->_valforQuery($kdTabel).",".$this->mbgs->_valforQuery($kdMemberx).",
            ".$this->mbgs->_valforQuery($kdDinas).",".$this->mbgs->_valforQuery($username).",
            ".$this->mbgs->_valforQuery($nik).",".$this->mbgs->_valforQuery($password).",
            ".$this->mbgs->_valforQuery($email).",".$this->mbgs->_valforQuery($kdJabatan)."
        )";
        // return print_r($q);
        $check=$this->qexec->_proc($q);
        if($check){
            $this->_['member']=$this->qexec->_func(_member(""));
            return $this->mbgs->resTrue($this->_);
        }else{
            return $this->mbgs->resFalse("Terjadi Kesalahan di penyimpanan sistem");
        }
        // }return $this->mbgs->resFalse($portal['msg']);
    }
    function updMember(){
        if($this->sess->kdMember==null){
            return $this->mbgs->resFalse("maaf, Pengguna tidak terdeteksi !!!");
        }
        $baseEND=json_decode((base64_decode($_POST['data'])));
    
        $kdJabatan   =$baseEND->{'kdJabatan'};
        $username    =$baseEND->{'username'};
        $password    =$baseEND->{'password'};
        $nik         =$baseEND->{'nik'};
        $email       =$baseEND->{'email'};
        $kdDinas     =$baseEND->{'kdDinas'};
        $kdMember     =$baseEND->{'kdMember'};
        $kdMemberx=$this->mbgs->app['unik'].$this->qtbl['p-memb']['nm'].$kdMember;
        
        $q="
            delete from member where kdMember='".$kdMember."';
            INSERT INTO member(kdMember,kdMember1, kdDinas, nmMember, nik, password, email,kdJabatan) VALUES(
                ".$this->mbgs->_valforQuery($kdMember).",".$this->mbgs->_valforQuery($kdMemberx).",
                ".$this->mbgs->_valforQuery($kdDinas).",".$this->mbgs->_valforQuery($username).",
                ".$this->mbgs->_valforQuery($nik).",".$this->mbgs->_valforQuery($password).",
                ".$this->mbgs->_valforQuery($email).",".$this->mbgs->_valforQuery($kdJabatan)."
            )
        ";
        // return print_r($q);
        $check=$this->qexec->_multiProc($q);
        // $check=true;
        if($check){

            $this->_['member']=$this->qexec->_func(_member(""));
            return $this->mbgs->resTrue($this->_);
        }else{
            return $this->mbgs->resFalse("Terjadi Kesalahan saat Penyimpanan data");
        }
        // $q=substr($judul,0,strlen(trim($judul))-1).";";
        // $q.=substr($rincian,0,strlen(trim($rincian))-1);

        
    }
    function delMember(){
        if($this->sess->kdMember==null){
            return $this->mbgs->resFalse("maaf, Pengguna tidak terdeteksi !!!");
        }
        $baseEND=json_decode((base64_decode($_POST['data'])));
        
        $kdMember     =$baseEND->{'kdMember'};

        $q="
            delete from member 
            where kdMember=".$this->mbgs->_valforQuery($kdMember)."
        ";
        $check=$this->qexec->_multiProc($q);
        if($check){
            
            $this->_['member']=$this->qexec->_func(_member(""));
            return $this->mbgs->resTrue($this->_);
        }else{
            return $this->mbgs->resFalse("Terjadi Kesalahan di penyimpanan sistem");
        }
    }

    //e renja
    public function ebOnOFfKey(){
        if($this->sess->kdMember==null){
            return $this->mbgs->resFalse("maaf, Pengguna tidak terdeteksi !!!");
        }else{
            $baseEND=json_decode((base64_decode($_POST['data'])));
            $query   =$baseEND->{'query'};
            $kdDinas   =$baseEND->{'kdDinas'};
            
            $check=$this->qexec->_proc($query);
            if($check){
                $this->_['data']=$this->qexec->_func(_keySub($kdDinas,$this->tahun,""));
                return $this->mbgs->resTrue($this->_);
            }else{
                return $this->mbgs->resFalse("Terjadi Kesalahan dalam proses perubahan!!!");
            }
        }
    }
    function saveAdminGroup(){
        if($this->sess->kdMember==null){
            return $this->mbgs->resFalse("maaf, Pengguna tidak terdeteksi !!!");
        }
        $baseEND=json_decode((base64_decode($_POST['data'])));
        $query   =$baseEND->{'query'};
        $member =$baseEND->{'member'};
        $check=$this->qexec->_multiProc($query);
        if($check){
            $this->_['dinas']=$this->qexec->_func(_cbDinasForAG($member," where taDinas='".$this->tahun."'"));
            return $this->mbgs->resTrue($this->_);
        }else{
            return $this->mbgs->resFalse("Terjadi Kesalahan di penyimpanan sistem");
        }
        // }return $this->mbgs->resFalse($portal['msg']);
    }
    function getDinasAdminGroup(){
        if($this->sess->kdMember==null){
            return $this->mbgs->resFalse("maaf, Pengguna tidak terdeteksi !!!");
        }
        $baseEND=json_decode((base64_decode($_POST['data'])));
        $member =$baseEND->{'member'};
        $this->_['dinas']=$this->qexec->_func(_cbDinasForAG($member," where taDinas='".$this->tahun."'"));
        return $this->mbgs->resTrue($this->_);
    }
    function kunciOpd(){
        if($this->sess->kdMember==null){
            return $this->mbgs->resFalse("maaf, Pengguna tidak terdeteksi !!!");
        }
        $baseEND=json_decode((base64_decode($_POST['data'])));
        $query =$baseEND->{'query'};
        $check=$this->qexec->_proc($query);
        if($check){
            return $this->mbgs->resTrue($this->_);
        }else{
            return $this->mbgs->resFalse("Terjadi Kesalahan di penyimpanan sistem");
        }
    }
    public function getSubOpd(){
        $kondisi=false;
        if($this->sess->kdMember==null){
            return $this->mbgs->resFalse("maaf, Pengguna tidak terdeteksi !!!");
        }else{
            $baseEND=json_decode((base64_decode($_POST['data'])));
            $kdDinas   =$baseEND->{'kdDinas'};
            
            $this->_['data']=$this->qexec->_func(_keySub($kdDinas,$this->tahun,""));
            return $this->mbgs->resTrue($this->_);
        }
    }
    

    // musrenbang
    
    function insPrioritas(){
        if($this->sess->kdMember==null){
            return $this->mbgs->resFalse("maaf, Pengguna tidak terdeteksi !!!");
        }
        $baseEND=json_decode((base64_decode($_POST['data'])));
        $id =$baseEND->{'id'};
        $nama =$baseEND->{'nama'};
        $q="INSERT INTO prioritas(id, nama, tahun) VALUES (
            ".$this->mbgs->_valforQuery($id).",
            ".$this->mbgs->_valforQuery($nama).",
            ".$this->mbgs->_valforQuery($this->tahun)."
        )";
        $check=$this->qexec->_proc($q);
        if($check){
            $this->_['dt']=$this->qexec->_func(_prioritas(" where tahun='".$this->tahun."'"));
            return $this->mbgs->resTrue($this->_);
        }else{
            return $this->mbgs->resFalse("Terjadi Kesalahan di penyimpanan sistem");
        }
    }
    function updPrioritas(){
        if($this->sess->kdMember==null){
            return $this->mbgs->resFalse("maaf, Pengguna tidak terdeteksi !!!");
        }
        $baseEND=json_decode((base64_decode($_POST['data'])));
        $id =$baseEND->{'id'};
        $nama =$baseEND->{'nama'};
        $q="update prioritas set nama=".$this->mbgs->_valforQuery($nama)."
            where id=".$this->mbgs->_valforQuery($id)." and
                tahun=".$this->mbgs->_valforQuery($this->tahun)."
        ";
        $check=$this->qexec->_proc($q);
        if($check){
            $this->_['dt']=$this->qexec->_func(_prioritas(" where tahun='".$this->tahun."'"));
            return $this->mbgs->resTrue($this->_);
        }else{
            return $this->mbgs->resFalse("Terjadi Kesalahan di penyimpanan sistem");
        }
    }
    function delPrioritas(){
        if($this->sess->kdMember==null){
            return $this->mbgs->resFalse("maaf, Pengguna tidak terdeteksi !!!");
        }
        $baseEND=json_decode((base64_decode($_POST['data'])));
        $id =$baseEND->{'id'};
        $q="delete from prioritas
            where id=".$this->mbgs->_valforQuery($id)." and
                tahun=".$this->mbgs->_valforQuery($this->tahun)."
        ";
        $check=$this->qexec->_proc($q);
        if($check){
            $this->_['dt']=$this->qexec->_func(_prioritas(" where tahun='".$this->tahun."'"));
            return $this->mbgs->resTrue($this->_);
        }else{
            return $this->mbgs->resFalse("Terjadi Kesalahan di penyimpanan sistem");
        }
    }
    function onOffSubPrioritas(){
        if($this->sess->kdMember==null){
            return $this->mbgs->resFalse("maaf, Pengguna tidak terdeteksi !!!");
        }
        $baseEND=json_decode((base64_decode($_POST['data'])));
        $query =$baseEND->{'query'};
        // return print_r($query);
        $check=$this->qexec->_proc($query);
        if($check){
            return $this->mbgs->resTrue($this->_);
        }else{
            return $this->mbgs->resFalse("Terjadi Kesalahan di penyimpanan sistem");
        }
    }
    function onOffKeyMus(){
        if($this->sess->kdMember==null){
            return $this->mbgs->resFalse("maaf, Pengguna tidak terdeteksi !!!");
        }
        $baseEND=json_decode((base64_decode($_POST['data'])));
        $kunci=$baseEND->{'kunci'};
        $kdMember=$baseEND->{'kdMember'};
        $qeuryUpdKey=_qupdKeyGroup(
            $kunci,
            strlen($this->sess->keyTahapan),
            $this->sess->keyTahapan,
            $kdMember,
            $this->sess->tahun,
            $this->sess->kdApp
        );
        // return print_r($qeuryUpdKey);
        $check=$this->qexec->_proc($qeuryUpdKey);
        if($check){
            return $this->mbgs->resTrue($this->_);
        }else{
            return $this->mbgs->resFalse("Terjadi Kesalahan di penyimpanan sistem");
        }
    }
    
    
    // pengaturan
    function export(){
        if($this->sess->kdMember==null){
            return $this->mbgs->resFalse("maaf, Pengguna tidak terdeteksi !!!");
        }else{
            $baseEND=json_decode((base64_decode($_POST['data'])));
            $from   =$baseEND->{'from'};
            $to     =$baseEND->{'to'};
            $data   =$baseEND->{'data'};
            
            $qdel="";
            $q="";
            foreach ($data as $key => $v) {
                if($key>0){
                    $q.=";";
                }
                switch ($v->key) {
                    case 'dinas':
                        $qdel.="
                            delete from dinas where taDinas='".$to."';
                        ";
                        $q.="
                            INSERT INTO `dinas`(`kdDinas`, `nmDinas`, `deskripsi`, `kadis`, `nip`, `taDinas`)(
                                SELECT `kdDinas`, `nmDinas`, `deskripsi`, `kadis`, `nip`,'".$to."' FROM `dinas` WHERE taDinas='".$from."'
                            )
                        ";
                    break;
                    case 'rekeningB':
                        $qdel.="
                            delete from apbd1 where taApbd1='".$to."';                        
                            delete from apbd2 where taApbd2='".$to."';
                            delete from apbd3 where taApbd3='".$to."';
                            delete from apbd4 where taApbd4='".$to."';
                            delete from apbd5 where taApbd5='".$to."';
                            delete from apbd6 where taApbd6='".$to."';
                        ";
                        $q.="
                            INSERT INTO `apbd1`(`kdApbd1`, `nmApbd1`, `deskripsi`, `taApbd1`)(
                                SELECT `kdApbd1`, `nmApbd1`, `deskripsi`,'".$to."' FROM `apbd1` WHERE taApbd1='".$from."'
                            );
                            INSERT INTO `apbd2`(`kdApbd2`,`kdApbd1`, `nmApbd2`, `deskripsi`, `taApbd2`)(
                                SELECT `kdApbd2`,`kdApbd1`, `nmApbd2`, `deskripsi`,'".$to."' FROM `apbd2` WHERE taApbd2='".$from."'
                            );
                            INSERT INTO `apbd3`(`kdApbd3`,`kdApbd2`, `nmApbd3`, `deskripsi`, `taApbd3`)(
                                SELECT `kdApbd3`,`kdApbd2`, `nmApbd3`, `deskripsi`,'".$to."' FROM `apbd3` WHERE taApbd3='".$from."'
                            );
                            INSERT INTO `apbd4`(`kdApbd4`,`kdApbd3`, `nmApbd4`, `deskripsi`, `taApbd4`)(
                                SELECT `kdApbd4`,`kdApbd3`, `nmApbd4`, `deskripsi`,'".$to."' FROM `apbd4` WHERE taApbd4='".$from."'
                            );
                            INSERT INTO `apbd5`(`kdApbd5`,`kdApbd4`, `nmApbd5`, `deskripsi`, `taApbd5`)(
                                SELECT `kdApbd5`,`kdApbd4`, `nmApbd5`, `deskripsi`,'".$to."' FROM `apbd5` WHERE taApbd5='".$from."'
                            );
                            INSERT INTO `apbd6`(`kdApbd6`,`kdApbd5`, `nmApbd6`, `deskripsi`, `taApbd6`)(
                                SELECT `kdApbd6`,`kdApbd5`, `nmApbd6`, `deskripsi`,'".$to."' FROM `apbd6` WHERE taApbd6='".$from."'
                            );
                        ";
                        
                    break;
                    case 'subK':
                        $qdel.="
                            delete from purusan where taUrusan='".$to."';
                            delete from pbidang where taBidang='".$to."';
                            delete from pprogram where taProg='".$to."';
                            delete from pkegiatan where taKeg='".$to."';
                            delete from psub where taSub='".$to."';
                        ";
                        $q.="
                            INSERT INTO `purusan`(`kdUrusan`, `nmUrusan`, `taUrusan`)(
                                SELECT `kdUrusan`, `nmUrusan`, '".$to."' FROM `purusan` WHERE taUrusan='".$from."'
                            );
                            INSERT INTO `pbidang`(`kdBidang`, `kdUrusan`, `nmBidang`, `taBidang`)(
                                SELECT `kdBidang`, `kdUrusan`, `nmBidang`,'".$to."' FROM `pbidang` WHERE taBidang='".$from."'
                            );
                            INSERT INTO `pprogram`(`kdProg`, `kdBidang`, `nmProg`, `taProg`)(
                                SELECT `kdProg`, `kdBidang`, `nmProg`, '".$to."' FROM `pprogram` WHERE taProg='".$from."'
                            );
                            INSERT INTO `pkegiatan`(`kdKeg`, `kdProg`, `nmKeg`, `taKeg`) (
                                SELECT `kdKeg`, `kdProg`, `nmKeg`,'".$to."' FROM `pkegiatan` WHERE taKeg='".$from."'
                            );

                            INSERT INTO `psub`(`kdSub`, `kdKeg`, `kdDinas`, `nmSub`, `taSub`, `qpra`, `qrka`, `qrkaFinal`, `lokasiP`, `waktuP`, `kelompokS`, `keluaran`, `hasil`, `keluaranT`, `hasilT`)(
                                SELECT `kdSub`, `kdKeg`, `kdDinas`, `nmSub`,'".$to."', 0, 0, 0, `lokasiP`, `waktuP`, `kelompokS`, `keluaran`, `hasil`, `keluaranT`, `hasilT` FROM `psub` WHERE taSub='".$from."'
                            );
                        ";
                    break;
                    case 'tsubK':
                        $qdel.="
                            delete from ptamsub where taSub='".$to."';
                        ";
                        $q.="
                            INSERT INTO `ptamsub`(`kdSub`, `kdKeg`, `nmSub`, `taSub`)(
                                SELECT `kdSub`, `kdKeg`, `nmSub`,'".$to."' FROM `ptamsub` WHERE taSub='".$from."'
                            );
                        ";
                    break;
                    case 'ssh':
                        $qdel.="
                            delete from ssh where taSsh='".$to."';
                        ";
                        $q.="
                            INSERT INTO `ssh`(`id`, `kodeBelanja`, `kode`, `nama`, `spesifikasi`, `spek`, `satuan`, `harga`, `idSSH`, `taSsh`)(
                                SELECT `id`, `kodeBelanja`, `kode`, `nama`, `spesifikasi`, `spek`, `satuan`, `harga`, `idSSH`,'".$to."' FROM `ssh` WHERE taSsh='".$from."'
                            );
                        ";
                    break;
                    case 'rincianB':
                        $qdel.="
                            delete from ubjudul where taJudul='".$to." and tahapan=1';
                            delete from ubrincian where taRincian='".$to."' and tahapan=1;
                        ";
                        $q.="
                            INSERT INTO `ubjudul`(`kdSUb`, `kdDinas`, `kdApbd6`, `kdSDana`, `nama`, `taJudul`, `total`, `tahapan`, `dateUpdate`, `kdJudul`, `status`,`qdel`)(
                                SELECT `kdSUb`, `kdDinas`, `kdApbd6`, `kdSDana`, `nama`, '".$to."', `total`,1  as  tahapan, `dateUpdate`, `kdJudul`, `status`,1 as qdel FROM `ubjudul` WHERE taJudul='".$from."' and tahapan=3
                            );
                            INSERT INTO `ubrincian`(`kdRincian`, `kdJudul`, `kdSub`, `kdDinas`, `uraian`, `total`, `jumlah1`, `jumlah2`, `jumlah3`, `satuan1`, `satuan2`, `satuan3`, `volume`, `satuanVol`, `harga`, `date`, `taRincian`, `status`, `tahapan`,`qdel`)(
                                SELECT `kdRincian`, `kdJudul`, `kdSub`, `kdDinas`, `uraian`, `total`, `jumlah1`, `jumlah2`, `jumlah3`, `satuan1`, `satuan2`, `satuan3`, `volume`, `satuanVol`, `harga`, `date`, '".$to."', `status`,1 as  tahapan,1 as qdel FROM `ubrincian` WHERE taRincian='".$from."' and tahapan=3
                            );
                        ";
                    break;
                }
            }
            // return print_r($qdel.$q);
            $check=$this->qexec->_multiProc($qdel.$q);
            if($check){
                $this->_['data']=$this->qexec->_func(_dinas(" where taDinas='".$this->tahun."'"));
                return $this->mbgs->resTrue($this->_);
            }else{
                return $this->mbgs->resFalse("Terjadi Kesalahan dalam proses perubahan!!!");
            }
        }
    }


    // branda
    function selectMemberAgenda(){
        // $portal=$this->_keamanan($_POST['code'],_getNKA("c-sett",false));
        // if($portal['exec']){
        if(true){
            $baseEND=json_decode((base64_decode($_POST['data'])));
            $kdMember =$baseEND->{'kdMember'};
            $this->_['dt']=$this->qexec->_func(_agenda(" where kdMember='".$kdMember."'"));
            return $this->mbgs->resTrue($this->_);
        }
        return $this->mgbs->resFalse($portal['msg']);
    }
    function insAgenda(){
        // $portal=$this->_keamanan($_POST['code'],_getNKA("c-sett",false));
        // if($portal['exec']){
        if(true){
    
            $file=$_POST['file'];
            $baseEND=json_decode((base64_decode($_POST['data'])));
            $keterangan =$baseEND->{'keterangan'};
            $judul      =$baseEND->{'judul'};
            $kdAgenda   =$baseEND->{'kdAgenda'};
            $hari       =$baseEND->{'hari'};

            $kdMember  =$baseEND->{'kdMember'};
            
            $tglS    =$baseEND->{'tglS'};
            $tglE    =$baseEND->{'tglE'};
            
            $tempat     =$baseEND->{'tempat'};
            $waktu      =$baseEND->{'waktu'};
            $taAgenda   =$this->mbgs->_gdate("Y");
            $namaFile="";
            if(!empty($file)){
                // return print_r($file['data']);
                foreach ($file as $key => $v) {
                    if($key>0){
                        $namaFile.="/";
                    }
                    // $namaFile.=$this->_uploadImage($v['src'],$v['nama'])."<2G18>";
                    $namaFile.=$this->_uploadImage($v['src'],"fs_sistem/upload/image/agenda/".$v['nama']);
                }
            }

            $check=$this->qexec->_proc("
                INSERT INTO agenda(kdAgenda, kdMember, judul, hari, tglS, tglE, waktu,tempat,poster, keteranganS,taAgenda) VALUES
                (
                    ".$this->mbgs->_valforQuery($kdAgenda).",".$this->mbgs->_valforQuery($kdMember).",".$this->mbgs->_valforQuery($judul).",
                    ".$this->mbgs->_valforQuery($hari).",".$this->mbgs->_valforQuery($tglS).",".$this->mbgs->_valforQuery($tglE).",
                    ".$this->mbgs->_valforQuery($waktu).",".$this->mbgs->_valforQuery($tempat).",".$this->mbgs->_valforQuery($namaFile).",
                    ".$this->mbgs->_valforQuery($keterangan).",".$this->mbgs->_valforQuery($taAgenda)."
                )
            ");
            if($check){
                $this->_['dt']     =$this->qexec->_func(_agenda(" where kdMember='".$kdMember."'"));
                return $this->mbgs->resTrue($this->_);
            }else{
                return $this->mbgs->resFalse("Terjadi Kesalahan di penyimpanan sistem");
            }
        }
        return $this->mgbs->resFalse($portal['msg']);
    }
    function updAgenda(){
        // $portal=$this->_keamanan($_POST['code'],_getNKA("c-sett",false));
        // if($portal['exec']){
        if(true){
            $baseEND=json_decode((base64_decode($_POST['data'])));
            $keterangan =$baseEND->{'keterangan'};
            $judul      =$baseEND->{'judul'};
            $kdAgenda   =$baseEND->{'kdAgenda'};
            $hari       =$baseEND->{'hari'};

            $kdMember  =$baseEND->{'kdMember'};
            
            $tglS    =$baseEND->{'tglS'};
            $tglE    =$baseEND->{'tglE'};
            
            $tempat     =$baseEND->{'tempat'};
            $waktu      =$baseEND->{'waktu'};
            $taAgenda   =$this->mbgs->_gdate("Y");
            
            $check=$this->qexec->_proc("
                update agenda set 
                    judul=".$this->mbgs->_valforQuery($judul).", 
                    hari=".$this->mbgs->_valforQuery($hari).", 
                    tglS=".$this->mbgs->_valforQuery($tglS).",
                    tglE=".$this->mbgs->_valforQuery($tglE).",
                    waktu=".$this->mbgs->_valforQuery($waktu).",
                    tempat=".$this->mbgs->_valforQuery($tempat).",
                    keteranganS='".$keterangan."'
                where kdAgenda=".$this->mbgs->_valforQuery($kdAgenda)."
                and kdMember=".$this->mbgs->_valforQuery($kdMember)."
                and taAgenda=".$this->mbgs->_valforQuery($taAgenda)."
            ");
            if($check){
                $this->_['dt']     =$this->qexec->_func(_agenda(" where kdMember='".$kdMember."'"));
                return $this->mbgs->resTrue($this->_);
            }else{
                return $this->mbgs->resFalse("Terjadi Kesalahan di penyimpanan sistem");
            }
        }
        return $this->mgbs->resFalse($portal['msg']);
    }
    function delAgenda(){
        // $portal=$this->_keamanan($_POST['code'],_getNKA("d-sett",false));
        // if($portal['exec']){
        if(true){
            $baseEND=json_decode((base64_decode($_POST['data'])));
            
            $kdAgenda   =$baseEND->{'kdAgenda'};
            $kdMember  =$baseEND->{'kdMember'};
            $taAgenda   =$this->mbgs->_gdate("Y");

            $check=$this->qexec->_proc("
                delete from agenda 
                where kdAgenda=".$this->mbgs->_valforQuery($kdAgenda)."
                and kdMember=".$this->mbgs->_valforQuery($kdMember)."
                and taAgenda=".$this->mbgs->_valforQuery($taAgenda)."
            ");
            if($check){
                $this->_['dt']     =$this->qexec->_func(_agenda(" where kdMember='".$kdMember."'"));
                return $this->mbgs->resTrue($this->_);
            }else{
                return $this->mbgs->resFalse("Terjadi Kesalahan di penyimpanan sistem");
            }
        }return $this->mgbs->resFalse($portal['msg']);
    }
    function finalAgenda(){
        // $portal=$this->_keamanan($_POST['code'],_getNKA("c-sett",false));
        // if($portal['exec']){
        if(true){
    
            $file=$_POST['file'];
            $baseEND=json_decode((base64_decode($_POST['data'])));
            $keterangan =$baseEND->{'keterangan'};
            $judul      =$baseEND->{'judul'};
            $kdAgenda   =$baseEND->{'kdAgenda'};
            $hari       =$baseEND->{'hari'};

            $kdMember  =$baseEND->{'kdMember'};
            
            $tglS    =$baseEND->{'tglS'};
            $tglE    =$baseEND->{'tglE'};
            
            $tempat     =$baseEND->{'tempat'};
            $waktu      =$baseEND->{'waktu'};
            $taAgenda   =$this->mbgs->_gdate("Y");
            $namaFile="";
            if(!empty($file)){
                // return print_r($file['data']);
                foreach ($file as $key => $v) {
                    if($key>0){
                        $namaFile.="/";
                    }
                    // $namaFile.=$this->_uploadImage($v['src'],$v['nama'])."<2G18>";
                    $namaFile.=$this->_uploadImage($v['src'],"fs_sistem/upload/image/agenda/".$v['nama']);
                }
            }
            $check=$this->qexec->_proc("
                update agenda set 
                    judul=".$this->mbgs->_valforQuery($judul).", 
                    hari=".$this->mbgs->_valforQuery($hari).", 
                    tglS=".$this->mbgs->_valforQuery($tglS).",
                    tglE=".$this->mbgs->_valforQuery($tglE).",
                    waktu=".$this->mbgs->_valforQuery($waktu).",
                    tempat=".$this->mbgs->_valforQuery($tempat).",
                    keteranganE='".$keterangan."',
                    posterF='".$namaFile."',
                    final=1
                where kdAgenda=".$this->mbgs->_valforQuery($kdAgenda)."
                and kdMember=".$this->mbgs->_valforQuery($kdMember)."
                and taAgenda=".$this->mbgs->_valforQuery($taAgenda)."
            ");
            if($check){
                $this->_['dt']     =$this->qexec->_func(_agenda(" where kdMember='".$kdMember."'"));
                return $this->mbgs->resTrue($this->_);
            }else{
                return $this->mbgs->resFalse("Terjadi Kesalahan di penyimpanan sistem");
            }
        }
        return $this->mgbs->resFalse($portal['msg']);
    }

    function insProduk(){
        // $portal=$this->_keamanan($_POST['code'],_getNKA("c-sett",false));
        // if($portal['exec']){
        if(true){
    
            $file=$_POST['file'];
            $img=$file['img'];
            $file=$file['file'];

            $baseEND=json_decode((base64_decode($_POST['data'])));
            $keterangan =$baseEND->{'keterangan'};
            $judul      =$baseEND->{'judul'};
            $kdKate     =$baseEND->{'kdKate'};
            $sumber     =$baseEND->{'sumberKate'};

            $namaFile="";
            foreach ($img as $key => $v) {
                $namaFile=$this->_uploadImage($v['src'],"fs_sistem/upload/image/".$v['nama']);
            }

            $namaFile1='';
            foreach ($file as $key => $v) {
                // $namaFile.=$this->_uploadImage($v['src'],$v['nama'])."<2G18>";
                $namaFile1=$this->_uploadFiles($v['data'],"".$v['nama']);
            }
        
            $check=$this->qexec->_proc("
                INSERT INTO produk( judul, keterangan, file,kdKate,sumberKate,img) VALUES
                (
                    ".$this->mbgs->_valforQuery($judul).",".$this->mbgs->_valforQuery($keterangan).",
                    ".$this->mbgs->_valforQuery($namaFile1).",".$this->mbgs->_valforQuery($kdKate).",
                    ".$this->mbgs->_valforQuery($sumber).",".$this->mbgs->_valforQuery($namaFile)."
                )
            ");
            if($check){
                $this->_['dt']     =$this->qexec->_func(_produk(""));
                return $this->mbgs->resTrue($this->_);
            }else{
                return $this->mbgs->resFalse("Terjadi Kesalahan di penyimpanan sistem");
            }
        }
        return $this->mgbs->resFalse($portal['msg']);
    }
    function updProduk(){
        // $portal=$this->_keamanan($_POST['code'],_getNKA("c-sett",false));
        // if($portal['exec']){
        if(true){
            $baseEND=json_decode((base64_decode($_POST['data'])));
            $keterangan =$baseEND->{'keterangan'};
            $judul      =$baseEND->{'judul'};
            $kdProduk   =$baseEND->{'kdProduk'};
            $kdKate     =$baseEND->{'kdKate'};
            

            $check=$this->qexec->_proc("
                update produk set 
                    judul=".$this->mbgs->_valforQuery($judul).",
                    keterangan=".$this->mbgs->_valforQuery($keterangan).",
                    kdKate=".$this->mbgs->_valforQuery($kdKate)."
                where kdProduk=".$this->mbgs->_valforQuery($kdProduk)."
            ");
            if($check){
                $this->_['dt']     =$this->qexec->_func(_produk(""));
                return $this->mbgs->resTrue($this->_);
            }else{
                return $this->mbgs->resFalse("Terjadi Kesalahan di penyimpanan sistem");
            }
        }
        return $this->mgbs->resFalse($portal['msg']);
    }
    function delProduk(){
        // $portal=$this->_keamanan($_POST['code'],_getNKA("d-sett",false));
        // if($portal['exec']){
        if(true){
            $baseEND=json_decode((base64_decode($_POST['data'])));
            
            $kdProduk   =$baseEND->{'kdProduk'};
            $check=$this->qexec->_proc("delete from produk where kdProduk=".$this->mbgs->_valforQuery($kdProduk));
            if($check){
                $this->_['dt']     =$this->qexec->_func(_produk(""));
                return $this->mbgs->resTrue($this->_);
            }else{
                return $this->mbgs->resFalse("Terjadi Kesalahan di penyimpanan sistem");
            }
        }return $this->mgbs->resFalse($portal['msg']);
    }

    public function addKategoriUmum(){
        $kondisi=false;
        if($this->sess->kdMember==null){
            return $this->mbgs->resFalse("maaf, Pengguna tidak terdeteksi !!!");
        }else{
            $baseEND=json_decode((base64_decode($_POST['data'])));
            $kdKate   =$baseEND->{'kdKate'};
            $nmKate   =$baseEND->{'nmKate'};
            $sumber   =$baseEND->{'sumber'};
            $check=$this->qexec->_proc("insert into kategoriumum (kdKate,nmKate,sumber) values (
                ".$this->mbgs->_valforQuery($kdKate).",
                ".$this->mbgs->_valforQuery($nmKate).",
                ".$this->mbgs->_valforQuery($sumber)."
            )");
            if($check){
                $this->_['kateUmum']=$this->qexec->_func(_cbKategoriUmum($sumber," order by kdKate asc"));
                return $this->mbgs->resTrue($this->_);
            }else{
                return $this->mbgs->resFalse("Terjadi Kesalahan di penyimpanan sistem");
            }
        }
    }


    // data ku

    function insIku(){
        // $portal=$this->_keamanan($_POST['code'],_getNKA("c-sett",false));
        // if($portal['exec']){
        if(true){
    
            $file=$_POST['file'];
            $baseEND=json_decode((base64_decode($_POST['data'])));
            $kdIku      =$baseEND->{'kdIku'};
            $nmIku      =$baseEND->{'nmIku'};

            $ketIku     =$baseEND->{'ketIku'};
            $sasIku     =$baseEND->{'sasIku'};
            $satuan     =$baseEND->{'satuan'};

            $namaFile="";
            if(!empty($file)){
                foreach ($file as $key => $v) {
                    if($key>0){
                        $namaFile.="/";
                    }
                    // $namaFile.=$this->_uploadImage($v['src'],$v['nama'])."<2G18>";
                    $namaFile.=$this->_uploadImage($v['src'],"fs_sistem/upload/icIku/".$v['nama']);
                }
            }
            $check=$this->qexec->_proc("
                INSERT INTO iku(kdIku, nmIku, ketIku, sasIku,satuan, img,jenis) VALUES
                (
                    ".$this->mbgs->_valforQuery($kdIku).",".$this->mbgs->_valforQuery($nmIku).",".$this->mbgs->_valforQuery($ketIku).",
                    ".$this->mbgs->_valforQuery($sasIku).",".$this->mbgs->_valforQuery($satuan).",".$this->mbgs->_valforQuery($namaFile).",'iku'
                )
            ");
            
            if($check){
                $this->_['dt']     =$this->qexec->_func(_iku(" where jenis='iku'"));
                foreach ($this->_['dt'] as $key => $v) {
                    $this->_['dt'][$key]['tahun']=$this->qexec->_func(_getValiku1($v['kdIku']," and jenis='iku'"));
                }
                return $this->mbgs->resTrue($this->_);
            }else{
                return $this->mbgs->resFalse("Terjadi Kesalahan di penyimpanan sistem");
            }
        }
        return $this->mgbs->resFalse($portal['msg']);
    }
    function updIku(){
        // $portal=$this->_keamanan($_POST['code'],_getNKA("c-sett",false));
        // if($portal['exec']){
        if(true){
            $baseEND=json_decode((base64_decode($_POST['data'])));
            $kdIku      =$baseEND->{'kdIku'};
            $nmIku      =$baseEND->{'nmIku'};

            $ketIku     =$baseEND->{'ketIku'};
            $sasIku     =$baseEND->{'sasIku'};
            $satuan     =$baseEND->{'satuan'};

            $check=$this->qexec->_proc("
                update iku set 
                    nmIku=".$this->mbgs->_valforQuery($nmIku).", 
                    ketIku=".$this->mbgs->_valforQuery($ketIku).", 
                    sasIku=".$this->mbgs->_valforQuery($sasIku).",
                    satuan=".$this->mbgs->_valforQuery($satuan)."
                where kdIku=".$this->mbgs->_valforQuery($kdIku)." and jenis='iku'
            ");
            if($check){
                $this->_['dt']     =$this->qexec->_func(_iku(" where jenis='iku'"));
                foreach ($this->_['dt'] as $key => $v) {
                    $this->_['dt'][$key]['tahun']=$this->qexec->_func(_getValiku1($v['kdIku']," and jenis='iku'"));
                }
                return $this->mbgs->resTrue($this->_);
            }else{
                return $this->mbgs->resFalse("Terjadi Kesalahan di penyimpanan sistem");
            }
        }
        return $this->mgbs->resFalse($portal['msg']);
    }

    function insIkd(){
        // $portal=$this->_keamanan($_POST['code'],_getNKA("c-sett",false));
        // if($portal['exec']){
        if(true){
    
            $file=$_POST['file'];
            $baseEND=json_decode((base64_decode($_POST['data'])));
            $kdIku      =$baseEND->{'kdIku'};
            $nmIku      =$baseEND->{'nmIku'};

            $ketIku     =$baseEND->{'ketIku'};
            $sasIku     =$baseEND->{'sasIku'};
            $satuan     =$baseEND->{'satuan'};

            $namaFile="";
            if(!empty($file)){
                foreach ($file as $key => $v) {
                    if($key>0){
                        $namaFile.="/";
                    }
                    // $namaFile.=$this->_uploadImage($v['src'],$v['nama'])."<2G18>";
                    $namaFile.=$this->_uploadImage($v['src'],"fs_sistem/upload/icIku/".$v['nama']);
                }
            }
            $check=$this->qexec->_proc("
                INSERT INTO iku(kdIku, nmIku, ketIku, sasIku,satuan, img,jenis) VALUES
                (
                    ".$this->mbgs->_valforQuery($kdIku).",".$this->mbgs->_valforQuery($nmIku).",".$this->mbgs->_valforQuery($ketIku).",
                    ".$this->mbgs->_valforQuery($sasIku).",".$this->mbgs->_valforQuery($satuan).",".$this->mbgs->_valforQuery($namaFile).",'ikd'
                )
            ");
            
            if($check){
                $this->_['dt']     =$this->qexec->_func(_iku(" where jenis='ikd'"));
                foreach ($this->_['dt'] as $key => $v) {
                    $this->_['dt'][$key]['tahun']=$this->qexec->_func(_getValiku1($v['kdIku']," and jenis='ikd'"));
                }
                return $this->mbgs->resTrue($this->_);
            }else{
                return $this->mbgs->resFalse("Terjadi Kesalahan di penyimpanan sistem");
            }
        }
        return $this->mgbs->resFalse($portal['msg']);
    }
    function updIkd(){
        // $portal=$this->_keamanan($_POST['code'],_getNKA("c-sett",false));
        // if($portal['exec']){
        if(true){
            $baseEND=json_decode((base64_decode($_POST['data'])));
            $kdIku      =$baseEND->{'kdIku'};
            $nmIku      =$baseEND->{'nmIku'};

            $ketIku     =$baseEND->{'ketIku'};
            $sasIku     =$baseEND->{'sasIku'};
            $satuan     =$baseEND->{'satuan'};

            $check=$this->qexec->_proc("
                update iku set 
                    nmIku=".$this->mbgs->_valforQuery($nmIku).", 
                    ketIku=".$this->mbgs->_valforQuery($ketIku).", 
                    sasIku=".$this->mbgs->_valforQuery($sasIku).",
                    satuan=".$this->mbgs->_valforQuery($satuan)."
                where kdIku=".$this->mbgs->_valforQuery($kdIku)." and jenis='ikd'
            ");
            if($check){
                $this->_['dt']     =$this->qexec->_func(_iku(" where jenis='ikd'"));
                foreach ($this->_['dt'] as $key => $v) {
                    $this->_['dt'][$key]['tahun']=$this->qexec->_func(_getValiku1($v['kdIku']," and jenis='ikd'"));
                }
                return $this->mbgs->resTrue($this->_);
            }else{
                return $this->mbgs->resFalse("Terjadi Kesalahan di penyimpanan sistem");
            }
        }
        return $this->mgbs->resFalse($portal['msg']);
    }

    function insSpm(){
        // $portal=$this->_keamanan($_POST['code'],_getNKA("c-sett",false));
        // if($portal['exec']){
        if(true){
    
            $file=$_POST['file'];
            $baseEND=json_decode((base64_decode($_POST['data'])));
            $kdIku      =$baseEND->{'kdIku'};
            $nmIku      =$baseEND->{'nmIku'};

            $ketIku     =$baseEND->{'ketIku'};
            $sasIku     =$baseEND->{'sasIku'};
            $satuan     =$baseEND->{'satuan'};

            $namaFile="";
            if(!empty($file)){
                foreach ($file as $key => $v) {
                    if($key>0){
                        $namaFile.="/";
                    }
                    // $namaFile.=$this->_uploadImage($v['src'],$v['nama'])."<2G18>";
                    $namaFile.=$this->_uploadImage($v['src'],"fs_sistem/upload/icIku/".$v['nama']);
                }
            }
            $check=$this->qexec->_proc("
                INSERT INTO iku(kdIku, nmIku, ketIku, sasIku,satuan, img,jenis) VALUES
                (
                    ".$this->mbgs->_valforQuery($kdIku).",".$this->mbgs->_valforQuery($nmIku).",".$this->mbgs->_valforQuery($ketIku).",
                    ".$this->mbgs->_valforQuery($sasIku).",".$this->mbgs->_valforQuery($satuan).",".$this->mbgs->_valforQuery($namaFile).",'spm'
                )
            ");
            
            if($check){
                $this->_['dt']     =$this->qexec->_func(_iku(" where jenis='spm'"));
                foreach ($this->_['dt'] as $key => $v) {
                    $this->_['dt'][$key]['tahun']=$this->qexec->_func(_getValiku1($v['kdIku']," and jenis='spm'"));
                }
                return $this->mbgs->resTrue($this->_);
            }else{
                return $this->mbgs->resFalse("Terjadi Kesalahan di penyimpanan sistem");
            }
        }
        return $this->mgbs->resFalse($portal['msg']);
    }
    function updSpm(){
        // $portal=$this->_keamanan($_POST['code'],_getNKA("c-sett",false));
        // if($portal['exec']){
        if(true){
            $baseEND=json_decode((base64_decode($_POST['data'])));
            $kdIku      =$baseEND->{'kdIku'};
            $nmIku      =$baseEND->{'nmIku'};

            $ketIku     =$baseEND->{'ketIku'};
            $sasIku     =$baseEND->{'sasIku'};
            $satuan     =$baseEND->{'satuan'};

            $check=$this->qexec->_proc("
                update iku set 
                    nmIku=".$this->mbgs->_valforQuery($nmIku).", 
                    ketIku=".$this->mbgs->_valforQuery($ketIku).", 
                    sasIku=".$this->mbgs->_valforQuery($sasIku).",
                    satuan=".$this->mbgs->_valforQuery($satuan)."
                where kdIku=".$this->mbgs->_valforQuery($kdIku)." and jenis='spm'
            ");
            if($check){
                $this->_['dt']     =$this->qexec->_func(_iku(" where jenis='spm'"));
                foreach ($this->_['dt'] as $key => $v) {
                    $this->_['dt'][$key]['tahun']=$this->qexec->_func(_getValiku1($v['kdIku']," and jenis='spm'"));
                }
                return $this->mbgs->resTrue($this->_);
            }else{
                return $this->mbgs->resFalse("Terjadi Kesalahan di penyimpanan sistem");
            }
        }
        return $this->mgbs->resFalse($portal['msg']);
    }

    public function execQueryNoReturn(){
        if($this->sess->kdMember==null){
            return $this->mbgs->resFalse("maaf, Pengguna tidak terdeteksi !!!");
        }else{
            $baseEND=json_decode((base64_decode($_POST['data'])));
            $q   =$baseEND->{'query'};
            $check=$this->qexec->_proc($q);
            if($check){
                return $this->mbgs->resTrue($this->_);
            }else{
                return $this->mbgs->resFalse("Terjadi Kesalahan dalam proses perubahan!!!");
            }
        }
    }

    function mengertiInfo(){
        $portal=$this->_keamanan($_POST['code'],$this->mbgs->_getNKA("p-usul"));
        if($portal['exec']){
            $check=$this->qexec->_proc($this->mbgs->_updDateInformasiDimengerti($this->kdMember,""));
            if($check){
                return $this->mbgs->resTrue($this->_);
            }else{
                return $this->mbgs->resFalse("Terjadi Kesalahan di penyimpanan sistem");
            }
        }return $this->mbgs->resFalse($portal['msg']);

    }

    function _settingKeyMember($member,$kodePage,$kunci){
        // $kodePage=;
        $q="";
        foreach ($member as $key => $v) {
            $q.=" update appkey set 
                    kunci=".$kunci."
                where kdMember=".$this->mbgs->_valforQuery($v['kdMember'])." and 
                    kdFitur!=".$this->mbgs->_valforQuery($kodePage)." and
                    kdFitur like '%".explode("/",$kodePage)[0]."%';";
        }
        return $q;
    }
    public function _uploadFiles($file,$nama){
        $pdf_decoded = base64_decode($file,true);
        $nama=explode(".",$nama);
        date_default_timezone_set("America/New_York");
        $namaFile=$nama[count($nama)-2]."-".date("Y-m-d-h-i-sa").".".$nama[count($nama)-1];
        $lokasiFile='./assets/fs_sistem/upload/files/'.$namaFile;
        file_put_contents($lokasiFile, $pdf_decoded);
        return substr($lokasiFile,2);
    }

    public function _setNotification($fitur,$info,$nmBtn,$tingkatJabatan){
        $keyTabel="kdNotif";
        $kdTabel=$this->qexec->_func("
            select ".$keyTabel." 
            from notif
            ORDER BY ".$keyTabel." DESC limit 1"
        );
        if(count($kdTabel)>0){
            $kdTabel=$kdTabel[0][$keyTabel]+1;
        }else{
            $kdTabel=1;
        }

        $qNotif=" INSERT INTO notif
                    (kdNotif,fitur, isiNotif, nmTombol, url)
                VALUES 
                    (
                        ".$this->mbgs->_valforQuery($kdTabel).",
                        ".$this->mbgs->_valforQuery($fitur).",
                        ".$this->mbgs->_valforQuery($info).",
                        ".$this->mbgs->_valforQuery($nmBtn).",
                        ".$this->mbgs->_valforQuery($this->mbgs->_getUrl($fitur))."
                    );";
        $qNotif.=" INSERT INTO notifuser(kdMember, kdNotif) (".$this->mbgs->_dmemberSetingkat($tingkatJabatan,$kdTabel).")"; // tingkat 3 bisa dicek di tabel jabatan kolom setingkat

        return $this->qexec->_multiProc($qNotif);
    }
    function refreshHakAkses(){
        $portal=$this->_keamanan($_POST['code'],_getNKA("d-memb",false));
        if($portal['exec']){
            $baseEND=json_decode((base64_decode($_POST['data'])));
        
            $kdJabatan  =$baseEND->{'kdJabatan'};
            $kdMember   =$baseEND->{'kdMember'};
            $a=array();
            $a['kdMember']=$kdMember;
            $a['kdJabatan']=substr($kdJabatan,strlen($kdJabatan)-1);
            // return print_r($a);
            $check=$this->addKeySistemPaksa(base64_encode(json_encode($a)));
            if($check){
                return $this->mbgs->resTrue($this->_);
            }else{
                return $this->mbgs->resFalse("Terjadi Kesalahan di penyimpanan sistem");
            }
        }return $this->mbgs->resFalse($portal['msg']);
    }
    public function _uploadImage($file,$nama){
        $split=explode("/",$nama); 
        $flokasi="fs_sistem/upload/image/";// default foldar jika ber ubah maka tambahakan dinamanya
        if(count($split)>1){
            $flokasi='';
            foreach ($split as $key => $v) {
                if($key==count($split)-1){
                    $nama=$v;
                }else{
                    $flokasi.=$v."/";
                }
            }
            // $flokasi.=$split[0]."/";
            // $nama=$split[count($split)-1];
        }
        $nama=explode(".",$nama);
        switch($nama[count($nama)-1]){
            case "png":$image=substr($file,22);break;
            case "PNG":$image=substr($file,22);break;
            case "pdf":$image=substr($file,22);break;
            default:$image=substr($file,23);break;
        }
        // $image=substr($file,23);
        // return print_r($nama[1]);
        date_default_timezone_set("America/New_York");
        $namaFile=$nama[count($nama)-2]."-".date("Y-m-d-h-i-sa").".".$nama[count($nama)-1];

        
        $delspace=explode(" ",$namaFile);
        $namaFile="";
        foreach ($delspace as $key => $value) {
            $namaFile.=$value;
        }
        $lokasiFile='./assets/'.$flokasi.$namaFile;
        write_file($lokasiFile,base64_decode($image));
        return $namaFile;
    }
    function _checkKeyApp($keyForm,$kdMember){
        $kodeForm=false;
        $kodeForm=$keyForm;
        // return print_r($this->mbgs->_qCekKey($kodeForm,$kdMember));
        $q=$this->mbgs->_qCekKey($kodeForm,$kdMember);
        $member=$this->qexec->_func($q);
        // return count($member);
        if(count($member)==1){
            return true;
        }
        return false;
    }
    function _keamanan($code,$codeForm){
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

        $this->kdMember=$this->sess->kdMemberMember;
        $this->kdMember1=$this->sess->kdMemberMember1;
        $this->nmMember=$this->sess->nmMember;
        $this->kdJabatan=$this->sess->kdMemberJabatan;
        $this->kdKantor=$this->sess->kdMemberKantor;
        $this->nmKantor=$this->sess->nmKantor;
        $kdMember=$this->sess->kdMemberMember;
        if($kdMember==null) {
            return $this->mbgs->resF("can't access !!!");
        }
        
        if(!$this->mbgs->_backCodes(base64_decode($code))){
            return $this->mbgs->resF("Tidak Sesuai Keamanan Sistem !!!");
        }
        if($this->_checkKeyApp($codeForm,$kdMember)==0){
            return $this->mbgs->resF("Anda tidak memiliki ijin !!!");
        }
        return $this->mbgs->resT("");
    }
    function addKeySistem($val){
        // $a=array();
        // $a['kdMember']="2G18-memb-1";
        // $a['kdJabatan']="6";
        // return print_r(base64_encode(json_encode($a)));
        // eyJrZE1lbWJlciI6IjJHMTgtbWVtYi0xIiwia2RKYWJhdGFuIjoiNiJ9

        $baseEND=json_decode((base64_decode($val)));
        // return print_r($baseEND);
        $kdMember=$baseEND->{'kdMember'};
        $kdJabatan=$baseEND->{'kdJabatan'};

        $nmApp=$this->qexec->_func("select * from app where kdApp='".$this->mbgs->app['kd']."'");
        $q="";
        if(count($nmApp)==0){
            $q.=" INSERT INTO app(kdApp,nmApp) VALUES ('".$this->mbgs->app['kd']."','".$this->mbgs->app['nm']."');";
        }


        $fitur=$this->qexec->_func("select * from appfitur where kdApp='".$this->mbgs->app['kd']."'");
        $fiturSystem=_getNKA("",true);
        // return $this->mbgs->_log($q);
        if(count($fitur)!=count($fiturSystem)){
            $q.=" delete from appfitur where kdApp='".$this->mbgs->app['kd']."';";
            $q.=" INSERT INTO appfitur(kdApp, kdFitur, nmFitur) VALUES ";
            foreach ($fiturSystem as $key => $v) {
                $q.="(
                        ".$this->mbgs->_valforQuery($this->mbgs->app['kd']).",
                        ".$this->mbgs->_valforQuery($v['kd']).",
                        ".$this->mbgs->_valforQuery($v['page'])."
                    ),";
            }
        }
        if(strlen($q)>0){
            $q=substr($q,0,strlen($q)-1).";";
        }
        
        $kunci=$this->qexec->_func("select * from appkey where kdMember=".$this->mbgs->_valforQuery($kdMember)."");
        if(count($kunci)!=count($fiturSystem)){
            $q.=" delete from appkey where kdMember=".$this->mbgs->_valforQuery($kdMember).";";
            $q.=" INSERT INTO appkey(kdApp,kdMember, kdFitur, Kunci) VALUES ";
            foreach ($fiturSystem as $key => $v) {
                foreach($v['kdJabatan'] as $key1 => $v1){
                    // print_r($v1."|".$kdJabatan."<br>");
                    if($v1==$kdJabatan){
                        $q.="('".$this->mbgs->app['kd']."',".$this->mbgs->_valforQuery($kdMember).",".$this->mbgs->_valforQuery($v['kd']).",'0'),";
                    }
                }
            }
            $q=substr($q,0,strlen($q)-1);
        }
        if(strlen($q)==0){
            return true;
        }
        // return $this->mbgs->_log($q);
        $check=$this->qexec->_multiProc($q);
        if($check){
            return true;
        }
        return false;
        // print_r("sukses");
    }
    function addKeySistemPaksa($val){
        // $a=array();
        // $a['kdMember']="2G18-memb-1";
        // $a['kdJabatan']="5";
        // return print_r(base64_encode(json_encode($a)));
        // eyJrZE1lbWJlciI6IjJHMTgtbWVtYi0xIiwia2RKYWJhdGFuIjoiNSJ9
        // eyJrZE1lbWJlciI6IjJHMTgtbWVtYi05Iiwia2RKYWJhdGFuIjoiMSJ9

        $baseEND=json_decode((base64_decode($val)));
        // return print_r($baseEND);
        $kdMember=$baseEND->{'kdMember'};
        $kdJabatan=$baseEND->{'kdJabatan'};

        $nmApp=$this->qexec->_func("select * from app where kdApp='".$this->mbgs->app['kd']."'");
        $q="";
        if(count($nmApp)==0){
            $q.=" INSERT INTO app(kdApp,nmApp) VALUES ('".$this->mbgs->app['kd']."','".$this->mbgs->app['nm']."');";
        }


        $fitur=$this->qexec->_func("select * from appfitur where kdApp='".$this->mbgs->app['kd']."'");
        $fiturSystem=_getNKA("",true);
        if(count($fitur)!=count($fiturSystem)){
            $q.=" delete from appfitur where kdApp='".$this->mbgs->app['kd']."';";
            $q.=" INSERT INTO appfitur(kdApp, kdFitur, nmFitur) VALUES ";
            foreach ($fiturSystem as $key => $v) {
                $q.="(
                        ".$this->mbgs->_valforQuery($this->mbgs->app['kd']).",
                        ".$this->mbgs->_valforQuery($v['kd']).",
                        ".$this->mbgs->_valforQuery($v['page'])."
                    ),";
            }
        }
        if(strlen($q)>0){
            $q=substr($q,0,strlen($q)-1).";";
        }
        $kunci=$this->qexec->_func("select * from appkey where kdMember=".$this->mbgs->_valforQuery($kdMember)."");
        $q.=" delete from appkey where kdMember=".$this->mbgs->_valforQuery($kdMember).";";
        $q.=" INSERT INTO appkey(kdApp,kdMember, kdFitur, Kunci) VALUES ";
        foreach ($fiturSystem as $key => $v) {
            foreach($v['kdJabatan'] as $key1 => $v1){
                if($v1==$kdJabatan){
                    $q.="('".$this->mbgs->app['kd']."',".$this->mbgs->_valforQuery($kdMember).",".$this->mbgs->_valforQuery($v['kd']).",'0'),";
                }
            }
        }
        $q=substr($q,0,strlen($q)-1);
        return $this->qexec->_multiProc($q);
    }
}


