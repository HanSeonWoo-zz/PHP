<?php include("head.php") ?>
<body>
  <?php
    include("nav.php");
  ?>

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
