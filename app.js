const arrowImgDown = document.querySelector(".image-icon");
const  arrowImgUp = document.querySelector(".arrowup")
const ul = document.querySelector(".list");
const cols = document.querySelectorAll(".col-1");
const para = document.querySelector("p")

arrowImgDown.addEventListener("click",()=>{
   ul.classList.toggle("ul-display");
   arrowImgDown.classList.toggle("arrow-2");
   arrowImgUp.classList.toggle("arrow");
})

arrowImgUp.addEventListener("click",()=>{
    ul.classList.toggle("ul-display");
    arrowImgDown.classList.toggle("arrow-2");
    arrowImgUp.classList.toggle("arrow");
 })

for(let col of cols){
    col.addEventListener("click",()=>{
     para.innerHTML=col.innerHTML;
     ul.classList.toggle("ul-display");
     arrowImgDown.classList.toggle("arrow-2");
     arrowImgUp.classList.toggle("arrow");
    })
}