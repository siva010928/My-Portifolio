<?php
$a = array('siva' =>'s','prakash'=>'p' );
echo("<pre>\n");
print_r($a);
echo ("\n</pre>\n");
var_dump($a);
$thing=FALSE;
echo "\n".$thing."<br>";
var_dump($thing);
$b = array();
$b['siva']='s';
print_r($b."<br>");
$e = array('siva'=>'s','prakash'=>'p');
foreach ($e as $k=>$v){
	echo "key=",$k,"\n","value=",$v,"<br>";
}
if (isset($e['sivau'])){
	echo "true";
}
else{
	echo "false";
}





?>