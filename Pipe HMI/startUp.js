/*This JS file is for the startup screen. This is needed because of the localStorage variables.
  for example when you switch inbetween pages it will retain the correct animations across each page.
  If you run the project and inspect the page you can see all the local Storage variables 
  available and working under Application then Local Storage.
  
  If you want to just see what the difference is you can delete in index.html:

  <script src="../startUp.js"></script> 

  Then save and reload the project and try animating either Water PSI and go to their 
  pressure Guage Page then back to the main screen. You will notice the localStorage
  variables no longer work correctly. 
  */

if(localStorage.getItem('j') == "false"){
    //j=false;
    $( ".cls-10_2" ).switchClass( "cls-10_2", "pressure5", 0, "easeInOutQuad");
    $( ".cls-11_2" ).switchClass( "cls-11_2", "pressure6", 0, "easeInOutQuad");
    $( ".c721" ).switchClass( "c721", "pressure4", 0, "easeInOutQuad");
}
else{
    //j=true;
    $( ".pressure4" ).switchClass( "pressure4", "c721", 0, "easeInOutQuad");
    $( ".pressure5" ).switchClass( "pressure5", "cls-10_2", 0, "easeInOutQuad");
    $( ".pressure6" ).switchClass( "pressure6", "cls-11_2", 0, "easeInOutQuad");
}

if(localStorage.getItem('i') == "false"){
    //i=false;
    $( ".cls-10" ).switchClass( "cls-10", "pressure2", 0, "easeInOutQuad");
    $( ".cls-11" ).switchClass( "cls-11", "pressure3", 0, "easeInOutQuad");
    $( ".c71" ).switchClass( "c71", "pressure", 0, "easeInOutQuad");
}
else{
    //i=true;
    $( ".pressure" ).switchClass( "pressure", "c71", 0, "easeInOutQuad");
    $( ".pressure2" ).switchClass( "pressure2", "cls-10", 0, "easeInOutQuad");
    $( ".pressure3" ).switchClass( "pressure3", "cls-11", 0, "easeInOutQuad");
}