<!DOCTYPE html>
<html>
<head>
	<title>my game</title>
</head>
<body>
<h1>Welcome to my game</h1>
<p>guess any number b/w 0 and 10 and put ur name and ur  number in a url with name=bla bla bla guess=bla bla bla i.e first/ngork.php?guess=2&name=Siva%20Prakash </p>
<?php 
$a=mt_rand(0,10);
if ($_GET['guess']==$a){
	echo "<h2>you are genious!!</h2>","<h2>",$_GET['name'],"</h2>";
}
elseif ($_GET['guess']<$a) {
	echo "<h2>you are waste Get Lost!!</h2>","<h2>",$_GET['name'],"</h2>";
}
else{
	echo "<h2>you are good for nothing!!</h2>","<h2>",$_GET['name'],"</h2>";
}
echo "my thinkable number is \n",$a,"<br>";
echo "you entered number is \n",$_GET['guess'];

 ?>
</body>
</html>