<!-- fixedHeader -->

<!DOCTYPE html>
<html lang="ko">

<head>
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no">

	<title>CUSVEN</title>

	<link href="css/bootstrap.css" rel="stylesheet">
	<link rel="shortcut icon" href="/image/favicon.png" type="image/x-icon">

	<link rel="stylesheet" href="/css/보류/pc.css">
	<link rel="stylesheet" href="/css/CUSVEN.css">
	<link rel="stylesheet" href="/css/bootstrap.css">

	<!-- <link type="text/css" rel="stylesheet" media="all" href="/css/보류/common.css" /> -->
	<!-- <link type="text/css" rel="stylesheet" media="all" href="/css/보류/styleDefault.css" /> -->
	<link type="text/css" rel="stylesheet" media="all" href="/css/보류/layout.css" />
	<!-- <link type="text/css" rel="stylesheet" media="all" href="/css/보류/main.css" /> -->
	<!-- <link type="text/css" rel="stylesheet" media="all" href="/css/보류/content.css" /> -->
	<!-- <link type="text/css" rel="stylesheet" media="all" href="/css/animate.css" /> -->
	<!-- <link type="text/css" rel="stylesheet" media="all" href="/css/owl.carousel.min.css" /> -->
	<!-- <link rel="stylesheet" type="text/css" href="/css/보류/datepicker.css"> -->
	<link type="text/css" rel="stylesheet" media="all" href="/css/보류/language.css" />

	<script defer src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
	<script defer src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
	<script defer src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js" integrity="sha384-OgVRvuATP1z7JjHLkuOU7Xw704+h835Lr+6QL9UvYjZE3Ipu6Tp75j7Bh/kR0JKI" crossorigin="anonymous"></script>

	<!-- <script defer src="js/CUSVEN.js"></script> -->

</head>

<?php
session_start(); // 세션
if($_SESSION['id']==null) { // 로그인 하지 않았다면
?>


<body>
	<nav class="navbar fixed-top">

		<a href="./">
			<div class="navbar__logo">

			</div>
		</a>

		<div class="navbar__menu">
			<li><a href="custom.php">커스텀하기</a></li>
		</div>

		<div class="navbar__set">
			<a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="true">
				<span class="glyphicon glyphicon-menu-hamburger fa-2x"></span>
			</a>
			<ul class="dropdown-menu" role="menu">
				<li><a href="/login.php">Login</a></li>
				<li><a href="/signUp.php">Sign Up</a></li>
				<li><a href="#">a</a></li>
				<li><a href="#">b</a></li>
			</ul>
		</div>

	</nav>


	<header class="subHeader Title">
		<h2>회원 로그인</h2>
		<strong>Member Login</strong>
	</header>

	<div class="Login">
		<h3>로그인</h3>
		<div class="form">
			<!-- <form>
				<fieldset>
					<legend>회원로그인</legend>
					<input type="text" name="id" placeholder="아이디 입력" data-required data-msg="아이디를 입력하세요.">
					<input type="password" name="password" placeholder="비밀번호 입력" data-required data-msg="비밀번호를 입력하세요.">
					<button type="button" class="btn one only cls_login" onclick="location.href='CheckMember.php';">로그인</button>


				</fieldset>
			</form> -->
			<form name="login_form" action="login_check.php" method="post">
				<fieldset>
					<legend>회원로그인</legend>
					<input type="text" name="id" placeholder="아이디 입력" data-required data-msg="아이디를 입력하세요.">
					<input type="password" name="password" placeholder="비밀번호 입력" data-required data-msg="비밀번호를 입력하세요.">
					<input type="submit" class="btn one only cls_login" name="login" value="로그인">
				</fieldset>
			</form>

		</div> <!-- // form -->

		<div class="flex">
			<a href="/">비회원으로 시작하기</a>
			<span class="blank"></span>
			<a href="">아이디/비번찾기</a>
			<a href="signUpmin.php">회원가입</a>
		</div>
	</div>



	<footer id="footer-wrap">
		<div id="footer" class="div-cont">
			<div class="f-info">
				<div class="in-abs">
					<p>1644-0560</p>

				</div>
				<ul class="in-company">
					<li>
						<span class="lang_txt KOR selected">상호명 가디우스</span>
					</li>
					<li>
						<span class="lang_txt KOR selected">대표 유혜미, 경진건</span>
					</li>
					<li>
						<span class="lang_txt KOR selected">
							서울특별시 서초구 서초중앙로 48, 2동(서초동, 한솔빌딩)
						</span>
					</li>
					<li>
						<span class="lang_txt KOR selected">사업자등록번호 387-86-01711</span>
					</li>
				</ul>
				<ul class="in-cs">
					<li>
						<span class="lang_txt KOR selected">고객센터 1644-0560</span>

					</li>
					<li>
						<span class="lang_txt KOR selected">E-mail : godius@cusven.com</span>
					</li>
					<li>
						<span class="lang_txt KOR selected">©2020 REPUBLIQ All rights reserved.</span>
					</li>
				</ul>
				<ul class="in-link">
					<li style="color: rgba(255,255,255,1);">
						<a href="javascript:void(0);" class="policy-btn" attr="2">
							<span class="lang_txt KOR selected" style="color: rgba(255,255,255,1);">개인정보처리방침</span>
						</a>
					</li>
					<li>
						<a href="javascript:void(0);" class="policy-btn">
							<span class="lang_txt KOR selected" style="color: rgba(255,255,255,1);">이용약관</span>
						</a>
					</li>
				</ul>
			</div>
		</div>
	</footer>

	<?php

	}else{ // 로그인 했다면

	   echo "<center><br><br><br>";
	   echo $_SESSION['name']."(".$_SESSION['id'].")님이 로그인 하였습니다.";
	   echo "<a href='logout.php'><input type='button' value='Logout'></a>";
	   echo "</center>";
	}

	?>

</body>

</html>
