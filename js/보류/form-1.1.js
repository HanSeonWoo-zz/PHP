/*
  媛쒕컻�� : 2017-02-24
*/

//
m_json_msg_prefix = {};
m_json_msg_prefix.title		= '�쒕ぉ';
m_json_msg_prefix.name 		= '�대쫫';
m_json_msg_prefix.id 		= '�꾩씠��';
m_json_msg_prefix.password	= '鍮꾨�踰덊샇';
m_json_msg_prefix.password2	= '鍮꾨�踰덊샇 �뺤씤';
m_json_msg_prefix.content 	= '�댁슜';
m_json_msg_prefix.delegate 	= '���쒖옄';
m_json_msg_prefix.company_name 	= '�뚯궗紐�';
m_json_msg_prefix.no_auth 	= '�몄쬆踰덊샇';

//
jQuery.fn.check_each = function() {

  var j_type = $(this).attr('type');
  var j_name = $(this).attr('name');
  var j_val = '';
  var j_msg = $(this).data('msg');

  if(j_msg == null || j_msg == '') {

    j_msg = $(this).attr('placeholder');
  }

  // 誘몄엯�� �� 寃쎄퀬 臾멸뎄 �앹꽦
  if(j_msg == null || j_msg == '') {

    var j_msg_prefix = '';

    j_msg_prefix = $(this).parent().prev('th').text();
    if(j_msg_prefix == '') {
      j_msg_prefix = m_json_msg_prefix[j_name];
    }

    switch(j_type) {

      case 'radio':
      case 'checkbox':
        j_msg = j_msg_prefix + '��(瑜�) �좏깮�섏꽭��.';
        break;
      default:
        j_msg = j_msg_prefix + '��(瑜�) �낅젰�섏꽭��.';
    }
  }

  switch(j_type) {

    case 'radio':
    case 'checkbox':
      if(! $(this).is(':checked')) {

        alert(j_msg);
        return false;
      }
      break;

    default:
      j_val = $(this).val().replace(/\s*/g, '');

      if(j_val == '') {

        alert(j_msg);
        $(this).focus();
        return false;
      }

      var j_compare = $(this).data('compare');
      if(j_compare != null) {

        if(this.form[j_compare] != null) {

          if(this.form[j_compare].value.replace(/\s*/g, '') == '') {

            alert(m_json_msg_prefix[j_compare] + ' �낅젰�섏꽭��.');
            this.form[j_compare].focus();
            return false;
          }

          if(this.form[j_compare].value != $(this).val()) {

            alert($(this).data('compare_msg').replace(/\\n/g, '\n'));
            this.form[j_compare].focus();
            return false;
          }
        }
      }
  }

  return true;
}

//
jQuery.fn.check = function(arg_pattern) {

  if($(this).prop('tagName') != 'FORM')  return false;

  var j_pattern = '*[data-required]'

  if(arg_pattern != null) j_pattern = arg_pattern;

  var $items = $(this).find(j_pattern);
  if($items.length == 0) {

    return true;
  }

  var j_result = true;
  $items.each(function () {

    if(j_result == false) { return; }
    j_result = jQuery.fn.check_each.apply(this);
  });

  return j_result;
}
