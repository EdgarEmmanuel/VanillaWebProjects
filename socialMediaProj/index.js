//get the value of the toggle
var toggle = document.querySelector("#toggle");

toggle.addEventListener("click",(e)=>{
    e.preventDefault();
    if(document.querySelector("#toggle").classList[1]==="fa-toggle-on"){
        document.querySelector("#toggle").classList.remove("fa-toggle-on");
        document.querySelector("#toggle").classList.add("fa-toggle-off");
        //change the background color
        document.querySelector("body").style.background='white';

        //change the header color
        document.querySelector("header h1").style.color='black';
        document.querySelector("header p").style.color='black';

        //change the color of the div in the main
        var alldiv = document.querySelectorAll("main .social .col-div");
        alldiv[0].style.background='#f0f3fa';
        alldiv[1].style.background='#f0f3fa';
        alldiv[2].style.background='#f0f3fa';
        alldiv[3].style.background='#f0f3fa';

        //change the color of all span 
        var allSpan=document.querySelectorAll("main .social .col-div span ");
        allSpan[0].style.color='black';
        allSpan[1].style.color='black';
        allSpan[2].style.color='black';
        allSpan[3].style.color='black';

         //change the color of all p 
         var allP=document.querySelectorAll("main .social .col-div p ");
         allP[0].style.color='black';
         allP[1].style.color='black';
         allP[2].style.color='black';
         allP[3].style.color='black';

         //change the color of all H1
         var allH1=document.querySelectorAll("main .social .col-div h1");
         for(var j=0;j<allH1.length;j++){
             allH1[j].style.color='black';
         }
    }else{
        document.querySelector("#toggle").classList.remove("fa-toggle-off");
        document.querySelector("#toggle").classList.add("fa-toggle-on");
        //change the background color
        document.querySelector("body").style.background='#20222f';
        //change the header color
        document.querySelector("header h1").style.color='white';
        document.querySelector("header p").style.color='white';

         
         //change the color of the div in the main
        var alldiv = document.querySelectorAll("main .social .col-div");
        alldiv[0].style.background='#252b43';
        alldiv[1].style.background='#252b43';
        alldiv[2].style.background='#252b43';
        alldiv[3].style.background='#252b43';

        //change the color of span and P
        var allSpan=document.querySelectorAll("main .social .col-div span ");
        allSpan[0].style.color='rgba(197, 196, 192,0.3)';
        allSpan[1].style.color='rgba(197, 196, 192,0.3)';
        allSpan[2].style.color='rgba(197, 196, 192,0.3)';
        allSpan[3].style.color='rgba(197, 196, 192,0.3)';

        //change the color of all p 
        var allP=document.querySelectorAll("main .social .col-div p ");
        allP[0].style.color='rgba(197, 196, 192,0.3)';
        allP[1].style.color='rgba(197, 196, 192,0.3)';
        allP[2].style.color='rgba(197, 196, 192,0.3)';
        allP[3].style.color='rgba(197, 196, 192,0.3)';

        //change the color of all H1
        var allH1=document.querySelectorAll("main .social .col-div h1");
        for(var j=0;j<allH1.length;j++){
            allH1[j].style.color='white';
        }
    }
})