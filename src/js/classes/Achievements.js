class Achievements{
    milestone;
    id;
    klasse;
    message;
    achieved;

    constructor(milestone,id,klasse,message,) {
        this.milestone=milestone;
        this.id=id;
        this.klasse=klasse;
        this.message=message;
        this.achieved=false;

    }
    checkStone(x){
        if(!this.achieved){
            if(x>=this.milestone){
                this.achieved=true;
                document.getElementById(this.klasse).style.background = 'url("../assets/img/ui_assets/menu/menu_achivement_completed.png") no-repeat center' // Hier den Pfad von dem anderen Bild.
                document.getElementById(this.klasse).style.backgroundSize = "100% 100%";
                document.getElementById(this.id).innerHTML=this.message
            }
        }
    }
    loadAchieve(a){
        if(a){
            document.getElementById(this.klasse).style.background = 'url("../assets/img/ui_assets/menu/menu_achivement_completed.png") no-repeat center' // Hier den Pfad von dem anderen Bild.
            document.getElementById(this.klasse).style.backgroundSize = "100% 100%";
            document.getElementById(this.id).innerHTML=this.message
        }
    }
}


