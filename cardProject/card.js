var div_flipBox = document.querySelector(".flip-box");

class Task{
    constructor(name ,response){
        this.name=name;
        this.response=response;
    }
}


class UI{
    
    static getallData(){
        let tasks;
        if(localStorage.getItem("tasks")==null){
            tasks=[];
        }else{
            tasks = JSON.parse(localStorage.getItem("tasks"));
        }
        return tasks;
    }
    
    static addAdata(Task){
        let tasks = UI.getallData();
        tasks.push(Task);
        localStorage.setItem("tasks",JSON.stringify(tasks));
        location.reload();
    }
    
    static displayAll(){
        tasks.forEach((task)=>{
            console.log(task.name);
        })
    }
    
    static displayPage(){
        let tasks = UI.getallData();
        var longueur = tasks.length;
        let i=0;
        let t =0;
document.querySelector("#span").textContent=`${i+1}/${longueur}`;
document.querySelector("#h1").textContent= `${tasks[i].name}`;
document.querySelector("#p").textContent=`${tasks[i].response}`;


document.querySelector("#left").addEventListener("click",(e)=>{
    i-=1;
    if(i<0){
        i=longueur-1;
        t=i+1;
        document.querySelector("#h1").textContent= `${tasks[i].name}`;
        document.querySelector("#p").textContent=`${tasks[i].response}`;
        document.querySelector("#span").textContent=`${t}/${longueur}`;
    }else{
         document.querySelector("#h1").textContent= `${tasks[i].name}`;
         document.querySelector("#p").textContent=`${tasks[i].response}`;
        document.querySelector("#span").textContent=`${i+1}/${longueur}`;
         
    }
});
    }
    
    static clearField(){
        document.querySelector("#question").value="";
        document.querySelector("#reponse").value="";
    }
    
    static displayForm(){
        document.querySelector("#form").style.display='block';
    }
    
    static HideForm(){
        document.querySelector("#form").style.display='none';
    }
    
    static verifyForm(){
        var name = document.querySelector("#question").value;
        var reponse = document.querySelector("#reponse").value;
        if(name==="" || reponse===""){
            return 1;
        }else{
            return 2;
        }
    }
}

//display he form 
document.querySelector("#show").addEventListener('click',(e)=>{
    e.preventDefault();
    UI.displayForm();
});

//hideForm
document.querySelector("#hide").addEventListener("click",(e)=>{
    e.preventDefault();
    UI.HideForm();
})

// add card
document.querySelector("#add").addEventListener("click",(e)=>{
    e.preventDefault();
    var name="" , reponse="";
    var valeur = UI.verifyForm();
   if(valeur==2){
      name = document.querySelector("#question").value;
       reponse = document.querySelector("#reponse").value;
       var task = new Task(name,reponse);
       UI.addAdata(task);
       
       UI.clearField();
      }else{
          
      }
});

UI.displayPage();



div_flipBox.addEventListener("click",(e)=>{
    e.preventDefault();
    if(document.querySelector(".flip-box-inner").style.transform =="rotateY(180deg)"){
        document.querySelector(".flip-box-inner").style.transform="rotateY(-0deg)";
    }else{
        document.querySelector(".flip-box-inner").style.transform="rotateY(180deg)";
    }
});