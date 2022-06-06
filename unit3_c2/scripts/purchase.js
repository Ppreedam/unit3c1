let add=JSON.parse(localStorage.getItem("amount"))


let wallet=document.getElementById("wallet")
wallet.innerText=add

let data= JSON.parse(localStorage.getItem("purchase")) || []



data.map(function(el){
    let x= document.getElementById("show")
    let div=document.createElement("div")
    let img=document.createElement("img")
    img.src=el.image;
    let name=document.createElement("h1")
    name.innerText=el.name
    let price=document.createElement("p")
    price.innerText=el.price
    

div.append(img, name ,price)
x.append(div)
})