<html>

<head>

<title>지금, 시작합니다</title>

<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">

<style>

.input_text{padding-left:3px;}

</style>

<script type="text/javascript">

<!--

function Rradio_OnOff(id)

{

//  <tr> id로 값을 비교한다!

   if(id == "Radio_On")

   {

      document.all["Radio_On"].style.display = '';         // 보이게

      document.all["Radio_Off"].style.display = 'none';  // 안보이게

   }

   else

   {

      document.all["Radio_On"].style.display = 'none';  // 안보이게

      document.all["Radio_Off"].style.display = '';         // 보이게

   }

}

//-->

</script>

</head>



<body>

<form name="TestFrm" id="TestFrm" onsubmit="" method="post" action="" target="iFrame_">

<table width="300" border="1" cellspacing="0" cellpadding="0" valign="center" >

   <tr height="30"><td align="center" colspan="2">지금, 시작합니다

   </td></tr>

   <tr height="30" >

      <td align="center">라디오버튼</td>

      <td align="left" class="input_text">

         <input type="radio" name="Radio_btn" id="Radio_btn" value="1" onclick="Rradio_OnOff('Radio_On');" checked/> On

         <input type="radio" name="Radio_btn" id="Radio_btn" value="0" onclick="Rradio_OnOff('Radio_Off');"/> Off

      </td>

    </tr>

    <tr id="Radio_On" height="30" style="display:'';">

        <td align="center">???</td>

        <td align="left" class="input_text">On</td>

    </tr>

    <tr id="Radio_Off" height="30" style="display:none;">  <!-- style에 display:none를 줌으로 숨긴다.^^ -->

        <td align="center">???</td>

        <td align="left" class="input_text">Off</td>

    </tr>

</table>

</form>

</body>

</html>
