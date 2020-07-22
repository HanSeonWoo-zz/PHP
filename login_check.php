<?php
function Console_log($data){
    echo "<script>console.log( 'PHP_Console: " . $data . "' );</script>";

}

session_start(); // 세션
include ("connect.php"); // DB접속

$id = $_POST['id']; // 아이디
$pw = $_POST['password']; // 패스워드

$query = "select * from member where id='$id' and password='$pw'";
$result = mysqli_query($con, $query);
$row = mysqli_fetch_array($result);
var_dump($row);

if($id==$row['id'] && $pw==$row['password']){ // id와 pw가 맞다면 login

   $_SESSION['id']=$row['id'];
   $_SESSION['name']=$row['name'];
   echo "<script>location.href='login.php';</script>";

}else{ // id 또는 pw가 다르다면 login 폼으로

   echo "<script>window.alert('아이디와 비밀번호를 확인해주시기 바랍니다.');</script>"; // 잘못된 아이디 또는 비빌번호 입니다
   echo "<script>location.href='login.php';</script>";

}

?>
