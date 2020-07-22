'use strict'

function changeFrame(num){
  document.getElementById('Frame').src="./image/Clock/Frame/"+num+".png";
  document.getElementById('FrameCart').value=num;
}
function changeHead(num){
  document.getElementById('Head').src="./image/Clock/Head/"+num+".png";
  document.getElementById('HeadCart').value=num;
}
function changeStrap(num){
  document.getElementById('Strap').src="./image/Clock/Strap/"+num+"_2.png";
  document.getElementById('StrapCart').value=num;
}
function changeArrow(num){
  document.getElementById('Arrow').src="./image/Clock/Arrow/"+num+".png";
  document.getElementById('ArrowCart').value=num;
}

function carting(frame, head, strap, arrow){
  console.log(frame,head,strap,arrow);
  var oScript = document.createElement("script");
    oScript.type = "text/javascript";
    oScript.charset = "utf-8";
    oScript.src = "https://code.jquery.com/jquery-3.5.1.slim.min.js";
    document.getElementsByTagName("head")[0].appendChild(oScript);
  $.post('cartSave.php', {frame: frame, head: head, strap: strap, arrow: arrow});

}
