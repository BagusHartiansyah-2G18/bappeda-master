<?php
  
$judul=$_POST['judul'];	
//echo "<form method='post' action='formcostgaji-proc.php'>";	
if ($judul == "Normal"){
	echo "<select name='ket'>
	        <option id='normal1'>Shift 1</option>
            <option id='normal2'>Shift 2</option>
            <option id='normal3'>Shift 3</option>
         	</select>";
}
else {
	echo "<select name='ket'>
	        <option id='lembur1'>Senin-Jumat</option>
            <option id='lembur2'>Sabtu-Minggu</option>
         	</select>";
	}
//echo "<input type='submit' value='INPUT DATA'></form>";	

?>