var thg=document.getElementById("th1");
window.onscroll=function(){
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    thg.innerHTML="<b><u>All this looking back is a pain in your neck</u></b>";
    setTimeout(function(){
      thg.innerHTML="<b><u>\"One Life no Regeret\"</u></b>";
    },10000);
  }};
