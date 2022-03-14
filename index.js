function income(){
    let amount=document.querySelector("#inco").value
    return Number(amount)
}
let calc=document.querySelector("#bn1")
let reseT=document.querySelector("#bn2")

let tax_oput=document.querySelector("#tax")
let cess_oput=document.querySelector("#cess")
let salary_oput=document.querySelector("#salary")

let tax=document.createElement("label")
let CESS=document.createElement("label")
let Take_home=document.createElement("label")

function clear_all(){
    (document.getElementById('inco').value) = "";
    (document.getElementById('occu').value) = "";
    (document.getElementById('agge').value) = "";
    (document.getElementById('nme').value) = "";
    tax_oput.removeChild(tax);
    cess_oput.removeChild(CESS);
    salary_oput.removeChild(Take_home);
           
}
reseT.addEventListener("click", () =>{
    clear_all();
})

calc.addEventListener("click", () =>{
    console.log("yes",income())
    let temp=0;
    let temp2=0;
    let temp3=0;
    let totaltax=0;
    if(income()<=500000){
        totaltax=0;
    }
    else{  
        temp=income()-250000
    }
    if(temp>250001){
        temp2=temp-250000;
     } 
     else{
         temp2=0; //temp2=temp
     }
     if(temp2>500001){
        temp3=temp2-500000;
     }
    else{
         temp3=0; //temp3=temp2
     }
     if(temp>=250001){
        //   a=12500;
          totaltax=12500;
         }
    else{
        totaltax=temp*0.05;
          }
          if(temp2>0){
            if(temp2*0.2>100000){
                totaltax=totaltax+100000;
            }
            else{
                totaltax=totaltax+(temp2*0.2);
            }
        
              }
        if(temp3>0 ){
            if(temp3*0.3>300000){
                totaltax=totaltax+300000;
            }
            else{
            totaltax=(totaltax+(temp3*0.3));
              }
        }

    console.log("Total Tax", (totaltax*0.04)+totaltax)    
    console.log("Cess",totaltax*0.04)    
    console.log("Take home",(income()-((totaltax*0.04)+totaltax)))  
    
    
    tax.innerHTML="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ₹"+((totaltax*0.04)+totaltax) .toFixed(1)
    // tax.style.margin="205px"
    tax.style.fontSize="28px"
    tax.style.color="red"

    
    tax_oput.appendChild(tax)
    
    CESS.innerHTML="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ₹"+((totaltax*0.04)).toFixed(1)
    // CESS.style.margin="236px"
    CESS.style.fontSize="28px"
    CESS.style.color="red"
    cess_oput.appendChild(CESS)
    
    Take_home.innerHTML="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ₹"+((income()-((totaltax*0.04)+totaltax))).toFixed(1)
    // Take_home.style.margin=""
    Take_home.style.fontSize="28px"
    Take_home.style.color="teal"
    salary_oput.appendChild(Take_home)
})
