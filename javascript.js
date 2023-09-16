function clk(val){
    document.getElementById("screen").value=document.getElementById("screen").value+val;
    
}
function clrdisp(){
    document.getElementById("screen").value=" "
}
var backspace = function() {
    
    var back  = document.getElementById("screen").value;
    document.getElementById("screen").value=back.substring(0,back.length -1);
  
  }
function equal(){
    var text=document.getElementById("screen").value;
    var result=eval(text);
    document.getElementById("screen").value=result;   
}
