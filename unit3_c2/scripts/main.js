function student(n,e,ad,am){
    this.name=n;
    this.email=e;
    this.address=ad;
    this.amount=am;
  }
  document.querySelector("form").addEventListener("submit",myfunction);
  let arr=JSON.parse(localStorage.getItem("user")) || [];
  function myfunction(){
    event.preventDefault()
    let name=document.getElementById("name").value;
    let email=document.getElementById("email").value;
    let address=document.getElementById("address").value;
    let amount=document.getElementById("amount").value; 
    // console.log(name,email,address,amount)
  
   let s1=new student(name,email,address,amount);
   arr.push(s1);

   localStorage.setItem("user", JSON.stringify(arr))
   window.location.reload()
  }
  document.getElementById("submit").addEventListener("click",addmoney)

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

  }