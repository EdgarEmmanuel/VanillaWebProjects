//
//
//
//
//
//
//
//
//class Depense{
//    constructor(name,amount,type){
//        this.name=name;
//        this.amount=amount;
//        this.type=type;
//    }
//}
//// Class Dynmique
//
//class Local{
//    static AllExp(){
//        var all;
//        if(localStorage.getItem('expenses')==null){
//            all=[];
//        }else{
//            all=JSON.parse(localStorage.getItem("expenses"));
//        }
//        return all;
//    }
//    
//    static addExp(exp){
//        var all = Local.AllExp();
//        all.push(exp);
//        localStorage.setItem('expenses',JSON.stringify(all));
//    }
//}
//
//
//// class UI
//
//class UI{
//    
//    static Reload(){
//        location.reload();
//    }
//    
//    
//    static displayBlance(){
//        const prices=Local.AllExp();
//        var sold=0;
//        
//        prices.forEach((price)=>{
//            sold+=parseInt(price.amount,10);
//        })
//        
//        var solde = document.querySelector('#solde');
//        solde.textContent=`${sold}.00`;
//    }
//    
//    static displayDet(ex){
//        var list = document.querySelector("#list");
//        
//        //create tr balise 
//        var tr = document.createElement('tr');
//        if(ex.type=="income"){
//        tr.innerHTML=`<tr>
//        <td>${ex.name}</td><td>${ex.amount}</td><td><button class="btn btn-success"></button></td>
//    </tr>`;
//            }else{
//                tr.innerHTML=`<tr>
//        <td>${ex.name}</td><td>${ex.amount}</td><td><button class="btn btn-danger"></button></td>
//    </tr>`;
//            }
//        list.append(tr);
//    }
//    
//    static displayMess(str){
//        var form = document.querySelector("#form");
//         form.insertAdjacentHTML('beforeBegin',`<div id="div"><h1>${str}</h1></div>`);
//        setTimeout(()=>{
//            var a = document.querySelector("#div");
//           document.querySelector("#mere").removeChild(a);
//        },3000);
//    }
//    
//    static fieldEmpty(){
//        document.querySelector("#text").value="";
//        document.querySelector("#amount").value="";
//    }
//    
//    static displayExp(){
//        const exp=Local.AllExp();
//        var soldeInc=0;
//        var soldeDep=0;
//        exp.forEach((ex)=>{
//            if(ex.type=="income"){
//                soldeInc+=parseInt(ex.amount,10);
//            }else{
//                soldeDep+=parseInt(ex.amount,10);
//            }
//             UI.displayDet(ex);
//        });
//        document.querySelector("#plus").textContent=`${soldeInc}.00`;
//        document.querySelector("#minus").textContent=`${soldeDep}.00`;
//       
//    }
//}
//// clear
////localStorage.clear();
//
//
//// display all 
//
//document.addEventListener('DOMContentLoaded',()=>{
//    UI.displayBlance();
//    UI.displayExp();
//})
//
//// apres clisk  sur add Transaction
//
//var btn=document.querySelector("#submit")
//btn.addEventListener('click',(e)=>{
//    e.preventDefault();
//    //verifier si les champs sont remplies 
//    var text = document.querySelector("#text").value;
//    var amount = document.querySelector("#amount").value;
//    if(text=="" && amount==""){
//       UI.displayMess("LES CHAMPS SONT VIDES");
//    }else{
//        if(amount>0){
//            var exp = new Depense(text,amount,"income");
//        }else{
//            //var val = Math.abs(amount);
//            var exp = new Depense(text,amount,"expense");
//        }
//        //add dynamically 
//        Local.addExp(exp);
//        
//        // add statically 
//        UI.displayDet(exp);
//        
//        // clear field 
//        UI.fieldEmpty();
//        
//        // reload 
//        UI.Reload();
//    }
//    
//})























































// class depense 

class Depense{
    constructor(name,price,type){
        this.name=name;
        this.price=price;
        this.type=type;
    }
}


// classe dynamique
class Local{
    static getAll(){
        var products;
        if(localStorage.getItem("depenses")==null){
            products=[];
        }else{
            products=JSON.parse(localStorage.getItem("depenses"));
        }
        return products;
    }
    
    static addDyn(exp){
        var prods = Local.getAll();
        prods.push(exp);
        localStorage.setItem("depenses",JSON.stringify(prods));
    }
}


//classe UI
class UI{
    static afficheSolde(){
        const products=Local.getAll();
        var solde =0;
        var plus=0;
        var moins=0;
        products.forEach((product)=>{
            if(product.type=="expense"){
                solde-=Math.abs(parseInt(product.price,10));
                moins+=parseInt(product.price,10);
            }else{
                solde+=parseInt(product.price,10);
                plus+=parseInt(product.price,10);
            }            
        });
        document.querySelector("#solde").textContent=`${solde}.00`;
        document.querySelector("#plus").textContent=`$ ${plus}.00`;
        document.querySelector("#minus").textContent=`$ ${moins}.00`;
    }
    
    static displayTable(){
        const products=Local.getAll();
        var list =  document.querySelector("#list");
        
        products.forEach((product)=>{
            if(product.type=="expense"){
                var tr = document.createElement("tr");
                tr.innerHTML=
                    `<td>${product.name}</td><td>${product.price}</td><td><button class="btn btn-danger"></button></td>`;
                list.appendChild(tr);
            }else{
                var tr = document.createElement("tr");
                tr.innerHTML=
                    `<td>${product.name}</td><td>${product.price}</td><td><button class="btn btn-success"></button></td>`;
                list.appendChild(tr);
            }            
        });
        
    }
    
    static displayMess(str){
 var form = document.querySelector("#form");
form.insertAdjacentHTML("beforeBegin",`<div id="div"><h1>${str}</h1></div>`);
        // faire disparaitre apres 3 sec
        setTimeout(()=>{
 document.querySelector("#mere").removeChild(document.querySelector("#div"));
        },3000);
        
    }
    
    static addExp(exp){
        var list =  document.querySelector("#list");
        if(exp.type=="income"){
            var tr = document.createElement("tr");
                tr.innerHTML=
                    `<td>${exp.name}</td><td>${exp.price}</td><td><button class="btn btn-success"></button></td>`;
                list.appendChild(tr);
        }else{
            var tr = document.createElement("tr");
                tr.innerHTML=
                    `<td>${exp.name}</td><td>${exp.price}</td><td><button class="btn btn-danger"></button></td>`;
                list.appendChild(tr);
        }
    }
    
    static emptyField(){
          document.querySelector("#text").value="";
        document.querySelector("#amount").value="";
    }
    
    static actualiser(){
        location.reload();
    }
    
    
}


// afficher les elements 

document.addEventListener("DOMContentLoaded",()=>{
    UI.afficheSolde();
    UI.displayTable();
})


// apres le click dans le formulaire 


var btn = document.querySelector("#submit");

btn.addEventListener("click",(e)=>{
    // eviter les erreurs 
    e.preventDefault();
    
    // recuperer les valeurs des champs 
    var name = document.querySelector("#text").value;
        var amount = document.querySelector("#amount").value;
    
    //verifier si les champs sont remplies 
    if(name=="" || amount==""){
        //afficher message
        UI.displayMess("CHAMPS VIDES");
    }else{
        var exp = null;
        if(amount>0){
            exp = new Depense(name,amount,"income");
        }else{
            exp = new Depense(name,amount,"expense");
        }
        
        //ajput dynamique
        Local.addDyn(exp);
        
        //ajouter statiquement 
        UI.addExp(exp);
        
        
        //vider les champs 
        UI.emptyField();
        
        // actualiser page 
        UI.actualiser();
        
    }
    
})



///localStorage.clear();














