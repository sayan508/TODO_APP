let btn = document.querySelector("button")
let list = document.querySelector("ul")
let inp = document.querySelector("input")
btn.addEventListener("click", function () {
    let item = document.createElement("li");
    let delbtn = document.createElement("button");
    delbtn.innerText = "delete";
    delbtn.classList.add("delete")
    item.innerText = (inp.value);
    item.appendChild(delbtn)
    list.appendChild(item);
    inp.value = "";
})
list.addEventListener("click",function(event){
    if(event.target.nodeName=="BUTTON"){
        let listItem=event.target.parentElement;
        listItem.remove();
    }
    // if(event.target.nodeName==""){
    //     let listiteem=event.target.parentElement;
    //     listiteem.remove();
    // }
})

// let delbtns = document.querySelectorAll(".delete");
// for (delbtn of delbtns) {
//     delbtn.addEventListener("click", function(){
//         let par=this.parentElement;
//         console.log(par)
//         par.remove();
//     });
// }
