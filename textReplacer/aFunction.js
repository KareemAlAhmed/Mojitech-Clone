function aReplacer(name1,name2,name1M,name2M){
    let allA=document.querySelectorAll("a");
    allA.forEach((ele1)=>{
    let  atext= ele1.textContent
    var newText=atext.split(" ")
    for(let i=0;i<newText.length;i++){
        if(newText[i] === name1 || newText[i] ===name1M){
            newText[i] ="No One"
        }
        else if(newText[i] === name2|| newText[i] ===name2M){
            newText[i] = "No Family"
        }
    }
    const finalText= newText.join(" ");
    ele1.innerHTML = finalText;
    })
    
  
}
export default aReplacer