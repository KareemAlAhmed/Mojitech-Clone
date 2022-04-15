import h1Replacer from "./h1Function.js";
import h2Replacer from "./h2Function.js";
import h3Replacer from "./h3Function.js";
import pReplacer from "./pFunction.js";
import aReplacer from "./aFunction.js";


const btn = document.querySelector("#btn")
let input1= document.querySelector(".Name1")
let input2= document.querySelector("#Name2")



btn.addEventListener("click",function(e){
    
    var name11= input1.value;

    let firstLetter11 = name11[0].toLowerCase()
    let name1M=firstLetter11+name11.slice(1);
    let firstLetter12 = name11[0].toUpperCase()
    let name1=firstLetter12+name11.slice(1);
 

    var name22= input2.value;
    let name2M;
    let name2;
    
    if(name22 !=""){
        let firstLetter21 = name22[0].toLowerCase()
        name2M=firstLetter21+name22.slice(1);
        let firstLetter22 = name22[0].toUpperCase()
        name2=firstLetter22+name22.slice(1);
    }

    e.preventDefault()
    pReplacer(name1,name2,name1M,name2M)
    h1Replacer(name1,name2,name1M,name2M)
    h2Replacer(name1,name2,name1M,name2M)
    h3Replacer(name1,name2,name1M,name2M)
    aReplacer(name1,name2,name1M,name2M)
    input1.value=""
    input2.value=""
})




