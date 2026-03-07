const cases = [

{
name:"Apex Digital LLC",
documents:["Certificate of Formation","Operating Agreement","W9"],
risk:"Moderate risk crypto exchange"
},

{
name:"North Harbor Ventures LP",
documents:["Partnership Agreement"],
risk:"High risk offshore fund"
}

]


function renderCases(){

const list=document.getElementById("caseList")

cases.forEach((c,i)=>{

const div=document.createElement("div")

div.className="case"

div.innerText=c.name

div.onclick=()=>openCase(i)

list.appendChild(div)

})

}

function openCase(i){

const c=cases[i]

showView("workspace")

document.getElementById("caseTitle").innerText=c.name

document.getElementById("customerInfo").innerText=c.risk

const docs=document.getElementById("documentList")

docs.innerHTML=""

c.documents.forEach(d=>{

const li=document.createElement("li")

li.innerText=d

docs.appendChild(li)

})

document.getElementById("riskSummary").innerText=c.risk

}


function showView(view){

document.querySelectorAll(".view").forEach(v=>{

v.classList.remove("active")

})

document.getElementById(view).classList.add("active")

}

renderCases()
