<?php
    class Queries extends CI_Model{
        function __construct(){
			parent::__construct();
            $this->load->library('encryption');
            $this->load->database();
        }
        function _querySelect($query){
            $this->db->select($query[' field']);
            $this->db->from($query['tabel']);
            if($this->db->error()['code']!=0){
                return false;
            }
            return $this->db->get()->result();
        }
        function _func($query){
            $query = $this->db->query($query);
            // return $this->db->error()['code']
            // return $query->result_array();
            if($this->db->error()['code']!=0){
                return ($this->db->error());
            }
            return $query->result_array();
        }
        function _proc($query){
            $query=$this->db->query($query);
            if($this->db->error()['code']!=0){
                return false;
            }
            return true;
        }
        function _multiProc($query){
            $this->db->trans_start(); # Starting Transaction
            $this->db->trans_strict(FALSE); # See Note 01. If you wish can remove as well 
            $data=explode(";",$query);
            foreach ($data as $key => $v) {
                if(strlen(trim($v))>1){
                    $this->db->query($v);
                }
            }
            $this->db->trans_complete(); # Completing transaction
            if ($this->db->trans_status() === FALSE) {
                $this->db->trans_rollback();
                return FALSE;
            } 
            else {
                $this->db->trans_commit();
                return TRUE;
            }
            // $this->db->trans_start();
            // $this->db->trans_strict(FALSE); # See Note 01. If you wish can remove as well 
            // $data=explode(";",$query);
            // foreach ($data as $key => $v) {
            //     $this->db->query($v);
            // }
            // $this->db->trans_complete();
            // if ($this->db->trans_status() === FALSE) {
            //     # Something went wrong.
            //     $this->db->trans_rollback();
            //     return FALSE;
            // } 
            // else {
            //     # Everything is Perfect. 
            //     # Committing data to the database.
            //     $this->db->trans_commit();
            //     return TRUE;
            // }
            // return true;
        }
        function _funcProcedure($query){
            $query = $this->db->query($query);
            if($this->db->error()['code']!=0){
                $this->db->reconnect();
                return ($this->db->error());
            }
            $this->db->reconnect();
            return $query->result_array();
        }
        function _procProcedure($query){
            $query=$this->db->query($query);
            if($this->db->error()['code']!=0){
                $this->db->reconnect();
                return false;
            }
            $this->db->reconnect();
            return true;
        }
    }
?>