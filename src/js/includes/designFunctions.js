function styleInit(){
    document.getElementById("ma_klicker").addEventListener('mousedown', milkKlickDown_style);
    document.getElementById("ma_klicker").addEventListener('mouseup', milkKlickUp_style);
    document.getElementById("ma_klicker").addEventListener('click', milkKlickVisualFeedback);
}

function milkKlickDown_style(){
    document.getElementById("ma_klick").classList.add("klickDown");

}
function milkKlickUp_style(){
    document.getElementById("ma_klick").classList.remove("klickDown");
}

function milkKlickVisualFeedback(e){
    let klickX = e.clientX;
    let klickY = e.clientY;


    let klickEffectElements = document.getElementById("ma_klicksEffect").getElementsByClassName("klickEffect");
    if(klickEffectElements.length >= 20){
        for (let i = 0; i < 20; i++) {
            if (window.getComputedStyle(klickEffectElements[i]).opacity === "0") {
                klickEffectElements[i].remove();
            }
        }
    }

    let klickEffectChild = document.createElement("span")
    klickEffectChild.classList.add("klickEffect");
    klickEffectChild.style.setProperty("--top",`${klickY-20}px`);
    klickEffectChild.style.setProperty("--left", `${klickX}px`);
    klickEffectChild.innerText = "+" + clickStrength.toString();
    document.getElementById("ma_klicksEffect").appendChild(klickEffectChild);
}