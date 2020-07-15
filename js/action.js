var g_no_member;
var j_head_goods_serial = 0;
var j_strap_goods_serial = 0;
var j_strap_buckle_color;

var $div_strap;
var $ul_strap_crone;

$(function() {

  // �대�吏� �덉씠吏� 濡쒕뱶
  $(window).on('scroll', f_lazyload = function() {

    var documentScrollTop = $(document).scrollTop();
    var windowHeight = $(window).height();

    $('img[data-src]').each(function() {

      var offsetTop = $(this).offset().top;

      if (Number(documentScrollTop) + Number(windowHeight) - offsetTop >= 0) {
        var j_src = $(this).data('src');
        if (j_src == '') {

        } else {

          $(this).attr('src', j_src);
          $(this).removeAttr('data-src');
          // $(this).prop('data-src', '');
        }
      }
    });
  });

  f_lazyload();

  /*
    //
    var f_show_img_02 = function () {

      var j_cnt = 0;
      $('img[data-src]').each(function () {

        var j_src = $(this).data('src');
        if(j_src == null || j_src == '') return;
        var $this = $(this);

        j_cnt++;

        setTimeout(function () {

          $this.attr('src', j_src);
          $this.prop('data-src', '');

        }, 100 * j_cnt);
      });
    }

    var f_show_img = function () {

      $('img[data-src]').each(function () {

        var j_src = $(this).data('src');
        if(j_src == null || j_src == '') return;

        $(this).attr('src', j_src);
        $(this).prop('data-src', '');
      });
    }
    f_show_img();
  */

  // 肄ㅻ쭏
  function f_comma(arg_str) {

    var arr_str = ('' + arg_str).split('.');
    var str = arr_str[0].replace(/[^-0123456789]/g, '');
    var i;
    var result = '';
    var cnt = 0;

    // �뺤닔
    for (i = str.length - 1; i >= 0; i--, cnt++) {
      result = str.substring(i, i + 1) + (cnt > 0 && cnt % 3 == 0 ? ',' : '') + result;
    }

    // �뚯닔
    if (arr_str.length > 1) {
      result += '.';
      var str = arr_str[1].replace(/[^-0123456789]/g, '');
      for (i = 0; i < str.length; i++) {
        result += (i > 0 && i % 3 == 0 ? ',' : '') + str.substring(i, i + 1);
      }
    }

    result = result.replace('-,', '-').replace('+,', '+');

    return result;
  }

  // 怨듯넻 > �リ린
  $('a.btn.Close').click(function() {

    self.close();
  });

  // 怨듯넻 > 紐⑸줉蹂닿린
  $('a.btn.Back').click(function() {

    history.go(-1);
  });
  $('button.btnBackList').click(function() {

    history.go(-1);
  });

  // 怨듯넻 > Custom Order
  $('a.cls_custom_order').click(function() {

    // window.open('/pc/views/customOrder.php');
    location.href = '/pc/views/customOrder.php';
  });

  // 硫붿씤 > Best
  $('a.cls_best').click(function() {

    var j_best_code = $(this).data('best_code');
    // window.open('/pc/views/customOrder.php?best_code=' + j_best_code);
    location.href = '/pc/views/customOrder.php?best_code=' + j_best_code;
  });

  // 怨듯넻 > Look Book
  $('a.cls_look_book').click(function() {

    // window.open('/pc/views/lookbook.php');
    location.href = '/pc/views/lookbook.php';
  });

  // 怨듯넻 > �λ컮援щ땲
  $('a.cls_cart').click(function() {

    // window.open('/pc/views/mypageCart.php');
    location.href = '/pc/views/mypageCart.php';
  });

  // �곹뭹寃���
  $body = $('body.cls_searchform');
  if ($body.length == 1) {

    $('button.btnSearch').closest('form').submit(function() {

      if (!$(this).check()) return false;

      return true;
    });

    $('button.btnSearch').click(function() {

      $(this).closest('form').submit();
    });
  }

  // 荑좏룿�ㅼ슫濡쒕뱶
  $('header a.couponDown').click(function() {

    var j_serial = $(this).data('serial');

    $.get(
      '/pc/coupon/insert.php', {
        serial: j_serial
      },
      function(arg_data, arg_status) {

        if (arg_data == 'error') {
          alert(arg_status);
          return;
        }

        alert(arg_data);
      });
  });

  // 二쇱냼寃���
  $('input[name=dong]').keyup(function() {

    var $this = $(this);
    var j_dong = $(this).val();
    if (j_dong.length >= 2) {

      $.post(
        '/pc/member/get_address.php', {
          dong: j_dong
        },
        function(arg_data, arg_status) {

          if (arg_data == 'error') {
            alert(arg_status);
            return;
          }

          var $html = $(arg_data);
          $html.find('button.cls_choice').click(function() {

            var j_zipcode = $(this).data('zipcode');
            var j_address1 = $(this).data('address1');

            $('input[name*=zipcode]').val(j_zipcode);
            $('input[name*=address1]').val(j_address1);
            $('p.cls_address1').text(j_address1);

            $('div.bgLayer').click();
          });

          $this.closest('section').find('div.contents').html($html);
        });

    }
  });

  /* 濡쒓렇�� �붾㈃ */
  $body = $('body.cls_loginform');
  if ($body.length == 1) {

    // �뚯썝媛���
    $('a.cls_join').click(function() {

      // window.open('/pc/views/loginRegister.php');
      location.href = '/pc/views/loginRegister.php';
    });

    $('button.cls_login').closest('form').submit(function() {

      if (!$(this).check()) return false;

      $(this).attr('action', '/pc/member/login.php');
      $(this).attr('method', 'post');
      $(this).attr('target', 'ifr');

      return true;
    });

    $('button.cls_login').click(function() {

      $(this).closest('form').submit();
    });
  }

  /* �뚯썝 > �깅줉�붾㈃ */
  $body = $('body.cls_page_member__insertform');
  if ($body.length == 1) {

    // �꾩씠�� 以묐났寃���
    var j_check_id_dup = false;
    $('button.cls_check_id_dup').click(function() {

      var $id = $(this.form).find('input[name=id]');
      var j_id = $id.val().replace(/\s*/g, '');
      if (j_id == '') {

        alert('�꾩씠�붾� �낅젰�섏꽭��.');
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
    });

    $('button.cls_insert').click(function() {

      $(this).closest('form').submit();
    });
  }

  /* �뚯썝 > 媛��낆셿猷� */
  $body = $('body.cls_page_member__join_complete');
  if ($body.length == 1) {

    $('a.btnGoHome').click(function() {

      opener.location.href = '/pc/';
      self.close();
    });
  }

  /* �뚯썝 > �섏젙�붾㈃ */
  $body = $('body.cls_page_member__updateform');
  if ($body.length == 1) {

    $('button.cls_update').closest('form').submit(function() {

      if (!$(this).check()) return false;

      $(this).attr('action', '/pc/member/update.php');
      $(this).attr('method', 'post');

      return true;
    });
  }

  /* �뚯썝 > �꾩씠�� 李얘린 */
  $body = $('body.cls_page_member__findidform');
  if ($body.length == 1) {

    $('button.cls_find').closest('form').submit(function() {

      if (!$(this).check()) return false;

      $.post(
        '/pc/member/find_id.php', {
          name: $('input[name=name]').val(),
          email: $('input[name=email]').val()
        },
        function(arg_data, arg_status) {

          if (arg_data == 'error') {
            alert(arg_status);
            return false;
          }

          if (arg_data == '') {

            $('div.outputWrap strong.result').text('寃��됰맂 �꾩씠�붽� �놁뒿�덈떎.');
          } else {

            $('div.outputWrap strong.result').text(arg_data);
          }
        });

      return false;
    });
  }

  /* �뚯썝 > 鍮꾨�踰덊샇 李얘린 */
  $body = $('body.cls_page_member__findpwform');
  if ($body.length == 1) {

    $('button.cls_find').closest('form').submit(function() {

      if (!$(this).check()) return false;

      $.post(
        '/pc/member/find_pw.php', {
          id: $('input[name=id]').val(),
          name: $('input[name=name]').val(),
          email: $('input[name=email]').val()
        },
        function(arg_data, arg_status) {

          if (arg_data == 'error') {
            alert(arg_status);
            return false;
          }

          if (arg_data == '') {

            $('div.outputWrap strong.result').text('�쇱튂�섎뒗 �뺣낫媛� �놁뒿�덈떎.');
          } else {

            $('div.outputWrap strong.result').text(arg_data);
          }
        });

      return false;
    });
  }

  /* 怨좉컼吏��먯꽱�� */
  $body = $('body.cls_page_custom_center');
  if ($body.length == 1) {

    $('a.cls_login').click(function() {

      alert('濡쒓렇�몄씠 �꾩슂�⑸땲��.');
      location.href = '/pc/views/login.php';
    });
  }

  /* 1:1 臾몄쓽 > �깅줉�붾㈃ */
  $body = $('body.cls_page_board_1to1__insertform');
  if ($body.length == 1) {

    $('button.cls_insert').closest('form').submit(function() {

      if (!$(this).check()) return false;

      $(this).attr('action', '/pc/board_1to1/insert.php');
      $(this).attr('method', 'post');

      return true;
    });

    $('button.cls_insert').click(function() {

      $(this.form).submit();
    });
  }

  /* 1:1 臾몄쓽 > �곸꽭�붾㈃ */
  $body = $('body.cls_board_1to1__detail');
  if ($body.length == 1) {

    $('button.cls_delete').click(function() {

      if (!confirm('�뺣쭚 ��젣�섏떆寃좎뒿�덇퉴?')) return;

      var j_serial = $(this).data('serial');

      $.get(
        '/pc/board_1to1/delete.php', {
          serial: j_serial
        },
        function(arg_data, arg_status) {

          if (arg_data == 'error') {
            alert(arg_status);
            return false;
          }

          location.href = '/pc/views/mypageQnaHome.php';
        });
    });
  }

  /* �곹뭹�꾧린 > �깅줉�붾㈃ */
  $body = $('body.cls_board_review__insertform');
  if ($body.length == 1) {

    $('button.cls_insert').closest('form').submit(function() {

      if (!$(this).check()) return false;

      $(this).attr('action', '/pc/board_review/insert.php');
      $(this).attr('method', 'post');

      return true;
    });

    $('button.cls_insert').click(function() {

      $(this.form).submit();
    });
  }

  /* �곹뭹 > �곸꽭�붾㈃ */
  $body = $('body.cls_page_goods__detail');
  if ($body.length == 1) {

    var j_serial = $('article[data-serial]').data('serial');
    var j_stock = $('article[data-stock]').data('stock');
    var j_flag_onname = $('article[data-flag_onname]').data('flag_onname');

    // �λ컮援щ땲
    $('button.cls_cart').click(function() {

      if (j_stock == 0) {

        alert('�덉젅�� �곹뭹�낅땲��.');
        return;
      }

      var j_qty = $('input[name=qty]').val();

      var j_msg = '';
      $('input[name^=arr_onname_msg]').each(function() {
        j_msg += (j_msg == '' ? '' : '/') + $(this).val();
      });

      var j_font_family = '';
      $('input[name^=arr_onname_font_family]').each(function() {
        j_font_family += (j_font_family == '' ? '' : '/') + $(this).val();
      });

      $.post(
        '/pc/cart/insert.php', {
          serial: j_serial,
          qty: j_qty,
          msg: j_msg,
          font_family: j_font_family
        },
        function(arg_data, arg_status) {

          if (arg_data == 'error') {
            alert(arg_status);
            return false;
          }

          alert('�λ컮援щ땲�� 異붽��섏뿀�듬땲��.');
        });
    });

    // 愿��ъ긽��
    $('button.cls_zzim').click(function() {

      $.get(
        '/pc/zzim/insert.php', {
          serial: j_serial
        },
        function(arg_data, arg_status) {

          if (arg_data == 'error') {
            alert(arg_status);
            return false;
          }

          if (arg_data == '0') {
            alert('愿��ъ긽�덉뿉 �깅줉�섏뿀�듬땲��.');
          } else {
            alert('愿��ъ긽�덉뿉 �대� �깅줉�섏뼱�덉뒿�덈떎.');
          }
        });
    });

    // 二쇰Ц�섍린
    $('button.cls_buy').click(function() {

      if (j_stock == 0) {

        alert('�덉젅�� �곹뭹�낅땲��.');
        return;
      }

      var j_qty = $('input[name=qty]').val();

      var j_msg = '';
      $('input[name^=arr_onname_msg]').each(function() {
        j_msg += (j_msg == '' ? '' : '/') + $(this).val();
      });

      var j_font_family = '';
      $('input[name^=arr_onname_font_family]').each(function() {
        j_font_family += (j_font_family == '' ? '' : '/') + $(this).val();
      });

      $.post(
        '/pc/cart/insert.php', {
          serial: j_serial,
          qty: j_qty,
          msg: j_msg,
          font_family: j_font_family
        },
        function(arg_data, arg_status) {

          if (arg_data == 'error') {
            alert(arg_status);
            return false;
          }

          location.href = '/pc/views/mypageCart.php';
        });
    });

    // 媛곸씤�쒕퉬��
    if (j_flag_onname == 1) {

      var $onname_li = null;

      var j_cnt_onname = 0;
      var $src_onname = $('div.customOnname li.cls_0');
      $src_onname.hide();
      $('div.count button.btn.up').click(f_count_up = function() {

        j_cnt_onname++;
        var $clone = $src_onname.clone(1);
        $clone.attr('class', 'cls_' + j_cnt_onname);
        $clone.show();

        $('div.customOnname ul').append($clone);

        // �섏젙
        $clone.find('button.btnModify').click(function() {

          $onname_li = $(this).closest('li');

          $('input[name=onname_msg]').val($clone.find('input[name^=arr_onname_msg]').val());
          $('select[name=onname_font_family]').val($clone.find('input[name^=arr_onname_font_family]').val());

          // $clone.find('input[name^=arr_onname_msg]').val('');
          // $clone.find('input[name^=arr_onname_font_family]').val('');
        });

        // ��젣
        $clone.find('button.btnDelete').click(function() {

          $clone.find('div.openpop.add').addClass('on');
          $clone.find('div.openpop.modify').removeClass('on');

          $clone.find('input[name^=arr_onname_msg]').val('');
          $clone.find('input[name^=arr_onname_font_family]').val('');

          $clone.find('div.openpop.add span').html('�뚯튂�ㅻ뱶 媛곸씤�쒕퉬��');
        });
      });
      f_count_up();

      $('div.count button.btn.down').click(function() {

        j_cnt_onname--;
        if (j_cnt_onname == 0) {
          j_cnt_onname = 1;
        }

        $('div.customOnname li.cls_' + (j_cnt_onname + 1)).remove();
      });

      $('button.btnAddOnname').click(function() {

        $onname_li = $(this).closest('li');
        $('input[name=onname_msg]').val('');
        $('select[name=onname_font_family]').val('');
      });

      $('div.onNamePopup button.next').click(function() {

        var j_onname_msg = $('input[name=onname_msg]').val();
        var j_onname_font_family = $('select[name=onname_font_family]').val();

        $onname_li.find('div.openpop.add').removeClass('on');
        $onname_li.find('div.openpop.modify').addClass('on');
        $onname_li.find('span').html('�좎껌硫붿꽭吏� : ' + j_onname_msg);

        $onname_li.find('input[name^=arr_onname_msg]').val(j_onname_msg);
        $onname_li.find('input[name^=arr_onname_font_family]').val(j_onname_font_family);

        $('button.btnCancel').click();
      });
    }
  }

  /* �λ컮援щ땲 > 由ъ뒪�� */
  $body = $('body.cls_page_cart__index');
  if ($body.length == 1) {

    // �꾩껜�좏깮
    $('input#orderAll').click(function() {

      $('input[name=idx]').attr('checked', $(this).is(':checked'));
    });

    // �곹뭹�곸꽭 �대룞
    $('a.cls_goods_detail').click(function() {

      var j_serial = $(this).data('serial');

      opener.location = '/pc/views/item_detail.php?serial=' + j_serial;
      self.close();
    });

    // �섎웾 �섏젙
    $('button.down, button.up').click(function() {

      var $li = $(this).closest('li');
      var j_idx = $li.data('idx');
      var j_qty = $li.find('input[name=qty]').val();

      $.get(
        '/pc/cart/update_qty.php', {
          idx: j_idx,
          qty: j_qty
        },
        function(arg_data, arg_status) {

          if (arg_data == 'error') {
            alert(arg_status);
            return false;
          }

          try {
            j_json_data = $.parseJSON(arg_data);
          } catch (e) {
            alert(e);
            return false;
          }

          if (j_json_data.price_tot == 0) {

            location.reload();
          } else {

            $('div.cartResult dl.amountList dd.price').text(j_json_data.price_tot + '��');
            $('div.cartResult dl.onname dd.price').text(j_json_data.price_onname + '��');
            $('div.cartResult dl.delivery dd.price').text(j_json_data.price_delivery + '��');
            $('div.cartResult dl.amountResult span.price').text(j_json_data.price_pay + '��');
            $('div.cartResult dl.amountResult span.point').text(j_json_data.point_tot + '��');
          }
        });
    });

    // ��젣 - 媛쒗렪 �� ��젣�덉젙
    $('a.cls_delete').click(function() {

      var $li = $(this).closest('li');
      var j_idx = $li.data('idx');

      $.get(
        '/pc/cart/delete.php', {
          idx: j_idx
        },
        function(arg_data, arg_status) {

          if (arg_data == 'error') {
            alert(arg_status);
            return false;
          }

          try {
            j_json_data = $.parseJSON(arg_data);
          } catch (e) {
            alert(e);
            return false;
          }

          if (j_json_data.price_tot == 0) {

            location.reload();
          } else {

            $('div.cartResult dl.amountList dd.price').text(j_json_data.price_tot + '��');
            $('div.cartResult dl.onname dd.price').text(j_json_data.price_onname + '��');
            $('div.cartResult dl.delivery dd.price').text(j_json_data.price_delivery + '��');
            $('div.cartResult dl.amountResult span.price').text(j_json_data.price_pay + '��');
            $('div.cartResult dl.amountResult span.point').text(j_json_data.point_tot + '��');
          }
        });
    });

    // 硫붿씤�곹뭹 ��젣
    $('div.mainItem a.btnItemDel').click(function() {

      var $li = $(this).closest('li');
      var j_idx = $li.data('idx');

      $.get(
        '/pc/cart/delete.php', {
          idx: j_idx
        },
        function(arg_data, arg_status) {

          if (arg_data == 'error') {
            alert(arg_status);
            return false;
          }

          try {
            j_json_data = $.parseJSON(arg_data);
          } catch (e) {
            alert(e);
            return false;
          }

          if (j_json_data.price_tot == 0) {

            location.reload();
          } else {

            $('div.cartResult dl.amountList dd.price').text(j_json_data.price_tot + '��');
            $('div.cartResult dl.onname dd.price').text(j_json_data.price_onname + '��');
            $('div.cartResult dl.delivery dd.price').text(j_json_data.price_delivery + '��');
            $('div.cartResult dl.amountResult span.price').text(j_json_data.price_pay + '��');
            $('div.cartResult dl.amountResult span.point').text(j_json_data.point_tot + '��');
          }
        });
    });

    // �듭뀡�곹뭹 ��젣
    $('div.optionItem a.btnItemDel2').click(function() {

      var j_serial = $(this).data('serial');
      var $this = $(this);

      $.get(
        '/pc/cart/delete_onname.php', {
          serial: j_serial
        },
        function(arg_data, arg_status) {

          if (arg_data == 'error') {
            alert(arg_status);
            return false;
          }

          try {
            j_json_data = $.parseJSON(arg_data);
          } catch (e) {
            alert(e);
            return false;
          }

          if (j_json_data.price_tot == 0) {

            location.reload();
          } else {

            $this.closest('div.optionItem').remove();
            $('div.cartResult dl.amountList dd.price').text(j_json_data.price_tot + '��');
            $('div.cartResult dl.onname dd.price').text(j_json_data.price_onname + '��');
            $('div.cartResult dl.delivery dd.price').text(j_json_data.price_delivery + '��');
            $('div.cartResult dl.amountResult span.price').text(j_json_data.price_pay + '��');
            $('div.cartResult dl.amountResult span.point').text(j_json_data.point_tot + '��');
          }
        });
    });

    // 二쇰Ц�섍린
    $('button.cls_order').click(function() {

      var $checked = $('input[name=idx]:checked');
      if ($checked.length == 0) {

        alert('二쇰Ц�� �곹뭹�� �좏깮�섏꽭��.');
        return;
      }

      var j_idxs = '';
      $checked.each(function() {
        j_idxs += (j_idxs == '' ? '' : ', ') + $(this).val();
      });

      $.get(
        '/pc/cart/select.php', {
          idxs: j_idxs
        },
        function(arg_data, arg_status) {

          if (arg_data == 'error') {
            alert(arg_status);
            return;
          }

          location.href = './orderPaper.php';
        });
    });
  }

  /* 二쇰Ц > 二쇰Ц�� �묒꽦�붾㈃ */
  $body = $('body.cls_page_order__orderform');
  if ($body.length == 1) {

    var f_calc = function() {

      var j_price_tot = Number($('input[name=price_tot]').val()); // hidden
      var j_price_delivery = Number($('input[name=price_delivery]').val()); // hidden
      var j_price_pay = 0;

      var $history_coupon_serial = $('select[name=history_coupon_serial]');
      var j_point_use = '' + $('input[name=point_use]').val();
      j_point_use = Number(j_point_use.replace(/,/g, ''));

      // 荑좏룿�곸슜
      var j_coupon_use = 0;
      if ($('select[name=history_coupon_serial]').val() != '') {

        var j_coupon_pct_dc = $history_coupon_serial.find('option:selected').data('pct_dc');
        j_coupon_use = Math.floor(j_price_tot * j_coupon_pct_dc * 0.01);
      }

      j_price_pay = j_price_tot;
      if (j_coupon_use > 0) {
        j_price_pay -= j_coupon_use;
      }
      j_price_pay += j_price_delivery;

      // �ъ씤�몄쟻��
      if (j_point_use > j_price_pay) {
        j_point_use = j_price_pay;
      }
      j_price_pay -= j_point_use;

      //
      $('input[name=coupon_use]').val(j_coupon_use); // hidden
      $('input[name=point_use]').val(f_comma(j_point_use));

      $('dl.amountResult span.price').text(f_comma(j_price_pay));
    }

    // 荑좏룿�곸슜
    $('select[name=history_coupon_serial]').change(f_calc);

    // �ъ씤�� �ъ슜
    $('input[name=point_use]').change(f_calc);

    //
    $('select[name=means_pay]').change(function() {

      var j_means_pay = $(this).val();

      if (j_means_pay == 4) { // 臾댄넻�μ엯湲�

        $('ul.bankSelect').show();

        $('input[name=bank]').attr('data-required', '');
        $('input[name=depositor]').attr('data-required', '');
        $('input[name=dt_deposit_hope]').attr('data-required', '');
      } else {

        $('ul.bankSelect').hide();

        $('input[name=bank]').removeAttr('data-required');
        $('input[name=bank]').attr('checked', false);
        $('input[name=depositor]').removeAttr('data-required');
        $('input[name=dt_deposit_hope]').removeAttr('data-required');
      }
    }).change();

    // 寃곗젣�섍린
    $('button.cls_order').click(function() {

      if (!$(this.form).check()) return;

      var $form = $(this).closest('form');

      $form.attr('action', '/pc/order/insert.php');
      $form.attr('method', 'post');
      $form.attr('target', 'ifr');
      $form.submit();
    });
  }

  /* 二쇰Ц > 二쇰Ц�� �묒꽦�붾㈃ */
  $body = $('body.cls_page_order__payform');
  if ($body.length == 1) {

    $('button.cls_home').click(function() {

      opener.location.href = '/pc/';
      self.close();
    });
  }

  /* My Page */
  $body = $('body.cls_page_mypage__index');
  if ($body.length == 1) {

    // �ъ씤��
    $('a.cls_mypage_point').click(function() {

      // window.open('/pc/views/mypagePoint.php');
      location.href = '/pc/views/mypagePoint.php';
    });

    // 荑좏룿
    $('a.cls_mypage_coupon').click(function() {

      // window.open('/pc/views/mypageCoupon.php');
      location.href = '/pc/views/mypageCoupon.php';
    });

    // 愿��ъ긽��
    $('a.cls_zzim_list').click(function() {

      // window.open('/pc/views/mypageKeep.php');
      location.href = '/pc/views/mypageKeep.php';
    });

    // 二쇰Ц�댁뿭
    $('a.cls_order_sheet').click(function() {

      // window.open('/pc/views/mypageOrderList.php');
      location.href = '/pc/views/mypageOrderList.php';
    });

    // �곹뭹�꾧린
    $('a.cls_board_review').click(function() {

      // window.open('/pc/views/mypageReview.php');
      location.href = '/pc/views/mypageReview.php';
    });

    // 1:1臾몄쓽
    $('a.cls_board_1to1').click(function() {

      // window.open('/pc/views/mypageQnaHome.php');
      location.href = '/pc/views/mypageQnaHome.php';
    });

    // 媛쒖씤�뺣낫�섏젙
    $('a.cls_member__updateform').click(function() {

      // window.open('/pc/views/mypageInfo.php');
      location.href = '/pc/views/mypageInfo.php';
    });

    // 諛곗넚�덈궡
    $('a.cls_delivery_guide').click(function() {

      // window.open('/pc/views/customDelivery.php');
      location.href = '/pc/views/customDelivery.php';
    });

    // 怨듭��ы빆
    $('a.cls_notice').click(function() {

      // window.open('/pc/views/customNoticeHome.php');
      location.href = '/pc/views/customNoticeHome.php';
    });

    // 怨좉컼�쇳꽣
    $('a.cls_cc').click(function() {

      // window.open('/pc/views/customCenter.php');
      location.href = '/pc/views/customCenter.php';
    });

    // �댁슜�덈궡
    $('a.cls_custom_guide').click(function() {

      // window.open('/pc/views/customGuide.php');
      location.href = '/pc/views/customGuide.php';
    });
  }

  /* > 愿��ъ긽�� */
  $body = $('body.cls_zzim__index');
  if ($body.length == 1) {

    // ��젣�섍린
    $('a.btnDel').click(function() {

      var j_serial = $(this).data('serial');

      $.get(
        '/pc/zzim/delete.php', {
          serial: j_serial
        },
        function(arg_data, arg_status) {

          if (arg_data == 'error') {
            alert(arg_status);
            return false;
          }

          location.reload();
        });
    });
  }

  /* > �꾩껜�곹뭹 */
  $body = $('body.cls_goods_all__index');
  if ($body.length == 1) {

    var $category_goods_code_2 = $('select[name=category_goods_code_2]');
    var $category_goods_code_2_option_clone = $category_goods_code_2.find('option').clone(0);

    $('select[name=category_goods_code_1]').change(function() {

      var j_category_goods_code_1 = $(this).val();
      if (j_category_goods_code_1 == '') {

        $category_goods_code_2.attr('disabled', true);

        $category_goods_code_2.val('');
      } else {

        $category_goods_code_2.attr('disabled', false);

        $category_goods_code_2.empty();
        $category_goods_code_2.val('');

        $category_goods_code_2_option_clone.each(function() {

          if ($(this).data('code_up') == j_category_goods_code_1 || $(this).data('code_up') == null) {

            $category_goods_code_2.append($(this));
          }
        });
      }
    }).change();

    $('button.btnItemFind').click(function() {

      $(this).closest('form').submit();
    });
  }




  /* > 而ㅼ뒪���ㅻ뜑 */
  $body = $('body.cls_custom_order__index');
  if ($body.length == 1) {

    // �곗륫�곷떒 ��
    $('a.btn.Home').click(function() {

      opener.location.href = '/pc/';
      self.close();
    });

    //
    $('img.cls_watch').click(f_onchoice_watch = function() {

      var j_serial = $(this).data('serial');
      var j_name = $(this).data('name');
      var j_price = $(this).data('price');
      var j_price_strap = $('div.customSelect li.cls_strap').attr('data-price');

      var j_stock = $(this).data('stock');
      var j_stock_strap = $('div.customSelect li.cls_strap').attr('data-stock');

      var j_price_tot = 0;
      if (j_stock != '0') {
        j_price_tot += Number(j_price);
      }
      if (j_stock_strap != '0') {
        j_price_tot += Number(j_price_strap);
      }

      // 議고빀�대�吏� 蹂�寃�
      $('div.customView div.head img').attr('src', $(this).attr('src'));

      // STEP2
      $('div.customSelect li.cls_watch').attr('data-serial', j_serial);
      $('div.customSelect li.cls_watch').attr('data-price', j_price);
      $('div.customSelect li.cls_watch').attr('data-stock', j_stock);
      $('div.customSelect li.cls_watch img').attr('src', $(this).attr('src'));
      $('div.customSelect li.cls_watch h3').html(j_name);
      $('div.customSelect li.cls_watch p.price').html(f_comma(j_price));

      $('div.customSelect li.cls_watch a.btnAddCart').unbind('click');
      $('div.customSelect li.cls_watch a.btnAddCart').click(function() {

        $.post(
          '/pc/cart/insert.php', {
            serial: j_serial,
            qty: 1
          },
          function(arg_data, arg_status) {

            if (arg_data == 'error') {
              alert(arg_status);
              return false;
            }

            alert('�λ컮援щ땲�� 異붽��섏뿀�듬땲��.');
          });
      });

      // STEP3
      $('dl.customTotal.cls_watch dt').html('Watch Head : ' + j_name);
      $('dl.customTotal.cls_watch dd.price').html(f_comma(j_price));
      $('div.customTotal.total p.price').html(f_comma(j_price_tot));

      // �덉젅泥섎━
      if (j_stock == '0') {

        $('div.customSelect li.cls_watch div.order span.visible').hide();
        $('div.customSelect li.cls_watch div.order span.soldOut').addClass('on');

        $('dl.customTotal.cls_watch dd.price').hide();
        $('dl.customTotal.cls_watch dd.soldOut').addClass('on');
      } else {

        $('div.customSelect li.cls_watch div.order span.visible').show();
        $('div.customSelect li.cls_watch div.order span.soldOut').removeClass('on');

        $('dl.customTotal.cls_watch dd.price').show();
        $('dl.customTotal.cls_watch dd.soldOut').removeClass('on');
      }
    });

    $('img.cls_strap').click(f_onchoice_strap = function() {

      var j_serial = $(this).data('serial');
      var j_name = $(this).data('name');
      var j_price = $(this).data('price');
      var j_price_watch = $('div.customSelect li.cls_watch').attr('data-price');

      var j_stock = $(this).data('stock');
      var j_stock_watch = $('div.customSelect li.cls_watch').attr('data-stock');

      var j_src = $(this).attr('src');
      var j_src21 = j_src.replace(/no=1/g, 'no=21');
      var j_src22 = j_src.replace(/no=1/g, 'no=22');

      var j_price_tot = 0;
      if (j_stock != '0') {
        j_price_tot += Number(j_price);
      }
      if (j_stock_watch != '0') {
        j_price_tot += Number(j_price_watch);
      }

      // 議고빀�대�吏� 蹂�寃�
      $('div.customView div.strap img').attr('src', j_src22);
      $('div.customView div.buckle div.photo img').attr('src', j_src21);
      $('div.customView div.buckle div.photo img').attr('data-name', j_name);

      // STEP2
      $('div.customSelect li.cls_strap').attr('data-serial', j_serial);
      $('div.customSelect li.cls_strap').attr('data-price', j_price);
      $('div.customSelect li.cls_strap').attr('data-stock', j_stock);
      $('div.customSelect li.cls_strap img').attr('src', j_src);
      $('div.customSelect li.cls_strap h3').html(j_name);
      $('div.customSelect li.cls_strap p.price').html(f_comma(j_price));

      $('div.customSelect li.cls_strap a.btnAddCart').unbind('click');
      $('div.customSelect li.cls_strap a.btnAddCart').click(function() {

        $.post(
          '/pc/cart/insert.php', {
            serial: j_serial,
            qty: 1
          },
          function(arg_data, arg_status) {

            if (arg_data == 'error') {
              alert(arg_status);
              return false;
            }

            alert('�λ컮援щ땲�� 異붽��섏뿀�듬땲��.');
          });
      });

      // STEP3
      $('dl.customTotal.cls_strap dt').html('Strap : ' + j_name);
      $('dl.customTotal.cls_strap dd.price').html(f_comma(j_price));
      $('div.customTotal.total p.price').html(f_comma(j_price_tot));

      // �덉젅泥섎━
      if (j_stock == '0') {

        $('div.customSelect li.cls_strap div.order span.visible').hide();
        $('div.customSelect li.cls_strap div.order span.soldOut').addClass('on');

        $('dl.customTotal.cls_strap dd.price').hide();
        $('dl.customTotal.cls_strap dd.soldOut').addClass('on');
      } else {

        $('div.customSelect li.cls_strap div.order span.visible').show();
        $('div.customSelect li.cls_strap div.order span.soldOut').removeClass('on');

        $('dl.customTotal.cls_strap dd.price').show();
        $('dl.customTotal.cls_strap dd.soldOut').removeClass('on');
      }
    });

    // ��移�
    $('div.customPopList.Head select[name=watch_color]').change(function() {

      var j_watch_color = $(this).val();

      if (j_watch_color == '') {

        $('div.customPopList.Head ul.subList > li').show();
      } else {

        $('div.customPopList.Head ul.subList > li').hide();
        $('div.customPopList.Head ul.subList > li[data-watch_color=' + j_watch_color + ']').show();
      }
    });

    var $head_category_goods_code_3 = $('div.customPopList.Head select[name=category_goods_code_3]');
    var $head_category_goods_code_3_option_clone = $head_category_goods_code_3.find('option').clone(0);

    $('div.customPopList.Head select[name=category_goods_code_2]').change(function() {

      var j_category_goods_code_2 = $(this).val();
      if (j_category_goods_code_2 == '') {

        $('select[name=category_goods_code_3]').attr('disabled', true);
        $head_category_goods_code_3.val('');
      } else {

        $('select[name=category_goods_code_3]').attr('disabled', false);

        $head_category_goods_code_3.empty();
        $head_category_goods_code_3.val('');

        $head_category_goods_code_3_option_clone.each(function() {

          if ($(this).data('code_up') == j_category_goods_code_2 || $(this).data('code_up') == null) {

            $head_category_goods_code_3.append($(this));
          }
        });
      }

      if (j_category_goods_code_2 == '') {

        $('div.customPopList.Head h2').show();
        $('div.customPopList.Head ul.itemWrap').show();
      } else {

        $('div.customPopList.Head h2').hide();
        $('div.customPopList.Head h2[data-category_goods_code_2=' + j_category_goods_code_2 + ']').show();

        $('div.customPopList.Head ul.itemWrap').hide();
        $('div.customPopList.Head ul[data-category_goods_code_2=' + j_category_goods_code_2 + ']').show();
      }

      $('div.customPopList.Head li.mainList').show();
    }).change();

    $('div.customPopList.Head select[name=category_goods_code_3]').change(function() {

      var j_category_goods_code_3 = $(this).val();

      if (j_category_goods_code_3 == '') {

        $('div.customPopList.Head li.mainList').show();
      } else {

        $('div.customPopList.Head li.mainList').hide();
        $('div.customPopList.Head li.mainList[data-category_goods_code_3=' + j_category_goods_code_3 + ']').show();
      }
    });

    // �묒� �대�吏� �대┃ �� ���� �대�吏� 蹂�寃�
    $('div.customPopList.Head ul.subList img').click(function() {

      return;

      var j_src = $(this).attr('src');
      $(this).closest('li.mainList').find('> a > img').attr('src', j_src);

    });

    // �ㅽ듃�� �좏깮 > �뚮텇瑜� 諛뺤뒪 �대┃ ��
    $('div.customPopList.Head li.mainList').click(function() {

      var j_category_goods_code_2 = $(this).closest('ul').data('category_goods_code_2');
      var j_category_goods_code_3 = $(this).data('category_goods_code_3');

      $('div.customPopList.Head select[name=category_goods_code_2]').val(j_category_goods_code_2);
      $('div.customPopList.Head select[name=category_goods_code_3]').val(j_category_goods_code_3);

      $('div.customPopList.Head button.btnFixBack').click();
    });

    // ��移� �좏깮 > 而ㅼ뒪�� �ㅻ뜑濡� �뚯븘媛�湲�
    $('div.customPopList.Head button.btnFixBack').click(function() {

      var $watch_color = $('div.customPopList.Head select[name=watch_color]');
      var j_watch_color = $watch_color.val();
      var j_watch_color_name = $watch_color.find('option:selected').text();

      var $category_goods_code_2 = $('div.customPopList.Head select[name=category_goods_code_2]');
      var j_category_goods_code_2 = $category_goods_code_2.val();
      var j_category_goods_name_2 = $category_goods_code_2.find('option:selected').text();

      var $category_goods_code_3 = $('div.customPopList.Head select[name=category_goods_code_3]');
      var j_category_goods_code_3 = $category_goods_code_3.val();
      var j_category_goods_name_3 = $category_goods_code_3.find('option:selected').text();

      var $h3 = $('div.customCategory.Head h3');
      $h3.text('Watch Head > ' + j_category_goods_name_2 + ' > ' + j_category_goods_name_3);

      var $div_dst = $('div.itemListWrap.cls_watch');
      $div_dst.empty();

      var $ul_dst = $('<ul class="list" />');

      var $list_src = $('div.customPopList.Head ul.subList li');

      var j_cnt_slick = 0;
      $list_src.each(function() {

        if (j_watch_color != '') {
          if ($(this).data('watch_color') != j_watch_color) {
            return;
          }
        }

        if (j_category_goods_code_2 != '') {
          if ($(this).data('category_goods_code_2') != j_category_goods_code_2) {
            return;
          }
        }

        if (j_category_goods_code_3 != '') {
          if ($(this).data('category_goods_code_3') != j_category_goods_code_3) {
            return;
          }
        }

        j_cnt_slick++;

        var $li_clone = $(this).clone(0);
        $li_clone.attr('style', 'width:80px');
        $li_clone.find('img').addClass('cls_watch');
        $li_clone.find('img').addClass('cls_' + j_cnt_slick);
        $li_clone.find('img').wrap('<a href="#"></a>');
        $li_clone.find('img').click(f_onchoice_watch);

        $ul_dst.append($li_clone);

        $div_dst.append($ul_dst);
      });

      /*
        $ul_dst.slick({
          dots: false,
          infinite: true,
          speed: 700,
          slidesToShow:5,
          slidesToScroll: 5,
          centerMode: false,
          centerPadding : 0,
          arrows:false,
          autoplay: false,
          autoplaySpeed: 3000
        });
      */

      // 理쒖큹 �좏깮
      $ul_dst.find('img.cls_watch.cls_1').click();
      // $($ul_dst.find('img.cls_watch')[0]).click();
    });




    // �ㅽ듃��
    $('div.customPopList.Strap select[name=buckle_color]').change(function() {

      var j_buckle_color = $(this).val();

      if (j_buckle_color == '') {

        $('div.customPopList.Strap ul.subList > li').show();
      } else {

        $('div.customPopList.Strap ul.subList > li').hide();
        $('div.customPopList.Strap ul.subList > li[data-buckle_color=' + j_buckle_color + ']').show();
      }
    });

    var $strap_category_goods_code_3 = $('div.customPopList.Strap select[name=category_goods_code_3]');
    var $strap_category_goods_code_3_option_clone = $strap_category_goods_code_3.find('option').clone(0);

    $('div.customPopList.Strap select[name=category_goods_code_2]').change(function() {

      var j_category_goods_code_2 = $(this).val();
      if (j_category_goods_code_2 == '') {

        $('select[name=category_goods_code_3]').attr('disabled', true);
        $strap_category_goods_code_3.val('');
      } else {

        $('select[name=category_goods_code_3]').attr('disabled', false);

        $strap_category_goods_code_3.empty();
        $strap_category_goods_code_3.val('');

        $strap_category_goods_code_3_option_clone.each(function() {

          if ($(this).data('code_up') == j_category_goods_code_2 || $(this).data('code_up') == null) {

            $strap_category_goods_code_3.append($(this));
          }
        });
      }

      if (j_category_goods_code_2 == '') {

        $('div.customPopList.Strap h2').show();
        $('div.customPopList.Strap ul.itemWrap').show();
      } else {

        $('div.customPopList.Strap h2').hide();
        $('div.customPopList.Strap h2[data-category_goods_code_2=' + j_category_goods_code_2 + ']').show();

        $('div.customPopList.Strap ul.itemWrap').hide();
        $('div.customPopList.Strap ul[data-category_goods_code_2=' + j_category_goods_code_2 + ']').show();
      }

      $('div.customPopList.Strap li.mainList').show();
    }).change();

    $('div.customPopList.Strap select[name=category_goods_code_3]').change(function() {

      var j_category_goods_code_3 = $(this).val();

      if (j_category_goods_code_3 == '') {

        $('div.customPopList.Strap li.mainList').show();
      } else {

        $('div.customPopList.Strap li.mainList').hide();
        $('div.customPopList.Strap li.mainList[data-category_goods_code_3=' + j_category_goods_code_3 + ']').show();
      }
    });

    // �묒� �대�吏� �대┃ �� ���� �대�吏� 蹂�寃�
    $('div.customPopList.Strap ul.subList img').click(function() {

      return;

      var j_src = $(this).attr('src');
      $(this).closest('li.mainList').find('> a > img').attr('src', j_src);

    });

    // �ㅽ듃�� �좏깮 > �뚮텇瑜� 諛뺤뒪 �대┃ ��
    $('div.customPopList.Strap li.mainList').click(function() {

      var j_category_goods_code_2 = $(this).closest('ul').data('category_goods_code_2');
      var j_category_goods_code_3 = $(this).data('category_goods_code_3');

      $('div.customPopList.Strap select[name=category_goods_code_2]').val(j_category_goods_code_2);
      $('div.customPopList.Strap select[name=category_goods_code_3]').val(j_category_goods_code_3);

      $('div.customPopList.Strap button.btnFixBack').click();
    });

    // �ㅽ듃�� �좏깮 > 而ㅼ뒪�� �ㅻ뜑濡� �뚯븘媛�湲�
    var f_isclick_strap_fix_back = false;
    $('div.customPopList.Strap button.btnFixBack').click(function() {

      f_isclick_strap_fix_back = true;

      var $buckle_color = $('div.customPopList.Strap select[name=buckle_color]');
      var j_buckle_color = $buckle_color.val();
      var j_buckle_color_name = $buckle_color.find('option:selected').text();

      var $category_goods_code_2 = $('div.customPopList.Strap select[name=category_goods_code_2]');
      var j_category_goods_code_2 = $category_goods_code_2.val();
      var j_category_goods_name_2 = $category_goods_code_2.find('option:selected').text();

      var $category_goods_code_3 = $('div.customPopList.Strap select[name=category_goods_code_3]');
      var j_category_goods_code_3 = $category_goods_code_3.val();
      var j_category_goods_name_3 = $category_goods_code_3.find('option:selected').text();

      var $h3 = $('div.customCategory.Strap h3');
      $h3.text('Strap > ' + j_category_goods_name_2 + ' > ' + j_category_goods_name_3);

      var $div_dst = $('div.itemListWrap.cls_strap');
      $div_dst.empty();

      var $ul_dst = $('<ul class="list" />');

      var $list_src = $('div.customPopList.Strap ul.subList li');

      var j_cnt_slick = 0;
      $list_src.each(function() {

        if (j_buckle_color != '') {
          if ($(this).data('buckle_color') != j_buckle_color) {
            return;
          }
        }

        if (j_category_goods_code_2 != '') {
          if ($(this).data('category_goods_code_2') != j_category_goods_code_2) {
            return;
          }
        }

        if (j_category_goods_code_3 != '') {
          if ($(this).data('category_goods_code_3') != j_category_goods_code_3) {
            return;
          }
        }

        j_cnt_slick++;

        var $li_clone = $(this).clone(0);
        $li_clone.attr('style', 'width:80px');
        $li_clone.find('img').addClass('cls_strap');
        $li_clone.find('img').addClass('cls_' + j_cnt_slick);
        $li_clone.find('img').wrap('<a href="#"></a>');
        $li_clone.find('img').click(f_onchoice_strap);

        $ul_dst.append($li_clone);

        $div_dst.append($ul_dst);
      });

      /*
        $ul_dst.slick({
          dots: false,
          infinite: true,
          speed: 700,
          slidesToShow:5,
          slidesToScroll: 5,
          centerMode: false,
          centerPadding : 0,
          arrows:false,
          autoplay: false,
          autoplaySpeed: 3000
        });
      */

      // �대줎
      f_make_strap_clone();

      // 理쒖큹 �좏깮
      $ul_dst.find('img.cls_strap.cls_1').click();
      // $($ul_dst.find('img.cls_strap')[0]).click();
    });

    // �대줎
    var f_make_strap_clone = function() {

      $ul_strap_crone = $('div.itemListWrap.cls_strap ul').clone(1);
    }
    f_make_strap_clone();

    var f_apply_buckle_color = function() {

      var $div_strap = $('div.itemListWrap.cls_strap');
      $div_strap.empty();

      $div_strap.append($ul_strap_crone.clone(1));

      // console.log('j_strap_buckle_color : ' + j_strap_buckle_color);
      $div_strap.find('li').each(function() {

        if ($(this).data('buckle_color') != j_strap_buckle_color) {
          $(this).remove();
        }
      });

      $($div_strap.find('img.cls_strap')[0]).click(); // 泥섏쓬�곹뭹 �좏깮
    }

    // 踰꾪겢�됱긽 �좏깮
    $('div.buckle a[data-buckle_color]').click(function() {

      j_strap_buckle_color = $(this).data('buckle_color');
      f_apply_buckle_color();
    });

    // 2020.04.25 諛깆뾽
    $('div.buckle a[data-buckle_color__backup]').click(function() {

      var j_strap_buckle_color = $(this).data('buckle_color');

      if (f_isclick_strap_fix_back == false) {

        $div_strap.empty();
        $div_strap.append($ul_strap_crone.clone(1));

        $div_strap.find('li').each(function() {

          if ($(this).data('buckle_color') != j_buckle_color) {
            $(this).remove();
          }
        });

        /*
          $div_strap.find('ul').slick({
              dots: false,
              infinite: true,
              speed: 700,
              slidesToShow:5,
              slidesToScroll: 5,
              centerMode: false,
              centerPadding : 0,
              arrows:false,
              autoplay: false,
              autoplaySpeed: 3000
            });
        */
      } else {

        $('div.customPopList.Strap select[name=buckle_color]').val(j_buckle_color);
        $('div.customPopList.Strap select[name=buckle_color]').change();
        $('div.customPopList.Strap button.btnFixBack').click();

        var $img_strap = $('img.cls_strap');
        if ($img_strap.length > 0) {
          // $($img_strap[0]).click();

          var j_name = $('div.customView div.buckle div.photo img').attr('data-name');
          var j_name_next = j_name.substring(0, j_name.length - 2) + j_buckle_color;

          var $img_strap_same = $('img.cls_strap[data-name=' + j_name_next + ']');
          if ($img_strap_same.length == 0) {
            alert('�대┃�섏떊 踰꾪겢�� �됱긽�� �ㅽ듃�⑹� �놁뒿�덈떎.');
          } else {
            $($img_strap_same[0]).click();
          }
        }
      }
    });

    // 1) 踰꾪겢�됱긽
    $('div.buckle a[data-buckle_color=' + j_strap_buckle_color + ']').click();

    // 2) 理쒖큹 �좏깮
    if (j_head_goods_serial == '0') {

      var $img_watch = $('div.itemListWrap.cls_watch img.cls_watch');
      if ($img_watch.length > 0) {
        $($img_watch[0]).click();
      }
    } else {

      $('div.itemListWrap.cls_watch img.cls_watch[data-serial=' + j_head_goods_serial + ']').click();
    }

    if (j_strap_goods_serial == '0') {

      var $img_strap = $('div.itemListWrap.cls_strap img.cls_strap');
      if ($img_strap.length > 0) {
        $($img_strap[0]).click();
      }
    } else {

      $('div.itemListWrap.cls_strap img.cls_strap[data-serial=' + j_strap_goods_serial + ']').click();
    }

    // �� 議고빀�쇰줈 二쇰Ц�섍린
    $('button.btnCustomOrder').click(function() {

      var j_serial_watch = $('div.customSelect li.cls_watch').attr('data-serial');
      var j_serial_strap = $('div.customSelect li.cls_strap').attr('data-serial');

      var j_stock_watch = $('div.customSelect li.cls_watch').attr('data-stock');
      var j_stock_strap = $('div.customSelect li.cls_strap').attr('data-stock');

      var j_cnt_goods = (j_stock_watch != '0' ? 1 : 0) + (j_stock_strap != '0' ? 1 : 0);
      var j_cnt_cart = 0;

      if (j_stock_watch != '0') {

        $.post(
          '/pc/cart/insert.php', {
            serial: j_serial_watch,
            qty: 1
          },
          function(arg_data, arg_status) {

            if (arg_data == 'error') {
              alert(arg_status);
              return false;
            }

            j_cnt_cart++;
          });
      }

      if (j_stock_strap != '0') {

        $.post(
          '/pc/cart/insert.php', {
            serial: j_serial_strap,
            qty: 1
          },
          function(arg_data, arg_status) {

            if (arg_data == 'error') {
              alert(arg_status);
              return false;
            }

            j_cnt_cart++;
          });
      }

      if (j_cnt_goods == 0) {

        alert('�좏깮�섏떊 �곹뭹�� 紐⑤몢 �덉젅�낅땲��.');
      } else {

        setInterval(function() {

          if (j_cnt_cart == j_cnt_goods) {

            if (g_no_member == '') {

              location.href = '/pc/views/mypageCart_noMember.php';
            } else {

              location.href = '/pc/views/mypageCart.php';
            }
          }
        }, 100);
      }
    });
  }

  /* 二쇰Ц�댁뿭 �곸꽭 */
  $body = $('body.cls_order__detail');
  if ($body.length == 1) {

    $('button.btnOrderCancle').click(function() {

      var j_serial = $(this).data('serial');

      if (!confirm('�뺣쭚 痍⑥냼�섏떆寃좎뒿�덇퉴?')) return;

      $.get(
        '/pc/order/cancel.php', {
          serial: j_serial
        },
        function(arg_data, arg_status) {

          if (arg_data == 'error') {
            alert(arg_status);
            return false;
          }

          alert('�뺤긽�곸쑝濡� 痍⑥냼�섏뿀�듬땲��.');
          location.reload();
        });
    });
  }

  /* */
  $('img.cls_coupon_spring_greeting_fair').click(function() {

    $.get(
      '/pc/coupon/insert_spring_greeting_fair.php', {},
      function(arg_data, arg_status) {

        if (arg_data == 'error') {
          alert(arg_status);
          return;
        }

        if (arg_data == 0) {
          alert('�뺤긽�곸쑝濡� 荑좏룿�� 諛쒓툒�섏뿀�듬땲��.');
        }

        if (arg_data == 1) {
          alert('濡쒓렇�� �� 荑좏룿�� 諛쏆쑝�� �� �덉뒿�덈떎.');
        }

        if (arg_data == 2) {
          alert('�대� 荑좏룿�� 諛쏆쑝�⑥뒿�덈떎.');
        }
      });
  });









  /* > 而ㅼ뒪���ㅻ뜑 > STEP 1 */
  $body = $('body.cls_custom_order__step1');
  if ($body.length == 1) {

    // �곗륫�곷떒 ��
    $('a.btn.Home').click(function() {

      opener.location.href = '/pc/';
      self.close();
    });

    // 珥덇린 STEP2 �붾㈃�쒖떆 議곗젅
    $('div.stepLast div.otherChoice.not').show();
    $('div.stepLast dl.customTotal.cls_watch').hide();
    $('div.stepLast div.customOnname').hide();
    $('div.stepLast dl.customTotal.cls_strap').hide();

    // 湲덉븸怨꾩궛
    var f_calc = function() {

      var j_price_tot = 0;

      j_price_tot += Number($('div.stepLast input[name=watch_price]').val());
      j_price_tot += Number($('div.stepLast input[name=strap_price]').val());

      var j_onname_msg = $('input[name=onname_msg]').val();

      if (j_onname_msg == '') {

        $('div.customTotal.total p.price').html(f_comma(j_price_tot));
      } else {

        $.get(
          '/pc/custom_order/get_onname_price.php', {
            qty: 1
          },
          function(arg_data, arg_status) {

            if (arg_data == 'error') {
              alert(arg_status);
              return false;
            }

            j_price_tot += Number(arg_data);
            $('div.customTotal.total p.price').html(f_comma(j_price_tot));

            $('div.customOnname div.openpop.modify span').html('�좎껌硫붿꽭吏� ( +' + f_comma(arg_data) + ') : ' + j_onname_msg);
          });
      }

    }

    //
    $('img.cls_watch').click(f_onchoice_watch = function() {

      var j_serial = $(this).data('serial');
      var j_name = $(this).data('name');
      var j_src = $(this).attr('src');
      var j_price = $(this).data('price');
      var j_stock = $(this).data('stock');
      var j_flag_onname = $(this).data('flag_onname'); // 媛곸씤 �쒕퉬�ㅺ� 遺덇��ν븳 ��移섎룄 �덉쓬

      // 議고빀�대�吏�
      $('div.customThum div.head img').attr('src', j_src);

      // 議고빀�대�吏� �섎떒
      $('div.customSelect li.cls_watch h3').html(j_name);
      $('div.customSelect li.cls_watch p.price').html(f_comma(j_price));

      // �덉젅�쒖떆
      if (j_stock == 0) {
        $('div.customSelect li.cls_watch span.visible').removeClass('on');
        $('div.customSelect li.cls_watch span.soldOut').addClass('on');
      } else {
        $('div.customSelect li.cls_watch span.visible').addClass('on');
        $('div.customSelect li.cls_watch span.soldOut').removeClass('on');
      }

      // �닿린
      $('div.customSelect li.cls_watch a.btnAddCart').unbind('click');
      $('div.customSelect li.cls_watch a.btnAddCart').click(function() {

        $('div.stepLast div.otherChoice.not').hide(); // "�꾩뿉�� '�닿린'瑜� �뚮윭 二쇰Ц�섏떎 �곹뭹�� 異붽��섏꽭��" 臾멸뎄 誘명몴�� 泥섎━
        $('div.stepLast dl.customTotal.cls_watch').show(); // ��移� �쒖떆
        $('div.stepLast div.customOnname').show(); // 媛곸씤�쒕퉬�� �쒖떆

        if (j_flag_onname == 1) {

          $('div.stepLast div.customOnname div.openpop.add').addClass('on');
          $('div.stepLast div.customOnname div.openpop.modify').removeClass('on');
          $('div.stepLast div.customOnname div.noOnname').removeClass('on');
        } else {

          $('div.stepLast div.customOnname div.openpop').removeClass('on');
          $('div.stepLast div.customOnname div.openpop.modify').removeClass('on');
          $('div.stepLast div.customOnname div.noOnname').addClass('on');

          $('input[name=onname_msg]').val('');
          $('input[name=onname_font_family]').val('');
          $('div.stepLast input[name=onname_price]').val(0);
        }

        $('div.stepLast input[name=watch_serial]').val(j_serial);
        $('div.stepLast input[name=watch_price]').val(j_price);

        // STEP2
        $('dl.customTotal.cls_watch dt span.choiceThum img').attr('src', j_src);
        $('dl.customTotal.cls_watch dt span.choiceName').html('Watch Head : ' + j_name);
        $('dl.customTotal.cls_watch dd.price').html(f_comma(j_price));

        f_calc();
      });

      // ��젣
      $('dl.customTotal.cls_watch dd,deselect button').unbind('click');
      $('dl.customTotal.cls_watch dd,deselect button').click(function() {

        $('div.stepLast input[name=watch_serial]').val(0);
        $('div.stepLast input[name=watch_price]').val(0);

        $('input[name=onname_msg]').val('');
        $('input[name=onname_font_family]').val('');
        $('div.stepLast input[name=onname_price]').val(0);

        $('div.stepLast dl.customTotal.cls_watch').hide();
        $('div.stepLast div.customOnname').hide();

        if ($('div.stepLast input[name=strap_serial]').val() == 0) {
          $('div.stepLast div.otherChoice.not').show();
        }

        f_calc();
      });
    });

    $('img.cls_strap').click(f_onchoice_strap = function() {

      var j_serial = $(this).data('serial');
      var j_name = $(this).data('name');
      var j_src = $(this).attr('src');
      var j_price = $(this).data('price');
      var j_stock = $(this).data('stock');

      var j_src = $(this).attr('src');
      var j_src21 = j_src.replace(/no=1/g, 'no=21');
      var j_src22 = j_src.replace(/no=1/g, 'no=22');

      // 議고빀�대�吏�
      $('div.customThum div.strap img').attr('src', j_src22);
      $('div.customThum div.buckle div.photo img').attr('src', j_src21);
      $('div.customThum div.buckle div.photo img').attr('data-name', j_name);


      // 議고빀�대�吏� �섎떒
      $('div.customSelect li.cls_strap h3').html(j_name);
      $('div.customSelect li.cls_strap p.price').html(f_comma(j_price));

      // �덉젅�쒖떆
      if (j_stock == 0) {
        $('div.customSelect li.cls_strap span.visible').removeClass('on');
        $('div.customSelect li.cls_strap span.soldOut').addClass('on');
      } else {
        $('div.customSelect li.cls_strap span.visible').addClass('on');
        $('div.customSelect li.cls_strap span.soldOut').removeClass('on');
      }

      // �닿린
      $('div.customSelect li.cls_strap a.btnAddCart').unbind('click');
      $('div.customSelect li.cls_strap a.btnAddCart').click(function() {

        $('div.stepLast div.otherChoice.not').hide(); // "�꾩뿉�� '�닿린'瑜� �뚮윭 二쇰Ц�섏떎 �곹뭹�� 異붽��섏꽭��" 臾멸뎄 誘명몴�� 泥섎━
        $('div.stepLast dl.customTotal.cls_strap').show(); // ��移� �쒖떆

        $('div.stepLast input[name=strap_serial]').val(j_serial);
        $('div.stepLast input[name=strap_price]').val(j_price);

        // STEP2
        $('dl.customTotal.cls_strap dt span.choiceThum img').attr('src', j_src);
        $('dl.customTotal.cls_strap dt span.choiceName').html('Strap : ' + j_name);
        $('dl.customTotal.cls_strap dd.price').html(f_comma(j_price));

        f_calc();
      });

      // ��젣
      $('dl.customTotal.cls_strap dd,deselect button').unbind('click');
      $('dl.customTotal.cls_strap dd,deselect button').click(function() {

        $('div.stepLast input[name=strap_serial]').val(0);
        $('div.stepLast input[name=strap_price]').val(0);

        $('div.stepLast dl.customTotal.cls_strap').hide();

        if ($('div.stepLast input[name=watch_serial]').val() == 0) {
          $('div.stepLast div.otherChoice.not').show();
        }

        f_calc();
      });
    });

    // ��移�
    $('div.customPopList.Head select[name=watch_color]').change(function() {

      var j_watch_color = $(this).val();

      if (j_watch_color == '') {

        $('div.customPopList.Head ul.subList > li').show();
      } else {

        $('div.customPopList.Head ul.subList > li').hide();
        $('div.customPopList.Head ul.subList > li[data-watch_color=' + j_watch_color + ']').show();
      }
    });

    var $head_category_goods_code_3 = $('div.customPopList.Head select[name=category_goods_code_3]');
    var $head_category_goods_code_3_option_clone = $head_category_goods_code_3.find('option').clone(0);

    $('div.customPopList.Head select[name=category_goods_code_2]').change(function() {

      var j_category_goods_code_2 = $(this).val();
      if (j_category_goods_code_2 == '') {

        $('select[name=category_goods_code_3]').attr('disabled', true);
        $head_category_goods_code_3.val('');
      } else {

        $('select[name=category_goods_code_3]').attr('disabled', false);

        $head_category_goods_code_3.empty();
        $head_category_goods_code_3.val('');

        $head_category_goods_code_3_option_clone.each(function() {

          if ($(this).data('code_up') == j_category_goods_code_2 || $(this).data('code_up') == null) {

            $head_category_goods_code_3.append($(this));
          }
        });
      }

      if (j_category_goods_code_2 == '') {

        $('div.customPopList.Head h2').show();
        $('div.customPopList.Head ul.itemWrap').show();
      } else {

        $('div.customPopList.Head h2').hide();
        $('div.customPopList.Head h2[data-category_goods_code_2=' + j_category_goods_code_2 + ']').show();

        $('div.customPopList.Head ul.itemWrap').hide();
        $('div.customPopList.Head ul[data-category_goods_code_2=' + j_category_goods_code_2 + ']').show();
      }

      $('div.customPopList.Head li.mainList').show();
    }).change();

    $('div.customPopList.Head select[name=category_goods_code_3]').change(function() {

      var j_category_goods_code_3 = $(this).val();

      if (j_category_goods_code_3 == '') {

        $('div.customPopList.Head li.mainList').show();
      } else {

        $('div.customPopList.Head li.mainList').hide();
        $('div.customPopList.Head li.mainList[data-category_goods_code_3=' + j_category_goods_code_3 + ']').show();
      }
    });

    // �묒� �대�吏� �대┃ �� ���� �대�吏� 蹂�寃�
    $('div.customPopList.Head ul.subList img').click(function() {

      return;

      var j_src = $(this).attr('src');
      $(this).closest('li.mainList').find('> a > img').attr('src', j_src);

    });

    // �ㅽ듃�� �좏깮 > �뚮텇瑜� 諛뺤뒪 �대┃ ��
    $('div.customPopList.Head li.mainList').click(function() {

      var j_category_goods_code_2 = $(this).closest('ul').data('category_goods_code_2');
      var j_category_goods_code_3 = $(this).data('category_goods_code_3');

      $('div.customPopList.Head select[name=category_goods_code_2]').val(j_category_goods_code_2);
      $('div.customPopList.Head select[name=category_goods_code_3]').val(j_category_goods_code_3);

      $('div.customPopList.Head button.btnFixBack').click();
    });

    // ��移� �좏깮 > 而ㅼ뒪�� �ㅻ뜑濡� �뚯븘媛�湲�
    $('div.customPopList.Head button.btnFixBack').click(function() {

      var $watch_color = $('div.customPopList.Head select[name=watch_color]');
      var j_watch_color = $watch_color.val();
      var j_watch_color_name = $watch_color.find('option:selected').text();

      var $category_goods_code_2 = $('div.customPopList.Head select[name=category_goods_code_2]');
      var j_category_goods_code_2 = $category_goods_code_2.val();
      var j_category_goods_name_2 = $category_goods_code_2.find('option:selected').text();

      var $category_goods_code_3 = $('div.customPopList.Head select[name=category_goods_code_3]');
      var j_category_goods_code_3 = $category_goods_code_3.val();
      var j_category_goods_name_3 = $category_goods_code_3.find('option:selected').text();

      var $h3 = $('div.customCategory.Head h3');
      $h3.text('Watch Head > ' + j_category_goods_name_2 + ' > ' + j_category_goods_name_3);

      var $div_dst = $('div.itemListWrap.cls_watch');
      $div_dst.empty();

      var $ul_dst = $('<ul class="list" />');

      var $list_src = $('div.customPopList.Head ul.subList li');

      var j_cnt_slick = 0;
      $list_src.each(function() {

        if (j_watch_color != '') {
          if ($(this).data('watch_color') != j_watch_color) {
            return;
          }
        }

        if (j_category_goods_code_2 != '') {
          if ($(this).data('category_goods_code_2') != j_category_goods_code_2) {
            return;
          }
        }

        if (j_category_goods_code_3 != '') {
          if ($(this).data('category_goods_code_3') != j_category_goods_code_3) {
            return;
          }
        }

        j_cnt_slick++;

        var $li_clone = $(this).clone(0);
        $li_clone.attr('style', 'width:80px');
        $li_clone.find('img').addClass('cls_watch');
        $li_clone.find('img').addClass('cls_' + j_cnt_slick);
        $li_clone.find('img').wrap('<a href="#"></a>');
        $li_clone.find('img').click(f_onchoice_watch);

        $ul_dst.append($li_clone);

        $div_dst.append($ul_dst);
      });

      /*
        $ul_dst.slick({
          dots: false,
          infinite: true,
          speed: 700,
          slidesToShow:5,
          slidesToScroll: 5,
          centerMode: false,
          centerPadding : 0,
          arrows:false,
          autoplay: false,
          autoplaySpeed: 3000
        });
      */

      // 理쒖큹 �좏깮
      $ul_dst.find('img.cls_watch.cls_1').click();
      // $($ul_dst.find('img.cls_watch')[0]).click();
    });




    // �ㅽ듃��
    $('div.customPopList.Strap select[name=buckle_color]').change(function() {

      var j_buckle_color = $(this).val();

      if (j_buckle_color == '') {

        $('div.customPopList.Strap ul.subList > li').show();
      } else {

        $('div.customPopList.Strap ul.subList > li').hide();
        $('div.customPopList.Strap ul.subList > li[data-buckle_color=' + j_buckle_color + ']').show();
      }
    });

    var $strap_category_goods_code_3 = $('div.customPopList.Strap select[name=category_goods_code_3]');
    var $strap_category_goods_code_3_option_clone = $strap_category_goods_code_3.find('option').clone(0);

    $('div.customPopList.Strap select[name=category_goods_code_2]').change(function() {

      var j_category_goods_code_2 = $(this).val();
      if (j_category_goods_code_2 == '') {

        $('select[name=category_goods_code_3]').attr('disabled', true);
        $strap_category_goods_code_3.val('');
      } else {

        $('select[name=category_goods_code_3]').attr('disabled', false);

        $strap_category_goods_code_3.empty();
        $strap_category_goods_code_3.val('');

        $strap_category_goods_code_3_option_clone.each(function() {

          if ($(this).data('code_up') == j_category_goods_code_2 || $(this).data('code_up') == null) {

            $strap_category_goods_code_3.append($(this));
          }
        });
      }

      if (j_category_goods_code_2 == '') {

        $('div.customPopList.Strap h2').show();
        $('div.customPopList.Strap ul.itemWrap').show();
      } else {

        $('div.customPopList.Strap h2').hide();
        $('div.customPopList.Strap h2[data-category_goods_code_2=' + j_category_goods_code_2 + ']').show();

        $('div.customPopList.Strap ul.itemWrap').hide();
        $('div.customPopList.Strap ul[data-category_goods_code_2=' + j_category_goods_code_2 + ']').show();
      }

      $('div.customPopList.Strap li.mainList').show();
    }).change();

    $('div.customPopList.Strap select[name=category_goods_code_3]').change(function() {

      var j_category_goods_code_3 = $(this).val();

      if (j_category_goods_code_3 == '') {

        $('div.customPopList.Strap li.mainList').show();
      } else {

        $('div.customPopList.Strap li.mainList').hide();
        $('div.customPopList.Strap li.mainList[data-category_goods_code_3=' + j_category_goods_code_3 + ']').show();
      }
    });

    // �묒� �대�吏� �대┃ �� ���� �대�吏� 蹂�寃�
    $('div.customPopList.Strap ul.subList img').click(function() {

      return;

      var j_src = $(this).attr('src');
      $(this).closest('li.mainList').find('> a > img').attr('src', j_src);

    });

    // �ㅽ듃�� �좏깮 > �뚮텇瑜� 諛뺤뒪 �대┃ ��
    $('div.customPopList.Strap li.mainList').click(function() {

      var j_category_goods_code_2 = $(this).closest('ul').data('category_goods_code_2');
      var j_category_goods_code_3 = $(this).data('category_goods_code_3');

      $('div.customPopList.Strap select[name=category_goods_code_2]').val(j_category_goods_code_2);
      $('div.customPopList.Strap select[name=category_goods_code_3]').val(j_category_goods_code_3);

      $('div.customPopList.Strap button.btnFixBack').click();
    });

    // �ㅽ듃�� �좏깮 > 而ㅼ뒪�� �ㅻ뜑濡� �뚯븘媛�湲�
    var f_isclick_strap_fix_back = false;
    $('div.customPopList.Strap button.btnFixBack').click(function() {

      f_isclick_strap_fix_back = true;

      var $buckle_color = $('div.customPopList.Strap select[name=buckle_color]');
      var j_buckle_color = $buckle_color.val();
      var j_buckle_color_name = $buckle_color.find('option:selected').text();

      var $category_goods_code_2 = $('div.customPopList.Strap select[name=category_goods_code_2]');
      var j_category_goods_code_2 = $category_goods_code_2.val();
      var j_category_goods_name_2 = $category_goods_code_2.find('option:selected').text();

      var $category_goods_code_3 = $('div.customPopList.Strap select[name=category_goods_code_3]');
      var j_category_goods_code_3 = $category_goods_code_3.val();
      var j_category_goods_name_3 = $category_goods_code_3.find('option:selected').text();

      var $h3 = $('div.customCategory.Strap h3');
      $h3.text('Strap > ' + j_category_goods_name_2 + ' > ' + j_category_goods_name_3);

      var $div_dst = $('div.itemListWrap.cls_strap');
      $div_dst.empty();

      var $ul_dst = $('<ul class="list" />');

      var $list_src = $('div.customPopList.Strap ul.subList li');

      var j_cnt_slick = 0;
      $list_src.each(function() {

        if (j_buckle_color != '') {
          if ($(this).data('buckle_color') != j_buckle_color) {
            return;
          }
        }

        if (j_category_goods_code_2 != '') {
          if ($(this).data('category_goods_code_2') != j_category_goods_code_2) {
            return;
          }
        }

        if (j_category_goods_code_3 != '') {
          if ($(this).data('category_goods_code_3') != j_category_goods_code_3) {
            return;
          }
        }

        j_cnt_slick++;

        var $li_clone = $(this).clone(0);
        $li_clone.attr('style', 'width:80px');
        $li_clone.find('img').addClass('cls_strap');
        $li_clone.find('img').addClass('cls_' + j_cnt_slick);
        $li_clone.find('img').wrap('<a href="#"></a>');
        $li_clone.find('img').click(f_onchoice_strap);

        $ul_dst.append($li_clone);

        $div_dst.append($ul_dst);
      });

      /*
        $ul_dst.slick({
          dots: false,
          infinite: true,
          speed: 700,
          slidesToShow:5,
          slidesToScroll: 5,
          centerMode: false,
          centerPadding : 0,
          arrows:false,
          autoplay: false,
          autoplaySpeed: 3000
        });
      */

      // �대줎
      f_make_strap_clone();

      // 理쒖큹 �좏깮
      $ul_dst.find('img.cls_strap.cls_1').click();
      // $($ul_dst.find('img.cls_strap')[0]).click();
    });

    // �대줎
    var f_make_strap_clone = function() {

      $ul_strap_crone = $('div.itemListWrap.cls_strap ul').clone(1);
    }
    f_make_strap_clone();

    var f_apply_buckle_color = function() {

      var $div_strap = $('div.itemListWrap.cls_strap');
      $div_strap.empty();

      $div_strap.append($ul_strap_crone.clone(1));

      // console.log('j_strap_buckle_color : ' + j_strap_buckle_color);
      $div_strap.find('li').each(function() {

        if ($(this).data('buckle_color') != j_strap_buckle_color) {
          $(this).remove();
        }
      });

      $($div_strap.find('img.cls_strap')[0]).click(); // 泥섏쓬�곹뭹 �좏깮
    }

    // 踰꾪겢�됱긽 �좏깮
    $('div.buckle a[data-buckle_color]').click(function() {

      j_strap_buckle_color = $(this).data('buckle_color');
      f_apply_buckle_color();
    });

    // 2020.04.25 諛깆뾽
    $('div.buckle a[data-buckle_color__backup]').click(function() {

      var j_strap_buckle_color = $(this).data('buckle_color');

      if (f_isclick_strap_fix_back == false) {

        $div_strap.empty();
        $div_strap.append($ul_strap_crone.clone(1));

        $div_strap.find('li').each(function() {

          if ($(this).data('buckle_color') != j_buckle_color) {
            $(this).remove();
          }
        });

        /*
          $div_strap.find('ul').slick({
              dots: false,
              infinite: true,
              speed: 700,
              slidesToShow:5,
              slidesToScroll: 5,
              centerMode: false,
              centerPadding : 0,
              arrows:false,
              autoplay: false,
              autoplaySpeed: 3000
            });
        */
      } else {

        $('div.customPopList.Strap select[name=buckle_color]').val(j_buckle_color);
        $('div.customPopList.Strap select[name=buckle_color]').change();
        $('div.customPopList.Strap button.btnFixBack').click();

        var $img_strap = $('img.cls_strap');
        if ($img_strap.length > 0) {
          // $($img_strap[0]).click();

          var j_name = $('div.customView div.buckle div.photo img').attr('data-name');
          var j_name_next = j_name.substring(0, j_name.length - 2) + j_buckle_color;

          var $img_strap_same = $('img.cls_strap[data-name=' + j_name_next + ']');
          if ($img_strap_same.length == 0) {
            alert('�대┃�섏떊 踰꾪겢�� �됱긽�� �ㅽ듃�⑹� �놁뒿�덈떎.');
          } else {
            $($img_strap_same[0]).click();
          }
        }
      }
    });

    // 1) 踰꾪겢�됱긽
    $('div.buckle a[data-buckle_color=' + j_strap_buckle_color + ']').click();

    // 2) 理쒖큹 �좏깮
    if (j_head_goods_serial == '0') {

      var $img_watch = $('div.itemListWrap.cls_watch img.cls_watch');
      if ($img_watch.length > 0) {
        $($img_watch[0]).click();
      }
    } else {

      $('div.itemListWrap.cls_watch img.cls_watch[data-serial=' + j_head_goods_serial + ']').click();
    }

    if (j_strap_goods_serial == '0') {

      var $img_strap = $('div.itemListWrap.cls_strap img.cls_strap');
      if ($img_strap.length > 0) {
        $($img_strap[0]).click();
      }
    } else {

      $('div.itemListWrap.cls_strap img.cls_strap[data-serial=' + j_strap_goods_serial + ']').click();
    }

    // �ㅼ쓬 �④퀎濡� �섏뼱媛�湲�
    $('button.btnCustomOrder').click(function() {

      var j_watch_serial = $('div.stepLast input[name=watch_serial]').val();
      var j_strap_serial = $('div.stepLast input[name=strap_serial]').val();

      if (j_watch_serial == '0') {

        alert('Watch Head瑜� �댁븘二쇱꽭��.');
        return;
      }

      if (j_strap_serial == '0') {

        alert('Strap�� �댁븘二쇱꽭��.');
        return;
      }

      $.post(
        '/pc/cart/insert_custom_order.php', {
          watch_serial: j_watch_serial,
          strap_serial: j_strap_serial,
          onname_msg: $('input[name=onname_msg]').val(),
          onname_font_family: $('input[name=onname_font_family]').val(),
          strap_serial: j_strap_serial,
          qty: 1
        },
        function(arg_data, arg_status) {

          if (arg_data == 'error') {
            alert(arg_status);
            return false;
          }

          location.href = '/pc/views/customOrder_step2.php';
        });

    });

    // 媛곸씤 �쒕퉬��
    $('div.onNamePopup button.btnCancel').click(function() {

      // $('input[name=onname_msg]').val('');
      // $('input[name=onname_font_family]').val('');
    });

    $('div.onNamePopup button.next').click(function() {

      var j_onname_msg_t = $('input[name=onname_msg_t]').val();
      var j_onname_font_family_t = $('select[name=onname_font_family_t]').val();

      $('input[name=onname_msg]').val(j_onname_msg_t);
      $('input[name=onname_font_family]').val(j_onname_font_family_t);

      $('div.customOnname div.openpop.add').removeClass('on');
      $('div.customOnname div.openpop.modify').addClass('on');
      $('div.customOnname div.openpop.modify span').html('�좎껌硫붿꽭吏� : ' + j_onname_msg_t);

      $('button.btnCancel').click();

      f_calc();
    });

    // �섏젙
    $('div.customOnname button.btnModify').click(function() {

      var j_onname_msg = $('input[name=onname_msg]').val();
      var j_onname_font_family = $('input[name=onname_font_family]').val();

      $('input[name=onname_msg_t]').val(j_onname_msg);
      $('select[name=onname_font_family_t]').val(j_onname_font_family);
    });

    // ��젣
    $('div.customOnname button.btnDelete').click(function() {

      $('div.customOnname div.openpop.add').addClass('on');
      $('div.customOnname div.openpop.modify').removeClass('on');

      $('input[name=onname_msg]').val('');
      $('input[name=onname_font_family]').val('');

      $('input[name=onname_msg_t]').val('');
      $('select[name=onname_font_family_t]').val('');

      f_calc();
    });
  }

  /* > 而ㅼ뒪���ㅻ뜑 > STEP 2 */
  $body = $('body.cls_custom_order__step2');
  if ($body.length == 1) {

    var f_calc = function() {

      var j_price_tot = 0;
      $('dl.customTotal[data-serial]').each(function() {

        j_price_tot += Number($(this).data('price'));
      });
      $('div.customTotal.total p.price').html(f_comma(j_price_tot));
    }

    $('div.customCategory.Head a[data-category_goods_code_3]').click(function() {

      var j_category_goods_code_3 = $(this).data('category_goods_code_3');

      $.get(
        '/pc/custom_order/itemListOthers.php', {
          category_goods_code_3: j_category_goods_code_3
        },
        function(arg_data, arg_status) {

          if (arg_data == 'error') {
            alert(arg_status);
            return;
          }

          var $html = $(arg_data);

          $('div.customCategory.Head div.itemListWrap').html($html);

          //
          var j_category_goods_name_3;
          var j_serial;
          var j_name;
          var j_price;

          var j_src;
          var j_src31;
          var j_src32;

          $html.find('img').click(function() {

            j_category_goods_name_3 = $(this).data('category_goods_name_3');
            j_serial = $(this).data('serial');
            j_name = $(this).data('name');
            j_price = $(this).data('price');

            j_src = $(this).attr('src');
            j_src31 = $(this).data('src31');
            j_src32 = $(this).data('src32');

            if (j_src31 == '') {

              $('div.othersView').removeClass('on');

              $('div.othersItem').addClass('on');
              $('div.othersItem img').attr('src', j_src);
            } else {

              $('div.othersView').addClass('on');
              $('div.othersView div.padTop img').attr('src', j_src31);
              $('div.othersView div.padBottom img').attr('src', j_src32);

              $('div.othersItem').removeClass('on');
            }

            $('div.customSelect h2').html(j_category_goods_name_3);
            $('div.customSelect h3').html(j_name);
            $('div.customSelect p.price').html(f_comma(j_price));

            //
            $.get(
              '/pc/custom_order/itemDetail.php', {
                serial: j_serial
              },
              function(arg_data, arg_status) {

                if (arg_data == 'error') {
                  alert(arg_status);
                  return;
                }

                $('div.customCategory.Details div.itemListWrap').html(arg_data);
              });
          });

          // �닿린
          $('div.customSelect a.btnAddCart').unbind('click');
          $('div.customSelect a.btnAddCart').click(function() {

            if ($('dl.customTotal[data-serial="' + j_serial + '"]').length > 0) { // �대� �숈씪�� �곹뭹�� �닿릿 寃쎌슦
              return;
            }

            var j_html = '';

            j_html += '<dl class="customTotal" data-serial="' + j_serial + '" data-price="' + j_price + '">';
            j_html += '	<dt>';
            j_html += '		<span class="choiceThum">';
            j_html += '			<img src="' + j_src + '" alt="items">';
            j_html += '		</span>';
            j_html += '		<span class="choiceName">' + j_name + ' x 1媛�</span>';
            j_html += '	</dt>';
            j_html += '	<dd class="bend"></dd>';
            j_html += '	<dd class="price">' + f_comma(j_price) + '</dd>';
            j_html += '	<dd class="soldOut">�덉젅</dd>';
            j_html += '	<dd class="deselect on">';
            j_html += '		<button type="button">��젣</button>';
            j_html += '	</dd>';
            j_html += '</dl>';

            var $html = $(j_html);

            $html.find('button').click(function() {

              $(this).closest('dl.customTotal').remove();
              f_calc();
            });

            $('div.otherChoice.on').append($html);
            f_calc();
          });

          $($html.find('img')[0]).click();

        });
    });

    $($('div.customCategory.Head a[data-category_goods_code_3]')[0]).click();

    // �댁쟾�④퀎濡� �뚯븘媛�湲�
    $('button.btnCustomOrder.prev').click(function() {

      location.href = './customOrder_step1.php';
    });

    // �� 議고빀�쇰줈 二쇰Ц�섍린
    $('button.btnCustomOrder.next').click(function() {

      var $dl = $('dl.customTotal[data-serial]');
      var j_cnt = 0;

      $dl.each(function() {

        j_cnt++;

        var j_serial = $(this).data('serial');
        var j_msg = $(this).find('input[name=msg]').val();
        var j_font_family = $(this).find('input[name=font_family]').val();

        $.post(
          '/pc/cart/insert.php', {
            serial: j_serial,
            qty: 1,
            msg: j_msg,
            font_family: j_font_family
          },
          function(arg_data, arg_status) {

            if (arg_data == 'error') {
              alert(arg_status);
              return false;
            }

            if (j_cnt >= $dl.length) {

              location.href = '/pc/views/mypageCart.php';
              return;

              if (g_no_member == '') {
                location.href = '/pc/views/mypageCart_noMember.php';
              } else {
                location.href = '/pc/views/mypageCart.php';
              }
            }
          });
      });
    });
  }

});
