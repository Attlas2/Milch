function addMilk(x) {
    milk+=x;
    document.getElementById("milkcounter").innerHTML =Math.round(milk*10)/10+" Milch"
    if(milk>1000){
        document.getElementById("milkcounter").innerHTML=Math.round(milk/100)/10+"K Milch"
    }
    checkAllAchieve();
}

function checkAllAchieve(){
    let entries = Object.entries(achievments);
    for(let i=0;i < entries.length;i++){
      console.log(eval('achievments.' + entries[i][0] + ".achieved"));
    }
}



