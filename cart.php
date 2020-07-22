<?php
include("head.php");
?>

<body>
  <?php include("nav.php"); ?>

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
            <div class="cart row">

              <input type="checkbox" name="" value="">
              <div class="image">
                <img src="image/Clock/Frame/1.png" class="img-thumbnail" alt="">
                <img src="image/Clock/Head/1.png" class="img-thumbnail" alt="">
                <img src="image/Clock/Strap/1.png" class="img-thumbnail" alt="">
                <img src="image/Clock/Arrow/1.png" class="img-thumbnail" alt="">
              </div>
              <div class="right">
                <div class="count">
                  <button type="button" class="btn btn-outline-dark">Up</button>
                  <input type="number" value="1">
                  <button type="button" class="btn btn-outline-dark">Down</button>
                  <button type="button" class="btn btn-outline-dark" name="delete">삭제</button>
                </div>
              </div>

            </div>
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
