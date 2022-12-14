<!DOCTYPE html>
<html>
<head>
	<title></title>
</head>
<style>
@import url(http://fonts.googleapis.com/css?family=Exo:100,200,400);
@import url(http://fonts.googleapis.com/css?family=Source+Sans+Pro:700,400,300);

body{
	margin: 0;
	padding: 0;
	background: #fff;

	color: #fff;
	font-family: Arial;
	font-size: 12px;
}
table{
	text-align: left;
}
.body{
	position: absolute;
	top: -20px;
	left: -20px;
	right: -40px;
	bottom: -40px;
	width: auto;
	height: auto;
	background-image: url(slid_1.jpg);
	background-size: cover;
	-webkit-filter: blur(5px);
	z-index: 0;
}

.grad{
	position: absolute;
	top: -20px;
	left: -20px;
	right: -40px;
	bottom: -40px;
	width: auto;
	height: auto;
	background: -webkit-gradient(linear, left top, left bottom, color-stop(0%,rgba(0,0,0,0)), color-stop(100%,rgba(0,0,0,0.65))); /* Chrome,Safari4+ */
	z-index: 1;
	opacity: 0.7;
}

.header{
	position: absolute;
	top: calc(10% - 35px);
	left: calc(30% - 255px);
	z-index: 2;
}

.header div{
	float: left;
	color: black;
	font-family: 'Exo', sans-serif;
	font-size: 50px;
	/*font-weight: 200;*/
}

.header div span{
	color: #5379fa !important;
}

.login{
	position: absolute;
	top: calc(50% - 55px);
	left: calc(30% - 50px);
	/*height: 150px;
	width: 350px;*/
	padding: 10px;
	z-index: 2;
}

.login input[type=text]{
	width: 250px;
	height: 30px;
	background: transparent;
	border: 1px solid rgba(255,255,255,0.6);
	border-radius: 2px;
	color: #fff;
	font-family: 'Exo', sans-serif;
	font-size: 16px;
	font-weight: 400;
	padding: 4px;
}
.login input[type=date]{
	width: 250px;
	height: 30px;
	background: transparent;
	border: 1px solid rgba(255,255,255,0.6);
	border-radius: 2px;
	color: #fff;
	font-family: 'Exo', sans-serif;
	font-size: 16px;
	font-weight: 400;
	padding: 4px;
}

.login input[type=password]{
	width: 250px;
	height: 30px;
	background: transparent;
	border: 1px solid rgba(255,255,255,0.6);
	border-radius: 2px;
	color: #fff;
	font-family: 'Exo', sans-serif;
	font-size: 16px;
	font-weight: 400;
	padding: 4px;
	margin-top: 10px;
}

.login input[type=submit]{
	width: 260px;
	height: 35px;
	background: #fff;
	border: 1px solid #fff;
	cursor: pointer;
	border-radius: 2px;
	color: #a18d6c;
	font-family: 'Exo', sans-serif;
	font-size: 16px;
	font-weight: 400;
	padding: 6px;
	margin-top: 10px;
}
p {
	font:Verdana, Geneva, sans-serif;
    text-shadow: 3px 2px gray;
}
.login input[type=submit]:hover{
	opacity: 0.8;
}

.login input[type=submit]:active{
	opacity: 0.6;
}

.login input[type=text]:focus{
	outline: none;
	border: 1px solid rgba(255,255,255,0.9);
}
.login input[type=date]:focus{
	outline: none;
	border: 1px solid rgba(255,255,255,0.9);
}

.login input[type=password]:focus{
	outline: none;
	border: 1px solid rgba(255,255,255,0.9);
}

.login input[type=submit]:focus{
	outline: none;
}

::-webkit-input-placeholder{
   color: rgba(255,255,255,0.6);
}

::-moz-input-placeholder{
   color: rgba(255,255,255,0.6);
}
</style>
<body>

	<div class="body"></div>

	<div class="grad"></div>
	
	<!-- <div class="header">
		<div><u>PT.SINARAYA NUGRAHA AHMADARIS MEDIKA</u></div>		
	</div> -->
	<!-- <div class="baban">tes bababn</div> -->
	
	<div class="login">
	<a href='forminputdatagaji.php'><input name="button1" type="button" value="INPUT DATA GAJI"></a>
    <a href='formuserinfo.php'><input name="button3" type="button" value="INPUT DATA PEGAWAI"></a>
    <a href='signup.php'><input name="button3" type="button" value="SIGN UP"></a>
	<table>
		<tr>
			<th>
				<table align="left">
					<form method="post" action="fix.php">
						<tr id="setnama">		
							<td>Nama</td><td><input type="text" id="namax" name="nama"></td>
						</tr>
						<tr>
							<td>Tanggal Awal</td><td><input type="date" name="tgl_awal"></td>
						</tr>
						<tr>
							<td>Tanggal Akhir</td><td><input type="date" name="tgl_ahir"></td>
						</tr>		
						<tr>
							<td>Action</td><td><input  type="submit" name="action" value="View Report"></td>
						</tr>																					
					</form>
				</table>
			</th>
			<th>
				<table id="isi2">
					
				</table>
			</th>
		</tr>
	</table>
	</div>
<script type="text/javascript" src='../jquery-1.7.1.min.js'></script>
<script type="text/javascript">
	// $('#option').on('change',function(){
	// 	if($(this).val()==1)
	// 	{
	// 		$('#setnama').html('');
	// 	}
	// 	else
	// 	{
	// 		$('#setnama').html('<td>Nama</td><td><input type="text" dblclick='oknama' id="namax" name="nama"></td>');
	// 	}
		
	// })
	// function oknama()
	// {
	$('#namax').dblclick(function() {
   
		console.log('bgs')
		$.ajax({
          type:'POST',
          url:'ajax.php',
          data:{'nama':$(this).val()},
          success:function(msg)
          {
          	 $('#isi2').html(msg)
          }
        })
	})
	// }
	
	function clic()
	{
		$('input:button').click(function(){
			$('#namax').val($(this).val())
		})
	}
	
</script>
</body>
</html>