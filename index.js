let rowPrice= 0;
let totalPrice = 0;

/* cart icon section */
const cartIcon = document.querySelector(".cart-icon");
cartIcon.addEventListener("click" , () => {
    cartIcon.parentElement.classList.toggle("cart");    
    const cartSection = document.querySelector(".cart-section");
    cartSection.classList.toggle("hide");
})
// --------------remove 
const removeBtnFunction = () =>{   
const removeCartBtn = Array.from(document.querySelectorAll(".cart-remove-btn"));
removeCartBtn.forEach(element => {
    element.addEventListener("click" , (e) => {
        let product = element.parentElement.parentElement;
        product.remove();
        priceColumnFunction()

        // i still need to update the price
        // need to update the total price and make the product show again
    })
});
}
const addingCartToProducts = () =>{
    let addToCart = Array.from(document.querySelectorAll(".add-to-cart"));
    addToCart.forEach(element => {
        element.addEventListener("click" , (e) =>{
            let product = element.parentElement;
            product.classList.add("animate__animated");
            product.classList.add("animate__fadeIn");
            const productPrice = product.querySelectorAll(".product-price");
            let price = productPrice[0].innerText;
            const productImg = product.querySelectorAll(".product-img")
            let image = productImg[0].src;
            addElementToCart(price ,image);
        });
    });
}

const addElementToCart = (price , image) =>{
    let addItemToCart = `
    <div class="cart-product">
        <div class="cart-product-container">
            <img class="cart-product-image " src="${image}">
            <div class="cart-product-name">flexible bag</div>
            <div class="price">${price}</div>
        </div>
        <input value="1" type="number" class="cart-product-quantity"></input>
        <div class="cart-product-row-price"><span class="cart-row">${price}</span>
            <button class="cart-remove-btn">REMOVE</button>
        </div>
    </div>
    `;
    const cartContainer = document.querySelector(".cart-container");
    cartContainer.innerHTML += addItemToCart; 
    removeBtnFunction();
    PriceRowFunction();
    priceColumnFunction()

    return

}
const PriceRowFunction = () => {
    let cartQuantity = document.querySelectorAll('.cart-product-quantity');
    for (let index = 0; index < cartQuantity.length; index++) {
        let element = cartQuantity[index]
        
        
            element.addEventListener("change", (e)=> {
                if(isNaN(element.value)== true || element.value < 1){
                    element.value =1;
                }
                else{
                    let parent = element.parentElement;
                    let priceInt = parent.querySelectorAll(".price")[0].innerText;
                    priceInt = parseFloat(priceInt.replace('$' , ""));
                    let cartQuantity = parseFloat(element.value);
                    let result = cartRowTotal(cartQuantity , priceInt)
                    displayCartRowTotal(result, index)
                    priceColumnFunction()
                }
                    
        });
    }       
}

const priceColumnFunction = () => {
    let cartRowPrices = document.querySelectorAll('.cart-row')
    let price = 0;
    let result = 0;
    for (let index = 0; index < cartRowPrices.length; index++) {
        let element = cartRowPrices[index];
        price = element.innerText.replace("$", "");
        price = parseFloat(price)
        result += price
        let totalPrice = document.querySelectorAll('.total-price')[0]
        totalPrice.innerText = "TOTAL: $" + result;
    }
}
const displayCartRowTotal = (result, index) =>{
    let totalprice = document.querySelectorAll('.cart-row')[index-1]
    result = "$" +result
    totalprice.innerText = result;
}



// ------------------------- Purchaseeeee button 
 const purchaseFunction = () =>{
     const purchase = document.querySelector(".purchase-button");
     purchase.addEventListener("click" , () => {
         alert("Thanks for buying!")
     })
 }
//  --------------------------- Cart row Total 
const cartRowTotal = (price , quantity ) => {return price * quantity}

// ---------------functions 
const start = () => {

removeBtnFunction();
addingCartToProducts();
purchaseFunction();
PriceRowFunction();

}
start();