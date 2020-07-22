'use strict'

function changeFrame(num){
  document.getElementById('Frame').src="./image/Clock/Frame/"+num+".png";
  console.log("come?1");
}
function changeHead(num){
  document.getElementById('Head').src="./image/Clock/Head/"+num+".png";
  console.log("come?2");
}
function changeStrap(num){
  document.getElementById('Strap').src="./image/Clock/Strap/"+num+"_2.png";
  console.log("come?3");
}
function changeArrow(num){
  document.getElementById('Arrow').src="./image/Clock/Arrow/"+num+".png";
  console.log("come?4");
}



// var noticeCookie = getCookie("name");  // 쿠기 가져오기
// if (noticeCookie != "value"){
//     // 팝업창 띄우기
//     window.open('test.html', '_blank', 'width=500px, height=650px, status=no, scrollbars= 0, toolbar=0, menubar=no');
// }
//
function setCookie(name, value)
{
    var todayDate = new Date();
    todayDate.setHours( 24 );
    document.cookie = name+ "=" + escape( value ) + "; path=/; expires=" +   todayDate.toGMTString() + ";";
}

function closeWin()
{
    if ($("#option").is(":checked") )
    {
        setCookie("name", "value");
        window.close();
    }
}

function getCookie(name) {
    var Found = false
    var start, end
    var i = 0

    while(i <= document.cookie.length) {
        start = i
        end = start + name.length

        if(document.cookie.substring(start, end) == name) {
          Found = true
          break
        }
        i++
    }

    if(Found == true) {
    start = end + 1
    end = document.cookie.indexOf(";", start)
      if(end < start)
        end = document.cookie.length
    return document.cookie.substring(start, end)
    }
    return ""
}
