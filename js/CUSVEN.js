'use strict'

var noticeCookie = getCookie("name");  // 쿠기 가져오기
if (noticeCookie != "value"){
    // 팝업창 띄우기
    window.open('PopUp.html', 'width=500, height=650, status=no, scrollbars= 0, toolbar=0, menubar=no');
}

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


/**
 *
 * Created by solidpple on 11/7/16.
 */
requirejs([ "common"], function () {
    requirejs([ "loglevel", "js.cookie" ], function (log, Cookies) {
        'use strict';

        var openWindow = function (cookieName) {
            var cookie= getCookie(cookieName);
            var popup = $("div#popup");
             if (cookie == undefined) {
                 popup.css("display", "block");
             }
        };

        var closeWindow = function (cookieName) {
            setCookie(cookieName, 1); // 하루동안
            // setCookieAt00(cookieName, 1); // 오늘만
            var popup = $("div#popup");
            popup.css("display", "none");
            self.close();
        };

        var getCookie = function (cookieName) {
            return Cookies.get(cookieName);
        };

        var setCookie = function (cookieName, expires) {
            // var inFifteenMinutes = new Date(new Date().getTime() + 1 * 60 * 1000);
            Cookies.set(cookieName, 'bar', {
                expires: expires // 하루
                // expires: (1 / 24 / 2 / 30 /2) // 30초
            });
        };

        var setCookieAt00 = function(cookieName, expires) {
            var todayDate = new Date();
            todayDate = new Date(parseInt(todayDate.getTime() / 86400000) * 86400000 + 54000000);
            if ( todayDate > new Date() ) expires -= 1;
            todayDate.setDate( todayDate.getDate() + expires);
            Cookies.set(cookieName, 'bar', {
                expires: todayDate.toGTMString()
            });
        };


        var bindEvent = function() {
            var closeBtnRef = $("div#popup").find(".close-button");
            closeBtnRef.click(function() {
                closeWindow();
            });
        };

        var init = function () {
            bindEvent();
            openWindow('popup=');
        };
        init();
    });
});
