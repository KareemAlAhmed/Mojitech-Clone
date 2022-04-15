

function pReplacer(name1,name2,name1M,name2M){
    let allP=document.querySelectorAll("p")
    let pData=[];
    allP.forEach((ele)=>{
        let  text= ele.textContent
        let newText=text.split(" ")
        for(let i=0;i<newText.length;i++){
            if(newText[i] === name1|| newText[i] ===name1M){
                newText[i] ="No One"
            }
            else if(newText[i] === name2|| newText[i] ===name2M){
                newText[i] = "No Family"
            }
            var finalText= newText.join(" ");
            ele.innerHTML = finalText;
        }
        let pUser={
            data:finalText
        }
        pData.push(pUser)
    })
    

}


export default pReplacer;