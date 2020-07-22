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
