
/*The tank_Level function can be called in the consol when inspecting 
the page. then depending on analogInput1 value the tanks outine color
will change and the waterlevel will adjust accordingly. This function
was made to try and show an example of what could be done if we wanted
the animation to adjust to a real input that measured the tanks water
level.*/

let analogInput1 = 100; //max fill is 200 lowest range is 0
function tank_Level(){
    document.getElementById("fill_level1").setAttribute("y", 200-analogInput1);
    if(analogInput1 > 100){
        //green
        document.getElementById("p_61").setAttribute("style", "stroke:green");
    }
    else if(analogInput1 <= 100 & analogInput1 > 50){
        //yellow
        alert("Tank is less than half full");
        document.getElementById("p_61").setAttribute("style", "stroke:yellow");

    }
    else{
        //red
        alert('Main Tank is low on Water fill immediatly');
        document.getElementById("p_61").setAttribute("style", "stroke:red");
    }
}

/*This function isn't really for use because the animation wasn't built for this. */
let analogInput2 = 100; //max fill is 200 lowest range is 0
function tank2_Level(){
    if(analogInput2 > 100){
        //green
        document.getElementById("p_71").setAttribute("style", "stroke:green");
    }
    else if(analogInput2 <= 100){
        //yellow
        alert("Backup tank2 calling for water half way mark reached");
        document.getElementById("p_71").setAttribute("style", "stroke:yellow");

    }
}

/*This triggers the animation when the page is loaded in the beginning*/
function tankStart(){
    setTimeout(function(){
        document.getElementById("water6").setAttribute("style", "stroke:rgb(36, 164, 249)");
        document.getElementById('water6').setAttribute("class", "draw");
    }, 2000);
}tankStart();

/*This function triggers the animation for the first water pressure gauge*/
//var i = true;
function water_psi(){
    if(localStorage.getItem('i') == "true"){
        //i=false;
        localStorage.setItem('i', "false");
        $( ".cls-10" ).switchClass( "cls-10", "pressure2", 0, "easeInOutQuad");
        $( ".cls-11" ).switchClass( "cls-11", "pressure3", 0, "easeInOutQuad");
        $( ".c71" ).switchClass( "c71", "pressure", 0, "easeInOutQuad");
    }
    else{
        //i=true;
        localStorage.setItem('i', "true");
        $( ".pressure" ).switchClass( "pressure", "c71", 0, "easeInOutQuad");
        $( ".pressure2" ).switchClass( "pressure2", "cls-10", 0, "easeInOutQuad");
        $( ".pressure3" ).switchClass( "pressure3", "cls-11", 0, "easeInOutQuad");
    }
}


/*this function triggers the animation for the second water pressure gauge*/
//var j = true;
function water_psi2(){
    if(localStorage.getItem('j') == "true"){
        //j=false;
        localStorage.setItem("j", "false");
        $( ".cls-10_2" ).switchClass( "cls-10_2", "pressure5", 0, "easeInOutQuad");
        $( ".cls-11_2" ).switchClass( "cls-11_2", "pressure6", 0, "easeInOutQuad");
        $( ".c721" ).switchClass( "c721", "pressure4", 0, "easeInOutQuad");
    }
    else{
        //j=true;
        
        $( ".pressure4" ).switchClass( "pressure4", "c721", 0, "easeInOutQuad");
        $( ".pressure5" ).switchClass( "pressure5", "cls-10_2", 0, "easeInOutQuad");
        $( ".pressure6" ).switchClass( "pressure6", "cls-11_2", 0, "easeInOutQuad");
        localStorage.setItem("j", "true");
    }
}

/*Triggers the animation for round pump 1 turning on*/
/*r just means round pump */
var k = true;
function rPump(){
    if(k && s1==false){
        k = false;
        document.getElementById("c_21").setAttribute("style", "fill:green");
        document.getElementById("water2").setAttribute("style", "stroke:rgb(36, 164, 249)");
        document.getElementById('water2').setAttribute("class", "draw");
        window.pipes = setTimeout(function(){
            document.getElementById("water3").setAttribute("style", "stroke:rgb(36, 164, 249)");
            document.getElementById('water3').setAttribute("class", "draw");
        }, 500);
        window.tank2 = setTimeout(function(){
            document.getElementById("wavepath2").setAttribute("style", "fill:rgb(36, 164, 249)");
            document.getElementById("fill2").setAttribute("class", "fill"); 
        }, 1000);
    }
    else if(k==false){
        k = true;
        clearTimeout(window.pipes);
        clearTimeout(window.tank2);
        document.getElementById("c_21").setAttribute("style", "fill:red");
        document.getElementById("water2").setAttribute("style", "stroke:#f1f1f1");
        document.getElementById('water2').setAttribute("class", "water2");
        document.getElementById("water3").setAttribute("style", "stroke:#f1f1f1");
        document.getElementById('water3').setAttribute("class", "water3");
        /*If you change the fill bellow from none to a color like blue you could see the tank unfill itself
        However the pipes don't do anything similar so I set the fill to none like the others*/
        document.getElementById("wavepath2").setAttribute("style", "fill:none");
        document.getElementById("fill2").setAttribute("class", "other");
        switch2();
    }
}

/*Triggers the animation for round pump 2 turning on*/
var x = true;
function rPump2(){
    if(x){
        x = false;
        document.getElementById("c_221").setAttribute("style", "fill:green");
        document.getElementById("water7").setAttribute("style", "stroke:rgb(36, 164, 249)");
        document.getElementById('water7').setAttribute("class", "draw");
        window.pipes2 = setTimeout(function(){
            document.getElementById("water8").setAttribute("style", "stroke:rgb(36, 164, 249)");
            document.getElementById('water8').setAttribute("class", "draw");
        }, 500);//Delay 2 seconds
        window.tank4 = setTimeout(function(){
            document.getElementById("wavepath5").setAttribute("style", "fill:rgb(36, 164, 249)");
            document.getElementById("fill5").setAttribute("class", "fill");
        }, 1400);//Delay 2 seconds
    }
    else{
        x = true;
        clearTimeout(window.pipes2);
        clearTimeout(window.tank4);
        document.getElementById("c_221").setAttribute("style", "fill:red");
        document.getElementById("water7").setAttribute("style", "stroke:#f1f1f1");
        document.getElementById('water7').setAttribute("class", "water7");
        document.getElementById("water8").setAttribute("style", "stroke:#f1f1f1");
        document.getElementById('water8').setAttribute("class", "water8");
        /*If you change the fill bellow from none to a color like blue you could see the tank unfill itself
        However the pipes don't do anything similar so I set the fill to none like the others*/
        document.getElementById("wavepath5").setAttribute("style", "fill:none");
        document.getElementById("fill5").setAttribute("class", "other");
        switch3();
    }
}

/*Triggers the animation for tall pump 1 turning on*/
/*t just meant tall pump */
var y = true;
function tPump(){
    if(y && s2==false){
        y = false;
        document.getElementById("water5").setAttribute("style", "stroke:rgb(36, 164, 249)");
        document.getElementById('water5').setAttribute("class", "draw");
        document.getElementById("r_55").setAttribute("style", "stroke:green");
        document.getElementById("r_56").setAttribute("style", "stroke:green");
        document.getElementById("r_57").setAttribute("style", "stroke:green");
        window.tank3 = setTimeout(function(){
            document.getElementById("wavepath3").setAttribute("style", "fill:rgb(36, 164, 249)");
            document.getElementById("fill3").setAttribute("class", "fill");
        }, 500);//Delay 2 seconds
    }
    else{
        y = true;
        clearTimeout(window.tank3);
        document.getElementById("water5").setAttribute("style", "stroke:#f1f1f1");
        document.getElementById('water5').setAttribute("class", "water5");
        document.getElementById("r_55").setAttribute("style", "stroke:red");
        document.getElementById("r_56").setAttribute("style", "stroke:red");
        document.getElementById("r_57").setAttribute("style", "stroke:red");
        /*If you change the fill bellow from none to a color like blue you could see the tank unfill itself
        However the pipes don't do anything similar so I set the fill to none like the others*/
        document.getElementById("wavepath3").setAttribute("style", "fill:none");
        document.getElementById("fill3").setAttribute("class", "other");
    }
}

/*Triggers the animation for tall pump 2 turning on*/
var z = true;
function tPump2(){
    if(z && s3==false){
        z = false;
        document.getElementById("water10").setAttribute("style", "stroke:rgb(36, 164, 249)");
        document.getElementById('water10').setAttribute("class", "draw");
        document.getElementById("r_525").setAttribute("style", "stroke:green");
        document.getElementById("r_526").setAttribute("style", "stroke:green");
        document.getElementById("r_527").setAttribute("style", "stroke:green");
        window.tank5 = setTimeout(function(){
            document.getElementById("wavepath4").setAttribute("style", "fill:rgb(36, 164, 249)");
            document.getElementById("fill4").setAttribute("class", "fill");
        }, 500);//Delay 2 seconds
    }
    else{
        z = true;
        clearTimeout(window.tank5);
        document.getElementById("water10").setAttribute("style", "stroke:#f1f1f1");
        document.getElementById('water10').setAttribute("class", "water10");
        document.getElementById("r_525").setAttribute("style", "stroke:red");
        document.getElementById("r_526").setAttribute("style", "stroke:red");
        document.getElementById("r_527").setAttribute("style", "stroke:red");
        /*If you change the fill bellow from none to a color like blue you could see the tank unfill itself
        However the pipes don't do anything similar so I set the fill to none like the others*/
        document.getElementById("wavepath4").setAttribute("style", "fill:none");
        document.getElementById("fill4").setAttribute("class", "other");
    }
}

/*Triggers the animation for valve 1 turning on*/
var s1 = true;
function switch1(){
    if(s1){
        s1 = false;
        document.querySelectorAll('.cls-6, .cls-7').forEach(x=>{
            x.style.stroke = "green";
            document.getElementById("valve1").setAttribute("class", "rotate");
           })
           document.getElementById("water1").setAttribute("style", "stroke:rgb(36, 164, 249)");
           document.getElementById('water1').setAttribute("class", "draw");
    }
    else{
        s1 = true;
        document.querySelectorAll('.cls-6, .cls-7').forEach(x=>{
            x.style.stroke = "red";
           })
           document.getElementById("water1").setAttribute("style", "stroke:#f1f1f1");
           document.getElementById('water1').setAttribute("class", "water1");
           document.getElementById("valve1").setAttribute("class", "rv_rotate");
        rPump();
    }
}

/*Triggers the animation for valve 2 turning on*/
var s2 = true;
function switch2(){
    if(s2 && k==false){
        s2 = false;
        document.querySelectorAll('.cls-15, .cls-16, #po91').forEach(x=>{
            x.style.stroke = "green";
            document.getElementById("valve2").setAttribute("class", "rotate2");
           })
        document.getElementById("water4").setAttribute("style", "stroke:rgb(36, 164, 249)");
        document.getElementById('water4').setAttribute("class", "draw");
    }
    else{
        s2 = true;
        document.querySelectorAll('.cls-15, .cls-16, #po91').forEach(x=>{
            x.style.stroke = "red";
           })
        document.getElementById("water4").setAttribute("style", "stroke:#f1f1f1");
        document.getElementById('water4').setAttribute("class", "water4");
        document.getElementById("valve2").setAttribute("class", "rv_rotate2");
        tPump();
    }
}

/*Triggers the animation for valve 3 turning on*/
var s3 = true;
function switch3(){
    if(s3 && x==false){
        s3 = false;
        document.querySelectorAll('.cls-15_2, .cls-16_2, #po921').forEach(x=>{
            x.style.stroke = "green";
            document.getElementById("valve2_2").setAttribute("class", "rotate2_2");
           })
        document.getElementById("water9").setAttribute("style", "stroke:rgb(36, 164, 249)");
        document.getElementById('water9').setAttribute("class", "draw");
    }
    else{
        s3 = true;
        document.querySelectorAll('.cls-15_2, .cls-16_2, #po921').forEach(x=>{
            x.style.stroke = "red";
            document.getElementById("valve2_2").setAttribute("class", "rv_rotate2_2");
           })
        document.getElementById("water9").setAttribute("style", "stroke:#f1f1f1");
        document.getElementById('water9').setAttribute("class", "water9");
        tPump2();
    }
}

//I want to try and add elements to my svg with JS like in the following website:
//https://stackoverflow.com/questions/16488884/add-svg-element-to-existing-svg-using-dom
