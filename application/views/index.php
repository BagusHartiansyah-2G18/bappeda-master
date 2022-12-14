<?php
    echo $html;
?>
<script>
    var router   =<?php echo json_encode(base_url())?>,
        _page    =<?php echo json_encode($page)?>,
        _param   =<?php echo json_encode($param) ?>,
        _assertR =<?php echo json_encode(base_url()) ?>,
        myCode  =<?php echo json_encode($code) ?>,
        assert  =<?php echo json_encode($assert)?>,
        qlogin  =<?php echo json_encode($qlogin)?>;

    if(qlogin){
        var _nama    ='<?php echo $this->sess->nmMember;?>',
            _kdJabatan='<?php echo $this->sess->kdJabatan?>';
    }
    // console.log(myCode)
    var _pages=_page+"/"+_page;
    if(_param!=null){
        _pages=_page+"/"+_page+"/"+_param;
    }
    function _sendRequest(url,data){
        return new Promise(function(res){
            $.ajax({
                type:'post',
                url:router+url,
                data:{
                        data:data
                    },
                success:function(respon)
                {
                    res(respon);
                }
            })
        })
    }
    _sendRequest("WsKomponen/"+_pages,{code:btoa(myCode)}).then(res=>{
        
        $(document).ready(function() {
            setTimeout(function() {
                res=JSON.parse(res);
                $('#head').html(res.head);
                $('#loading').html('');
                _onload(res);
            }, 1000);
        });
    })
</script>


