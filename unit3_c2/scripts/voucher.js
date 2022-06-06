let add=JSON.parse(localStorage.getItem("amount"))


let wallet=document.getElementById("wallet")
wallet.innerText=add

function addmoney(){
  event.preventDefault()
  let money=document.getElementById("amount").value;
  let x= add + Number(money)
  //console.log(x)
  wallet.innerText=x
  localStorage.setItem("amount",x)
  window.location.reload()


  //**********api******************

  


}

const url=" https://masai-vouchers-api.herokuapp.com/api/vouchers"

  async function shankar(){
    try{
      let res=await fetch(url);
      
      let users = await res.json();
      append(users[0].vouchers)
      console.log(users[0].vouchers)
      
      

    }
    catch(err){
      console.log("err")
    }
    
  }
  shankar();

  //let container=document.getElementById("container");
  function append(data){
    data.map(function(el){
      let box=document.createElement("div");
      let img=document.createElement("img");
      img.src=el.image
    let price1=document.createElement("h1");
    price1.innerText=el.price
    let Name=document.createElement("h1");
    Name.innerText=el.name
      let btn=document.createElement("button");
      btn.innerText="Buy"
      btn.addEventListener("click",function(){
        buyproduct(el)
      })

      box.append(img,Name,price1,btn)

      
    let container=document.getElementById("container")
    container.append(box)

    })

    var arr1=[]

    function buyproduct(el){
      arr1.push(el)
      localStorage.setItem("purchase",JSON.stringify(arr1))

      window.location.reload()
    }
  }