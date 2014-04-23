var doge = document.getElementById("doge");
var dogev = false;
doge.onclick = function()
{
  console.log("click");
  dogev = !dogev;
  if(dogev)
  {
    var fileref=document.createElement("link");
    fileref.setAttribute("rel", "stylesheet");
    fileref.setAttribute("type", "text/css");
    fileref.setAttribute("href", "./css/doge.css");
    fileref.setAttribute("id","dogetag");
    document.querySelector("head").appendChild(fileref);
  }
  else
  {
    var dogetag = document.getElementById("dogetag");
    dogetag.parentNode.removeChild(dogetag);
  }
};
