<?php include("head.php") ?>

<?php
session_start(); // 세션
if($_SESSION['id']==null) { // 로그인 하지 않았다면
?>
isset($_SESSION['user_id']) && !empty($_SESSION['user_id'])


<body>
	<?php
	  include("nav.php");
	?>

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
