<!DOCTYPE html>
<html lang="kr" >
  <head>
    <meta charset="utf-8">

    <title>CUSVEN</title>
    <link rel="shortcut icon" href="/image/favicon.png" type="image/x-icon">
  </head>
  <body>

  </body>
</html>

<?php

$conn = mysqli_connect('localhost', 'root', '100djrroqkfwk', 'CUSVEN');
if(mysqli_connect_errno()){
  printf("Connect failed: %s\n", mysqli_connect_error());
  exit();
}

$sql = "SELECT * FROM test";
$result = mysqli_query($conn, $sql);

if(isset($_POST['item'])){
  echo "<p>item : ".$_POST['item']."</p>";
  $what = $_POST['item'];
  var_dump($what);
  $sq="SELECT * FROM test WHERE item='$what'";
  $ori = mysqli_fetch_array(mysqli_query($conn, $sq));
  $newNum = $ori['num']-1;
  var_dump($newNum);

if($newNum<0){
  echo "<script>alert('재고가 부족합니다.');</script>";
  //경고창
}
else{
  $sqll = "UPDATE test SET item='$what', num='$newNum'
       WHERE item='$what'";
       $resultt = mysqli_query($conn, $sqll);
}

  }

  header('Location: /Custom.php');
 ?>
