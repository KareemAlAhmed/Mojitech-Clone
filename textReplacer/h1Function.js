let input1= document.querySelector(".Name1")
let input2= document.querySelector("#Name2")
let allH1=document.querySelectorAll("h1");


function h1Replacer(name1,name2,name1M,name2M){
    allH1.forEach(function(e){
        let h1Text=e.textContent;       
        let newh1Text=h1Text.split(" ")
        
        for(let i=0;i <= newh1Text.length;i++){
            if(newh1Text[i] === name1|| newh1Text[i] ===name1M){
                if(name1 !=""){
                    newh1Text[i] ="No One "
                }
            }
            else if(newh1Text[i] === name2|| newh1Text[i] ===name2M){
                if(name2 !=""){
                    newh1Text[i] = "No Family "
                }
            }      
        }
        e.textContent=newh1Text.join(" ");
    
    
   })
}
export default h1Replacer;