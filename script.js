const words = [
"Financial Analyst",
"Certified Public Accountant",
"Cybersecurity Researcher",
"Financial Systems Builder"
];

let i = 0;
let j = 0;
let deleting = false;

function type(){

const current = words[i];
const element = document.querySelector(".typing");

if(!deleting){
element.textContent = current.substring(0, j + 1);
j++;

if(j === current.length){
deleting = true;
setTimeout(type,1200); // pause AFTER word
return;
}

}else{

element.textContent = current.substring(0, j - 1);
j--;

if(j === 0){
deleting = false;
i++;

if(i === words.length){
i = 0;
}

}

}

setTimeout(type,80);

}

type();


document.querySelectorAll(".counter").forEach(counter=>{

const update=()=>{

const target=+counter.getAttribute("data-target")
const c=+counter.innerText

const increment=target/100

if(c<target){
counter.innerText=Math.ceil(c+increment)
setTimeout(update,30)
}else{
counter.innerText=target
}

}

update()

})