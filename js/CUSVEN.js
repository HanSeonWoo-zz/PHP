var g_no_member;
var j_head_goods_serial = 0;
var j_strap_goods_serial = 0;
var j_strap_buckle_color;

var $div_strap;
var $ul_strap_crone;

$(function() {
      $body = $('body.cls_page_member__insertform');
      if ($body.length == 1) {

        var j_check_id_dup = false;
        $('button.cls_check_id_dup').click(function() {

          var $id = $(this.form).find('input[name=id]');
          var j_id = $id.val().replace(/\s*/g, '');
          if (j_id == '') {

            alert('아이디를 입력해주세요.22');
            $id.focus();
            return;
          }

          $.get(
            '/pc/member/check_id_dup.php', {
              id: j_id
            },
            function(arg_data, arg_status) {

              if (arg_data == 'error') {
                alert(arg_status);
                return;
              }

              if (arg_data == 0) {
                j_check_id_dup = true;
                alert('�ъ슜 媛��ν븳 �꾩씠�붿엯�덈떎.');
              } else {
                j_check_id_dup = false;
                alert('�ъ슜 遺덇��ν븳 �꾩씠�붿엯�덈떎.');
                $id.val('');
                $id.focus();
              }
            });
        });

        // �꾩껜�숈쓽
        $('input.cls_agree_all').click(function() {

          $(this).next('ul').find('input[type=checkbox]').attr('checked', $(this).is(':checked'));
        });

        // �깅줉踰꾪듉
        $('button.cls_insert').closest('form').submit(function() {

          if (j_check_id_dup == false) {

            alert('�꾩씠�� 以묐났寃��щ� �섏꽭��.');
            $('input[name=id]').focus();

            return false;
          }

          if (!$(this).check()) return false;

          $(this).attr('action', '/pc/member/insert.php');
          $(this).attr('method', 'post');
          $(this).attr('target', 'ifr');

          return true;
        });$(function() {

        $('button.cls_insert').click(function() {

          $(this).closest('form').submit();
        });
      }
    };
