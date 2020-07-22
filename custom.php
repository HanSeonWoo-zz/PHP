<!doctype html>
<html lang="ko">

<head>
  <!-- Required meta tags -->
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

  <!-- Bootstrap CSS -->
  <link rel="stylesheet" href="/css/bootstrap.css">
  <link rel="stylesheet" href="/css/CUSVEN.css">

  <title>CUSVEN</title>
  <link href="/image/favicon.png" rel="shortcut icon" type="image/x-icon">

  <!-- Optional JavaScript -->
  <!-- jQuery first, then Popper.js, then Bootstrap JS -->
  <script defer src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
  <script defer src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
  <script defer src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js" integrity="sha384-OgVRvuATP1z7JjHLkuOU7Xw704+h835Lr+6QL9UvYjZE3Ipu6Tp75j7Bh/kR0JKI" crossorigin="anonymous"></script>

  <script defer src="js/CUSVEN.js"></script>

</head>



<body>

  <nav class="navbar fixed-top">
    <a href="./">
      <div class="navbar__logo">

      </div>
    </a>

    <div class="navbar__menu">
      <li><a href="Custom.html">커스텀하기</a></li>
    </div>

    <div class="navbar__set">
      <ul>
        <li><a href="/Login.html">Login</a></li>
        <li><a href="/SignUpmin.html">Sign Up</a></li>
        <li><a href="#">a</a></li>
        <li><a href="#">b</a></li>
      </ul>
    </div>
  </nav>



  <div class="container">
    <div class="row">
      <div class="col-6" id = "View-Sticky">
        <div class="" id="Clock-View">
          <!-- 이미지가 보이는 부분 -->
          <div class="View View-Frame">
            <img src="image/Clock/Frame/1.png" alt="" id = "Frame">
          </div>
          <div class="View View-Head">
            <img src="image/Clock/Head/1.png" alt="" id = "Head">
          </div>
          <div class="View View-Strap" >
            <img src="image/Clock/Strap/1_2.png" alt="" id = "Strap">
          </div>
          <div class="View View-Arrow">
            <img src="image/Clock/Arrow/1.png" alt="" id = "Arrow">
          </div>
        </div>
      </div>

      <div class="col-6" id="Clock-Select">
        <div class="step">
          <h5>Step1. <strong>Frame</strong>을 선택해주세요.</h5>
        </div>

        <div class="Select-Frame">
          <ul>
            <li><a href="#"><img src="/image/Clock/Frame/1.png" class="img-thumbnail" alt="" onclick="changeFrame(1)"></a></li>
            <li><a href="#"><img src="/image/Clock/Frame/2.png" class="img-thumbnail" alt="" onclick="changeFrame(2)"></a></li>
            <li><a href="#"><img src="/image/Clock/Frame/3.png" class="img-thumbnail" alt="" onclick="changeFrame(3)"></a></li>
            <li><a href="#"><img src="/image/Clock/Frame/4.png" class="img-thumbnail" alt="" onclick="changeFrame(4)"></a></li>
          </ul>
        </div>

        <div class="step">
          <h5>Step2. <strong>Head</strong>를 선택해주세요.</h5>
        </div>
        <div class="Select-Head">
          <ul>
            <li><a href="#"><img src="/image/Clock/Head/1.png" class="img-thumbnail" alt="" onclick="changeHead(1)"></a></li>
            <li><a href="#"><img src="/image/Clock/Head/2.png" class="img-thumbnail" alt="" onclick="changeHead(2)"></a></li>
            <li><a href="#"><img src="/image/Clock/Head/3.png" class="img-thumbnail" alt="" onclick="changeHead(3)"></a></li>
            <li><a href="#"><img src="/image/Clock/Head/4.png" class="img-thumbnail" alt="" onclick="changeHead(4)"></a></li>
          </ul>
        </div>

        <div class="step">
          <h5>Step3. <strong>Strap</strong>을 선택해주세요.</h5>
        </div>
        <div class="Select-Strap">
          <ul>
            <li><a href="#"><img src="/image/Clock/Strap/1.png" class="img-thumbnail" alt="" onclick="changeStrap(1)"></a></li>
            <li><a href="#"><img src="/image/Clock/Strap/2.png" class="img-thumbnail" alt="" onclick="changeStrap(2)"></a></li>
            <li><a href="#"><img src="/image/Clock/Strap/3.png" class="img-thumbnail" alt="" onclick="changeStrap(3)"></a></li>
            <li><a href="#"><img src="/image/Clock/Strap/4.png" class="img-thumbnail" alt="" onclick="changeStrap(4)"></a></li>
          </ul>
        </div>
        <div class="step">
          <h5>Step4. <strong>Arrow</strong>를 선택해주세요.</h5>
        </div>
        <div class="Select-Arrow">
          <ul>
            <li><a href="#"><img src="/image/Clock/Arrow/1.png" class="img-thumbnail" alt="" onclick="changeArrow(1)"></a></li>
            <li><a href="#"><img src="/image/Clock/Arrow/2.png" class="img-thumbnail" alt="" onclick="changeArrow(2)"></a></li>
            <li><a href="#"><img src="/image/Clock/Arrow/3.png" class="img-thumbnail" alt="" onclick="changeArrow(3)"></a></li>
          </ul>
        </div>

        <div class="Button">
          <input type="button" class="btn btn-outline-dark" name="" value="장바구니">
          <input type="button" class="btn btn-outline-primary" name="" value="구매하기">
        </div>

      </div>




    </div>
    <!--row-->
  </div>
  <!--container -->





  <div class="row" id="customBody">
    <div class="col-md-1">

    </div>
    <div class="col-md-6">
      <form class="" action="" method="get">

        <div class="container">
          <h3>GET방식_장바구니</h3>
          <div class="col">

            <strong>구매할 아이템</strong>
            <input type="radio" name="item" value="item1">Item1
            <input type="radio" name="item" value="item2">Item2
            <input type="radio" name="item" value="item3">Item3
            <p>
              <input type="submit" value="장바구니">
            </p>

          </div>

        </div>

      </form>



      <form class="" action="buy.php" method="post">

        <div class="container">
          <h3>POST방식_구매하기</h3>
          <div class="col">

            <strong>구매할 아이템</strong>
            <input type="radio" name="item" value="item1">Item1
            <input type="radio" name="item" value="item2">Item2
            <input type="radio" name="item" value="item3">Item3
            <p>
              <input type="submit" value="구매하기">
            </p>

          </div>

        </div>

      </form>

    </div>




    <div class="col-md-4">

      <table class="table">
        <thead class="thead-dark">
          <tr>
            <th scope="col">#</th>
            <th scope="col">아이템</th>
            <th scope="col">재고</th>
          </tr>
        </thead>
        <tbody>
          <?php
  $i = 1;
      while($arr= mysqli_fetch_array($result)){
echo "<tr>";
echo "<th scope='row'>$i</th>";
echo '<td>'.$arr['item'].'</td>';
echo "<td>".$arr['num']."</td>";
echo "</tr>";
$i++;
}
      ?>

        </tbody>
      </table>
      <?php
  if(isset($_GET['item'])){
    if($_GET['item']=='item1'){
      echo "<img src='image/clock1.png' width='300px' height='auto'/>";
    }
    else if($_GET['item']=='item2'){
  echo "<img src='image/clock2.png' width='300px' height='auto'/>";
    }
    else if($_GET['item']=='item3'){
  echo "<img src='image/clock3.png' width='300px' height='auto'/>";
    }
    }
   ?>


    </div>

  </div>


</body>

</html>
