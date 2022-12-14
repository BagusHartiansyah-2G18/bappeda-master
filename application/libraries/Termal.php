<?php
    class Termal {
        protected $CI;
        public $filename;
        public function __construct(){
            // parent::__construct();
            $this->CI =& get_instance();
            $this->CI->load->library('method');
            $this->CI->method->_setBaseUrl(base_url());;
        }
        public function tC58mm($data,$preview){ //32 char
            if($preview){
                echo "<pre>";
                return print_r($data['html']);
            }
            require './assets/Library/escpos-php/cetakTermal.php';
            $escpos = new CetakTermal;
            $escpos->cetakNotaBelanja($data);
        }
        function t58text($text){
           return $this->tstrCut($text,32)."\n";
        }
        function tstrCut($text,$length){
            if(strlen($text)>$length){
                $text=substr($text,0,$length);
            }
            return $text;
        }
        function talign58($text,$align){
            switch($align){
                case "left": return $this->tsetSpace($text,32,1); break;
                case "right": return $this->tsetSpace($text,32,2); break;
                default : return $this->tsetSpace($text,32,3); break;
            }
        }
        function talignJudul58($text){
            return $this->tsetSpace($text,16,3);
        }
        function ttabel($data){
            $result="";
            foreach ($data['namaTabel'] as $key => $v) {
                $size=$data['size'][$key];
                if(($key+1)==count($data['namaTabel'])){ //untuk yang ter akhir rata kanan
                    $result.=$this->tsetSpace($v,$size,2);
                }else{
                    $result.=$this->tsetSpace($v,$size,3);
                }
            }
            $result.="\n".$this->tlines("-",32)."\n";
            foreach ($data['data'] as $key => $v) {
                foreach ($data['valueName'] as $key1 => $v1) {
                    $size=$data['size'][$key1];
                    if($v1=="No"){
                        $result.=$this->tsetSpace("".($key+1).".",$size,1);
                    }else{
                        $check=explode("$",$v1);
                        if(count($check)==1){
                            $value=$v[$v1];
                        }else{
                            $value=$this->CI->method->_uang($v[$check[0]]);
                        }
                        if(($key1+1)==count($data['valueName'])){ //untuk yang ter akhir rata kanan
                            $result.=$this->tsetSpace($this->tstrCut($value,$size),$size,2);
                        }else{
                            $result.=$this->tsetSpace($this->tstrCut($value,$size),$size,1);
                        }
                    }
                }
                $result.="\n";
            }
            $result.=$this->tlines("-",32)."\n";
            if($data['total']!=null){
                foreach ($data['totalText'] as $key => $v) {
                    $value=$data['total'][$key];
                    $size=10;
                    $tam=$this->tsetSpace($v,$size,1);
                    $size=3;
                    $tam.=$this->tsetSpace(":",$size,3);
                    $size=19;
                    $tam.=$this->tsetSpace($this->CI->method->_uang($data['data'][0][$value]),$size,2);
                    $result.=$this->t58text($tam);
                    // $result.=$this->tsetSpace($v,$size,1).$this->tsetSpace($v,$size,1).$this->tsetSpace($v,$size,2);
                    // // $result.=$this->t58text($v.$data['data'][0][$value]);
                }
                $result.=$this->tlines("=",32)."\n";
            }
            $result.=$data['penutup'];
            return $result;
            // print_r($data);
        }
        function tlines($text,$length){
            $result="";
            for($a=0;$a<$length;$a++){
                $result.=$text;
            }
            return $result;
        }
        function tsetSpace($text,$max,$no){
            $count=strlen($text);
            $loop=$max-$count;
            $result="";

            // stepp 1
            for($a=0;$a<$loop;$a++){
                $result.=" ";
            }

            $center=substr($result,0,(strlen($result)/2));
            // stepp 1
            switch($no){
                case 1:
                    return $text.$result;
                break;
                case 2:
                    return $result.$text;
                break;
                case 3:
                    return $center.$text.$center;
                break;
            }

        }
    }
?>