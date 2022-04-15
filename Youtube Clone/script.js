let options=document.querySelectorAll(".relative-concept .list p");
let list= document.getElementById("list");
let btn=document.getElementById("scroll")
let firstBtn=document.getElementById("scroll2")
let secondLayout=document.getElementById("over2")
let videoTitle=document.querySelectorAll(".video-title")

console.log(videoTitle)

var result=0;
options.forEach(function(ele){
    ele.onclick=function(){
        options.forEach(function(e){
            e.classList.remove("active");
        });
        ele.classList.add("active");
    }
});

btn.onclick=function(){
    list.scrollBy(70,0);
    result+=70;
    if(result <=70){
        firstBtn.classList.add("hide")
        secondLayout.classList.add("hide")
    }
    if(result >= 70){
        firstBtn.classList.remove("hide")
        secondLayout.classList.remove("hide")
        firstBtn.classList.add("show")
        secondLayout.classList.add("show")
    }
}
if(result <=70){
    firstBtn.classList.add("hide")
    secondLayout.classList.add("hide")
}
firstBtn.onclick=function(){
    list.scrollBy(-70,0);
    result-=70;
    if(result == 0){
        firstBtn.classList.remove("show")
        secondLayout.classList.remove("show")
        firstBtn.classList.add("hide")
        secondLayout.classList.add("hide")
    }
  
}
videoTitle.forEach(function(ele){
    if(ele.textContent.length > 48){
        let newTitle=ele.textContent.slice(0,48);
        ele.textContent=newTitle +"...";
    }
    console.log(ele.textContent.length)
})
