//store the products array in localstorage as "products"
document.querySelector("#products").addEventListener("submit", myfunction)
let arr=JSON.parse(localStorage.getItem("products"))||[];
function myfunction(){
    event.preventDefault();
    let obj={
        type:products.type.value,
        desc:products.desc.value,
        price:products.price.value,
        image:products.image.value,
        
    };
    products.type.value=""
    products.desc.value=""
    products.price.value=""
    products.image.value=""


    arr.push(obj);
    console.log(arr)
    localStorage.setItem("products",JSON.stringify(arr))
    // console.log(type,desc,price,image)

}
