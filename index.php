<!DOCTYPE html>
<html lang="ko">

<head>
  <script type="text/javascript" src="http://livejs.com/live.js "></script>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <!-- 위 3개의 메타 태그는 *반드시* head 태그의 처음에 와야합니다; 어떤 다른 콘텐츠들은 반드시 이 태그들 *다음에* 와야 합니다 -->
  <title>CUSVEN</title>
  <link rel="shortcut icon" href="/image/favicon.png" type="image/x-icon">
  <!-- 부트스트랩 -->
  <link href="css/bootstrap.css" rel="stylesheet">

  <!-- IE8 에서 HTML5 요소와 미디어 쿼리를 위한 HTML5 shim 와 Respond.js -->
  <!-- WARNING: Respond.js 는 당신이 file:// 을 통해 페이지를 볼 때는 동작하지 않습니다. -->
  <!--[if lt IE 9]>
      <script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
      <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
    <![endif]-->
  <script src="https://kit.fontawesome.com/64014525b9.js" crossorigin="anonymous"></script>
</head>
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

  body{
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


  <div class="home">
    <img src="/image/home_slick01.jpg" class="img-responsive" alt="Responsive image">

  </div>

  <div class="BestItem">
    <img src="/image/favicon.png" alt="" class="img-rounded">

  </div>






  <!-- jQuery (부트스트랩의 자바스크립트 플러그인을 위해 필요합니다) -->
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.2/jquery.min.js"></script>
  <!-- 모든 컴파일된 플러그인을 포함합니다 (아래), 원하지 않는다면 필요한 각각의 파일을 포함하세요 -->
  <script src="js/bootstrap.min.js"></script>
</body>

</html>
