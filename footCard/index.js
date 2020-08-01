let img = document.querySelector("#img");

let select_balise = document.querySelector("#select");


class UI{
    
    
    static change(){
        img.addEventListener("click",(e)=>{
    e.preventDefault();
    document.querySelector("#img").style.transform="rotate(0deg)";
    document.querySelector("#img").style.transform="rotate(15deg)";
});
    }
    
    static forShoesColor(){
        select_balise.addEventListener('change',(e)=>{
            e.preventDefault();
            switch(select_balise.value){
                case "yellow": 
                    document.querySelector("#img").setAttribute("src","img/yellow.jpg");
                    break;
                case "red":
                    document.querySelector("#img").setAttribute("src","img/red.jpg");
                    break;
                case "blue":
                    document.querySelector("#img").setAttribute("src","img/blue.jpg");
                    break;
            }
        });
    }
    
    
    
    static modify(){
        setInterval(()=>{
    if(document.querySelector("#img").style.transform==="rotate(-15deg)"){
        document.querySelector("#img").style.transform="rotate(15deg)";
    }else if(document.querySelector("#img").style.transform==="rotate(15deg)"){
             document.querySelector("#img").style.transform="rotate(0deg)";
    }else{
             document.querySelector("#img").style.transform="rotate(-15deg)"
             }
        },2000)
    }
    
    
}

UI.change();

UI.modify();

UI.forShoesColor();




