var btn = document.querySelector("#movBTN");

let one = document.querySelector("#one");

let two = document.querySelector("#two");

let three = document.querySelector("#three");


class UI{
    
    static changeValue(){
        
        //for the professionnal
        var val = one.textContent.length;
        var test = "";
        var resul = '$';
        for(var i=1;i<val;i++){
            test+= document.querySelector("#one").textContent[i];
        }
        var num = parseFloat(test) * 12;
        resul+=`${num}`;
        document.querySelector("#one").textContent=resul;
        
        //for the basis field
        var val1 = two.textContent.length;
        var test1 = "";
        var resul1 = '$';
        for(var i=1;i<val1;i++){
            test1+= document.querySelector("#two").textContent[i];
        }
        var num1 = parseFloat(test1) * 12;
        resul1+=`${num1}`;
        document.querySelector("#two").textContent=resul1;
        
        //for the master field 
        var val2 = three.textContent.length;
        var test2 = "";
        var resul2 = '$';
        for(var i=1;i<val2;i++){
            test2+= document.querySelector("#three").textContent[i];
        }
        var num2 = parseFloat(test2) * 12;
        resul2+=`${num2}`;
        document.querySelector("#three").textContent=resul2;
        
    }
    
    
    static changeoneValu(){
        
        //for the professionnal
        var val = one.textContent.length;
        var test = "";
        var resul = '$';
        for(var i=1;i<val;i++){
            test+= document.querySelector("#one").textContent[i];
        }
        var num = parseFloat(test) / 12;
        resul+=`${num}`;
        document.querySelector("#one").textContent=resul;
        
        //for the basis 
        var val1 = two.textContent.length;
        var test1 = "";
        var resul1 = '$';
        for(var i=1;i<val1;i++){
            test1+= document.querySelector("#two").textContent[i];
        }
        var num1 = parseFloat(test1) / 12;
        resul1+=`${num1}`;
        document.querySelector("#two").textContent=resul1;
        
        //for the master field 
        var val2 = three.textContent.length;
        var test2 = "";
        var resul2 = '$';
        for(var i=1;i<val2;i++){
            test2+= document.querySelector("#three").textContent[i];
        }
        var num2 = parseFloat(test2) / 12;
        resul2+=`${num2}`;
        document.querySelector("#three").textContent=resul2;
    }
    
    
    
    static event(){
        btn.addEventListener("click",(e)=>{
    e.preventDefault();
//    var value =  document.querySelector("#movBTN").classList.value="fa fa-toggle-off";
    if(document.querySelector("#movBTN").classList.value==="fa fa-toggle-off" ){
        document.querySelector("#movBTN").classList.value="fa fa-toggle-on";
        UI.changeoneValu();
    }else{
        document.querySelector("#movBTN").classList.value="fa fa-toggle-off";
       
         UI.changeValue();
    }
    
})
    }
}


UI.event();


