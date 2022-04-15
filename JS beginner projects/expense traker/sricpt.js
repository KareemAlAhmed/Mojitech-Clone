let expense=document.getElementById("user-name");
let date=document.getElementById("date");
let amount=document.getElementById("amount");
let submit=document.getElementById("add-expense");
let table=document.getElementById("table");
let content=document.getElementById("table-content");
let nameInfo;
let dateInfo;
let expenseInfo;
let expenseArray=[];

if(window.localStorage.getItem("expense") != "" ){
    let finalResult=JSON.parse(window.localStorage.getItem("expense"));
    expenseArray=finalResult;
    finalResult.forEach(function(ele){
       let {theName,theDate,theAmount}=ele;
       addingValueToTheTable(theName,theDate,theAmount);
    })
    
}

if(content.innerHTML==""){
    addingDefaultMessage();
    
}
submit.onclick=function(e){
    if(expense.value !="" && date.value !="" && amount.value !=""){
    takingTheInfo();
    addingValueToTheTable(nameInfo,dateInfo,expenseInfo);    

    }else{
        e.preventDefault();
    }
}

function takingTheInfo(){
    nameInfo=expense.value;
    dateInfo=date.value;
    expenseInfo=amount.value;
    expense.value="";
    date.value="";
    amount.value="";
    
    let expenseObject={
        theName:nameInfo,
        theDate:dateInfo,
        theAmount:expenseInfo
    }
    expenseArray.push(expenseObject);
    addInfoToLocalStorage(expenseArray);
}


function addingDefaultMessage(){
    content.setAttribute("colspan",3);
    let tr=document.createElement("tr");
    let td1=document.createElement("td");
    let td2=document.createElement("td");
    let td3=document.createElement("td");
    td1.appendChild(document.createTextNode("No expense added yet!"));
    td1.style.cssText="font-weight:600;";
    td2.appendChild(document.createTextNode(""));
    td3.appendChild(document.createTextNode(""));
    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    tr.setAttribute("message","default");
    content.appendChild(tr);
}


function addingValueToTheTable(nameInfo,dateInfo,expenseInfo){
    
    let tr=document.createElement("tr");
    tr.setAttribute("title",nameInfo);
    let td1=document.createElement("td");
    let td2=document.createElement("td");
    let td3=document.createElement("td");
    let btn=document.createElement("span");
    let test=document.querySelectorAll("table tr td");
    test.forEach((e)=> e.style.width="calc((100%-2px) / 3)")

    btn.innerHTML=`x`;
    
    td1.append(document.createTextNode(nameInfo));
    td2.append(document.createTextNode(dateInfo));
    td3.append(document.createTextNode(expenseInfo));
    td3.append(btn);
    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);

    content.appendChild(tr);
    if(document.querySelector('[message="default"]')){
        document.querySelector('[message="default"]').remove();
    }
    
    btn.onclick=function(e){
        let parent=e.target.parentElement;
        let grandParent=parent.parentElement;
        grandParent.getAttribute("title");
        
        deleteExpense(grandParent.getAttribute("title"));
        console.log(expenseArray)
        grandParent.remove();
        if(content.innerHTML==""){
            addingDefaultMessage()
        }
        
    }
 
}

function addInfoToLocalStorage(expenseArray){
    window.localStorage.setItem("expense",JSON.stringify(expenseArray));
}


function deleteExpense(expenseTitle){
    expenseArray=expenseArray.filter((e)=>e.theName !=expenseTitle
    )
    addInfoToLocalStorage(expenseArray);
}


