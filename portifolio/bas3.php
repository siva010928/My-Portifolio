<?php
   // fetch the value of $_GET['user'] and returns 'not passed'
   // if username is not passed
   $a = array('siva'=>'s','prakash'=>'p' );
   $username = $a['siva'] ?? 'not passed';
   print($username);
   print("<br/>");

   // Equivalent code using ternary operator
   $username = isset($a['siva']) ? $a['siva'] : 'not passed';
   print($username);
   print("<br/>");
   // Chaining ?? operation
   $username = $a['siva'] ?? $_POST['username'] ?? 'not passed';
   print($username);
?>