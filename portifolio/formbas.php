<!DOCTYPE html>
<html>
<head>
	<title>sivaformbas</title>
</head>
<body>
	<?php
	$a="not found";
	$b="not found";
	if (isset($_GET['aei'])) {
	 	$a=$_GET['aei'];
	 	echo $a,"<br>";
	 } 
	 if (isset($_POST['sel'])) {
	 	$b=$_POST['sel'];
	 } 
	 if (isset($_POST['sel'])) {
	 	print_r($_POST['sel']);
	 }
	  if (isset($_POST['color'])) {
	 	print_r($_POST['color']."<br>");
	 }
	  if (isset($_POST['date'])) {
	 	print_r($_POST['date']);
	 }
	 if (isset($_POST['aei'])) {
	 	$a=$_POST['aei'];
	 	echo $a,"<br>";
	 } 


	 
	 print $b;
	 ?>
	 <form method="post">
	 	<input type="text" name="aei" >
	 	<input type="submit" name="submit" ><br>
	 	<label for="sel">select any of these:</label>
	 	<select multiple="multiple" name="sel[]" id="sel">
	 		<option value="1">one</option>
	 		<option value="2">two</option>
	 		<option value="3">three</option>
	 	</select><br>
	 	<input type="color" name="color"><br>
	 	<input type="date" name="date"><br>

	 </form>
</body>
</html>