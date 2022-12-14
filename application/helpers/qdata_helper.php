<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

    function _cbDinas($where){
        return "select kdDInas as value, nmDinas as valueName from dinas ".$where;
    }
    function _cbDinasForAG($kdMember,$where){ // admin group
        return "select a.kdDInas as value, a.nmDinas as valueName,  
            (
                select case when count(kdDinas)=1 then 1 else 0 end from admingroup where kdDinas=a.kdDinas and kdMember='".$kdMember."'
            )as checked
            , 0 as upd
        from dinas a ".$where;
    }
    function _dinas($where){
        return "select * from dinas ".$where;
    }
    function _cbUrusan($where){
        return "select kdUrusan as value, nmUrusan as valueName from purusan ".$where;
    }
    function _cbBidang($where){
        // kdUrusan untuk membantu filter data depan 
        return "select kdBidang as value, nmBidang as valueName,kdUrusan from pbidang ".$where;
    }
    function _renstraOpd($kodeDinas,$tahun,$where){
        return 'SELECT 
            a.kdSub,a.nmSub
            ,b.kdKeg,b.nmKeg
            ,c.kdProg,c.nmProg
            ,d.kdBidang,d.nmBidang
            ,e.kdUrusan,e.nmUrusan
            ,f.kdDinas,f.nmDinas
            ,(SELECT SUM(total) FROM ubjudul WHERE kdSub=a.kdSub AND kdDinas=a.kdDinas AND tahapan="1") 
            as totalPRARKA
            ,(SELECT SUM(total) FROM ubjudul WHERE kdSub=a.kdSub and kdDinas=a.kdDinas AND tahapan="2") 
            as totalRKA
            ,(SELECT SUM(total) FROM ubjudul WHERE kdSub=a.kdSub AND kdDinas=a.kdDinas AND tahapan="3") 
            as totalRKAFINAL
        FROM psub a 
            JOIN pkegiatan b 
                ON a.kdKeg	=b.kdKeg
                and a.taSub=b.taKeg
            JOIN pprogram c 
                ON b.kdProg 	=c.kdProg
                and c.taProg=b.taKeg
            JOIN pbidang d
                ON c.kdBidang		=d.kdBidang
                and c.taProg=d.taBidang
            JOIN purusan e
                ON d.kdUrusan		=e.kdUrusan
                and e.taUrusan=d.taBidang
            Join dinas f
                ON a.kdDinas=f.kdDinas
        WHERE a.kdDinas="'.$kodeDinas.'" and a.taSub="'.$tahun.'" '.$where.'
        GROUP BY a.kdSub,a.kdKeg,b.kdProg,a.kdDinas
        ORDER BY a.kdSub asc
        ';
    }

    function _keySub($kodeDinas,$tahun,$where){
        return '
            select kdSub,nmSub,kdDinas,kdKeg,taSub,qpra,qrka,qrkaFinal FROM psub 
            WHERE kdDinas="'.$kodeDinas.'" and 
            taSub="'.$tahun.'" 
            '.$where.'
        ';
    }
    function _cbSub($kodeDinas,$tahun,$where){
        return '
            select kdSub as value,nmSub as valueName FROM psub 
            WHERE kdDinas="'.$kodeDinas.'" and 
            taSub="'.$tahun.'" 
            '.$where.'
        ';
    }
    function _tsub($kodeDinas,$tahun,$where){
        return '
            select count(kdSub) as total FROM psub WHERE kdDinas="'.$kodeDinas.'" and taSub="'.$tahun.'" '.$where.'
        ';
    }
    function _tsubProses($kodeDinas,$tahun,$where){
        return '
            select a.kdSub
            FROM psub a 
            join ubjudul b
                on a.kdSub=b.kdSub
                and a.kdDinas=b.kdDinas
                and a.taSub=b.taJudul
            WHERE 
                a.kdDinas="'.$kodeDinas.'" and a.taSub="'.$tahun.'"
                '.$where.'
            group by a.kdSub,a.kdDinas
        ';
    }
    function _tpagu($kodeDinas,$ket,$tahun,$where){
        return '
            SELECT 
                SUM(total) as total
            FROM ubjudul 
            WHERE kdDinas="'.$kodeDinas.'"
                AND tahapan="'.$ket.'"
                and taJudul="'.$tahun.'"
                '.$where.'
        ';
    }
    function _cbApbd6($where){
        return "
            select kdApbd6 as value, nmApbd6 as valueName from apbd6 ".$where."
        ";
    }
    function _cbSDana($where){
        return "
            select kdSDana as value, nmSDana as valueName from sumberdana ".$where."
        ";
    }
    function _renstraOpdGet($kdDinas,$tahun,$where){
        // upd untuk membantu perubahan on /off di getRenstra 
        return '
            select a.kdSub,a.nmSub
                ,b.kdKeg	,b.nmKeg
                ,c.kdProg	,c.nmProg
                ,d.kdBidang    ,d.nmBidang
                ,e.kdUrusan	    ,e.nmUrusan
                ,(
                    SELECT 
                        CASE 
                            WHEN count(kdSub)=1 THEN 1
                            ELSE 0
                        END
                    FROM psub
                    where kdSub=a.kdSub and kdKeg=a.kdKeg and kdDinas="'.$kdDinas.'" and taSub="'.$tahun.'"
                ) as checked
                , 0 as upd
            FROM ptamsub a 
            JOIN pkegiatan b 
                ON a.kdKeg	=b.kdKeg
                and a.taSub=b.taKeg
            JOIN pprogram c 
                ON b.kdProg 	=c.kdProg
                and c.taProg=b.taKeg
            JOIN pbidang d
                ON c.kdBidang		=d.kdBidang
                and c.taProg=d.taBidang
            JOIN purusan e
                ON d.kdUrusan		=e.kdUrusan
                and e.taUrusan=d.taBidang
            where a.taSub="'.$tahun.'" '.$where.'
            GROUP BY a.kdSub,a.kdKeg,c.kdProg
            ORDER BY a.kdSub asc
            -- limit 10
        ';
    }
    function _dssh($where){
        return "
            SELECT `id`,kodeBelanja, `nama`, `spesifikasi` as keterangan,spek, `satuan`, `harga` FROM `ssh` ".$where."
            order by nama asc
        ";
    }
    function _judulRBelanja($v){
        // ,b.keyForPraRka,b.keyForRKA,b.keyForRkaFinal
        return '
            SELECT 
                a.nama,a.total as jumlah,a.dateUpdate,a.kdJudul,a.kdSDana
                ,b.kdSub	,b.nmSub,0 as keyForPraRka,0 as keyForRKA,0 as keyForRkaFinal
                ,c.kdKeg	,c.nmKeg
                ,d.kdProg	,d.nmProg
                ,f.kdSDana,f.nmSDana
                ,e.kdApbd6 as kdApbd,e.kdApbd6,e.nmApbd6
                ,"sudah" as status
                ,g.kdApbd5,g.nmApbd5
                ,h.kdApbd4,h.nmApbd4
                ,i.kdApbd3,i.nmApbd3
                ,j.kdApbd2,j.nmApbd2
                ,k.kdApbd1,k.nmApbd1
            FROM ubjudul a
                JOIN psub b 
                    ON a.kdSub=b.kdSub
                    and a.taJudul=b.taSub
                    and a.kdDinas=b.kdDinas
                JOIN pkegiatan c 
                    ON b.kdKeg=c.kdKeg
                    and c.taKeg=b.taSub
                JOIN pprogram d 
                    ON c.kdProg=d.kdProg
                    and c.taKeg=d.taProg
                JOIN sumberdana f 
                    ON a.kdSDana=f.kdSDana
                LEFT JOIN apbd6 e
                    ON a.kdApbd6=e.kdApbd6
                    and a.taJudul=e.taApbd6
                LEFT JOIN apbd5 g 
                    ON e.kdApbd5=g.kdApbd5
                    and g.taApbd5=e.taApbd6
                LEFT JOIN apbd4 h 
                    ON h.kdApbd4=g.kdApbd4
                    and g.taApbd5=h.taApbd4
                LEFT JOIN apbd3 i 
                    ON h.kdApbd3=i.kdApbd3
                    and i.taApbd3=h.taApbd4
                LEFT JOIN apbd2 j 
                    ON j.kdApbd2=i.kdApbd2
                    and i.taApbd3=j.taApbd2
                LEFT JOIN apbd1 k
                    ON j.kdApbd1=k.kdApbd1
                    and k.taApbd1=j.taApbd2
            WHERE b.kdSub="'.$v['kdSub'].'" and a.tahapan="'.$v['tahapan'].'" and a.kdDinas="'.$v['kdDinas'].'" and 
                a.taJudul="'.$v['tahun'].'" and a.status=1
            GROUP BY b.kdSub,c.kdKeg,d.kdProg,a.kdDinas,e.kdApbd6,a.nama 
            ORDER BY b.kdSub,c.kdKeg,d.kdProg
        ';
    }
    function _detailRBelanja($v){
        return 'select  `kdRincian`, `kdJudul`, `uraian`, `total` as jumlah
            , `jumlah1`, `jumlah2`, `jumlah3`, `satuan1`
            , `satuan2`, `satuan3`, `volume`, `satuanVol`
            , `harga` ,"sudah" as status
            from ubrincian 
            where kdJudul="'. $v['kdJudul'].'" and taRincian="'. $v['tahun'].'"
            and kdSub="'. $v['kdSub'].'" and kdDinas="'. $v['kdDinas'].'"
            and status=1
        ';
    }
    function _RekeningB($tahun,$where){
        // ,b.keyForPraRka,b.keyForRKA,b.keyForRkaFinal
        return '
            SELECT 
                e.kdApbd6,e.nmApbd6
                ,g.kdApbd5,g.nmApbd5
                ,h.kdApbd4,h.nmApbd4
                ,i.kdApbd3,i.nmApbd3
                ,j.kdApbd2,j.nmApbd2
                ,k.kdApbd1,k.nmApbd1
            FROM apbd6 e
            LEFT JOIN apbd5 g 
                    ON e.kdApbd5=g.kdApbd5
                    and g.taApbd5=e.taApbd6
                LEFT JOIN apbd4 h 
                    ON h.kdApbd4=g.kdApbd4
                    and g.taApbd5=h.taApbd4
                LEFT JOIN apbd3 i 
                    ON h.kdApbd3=i.kdApbd3
                    and i.taApbd3=h.taApbd4
                LEFT JOIN apbd2 j 
                    ON j.kdApbd2=i.kdApbd2
                    and i.taApbd3=j.taApbd2
                LEFT JOIN apbd1 k
                    ON j.kdApbd1=k.kdApbd1
                    and k.taApbd1=j.taApbd2
            WHERE e.taApbd6="'.$tahun.'" '.$where.'
            -- GROUP BY k.kdApbd1,j.kdApbd2,i.kdApbd3,h.kdApbd4,g.kdApbd5,e.kdApbd6
            ORDER BY k.kdApbd1,j.kdApbd2,i.kdApbd3,h.kdApbd4,g.kdApbd5,e.kdApbd6
        ';
    }


    function _jabatan($where){
        return 'SELECT * FROM `jabatan` '.$where.' ORDER BY kdJabatan ASC';
    }
    function _cbJabatan($where){
        return "select kdJabatan as value, nmJabatan as valueName from jabatan ".$where;
    }

    function _tahun($where){
        return 'SELECT *,selected as checked,
            case 
                when perubahan=0 then status
                else concat(status," ke- ", perubahan)
            end as keterangan
         FROM tahun order by cast(nama as int) desc';
    }
    function _cbTahun($where){
        return 'SELECT *,
            case 
                when perubahan=0 then concat(nama," ",status)
                else concat(nama," ",status," ke- ", perubahan)
            end as valueName,
            case 
                when perubahan=0 then nama
                else concat(nama,"-", perubahan)
            end as value
         FROM tahun order by cast(nama as int) desc';
    }
    function _tahunForOption($where){
        return 'SELECT nama as judul,perubahan,  
                    case 
                        when perubahan=0 then status
                        else concat(status," ke- ", perubahan)
                    end as keterangan
                FROM tahun order by cast(nama as int) asc ';
    }

    function _member($where){
        return 'SELECT a.*,b.nmDinas,c.nmJabatan
            FROM member a 
            left join dinas b 
                on a.kdDinas=b.kdDinas
            join jabatan c 
                on a.kdJabatan=c.kdJabatan
        '.$where;
    }
    function _cbMember($where){
        return 'SELECT kdMember1 as value, nmMember as valueName from member '.$where;
    }

    function _agenda($where){
        return '
            SELECT *,
                case  
                    when substring(tglE,1,4)="0000" THEN tglS
                    else concat(tglS," - ",tglE)
                end as tgl
            FROM agenda 
        '.$where.'
        order by kdAgenda DESC';
    }
    function _produk($where){
        return 'SELECT 
            a.kdProduk, a.judul, a.keterangan, a.file, 
            a.img, a.date, a.kdKate, a.sumberKate,
            b.nmKate
        FROM produk a 
        join kategoriumum b on
            a.kdKate=b.kdKate and
            a.sumberKate=b.sumber
        '.$where;
    }


    // musrenbang
    function _prioritas($where){
        return 'SELECT * FROM prioritas '.$where;
    }
    function _cbprioritas($where){
        return 'SELECT id as value,concat(id,". ",nama) as valueName FROM prioritas '.$where;
    }
    function _tamSubMusrenbang($tahun,$kdDinas,$where){
        return "
                SELECT    
                    b.*,(
                        SELECT 
                                case 
                                    when a.idPri>0 then a.idPri
                                    else 0
                                end
                            FROM psub a 
                                WHERE a.kdSub=b.kdSub
                                and a.kdKeg=b.kdKeg
                                and a.taSub=b.taSub
                                AND a.taSub='".$tahun."'
                                AND a.kdDinas='".$kdDinas."'
                        ) as idPri
                from ptamsub b
                where b.taSub='".$tahun."'
                ".$where."
                limit 20
        ";
    }
    function _dinasMus($where){
        return "SELECT 
                 a.kdMember,a.ta,b.nmMember,b.kdDinas          
                FROM appkey a             
                join member b on                 
                    b.kdMember1=a.kdMember 
                ".$where." group by a.kdMember";
    }

    // data ku 
    function _iku($where){
        return 'SELECT kdIku,nmIku, ketIku,sasIku,satuan, img, view FROM iku '.$where.' order by kdIku asc';
    }
    function _diku($where){
        return '
            SELECT 
                a.nmIku,a.ketIku,a.img,a.sasIku,a.satuan,
                b.kdIku,b.tahun,b.realisasi
            FROM iku a  
            LEFT JOIN ikuvalue b 
                ON a.kdIku=b.kdIku
            order by b.tahun asc
        ';
    }
    function _getValiku($kdIku,$tahun){
        return '
            SELECT 
                * 
            FROM ikuvalue where kdIku="'.$kdIku.'" and tahun="'.$tahun.'"
        ';
    }
    function _getValiku1($kdIku,$where){
        return '
            SELECT 
                * 
            FROM ikuvalue where kdIku="'.$kdIku.'"
        '.$where;
    }
    function _tahunLimit5($where){
        return 'SELECT * FROM tahun '.$where.' order by cast(nama as int) desc limit 5';
    }

    //branda 
    function _cbKategoriUmum($sumber,$where){
        return "select kdKate as value, nmKate as valueName from kategoriumum where sumber='".$sumber."' ".$where;
    }

    function _getNKA($obj,$all){ //nama key Action crud-???
        $nmKeyTabel=array();
        $no=2;

        // $dev=[5];
        $super=[3];
        $admin=[2,3];
        $user=[1,2,3]; //no tingkat jabatan
        $unik="MFC2G18-";
        $nm="E Master";     //login sistem
        $nmKeyTabel['l-'.$nm]=array(  
            'kd'=>$unik.$no."/1",
            'nm'=>($nm."-"),
            'kdJabatan'=>$user,
            'page'=>'Login Sistem '.$nm
        );
        
        $no+=1;
        $nm="jaba";     //dashboard sistem
        $nmPage="Jabatan"; 
        $nmKeyTabel['p-'.$nm]=array( 
            'kd'=>$unik.$no."/1",
            'nm'=>($nm."-"),
            'kdJabatan'=>$user, //no tingkat jabatan
            'page'=>'page '.$nmPage
        );
        $nmKeyTabel['c-'.$nm]=array( 
            'kd'=>$unik.$no."/2",
            'nm'=>($nm."-"),
            'kdJabatan'=>$admin,
            'page'=>'Perbarui Data '.$nmPage
        );
        $nmKeyTabel['u-'.$nm]=array( 
            'kd'=>$unik.$no."/2",
            'nm'=>($nm."-"),
            'kdJabatan'=>$admin,
            'page'=>'Perbarui Data '.$nmPage
        );
        $nmKeyTabel['d-'.$nm]=array( 
            'kd'=>$unik.$no."/2",
            'nm'=>($nm."-"),
            'kdJabatan'=>$admin,
            'page'=>'Perbarui Data '.$nmPage
        );

        $no+=1;
        $nm="memb";//inp 
        $nmPage="Member"; 
        $nmKeyTabel['p-'.$nm]=array( 
            'kd'=>$unik.$no."/1",
            'nm'=>($nm."-"),
            'kdJabatan'=>$user, //no tingkat jabatan
            'page'=>'Page '.$nmPage
        );
        $nmKeyTabel['c-'.$nm]=array( 
            'kd'=>$unik.$no."/2",
            'nm'=>($nm."-"),
            'kdJabatan'=>$user,
            'page'=>'Page PRA RKA'.$nmPage
        );
        //update
        $nmKeyTabel['u-'.$nm]=array( 
            'kd'=>$unik.$no."/3",
            'kdJabatan'=>$admin,
            'nm'=>($nm."-"),
            'page'=>'Page RKA '.$nmPage
        ); 
        //Delete
        $nmKeyTabel['d-'.$nm]=array(
            'kd'=>$unik.$no."/4",
            'kdJabatan'=>$admin,
            'nm'=>($nm."-"),
            'page'=>'Page Final RKA '.$nmPage
        ); 


        $no+=1;
        $nm="dina";//inp 
        $nmPage="Dinas"; 
        $nmKeyTabel['p-'.$nm]=array( 
            'kd'=>$unik.$no."/1",
            'nm'=>($nm."-"),
            'kdJabatan'=>$user, //no tingkat jabatan
            'page'=>'Page '.$nmPage
        );
        $nmKeyTabel['c-'.$nm]=array( 
            'kd'=>$unik.$no."/2",
            'nm'=>($nm."-"),
            'kdJabatan'=>$user,
            'page'=>'All Action '.$nmPage
        );
        $nmKeyTabel['u-'.$nm]=array( 
            'kd'=>$unik.$no."/2",
            'nm'=>($nm."-"),
            'kdJabatan'=>$user,
            'page'=>'All Action '.$nmPage
        );
        $nmKeyTabel['d-'.$nm]=array( 
            'kd'=>$unik.$no."/2",
            'nm'=>($nm."-"),
            'kdJabatan'=>$user,
            'page'=>'All Action '.$nmPage
        );

        $no+=1;
        $nm="agdi";//inp 
        $nmPage="Admin Group Dinas "; 
        $nmKeyTabel['p-'.$nm]=array( 
            'kd'=>$unik.$no."/1",
            'nm'=>($nm."-"),
            'kdJabatan'=>$user, //no tingkat jabatan
            'page'=>'Page '.$nmPage
        );
        $nmKeyTabel['c-'.$nm]=array( 
            'kd'=>$unik.$no."/2",
            'nm'=>($nm."-"),
            'kdJabatan'=>$admin,
            'page'=>'OPD '.$nmPage
        );
        //update
        $nmKeyTabel['u-'.$nm]=array( 
            'kd'=>$unik.$no."/3",
            'kdJabatan'=>$user,
            'nm'=>($nm."-"),
            'page'=>'Belanja '.$nmPage
        ); 
        $nmKeyTabel['d-'.$nm]=array( 
            'kd'=>$unik.$no."/3",
            'kdJabatan'=>$user,
            'nm'=>($nm."-"),
            'page'=>'Belanja '.$nmPage
        ); 



        if($all){
            return $nmKeyTabel;
        }{
            return $nmKeyTabel[$obj]['kd'];
        }
        
    }
    function _qupdKeyGroup($onOff,$lengthKdPage,$kodeForm,$kodeMember,$tahun,$kdApp){
        return "update appkey set kunci=".$onOff."
                WHERE kdFitur like '%".$kodeForm."%' AND 
                length(kdFitur)!=".$lengthKdPage." and
                kdMember='".$kodeMember."' and 
                ta='".$tahun."' and 
                kdApp='".$kdApp."'
            ";
    }
?>