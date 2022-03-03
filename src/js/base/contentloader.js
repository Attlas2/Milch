async function loadContents(){
    let content = await Promise.all([loadContent("../html/submenus/shop.html"),loadContent("../html/submenus/upgrades.html"),loadContent("../html/submenus/menu.html")]);
    document.getElementById("s_shop").innerHTML = content[0];
    document.getElementById("s_upgrades").innerHTML = content[1];
    document.getElementById("s_menu").innerHTML = content[2];

}

async function loadContent(url){
    let response = await fetch(url);
    return Promise.resolve(await response.text());
}