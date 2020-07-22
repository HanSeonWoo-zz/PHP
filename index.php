<?php include("head.php") ?>

<!-- <script type="text/javascript">
  if (Cookies.get("popup=") == undefined) {
    // window.open("/home_popup", "_blank", "width=400, height=500, menubar=no, status=no, toolbar=no");
    window.open("test.html", "width=400px, height=500px, menubar=no, status=no, toolbar=no");
  }
  document.cookie;
</script> -->

<script type="text/javascript">
<!--

// 쿠키가 있나 찾습니다

	function getCookie( name ){
			var nameOfCookie = name + "=";
			var x = 0;
			while ( x <= document.cookie.length )
			{
					var y = (x+nameOfCookie.length);
					if ( document.cookie.substring( x, y ) == nameOfCookie ) {
							if ( (endOfCookie=document.cookie.indexOf( ";", y )) == -1 )
									endOfCookie = document.cookie.length;
							return unescape( document.cookie.substring( y, endOfCookie ) );
					}
					x = document.cookie.indexOf( " ", x ) + 1;
					if ( x == 0 )
							break;
			}
			return "";
	}

	// 팝업창에서 만들어진 쿠키 Notice(Notice2) 의 값이 done(done2) 이 아니면(즉, 체크하지 않으면,)
	// 공지창 (test_pop.html test_pop2.html) 을 띄웁니다

	if ( getCookie( "Notice" ) !="done") {
			noticeWindow  =  window.open('popUp.html','notice','left=100px, top=100px, width=400px,height=400px');
			noticeWindow.opener = self;
	}

	// -->
</script>


<body>
  <?php
    include("nav.php");
  ?>


  <div class="home">
    <img src="/image/home_slick01.jpg" class="img-fluid" alt="Responsive image">
  </div>

  <div class="BestItem">
    <h1>Best Item</h1>

  </div>

  <div class="BestItem_Body">

  </div>




</body>

</html>
