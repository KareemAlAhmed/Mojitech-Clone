let input1= document.querySelector(".Name1")
let input2= document.querySelector("#Name2")
let allH3=document.querySelectorAll("h3");


function h3Replacer(name1,name2,name1M,name2M){
    allH3.forEach(function(e){
        let h3Text=e.textContent;       
        let newh3Text=h3Text.split(" ")
        
        for(let i=0;i <= newh3Text.length;i++){
            if(newh3Text[i] === name1|| newh3Text[i] ===name1M){
                if(name1 !=""){
                    newh3Text[i] ="No One "
                }
            }
            else if(newh3Text[i] === name2|| newh3Text[i] ===name2M){
                if(name2 !=""){
                    newh3Text[i] = "No Family "
                }
            }      
        }
        e.textContent=newh3Text.join(" ");
    
    
   })
}
export default h3Replacer;