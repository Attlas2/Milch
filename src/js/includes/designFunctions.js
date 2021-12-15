function styleInit(){
    document.getElementById("ma_klicker").addEventListener('mousedown', milkKlickDown_style);
    document.getElementById("ma_klicker").addEventListener('mouseup', milkKlickUp_style);

}

function milkKlickDown_style(){
    document.getElementById("ma_klick").classList.add("klickDown");

}
function milkKlickUp_style(){
    document.getElementById("ma_klick").classList.remove("klickDown");
}