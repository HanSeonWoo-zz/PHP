<?php

$db_host = "localhost";
$db_user = "root";
$db_password = "100djrroqkfwk";
$db_name = "CUSVEN";


$con = mysqli_connect($db_host, $db_user, $db_password, $db_name); // 데이터베이스 접속

if ($con->connect_errno) { die('Connection Error : '.$con->connect_error); } // 오류가 있으면 오류 메세지 출력

?>


<!-- $conn = mysqli_connect('localhost', 'root', '100djrroqkfwk', 'CUSVEN');
if(mysqli_connect_errno()){
  printf("Connect failed: %s\n", mysqli_connect_error());
  exit();
}

$sql = "SELECT * FROM test";
$result = mysqli_query($conn, $sql); -->
