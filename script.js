var num = 4;
      
function generateNumber(){
    
    var gn = Number( document.getElementById("userInput").value);
    console.log(gn);
    console.log(num);
    
    if(gn === num){
        alert("You have guessed it correctly");
    }
    else{
        alert("Try again next time");
    }
}