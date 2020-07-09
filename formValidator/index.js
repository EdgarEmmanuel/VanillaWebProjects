$(document).ready((e)=>{
    let btn=$("#btn");
    let name = $("#cpassword").val;
    
    class UI{
        
        static affiche(val){
            console.log(val);
        }
        
        static verifyField(){
            let name = $("#name").val();
            let email = $("#email").val();
            let pwd = $("#password").val();
            let cpwd = $("#cpassword").val();
            
            var a =0;
            var i=0;
            
        if(name==="" || name.length <=3 ){
             $("#one").css("visibility","visible");
             $("#name").css("border","red solid 1px");
        }else{
            $("#name").css("border","1px solid green");
            $("#one").css("visibility","hidden");
        }
            
        if(email===""){
             $("#two").css("visibility","visible");
             $("#email").css("border","red solid 1px");
        }else{
             $("#two").css("visibility","hidden");
             $("#email").css("border","green solid 1px");
        }
            
            if(pwd==="" || pwd.length<=3){
        $("#three").css("visibility","visible");
         $("#password").css("border","1px solid red");
            }else{
       $("#three").css("visibility","hidden");
    $("#password").css("border","1px solid green");
            }
           
        if( cpwd==="" || cpwd.length<=3){
            $("#four").css("visibility","visible");
            $("#cpassword").css("border","1px solid red");
        }else{
     if(cpwd !== pwd){
            $("#four").css("visibility","visible");
            $("#cpassword").css("border","1px solid red");
        }else{
            $("#four").css("visibility","hidden");
    $("#cpassword").css("border","1px solid green"); 
        }
            
        }
            
            
            
            
        }
        
      
        
    }
    
    //when the user click on the button 
    $(btn).click((e)=>{
        e.preventDefault();
        UI.verifyField();
    })
})