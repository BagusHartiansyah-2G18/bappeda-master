<html>
  <head>
  	    <style type="text/css">
            #container{
               width:800px;
               margin:0 auto;
            }

            #search{
               width:700px;
               padding:10px;
            }

            #button{
               display: block;
               width: 100px;
               height:30px;
               border:solid #366FEB 1px;
               background: #91B2FA;
            }

            ul{
            	margin-left:-40px;
            }

            ul li{
            	list-style-type: none;
            	border-bottom: dotted 1px black;
              height: 50px;
            }

            li:hover{
            	background: #A592E8;
            }

            a{
            	text-decoration: none;
              font-size: 18px;
            }
  	    </style>
        <script src="js/jquery-1.7.1.min.js" type="text/javascript"></script>
        <script type="text/javascript">
            $(document).ready(function(){
                 
                 function search(){

                      var judul=$("#search").val();

                      if(judul!=""){
                        $("#result").html("<img src='img/ajax-loader.gif'/>");
                         $.ajax({
                            type:"post",
                            url:"search.php",
                            data:"judul="+judul,
                            success:function(data){
                                $("#result").html(data);
                                $("#search").val("");
                             }
                          });
                      }
                      

                     
                 }

                  $("#button").click(function(){
                  	 search();
                  });

                  $('#search').keyup(function(e) {
                     if(e.keyCode == 13) {
                        search();
                      }
                  });
            });
        </script>
  </head>
  <body>
        <div id="container">
             <input type="text" id="search" placeholder="Cari Artikel Berdasarkan Judul"/>
             <input type="button" id="button" value="Cari" />
             <ul id="result"></ul>
        </div>
  </body>
</html>