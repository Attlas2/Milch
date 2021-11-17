function addMilk() {
    milk++;
    document.getElementById("milkcounter").innerHTML =milk+" Milch"
    if(milk>1000){
        document.getElementById("milkcounter").innerHTML=Math.round(milk/100)/10+"K Milch"
    }
}
function addBauer(){
    if (milk>10){
        milk-=10;
        setInterval(addMilk,1000);
        bauer++;
        document.getElementById("bauerncounter").innerHTML=bauer+" Bauern"
    }


}


