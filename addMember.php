<!-- <input type="text" name="id" id="loginId" placeholder="아이디입력" required="" data-required="" data-
<input type="password" name="password" id="loginPass1" placeholder="비밀번호입력" required="" data-
            <input type="password" name="password_re" id="loginPass2" placeholder="비밀번호입력" required="" data-
            <input type="text" name="name" id="loginName" placeholder="성함" required="" data-required="" data-
            <input type="tel" name="cphone1" id="loginTel" placeholder="'-'없이 숫자만 입력하세요'" required="" data-
            <input type="email" name="email" id="loginEmail" placeholder="예 : apple@apple.com" required="" data- -->
<?php

$conn = mysqli_connect('localhost','root','100djrroqkfwk','CUSVEN');
// $sql = "SELECT * FROM member";


var_dump($_POST);
echo "{$_POST['id']}";

$sql_up = "INSERT INTO member(id, password, name, phone, email, address)
          VALUES('{$_POST['id']}', '{$_POST['password']}', '{$_POST['name']}', '{$_POST['cphone1']}', '{$_POST['email']}', '{$_POST['address2']}')";
$result = mysqli_query($conn, $sql_up);
var_dump($result);
?>
