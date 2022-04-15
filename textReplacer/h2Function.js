let input1= document.querySelector(".Name1")
let input2= document.querySelector("#Name2")
let allH2=document.querySelectorAll("h2");


function h2Replacer(name1,name2,name1M,name2M){
    allH2.forEach(function(e){
        let h2Text=e.textContent;       
        let newh2Text=h2Text.split(" ")
        
        for(let i=0;i <= newh2Text.length;i++){
            if(newh2Text[i] === name1|| newh2Text[i] ===name1M){
                if(name1 !=""){
                    newh2Text[i] ="No One "
                }
            }
            else if(newh2Text[i] === name2|| newh2Text[i] ===name2M){
                if(name2 !=""){
                    newh2Text[i] = "No Family "
                }
            }      
        }
        e.textContent=newh2Text.join(" ");
    
    
   })
}
export default h2Replacer;