
var ie = document.all ? 1 : 0
var ns = document.layers ? 1 : 0

if(ns){doc = "document."; sty = ""}
if(ie){doc = "document.all."; sty = ".style"}



var initialize = 0
var Ex, Ey, topColor, subColor, ContentInfo


if(ie){
Ex = "event.x"
Ey = "event.y"

topColor = "#808080"
subColor = "#C0C0C0"
}

if(ns){
Ex = "e.pageX"
Ey = "e.pageY"
window.captureEvents(Event.MOUSEMOVE)
window.onmousemove=overhere

topColor = "#808080"
subColor = "#C0C0C0"
}



function MoveToolTip(layerName, FromTop, FromLeft, e){
if(ie){eval(doc + layerName + sty + ".top = "  + (eval(FromTop) + document.body.scrollTop + 3))}
if(ns){eval(doc + layerName + sty + ".top = "  +  eval(FromTop) + 230)}
eval(doc + layerName + sty + ".left = " + (eval(FromLeft) - 115))
}


function ReplaceContent(layerName){

if(ie){document.all[layerName].innerHTML = ContentInfo}


if(ns){

with(document.layers[layerName].document) 
{ 
   open(); 
   write(ContentInfo); 
   close(); 
}

}


}



function Activate(){initialize=1}
function deActivate(){initialize=0}


function overhere(e){
if(initialize){

MoveToolTip("ToolTip", Ey, Ex, e)
eval(doc + "ToolTip" + sty + ".visibility = 'visible'")
}

else{
MoveToolTip("ToolTip", 0, 0)
eval(doc + "ToolTip" + sty + ".visibility = 'hidden'")
}


}

function EnterContent(layerName, TTitle, TContent){

if (TContent == 'world'){
ContentInfo = '<table width="100%" border="0" cellspacing="0" cellpadding="0"><tr><td><img src="img/world2.gif"></td></tr></table>'; }


ReplaceContent(layerName)

}
