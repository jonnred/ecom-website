/* cart section */
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
        element.parentElement.parentElement.remove();
    })
});
}
const addingCartToProducts = () =>{
    const addToCart = Array.from(document.querySelectorAll(".add-to-cart"));
    addToCart.forEach(element => {
        element.addEventListener("click" , (e) =>{
            setTimeout(() => {
            element.parentElement.classList.add("hide");
            }, 1000);
            let product = element.parentElement;
            product.classList.add("animate__animated");
            product.classList.add("animate__fadeOutTopRight");

            const productPrice = product.querySelectorAll(".product-price");
            let price = productPrice[0].innerText;
            const productImg = product.querySelectorAll(".product-img")
            let image = productImg[0].src;
            addElementToCart(price ,image);
        });
    });
}

const totalPriceFunction = () => {
    const totalPrice = document.querySelector(".total-price")
    totalPrice.innerText
}



const addElementToCart = (price , image) =>{
    let addItemToCart = `
    <div class="cart-product">
        <div class="cart-product-container">
            <img class="cart-product-image " src="${image}">
            <div class="cart-product-name">flexible bag</div>
            <div class="price">${price}</div>
        </div>
        <input value="1" type="number" class="cart-product-price"></input>
        <div class="cart-product-row-price cart-row">$100
            <button class="cart-remove-btn">REMOVE</button>
        </div>
    </div>
    `;
    const cartContainer = document.querySelector(".cart-container");
    cartContainer.innerHTML += addItemToCart; 
    removeBtnFunction();


}
// ------------------------- Purchaseeeee button 
 const purchaseFunction = () =>{
     const purchase = document.querySelector(".purchase-button");
     purchase.addEventListener("click" , () => {
         alert("Thanks for buying!")
     })
 }


// ---------------functions 
addingCartToProducts();
removeBtnFunction();
purchaseFunction();