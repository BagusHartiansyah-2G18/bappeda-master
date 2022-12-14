<?php 
include "koneksi.php";

$sql="select * from IDLogin";
$query=$db->query($sql);

$num=1;
while ($temp=$query->fetch()){
	$num=$num + 1;
}

	$username   	= $_POST['user'];
	$password   	= $_POST['password'];
	$repassword   	= $_POST['repassword'];
	$encode			= "tamakiako";
	$encodepassword = md5($encode.$password);
		
		if ($password != $repassword){
			echo "
    			<script>
    				alert('Password not match');
    				window.location = 'signup.php';
    			</script>
    		";	
		}
		else {
		$sql = "INSERT INTO IDLogin values ($num,'$username','$encodepassword','client')";
		$sqlmatch = "SELECT * from IDLogin where Username = '$username'";
		$querymatch=$db->query($sqlmatch);
			if ($querymatch->fetch()) 
				{
					echo "
						<script>
							alert('Maaf gunakan Username yang lain');
							window.location = 'signup.php';
						</script>
					";					
				} 
				else 
				{
					
					if ($db->query($sql)) 
					{	
						echo "
							<script>
								alert('Register Berhasil ...');
								window.location = 'login.php';
							</script>
						";			
					} 
					else 
					{
						echo "
							<script>
								alert('Error :". $sql . "<br>" . "($db)');
								window.location = 'signup.php';
							</script>
						";
					}
				}
		}
?>