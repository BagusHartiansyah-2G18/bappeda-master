<!DOCTYPE html>
<html>

<head>

  <meta charset="UTF-8">

  <title>CodePen - Random Login Form</title>

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
	top: calc(30% - 35px);
	left: calc(60% - 295px);
	z-index: 2;
}

.header div{
	float: left;
	color: #fff;
	font-family: Constantia;
	font-size: 32px;
	font-weight: 200;
}

.header div span{
	color: #5379fa !important;
}

.login{
	position: absolute;
	top: calc(20% - 75px);
	left: calc(60% - 50px);
	height: 150px;
	width: 350px;
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
	font-family: Constantia;
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
	font-family: Constantia;
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
	font-family: Constantia;
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
	font-family: Constantia;
	font-size: 16px;
	font-weight: 400;
	padding: 6px;
	margin-top: 10px;
}
.login input[type=button]{
	width: 160px;
	height: 35px;
	background: #999;
	border: 1px solid #fff;
	cursor: pointer;
	border-radius: 2px;
	color: #000000;
	font-family: Constantia;
	font-size: 12px;
	font-weight: 400;
	padding: 6px;
	margin-top: 10px;
	text-align:center;
}
p {	
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
.bentuk
{
	position: absolute;
	top: calc(300PX - 25px);
	left: calc(-40% - 90px);
	height: 150px;
	width: 350px;
	padding: 10px;
	z-index: 2;
}
</style>
<link rel="stylesheet" type="text/css" href="css/style.css" />
</head>
<body>
  <div class="body"></div>
		<div class="grad"></div>
		<div class="header">
			<!-- <font size="40%" color="white"> 
			PT.SINARAYA
			</font> -->
		</div>
		<br>
		<div class="login">
		<nav>
	        <ul class="sf-menu" id="nav">
	          <li class="selected"><a href="login.php" id="tes">LOGIN</a></li>
	          <li><a href="examples.html">Register</a></li>
	          <li><a href="page.html">A Page</a></li>
	          <li><a href="another_page.html">Another Page</a></li>
	          <li><a href="#">Example Drop Down</a>
	            <ul>
	              <li><a href="#">Drop Down One</a></li>
	              <li><a href="#">Drop Down Two</a>
	                <ul>
	                  <li><a href="#">Sub Drop Down One</a></li>
	                  <li><a href="#">Sub Drop Down Two</a></li>
	                  <li><a href="#">Sub Drop Down Three</a></li>
	                  <li><a href="#">Sub Drop Down Four</a></li>
	                  <li><a href="#">Sub Drop Down Five</a></li>
	                </ul>
	              </li>
	              <li><a href="#">Drop Down Three</a></li>
	              <li><a href="#">Drop Down Four</a></li>
	              <li><a href="#">Drop Down Five</a></li>
	            </ul>
	          </li>
	          <li><a href="contact.html">Contact Us</a></li>
	        </ul>
	      </nav>
	    	<div class="bentuk">
	    		<form method="post" action="signup-proc.php">
					<input type="text" placeholder="username" name="user"><br>
					<input type="password" placeholder="password" name="password"><br>
					<input type="password" placeholder="Re-password" name="repassword"><br>
					<input type="submit" value="SignUp">
				</form>
	    	</div>
       
		</div>
	<script type="text/javascript">
		console.log(document.getElementById('tes').value);
	</script>
</body>
</html>