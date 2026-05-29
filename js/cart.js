import {saveCart, loadCart} from "./storage.js";
let cart=loadCart() || [];
export function addToCart(product){
    const item=cart.find(p=>p.id===product.id);
    if(item){
        item.qty++;
    }else{
        cart.push({...product, qty:1});
    }
    saveCart(cart);
    updateCartCount();
}
export function removeFromCart(id) {
    cart=cart.filter(item=>item.id !==id);
    saveCart(cart);
    updateCartCount();
}
export function getCart(){
    return cart;
}
export function getTotal() {
    return cart.reduce((sum,item)=>sum + item.price * item.qty,0);
    }
    export function updateCartCount(){
        const count=cart.reduce((sum,item)=>
            sum + item.qty,0);
            const el=document.getElementById("cartCount");
            if(el){el.textContent=count};
    }
