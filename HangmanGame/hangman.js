class UI{
static getWords(){
        var words = ["Chine","Gabon","test","afriq","mondia"];

        // get ab random number
        var i = Math.floor(Math.random()*words.length);

        //insert a random word in the localStorage 
        sessionStorage.setItem("words",words[i]);

        // affect this word to a variable 
        var word = sessionStorage.getItem("words");
        console.log(word);

        //diplaying this word in the body
        for(let k=0;k<word.length;k++){
            var span = document.createElement("span");
            var h3 = document.createElement("h3");
            h3.innerHTML=`${word[k]}`;
            span.appendChild(h3);
            document.querySelector(".word").appendChild(span);
        }
}
    
    
    static displayEndGame(){
       document.querySelector('.endGame').style.display='block';
    }
    
    static dejaTrouve(str,time){
        var body = document.querySelector('body');
        body.insertAdjacentHTML('beforeend',`<div class="find"><p>${str}</p></div>`);
        setTimeout((e)=>{
            document.querySelector(".find").style.display='none';
            body.removeChild(document.querySelector('.find'));
        },time);
    }
    
    static afficheCorps(num){
        switch(num){
            case '1':
                document.querySelector("svg").style.display='block';
                break;
            case '2':
                document.querySelector(".verticalHomme").style.display='block';
                break;
                case '3':
                document.querySelector(".left-bras").style.display='block';
                break;
                case '4':
                document.querySelector(".right-bras").style.display='block';
                break;
                case '5':
                document.querySelector(".left-foot").style.display='block';
                break;
                case '6':
                document.querySelector(".right-foot").style.display='block';
                break;
               }
    }
    
    static Rel(){
         document.querySelector('.endGame').style.display='none';
        location.reload();
    }
}

//on relaod the Program choose a random word 
document.addEventListener('reload',UI.getWords());


//getting all Span created 
var allSpan = document.querySelectorAll("span");

//get the number for the larger temptatives
let n_tentatives=1;

//a variable to get the number when the user find 
let find_tentatives=0;

//a variable when he press a letter already find 
let n_dejTrouve=0;


//event when the user click on the keyboard
document.addEventListener('keypress',(e)=>{
    e.preventDefault();
    
    //a variable to test if the letter choose is not good 
    let n_badLetter=0;
    
    //get the charCode of the press button
    var lettertest = e.code[3] ;
    
    
    // we loop through to find if the letter is in the word choose by the game 
    for(var span=0;span<allSpan.length;span++ ){
        
        //transform the letter in uppercase 
        var letter = allSpan[span].firstChild.textContent.toUpperCase();
        
        // comapre to see if the two are equals 
        if(lettertest.toUpperCase()==letter.toUpperCase()){
            
            //get the style of the letter in String to verify if it has been already displayed
            var col = window.getComputedStyle(allSpan[span].firstChild).color.toString();
            
            //if the color is the hidden color
            if(col == 'rgb(52, 73, 94)'){
                
                //we display the color for user to see
                allSpan[span].firstChild.style.color='white';
                
                //we increment the find temptatives 
                 find_tentatives+=1;
                
                
            }else{//else
                
                //we increment the variable for already find letter 
                n_dejTrouve+=1;
                
                // display the function to say to the user that the letter has been already displayed 
                UI.dejaTrouve("Lettre Deja Trouve",500);
            }
        }else if(lettertest.toUpperCase()!=letter.toUpperCase()){
            //increment the bad letter 
            n_badLetter+=1;
            if(n_badLetter==allSpan.length){
                
                //say to the user that the letter is a wrong letter 
                UI.dejaTrouve("wrong letter",500);
                
                //append the letter to the wrong letter div 
        document.querySelector('.alreadyFind').firstElementChild.textContent+=`${lettertest.toUpperCase()} , `;
                
                
                // display the body of the hangman part by part
                UI.afficheCorps(n_tentatives.toString());
                
                
                //increment the wrong temptatives until the last 
                n_tentatives+=1;
                 if(n_tentatives==7){
                        UI.displayEndGame();
                    }
            }
        }
    }  
    
    //if the temptatives is great we display the Congratulations message
    if(find_tentatives == allSpan.length){
        UI.dejaTrouve("FELICITATION MOT TROUVE !!!!!!",3000);
         UI.Rel();
    }
    
});


//the button for try again when the game ended
var btn = document.querySelector("#btn");
btn.addEventListener('click',(e)=>{
            e.preventDefault();
    
    //reload the page 
           UI.Rel();
})


