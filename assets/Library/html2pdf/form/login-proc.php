<?php
	include 'koneksi.php';

	$username   = $_POST['user'];
	$password   = $_POST['password'];
	$encode		= "tamakiako";
	$sql = "SELECT * FROM IDLogin WHERE Username = '$username'";
		$query=$db->query($sql);
	if (empty($username)||empty($password)) 
		{
			echo "
    			<script>
    				alert('Undefined Username or Password');
    				window.location = 'login.php';
    			</script>
    		";					
		} 
		else 
		{
			if ($query) 
			{	
				$row = $query->fetch();
				$passcheck = $row['Password'];

				if ((md5($encode.$password) == $passcheck)) 
				{
					session_start();
					$_SESSION['username'] = $row['Username'];
					$_SESSION['password'] = $row['Password'];				
						header('location:formpdf.php');	
				} 
				else 
				{
					echo "
					<script>
    					alert('Undefined Username or Password');
    					window.location = 'login.php';
    				</script>
				";
				}
			} 
			else 
			{
				echo "
					<script>
    					alert('Undefined Username or Password');
    					window.location = 'login.php';
    				</script>
				";
			}
		}
?>
