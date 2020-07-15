
<!-- fixedHeader -->

<!DOCTYPE html>
<html lang="ko">
<head>
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no">

	<title>CUSVEN</title>
<link href="css/bootstrap.css" rel="stylesheet">
    <link rel="canonical" href="http://www.knot-designs.kr/index.php">
	<link rel="shortcut icon" href="/image/favicon.png" type="image/x-icon">
	<link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
  <link rel="stylesheet" href="/css/pc.css">
	<script src="/js/jquery-1.7.1.min.js"></script>
	<script src="/js/jquery-ui.min.js"></script>
	<script src="/js/slick.js"></script>
	<script src="/js/pc.js"></script>
	<script src="/js/form-1.1.js"></script>
	<script src="/js/action.js"></script>

	<link type="text/css" rel="stylesheet" media="all" href="/css/common.css" />
  <link type="text/css" rel="stylesheet" media="all" href="/css/styleDefault.css" />
  <link type="text/css" rel="stylesheet" media="all" href="/css/layout.css" />
  <link type="text/css" rel="stylesheet" media="all" href="/css/main.css" />
  <link type="text/css" rel="stylesheet" media="all" href="/css/content.css" />
  <link type="text/css" rel="stylesheet" media="all" href="/css/animate.css" />
  <link type="text/css" rel="stylesheet" media="all" href="/css/owl.carousel.min.css" />
  <link rel="stylesheet" type="text/css" href="/css/datepicker.css">
  <link type="text/css" rel="stylesheet" media="all" href="/css/language.css" />

</head>
<body class="cls_loginform">

<div class="bgLayer"></div>
<div class="bgConfirm"></div>
<!-- @pageHeader -->

<style>
  .navbar {
    background-color: #8a5631;
    color: #000000;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 8px 12px
  }

  a {
    text-decoration: none;
    color: white;
  }

  .navbar__logo {
    width: 100px;
    height: 50px;
    background: url(/image/m_logo_white.png);
    background-size: 100% auto;
  }


  .navbar__menu {
    list-style: none;
    font-size: 20px;
  }

  .navbar__menu li:hover {
    background-color: white;
    color: #8a5631;
    border-radius: 4px;
  }

  .navbar__menu li {
    padding: 8px 12px;
  }

  .navbar__set {
    width: 100px;
    height: 50px;
  }

  .navbar__set span {
    height: 50px;
    width: 50px;
  }

	body {
		margin-top: 50px;
	}

</style>



<body>
  <nav class="navbar navbar-default navbar-fixed-top">

    <a href="./">
      <div class="navbar__logo">

      </div>
    </a>

    <div class="navbar__menu">
      <li><a href="Custom.php">커스텀하기</a></li>
    </div>

    <div class="navbar__set">
      <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="true">
        <span class="glyphicon glyphicon-menu-hamburger fa-2x"></span>
      </a>
      <ul class="dropdown-menu" role="menu">
        <li><a href="/Login.php">Login</a></li>
        <li><a href="/SignUp.php">Sign Up</a></li>
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
            <form>
                <fieldset>
                    <legend>회원로그인</legend>
					<input type="text" name="id" placeholder="아이디 입력" data-required data-msg="아이디를 입력하세요.">
					<input type="password" name="password" placeholder="비밀번호 입력" data-required data-msg="비밀번호를 입력하세요.">
                    <button type="button" class="btn one only cls_login" -onclick="location.href='CheckMember.php';">로그인</button>
                </fieldset>
            </form>
        </div> <!-- // form -->

        <div class="flex">
                <a href="/">비회원으로 시작하기</a>
                <span class="blank"></span>
                <a href="">아이디/비번찾기</a>
                <a href="SignUp.php">회원가입</a>
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
					<span class="lang_txt ENG">Company Name Gadius</span>
					<span class="lang_txt CHI">商品名Gadius</span>
				</li>
				<li>
					<span class="lang_txt KOR selected">대표 유혜미, 경진건</span>
					<span class="lang_txt ENG">Representative Yoo Hye-mi, Gyeongjin-gun</span>
					<span class="lang_txt CHI">京津郡柳惠美议员</span>
				</li>
				<li>
					<span class="lang_txt KOR selected">
						<!-- 서울특별시 서초구 반포대로30길 81, 12층 1221호(서초동, 웅진타워) -->
						서울특별시 서초구 서초중앙로 48, 2동(서초동, 한솔빌딩)
					</span>
					<span class="lang_txt ENG">
						<!-- 1221, 12F, 81, Banpo-daero 30-gil, Seocho-gu, Seoul (Wonjin Tower, Seocho-dong) -->
						48, Seochojungang-ro, Seocho-gu, Seoul (Seocho-dong, Hansol Building)
					</span>
					<span class="lang_txt CHI">
						<!-- 首尔市瑞草区半坡大路30街81号12楼1221（瑞草洞元津塔) -->
						首爾市瑞草區瑞草郡江路48（瑞草洞Hansol大樓）
					</span>
				</li>
				<!-- <li>통신판매신고번호 236-871-4887</li> -->
				<li>
					<span class="lang_txt KOR selected">사업자등록번호 387-86-01711</span>
					<span class="lang_txt ENG">Business registration number 387-86-01711</span>
					<span class="lang_txt CHI">商业登记号码 387-86-01711</span>
				</li>
			</ul>
			<ul class="in-cs">
				<li>
					<span class="lang_txt KOR selected">고객센터 1644-0560</span>
					<span class="lang_txt ENG">Service center 387-86-01711</span>
					<span class="lang_txt CHI">客户中心 387-86-01711</span>

				</li>
				<li>
					<span class="lang_txt KOR selected">E-mail : godius@cusven.com</span>
					<span class="lang_txt ENG">E-mail : godius@cusven.com</span>
					<span class="lang_txt CHI">电子邮件 : godius@cusven.com</span>
				</li>
				<li>
					<span class="lang_txt KOR selected">©2020 REPUBLIQ All rights reserved.</span>
					<span class="lang_txt ENG">©2020 REPUBLIQ All rights reserved.</span>
					<span class="lang_txt CHI">©2020 REPUBLIQ保留所有权利。</span>
				</li>
			</ul>
			<ul class="in-link">
				<li style="color: rgba(255,255,255,1);">
					<a href="javascript:void(0);" class="policy-btn"  attr="2">
						<span class="lang_txt KOR selected" style="color: rgba(255,255,255,1);">개인정보처리방침</span>
						<span class="lang_txt ENG" style="color: rgba(255,255,255,1);">Policy</span>
						<span class="lang_txt CHI" style="color: rgba(255,255,255,1);">定策</span>
					</a>
				</li>
				<li >
					<a href="javascript:void(0);" class="policy-btn">
						<span class="lang_txt KOR selected" style="color: rgba(255,255,255,1);">이용약관</span>
						<span class="lang_txt ENG" style="color: rgba(255,255,255,1);">Terms</span>
						<span class="lang_txt CHI" style="color: rgba(255,255,255,1);">弱冠</span>
					</a>
				</li>
			</ul>
		</div>
	</div>
</footer>



</div>
        </div>
    </div>


    <div class="floatRight">
        <a href="javascript:void(0);" class="btnTop">
            <span class="material-icons">arrow_upward</span>
        </a>
        <a href="javascript:void(0);" class="btnBottom">
            <span class="material-icons">arrow_downward</span>
        </a>
    </div>


    <a name="bottom" class="bottomPosition"> </a>



<script type="text/javascript">
<!--
	var tmpUser = navigator.userAgent;
	var branch = location.href.replace('/pc/', '/m/');

	if (tmpUser.indexOf("iPhone") > 0 || tmpUser.indexOf("iPod") > 0 || tmpUser.indexOf("Android ") > 0 ) {

		/*
			if(location.href.indexOf('customOrder.php') >= 0) {
				branch = '/m/views/customOrder.php';
			}

			if(location.href.indexOf('allHome.php') >= 0) {
				branch = '/m/views/items/allHome.php';
			}

			if(location.href.indexOf('customHome.php') >= 0) {
				branch = '/m/views/customFaq.php';
			}

			if(location.href.indexOf('customFaq.php') >= 0) {
				branch = '/m/views/customFaq.php';
			}
		*/

		if(location.href.indexOf('customHome.php') >= 0) {
			branch = '/m/';
		}
		if(location.href.indexOf('/pc/') == -1) {
			branch = '/m/';
		}

		location.replace(branch);
	}

	g_no_member = '';
//-->
</script>
<!-- NAVER SCRIPT START -->
<script type="text/javascript" src="//wcs.naver.net/wcslog.js"></script>
<script type="text/javascript">
if (!wcs_add) var wcs_add={};
wcs_add["wa"] = "s_22b44908c1ed";
if (!_nasa) var _nasa={};
wcs.inflow();
wcs_do(_nasa);
</script>
<!-- NAVER SCRIPT END -->

	<iframe id="ifr" name="ifr" style="width:0px; height:0px; display:none"></iframe>

	<!-- jQuery (부트스트랩의 자바스크립트 플러그인을 위해 필요합니다) -->
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.2/jquery.min.js"></script>
  <!-- 모든 컴파일된 플러그인을 포함합니다 (아래), 원하지 않는다면 필요한 각각의 파일을 포함하세요 -->
  <script src="js/bootstrap.min.js"></script>
</body>
</html>
