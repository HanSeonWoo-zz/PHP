<?php
include("connect.php");
var_dump($_POST);
$frame=$_POST['frame'];
$head =$_POST['head'];
$strap =$_POST['strap'];
$arrow =$_POST['arrow'];

$sql="insert into cart(frame,head,strap,arrow) VALUES($frame, $head, $strap, $arrow)";
$result = mysqli_query($con,$sql);
var_dump($result);
header('Location: /cart.php');

?>
