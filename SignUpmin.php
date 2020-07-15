<html lang="ko"><head>
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no">


	<link rel="shortcut icon" href="/image/favicon.png" type="image/x-icon">
	<link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
	<link rel="stylesheet" href="/css/pc.css">
	<script src="/js/jquery-1.7.1.min.js"></script>
	<script src="/js/jquery-ui.min.js"></script>
	<script src="/js/slick.js"></script>
	<script src="/js/pc.js"></script>
	<script src="/js/form-1.1.js"></script>
	<!-- <script src="/js/action.js"></script> -->
	<script src="/js/CUSVEN.js"></script>

</head>


<header id="pageHeader">
    <div class="gnbWrap">
        <h1>
            <a href="/index.php"><img src="/image/pc_logo.png" alt="home"></a>
        </h1>
        <nav>
            <ul class="gnb">
                <li class="subMenu"><a href="Custom.php">커스텀하기</a></li>

                <li class="subMenu items">
                    <a href="">아이템</a>
                    <ul class="sub">
                        <li>
                            <a href="">ALL</a>
                        </li>
                        <li>
                            <a href="">Watch Head</a>
                        </li>
                        <li>
                            <a href="">Strap</a>
                        </li>
                        <li>
                            <a href="">Others</a>
                        </li>
                    </ul>
                </li>
            </ul>
        </nav>
				<div class="topGnb">
					<div class="accTop">
							<ul class="accNav on">
									<li><a href="SignUp.php">회원가입</a></li>
									<li><a href="Login.php">로그인</a></li>
									<li>
											<a href="/pc/views/mypageCart_noMember.php" class="cart">
													<i class="material-icons">shopping_cart</i>
													<span class="cartCount">0</span>
											</a>
									</li>
									<li><a href="/pc/views/customCenter.php">고객센터</a></li>

							</ul>
					</div> <!-- // accTop -->
				</div>

    </div>
</header>


<body class="cls_page_member__insertform">

    <header class="subHeader Title">
        <h2>회원가입</h2>
        <strong>Member Join</strong>
    </header>

	<form action="addMember.php" method="post">

    <div class="Join boxPad">
        <h3>가입정보입력</h3>
        <ul>
            <li class="loginId">
                <label for="loginId">아이디<span class="required">*</span></label>
                <div class="flex">
                    <input type="text" name="id" id="loginId" placeholder="아이디입력" required="" data-required="" data-msg="아이디를 입력하세요.">

										<button type="button" class="cls_check_id_dup">중복확인</button>
                </div>
            </li>

            <li>
                <label for="loginPass1">비밀번호<span class="required">*</span></label>
                <input type="password" name="password" id="loginPass1" placeholder="비밀번호입력" required="" data-required="" data-msg="비밀번호를 입력하세요.">
            </li>

            <li>
                <label for="loginPass2">비밀번호 확인<span class="required">*</span></label>
                <input type="password" name="password_re" id="loginPass2" placeholder="비밀번호입력" required="" data-required="" data-msg="비밀번호 확인을 입력하세요.">
            </li>

            <li>
                <label for="loginName">이름<span class="required">*</span></label>
                <input type="text" name="name" id="loginName" placeholder="성함" required="" data-required="" data-msg="이름을 입력하세요.">
            </li>

            <li>
                <label for="loginTel">휴대폰<span class="required">*</span></label>
                <input type="tel" name="cphone1" id="loginTel" placeholder="'-'없이 숫자만 입력하세요'" required="" data-required="" data-msg="휴대폰을 입력하세요.">
            </li>

            <li>
                <label for="loginEmail">이메일<span class="required">*</span></label>
                <input type="email" name="email" id="loginEmail" placeholder="예 : apple@apple.com" required="" data-required="" data-msg="이메일을 입력하세요.">
            </li>

        </ul>
    </div>

    <div class="Join boxPad">
        <ul>
            <li class="address">
                <label for="loginAdr">배송주소</label>

                <div>
                     <button type="button" id="loginAdr" class="Btn findAddress"> <!-- 20191124 클래스 추가 -->
                         <span class="bg">주소검색
                        </span>
                    </button>

                    <p class="output cls_address1">주소검색버튼을 눌러 검색하세요</p>
					<input type="hidden" name="zipcode">
					<input type="hidden" name="address1">
                    <input type="text" name="address2" placeholder="세부주소를 입력해주세요">

                </div>
            </li>
        </ul>
    </div>

    <button type="submit" class="btnFull cls_insert">
        가입하기
    </button>

     </form>

	<iframe id="ifr" name="ifr" style="width:0px; height:0px; display:none"></iframe>


</body></html>
