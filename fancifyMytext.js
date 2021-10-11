function hello() {   
    alert("Hello, world!"); 
 } 

 function changeIdProp(){
     hello();
    document.getElementById("textId").style.backgroundColor = "red";
    document.getElementById("textId").style.fontSize = "24pt";    
}
// var textid = document.getElementById("textId")
function fancy(){
    document.getElementById("textId")
    if(radioId.checked){
        textId.style.fontWeight = "bold";
        textId.style.fontSize = "12pt";
        textId.style.fontColor = "blue";
        textId.style.textDecoration = "underline blink";
    }else{
        textId.style.fontWeight = "normal";
        textId.style.fontColor = "black";
        textId.style.textDecoration = "none";
    }
}

function moo(){
   

    textId.style.textTransform="uppercase"
    let str=textId.value.split(".");
    let str2=str.join("-Moo");
    textId.value=str2;
    
}