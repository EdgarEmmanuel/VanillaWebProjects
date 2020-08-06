//retrieve the button 

let btn_red = document.querySelector(".main .section-2 #red");

let btn_grey = document.querySelector(".main .section-2 #grey");

let btn_blue = document.querySelector(".main .section-2 #blue");

let i_left = document.querySelector(".main .section-0-5 #left");

let i_right = document.querySelector(".main .section-0-5 #right");

let img_balise = document.querySelector(".main .section-1 #img");

let first=1;

let last =4



class UI{
        
    //verify if the file exists (not recommanded)
    static doesFileExist(urlToFile) {
    var xhr = new XMLHttpRequest();
    xhr.open('HEAD', urlToFile, false);
    xhr.send();
     
    if (xhr.status == "404") {
        return false;
    } else {
        return true;
    }
}
    
    static for_blueCar(val){
        var posi = img_balise.getAttribute("src")[8];
        console.log(posi);
            switch(val){
                case "plus":
                     if(UI.doesFileExist(`blueCar/${parseInt(posi)+1}blue.png`)==true){
                        img_balise.setAttribute("src",`blueCar/${parseInt(posi)+1}blue.png`);
                     }else{
                          img_balise.setAttribute("src","blueCar/1blue.png");
                     }
                    break;
                case "moins":
                    if(UI.doesFileExist(`blueCar/${parseInt(posi)-1}blue.png`)==true){
                        img_balise.setAttribute("src",`blueCar/${parseInt(posi)-1}blue.png`);
                    }else{
                        img_balise.setAttribute("src","blueCar/4blue.png");
                    }
                break;
        }
    }
    
    static for_redCar(val){
        var posi = img_balise.getAttribute("src")[7];
        if(UI.doesFileExist(`redCar/${parseInt(posi)+1}red.png`)==true){
            switch(val){
                case "plus":
                    img_balise.setAttribute("src",`redCar/${parseInt(posi)+1}red.png`);
                    break;
                case "moins":
                    img_balise.setAttribute("src",`redCar/${parseInt(posi)-1}red.png`);
                    break;
            }
        }else{
            img_balise.setAttribute("src","redCar/1red.png");
        }
        
    }
    
    static for_greyCar(val){
        //get the position wher the number is 
        var posi = img_balise.getAttribute("src")[4];
            switch(val){
                case "plus":
                     if(UI.doesFileExist(`img/${parseInt(posi)+1}grey.png`)==true){
                        img_balise.setAttribute("src",`img/${parseInt(posi)+1}grey.png`);
                     }else{
                         img_balise.setAttribute("src",`img/${first}grey.png`);
                     }
                    break;
                case "moins":
                     if(UI.doesFileExist(`img/${parseInt(posi)-1}grey.png`)==true){
                        img_balise.setAttribute("src",`img/${parseInt(posi)-1}grey.png`);
                     }else{
                         img_balise.setAttribute("src",`img/${last}grey.png`);
                     }
                    break;
            }
    }
    
    static verifyColor(a){
        var val = img_balise.getAttribute("src");
        //img/1grey.png
        var classValue = img_balise.getAttribute("class");
        
        switch(a){
            case "grey": 
            //change teh attribute color 
             img_balise.setAttribute("class","grey");
            
           //change the image color 
            img_balise.setAttribute("src","img/1grey.png");
                
                break;
                
            case "red": 
            img_balise.setAttribute("class","red");
            
            //change the image color 
            img_balise.setAttribute("src","redCar/1red.png");
                
                break;
                
            case "blue":
            img_balise.setAttribute("class","blue");
            
            //change the image color 
            img_balise.setAttribute("src","blueCar/1blue.png");
                break;
                
               }
    }
    
    
    
    
    
    static chooseData(val){
        var classValue = img_balise.getAttribute("class");
        
        switch(val){
            case "plus": 
                switch(classValue){
                    case "red":
                        UI.for_redCar(val);
                        break;
                    case "grey":
                        UI.for_greyCar(val);
                        break;
                    case "blue":
                        UI.for_blueCar(val);
                        break;
                }                
                break;
                
            case "moins": 
                 switch(classValue){
                    case "red":
                        UI.for_redCar(val);
                        break;
                    case "grey":
                        UI.for_greyCar(val);
                        break;
                    case "blue":
                        UI.for_blueCar(val);
                        break;
                }                
            break;                
               }
    }
    
    
    
}


btn_grey.addEventListener("click",(e)=>{
    e.preventDefault();
    
    UI.verifyColor(btn_grey.getAttribute("id"));
});


btn_red.addEventListener("click",(e)=>{
    e.preventDefault();
   
    UI.verifyColor(btn_red.getAttribute("id"));
});


btn_blue.addEventListener("click",(e)=>{
    e.preventDefault();
    
    UI.verifyColor(btn_blue.getAttribute("id"));
});


//for the arrow 

i_left.addEventListener("click",(e)=>{
    e.preventDefault();
    UI.chooseData("moins");
});

i_right.addEventListener("click",(e)=>{
    e.preventDefault();
    UI.chooseData("plus");
})


