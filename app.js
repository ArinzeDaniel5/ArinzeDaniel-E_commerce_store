import {products} from "./products.js";
import {addToCart, updateCartCount} from "./cart.js";
const container=document.getElementById("products");
const search=document.getElementById("search");
function displayProducts(items){
    container.innerHTML="";
    items.forEach(product=>{
        const card=document.createElement("div");
        card.className="card";
        card.innerHTML=`
        <img src="${product.image}"/>
        <h3>${product.name}</h3>
        <p>$${product.price}</p>
        <button>Add To Cart</button>
        `
        ;
        card.querySelector("button").onclick=()=>{
            addToCart(product)
        };
        container.appendChild(card);
    });
}
search.addEventListener("input",(e)=>{

    const value=e.target.value.toLowerCase();
    const filtered=products.filter(p=>p.name.toLowerCase().includes(value)
        );
        displayProducts(filtered);
});
displayProducts(products);
updateCartCount();