    import  {getCart,getTotal,removeFromCart, updateCartCount} from "./cart.js";
        const cartDiv=document.getElementById("cart");
        const totalEl=document.getElementById("total");
        function render() {
            const cart=getCart();
            cartDiv.innerHTML="";
            cart.forEach(item=>{
                const div=document.createElement("div");
                div.innerHTML=`
                <p>${item.name} X ${item.qty} - $${item.price}</p>
                <button>Remove</button>
                `
                ;
                div.querySelector("button").onclick=()=>{
                    removeFromCart(item.id);
                    render();
                };
                cartDiv.appendChild(div);
            });
            totalEl.textContent= getTotal();
            updateCartCount();
        }
        render();