<?php
include("head.php");
?>

<body>
  <?php include("nav.php");
  include("connect.php")?>

  <!-- <section class="Mypage Main">

    <header>
      <h2>마이페이지</h2>
      <a href="/pc/views/mypageQnaHome.php">
        <em>1:1문의</em>
      </a>
    </header>

    <div class="layout">
      <nav class="lnb">
        <ul class="list">
          <li>
            <a href="/pc/views/mypageHome.php"><em>주문내역</em></a>
          </li>
          <li>
            <a href="/pc/views/mypagePoint.php">
              <em>포인트</em>
            </a>
          </li>
          <li>
            <a href="/pc/views/mypageCoupon.php">
              <em>쿠폰</em>
            </a>
          </li>
          <li>
            <a href="/pc/views/mypageKeep.php">
              <em>관심상품</em>
            </a>
          </li>
          <li><a href="/pc/views/mypageReview.php"><em>상품후기</em></a></li>
          <li><a href="/pc/views/mypageQnaHome.php"><em>1:1문의</em></a></li>
          <li><a href="/pc/views/mypageInfo.php"><em>개인정보수정</em></a></li>
          <li><a href="/pc/views/customNoticeHome.php"><em>공지사항</em></a></li>
          <li><a -href="javascript:void(0);" href="/pc/member/logout.php"><em>로그아웃</em></a></li>
        </ul>
      </nav>
      <div class="mainContent"> -->

        <!-- 컴포넌트 페이지 Include -->
        <div class="row">
          <div class="col-3 aside">
            <h1></h1>
          </div>

          <div class="col-6" id="cart-contents">
            <h3>장바구니</h3>
<?php
$sql="select * from cart ORDER BY No DESC";
$result=mysqli_query($con,$sql);
if(isset($_GET['page'])){
  $page = $_GET['page'];
}
else{
  $page = 1;
}

while($page>1){
  mysqli_fetch_array($result);
  mysqli_fetch_array($result);
  mysqli_fetch_array($result);
  mysqli_fetch_array($result);
  mysqli_fetch_array($result);
  $page--;
}

$i=5;
while( ($arr= mysqli_fetch_array($result)) && $i>0){
$i--;
$No = $arr['No'];
  $frame = $arr['frame'];
  $head = $arr['head'];
  $strap = $arr['strap'];
  $arrow = $arr['arrow'];
echo "<div class = 'cart row'>";
  echo "<input type='checkbox' name='' value=''>";
  echo "<div class='image'>";
  echo "<img src='image/Clock/Frame/";
  echo $frame;
  echo ".png' class='img-thumbnail' alt=''>";

  echo "<img src='image/Clock/Head/";
  echo $head;
  echo ".png' class='img-thumbnail' alt=''>";

  echo "<img src='image/Clock/Strap/";
  echo $strap;
  echo ".png' class='img-thumbnail' alt=''>";

  echo "<img src='image/Clock/Arrow/";
  echo $arrow;
  echo ".png' class='img-thumbnail' alt=''>";

echo "</div>";

echo "<div class='right'>";
echo "<div class='count'>";
echo "<button type='button' class='btn btn-outline-dark'>Up</button>";
echo "<input type= 'number' class='Hey' value='1'>";
echo "<button type='button' class='btn btn-outline-dark'>Down</button>";

// echo "<button type='button' class='btn btn-outline-dark' value='$No' name='delete'>삭제</button>";
echo "<form class='form-inline' action='cartDelete.php' method='post'>";
echo "<input type='hidden' name='No' value='$No'>";
echo "<input type='submit' class='btn btn-outline-dark' name='' value='삭제'>";
echo "</form>";

echo "</div>";
echo "</div>";
echo "</div>";
}



 ?>



 <nav aria-label="Page navigation example">
<ul class="pagination justify-content-center">
<li class="page-item"><a class="page-link" href="#">Previous</a></li>
<li class="page-item"><a class="page-link" href="cart.php?page=1">1</a></li>
<li class="page-item"><a class="page-link" href="cart.php?page=2">2</a></li>
<li class="page-item"><a class="page-link" href="cart.php?page=3">3</a></li>
<li class="page-item"><a class="page-link" href="#">Next</a></li>
</ul>
</nav>
          </div>


        </div>


        <div class="Mypage boxPad Cart">
          <div class="cartResult">
            <dl class="amountList">
              <dt>상품금액</dt>
              <dd class="price">294,000원</dd>
            </dl>
            <dl class="delivery">
              <dt>배송비</dt>
              <dd class="price">0원</dd>
            </dl>
            <dl class="amountResult">
              <dt>결제예정금액</dt>
              <dd class="finalPrice">
                <span class="price">294,000원</span>
                <b>구매시 <span class="point">2,940원</span> 적립예정</b>
                <em>쿠폰 및 적립금은 다음화면에서 사용가능합니다</em>
              </dd>
            </dl>
          </div>
        </div>

        <button type="button" class="btnFixed noRadius cls_order" -onclick="location.href='orderPaper.php';">주문하기</button>
        <!-- //컴포넌트 페이지 Include -->

      </div>
      <!-- // mainContent -->

    </div> <!-- // layout -->
  </section>

</body>

</html>
