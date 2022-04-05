 function main(value){
     document.getElementById("visor").innerHTML+=value;
 }
function equal(){
  var eq=document.getElementById("visor").innerHTML;
  try{
  document.getElementById("visor").innerHTML=eval(eq)
}
catch(e){
    document.getElementById("visor")="Sintaxy error"}
}
function sub(){
    var txt=document.getElementById("visor").innerHTML;
    
}
