/* cart section */
const cartIcon = document.querySelector(".cart-icon");
cartIcon.addEventListener("click" , () => {
    cartIcon.parentElement.classList.toggle("cart");    
    const cartSection = document.querySelector(".cart-section");
    cartSection.classList.toggle("hide");
})



// // --------------remove 
// const removeBtnFunction = () =>{   
// const removeCartBtn = Array.from(document.querySelectorAll(".cart-remove-btn"));
// removeCartBtn.forEach(element => {
//     element.addEventListener("click" , (e) => {
//         let product = element.parentElement.parentElement;
//         product.remove();
//     })
// });
// }
// const addingCartToProducts = () =>{
//     const addToCart = Array.from(document.querySelectorAll(".add-to-cart"));
//     addToCart.forEach(element => {
//         element.addEventListener("click" , (e) =>{
//             let product = element.parentElement;
//             product.classList.add("animate__animated");
//             product.classList.add("animate__fadeIn");
//             const productPrice = product.querySelectorAll(".product-price");
//             let price = productPrice[0].innerText;
//             const productImg = product.querySelectorAll(".product-img")
//             let image = productImg[0].src;
//             addElementToCart(price ,image);
//         });
//     });
// }

// const totalPriceFunction = () => {
//     const totalPrice = document.querySelector(".total-price")
//     totalPrice.innerText 
// }



// const addElementToCart = (price , image) =>{
//     let addItemToCart = `
//     <div class="cart-product">
//         <div class="cart-product-container">
//             <img class="cart-product-image " src="${image}">
//             <div class="cart-product-name">flexible bag</div>
//             <div class="price">${price}</div>
//         </div>
//         <input value="1" type="number" class="cart-product-quantity"></input>
//         <div class="cart-product-row-price cart-row">$100
//             <button class="cart-remove-btn">REMOVE</button>
//         </div>
//     </div>
//     `;
//     const cartContainer = document.querySelector(".cart-container");
//     cartContainer.innerHTML += addItemToCart; 
//     removeBtnFunction();

// }
// const cartPriceXQuantity = () =>{
//     let cartProduct = document.querySelectorAll("cart-product")
//     for (let index = 0; index < cartProduct.length; index++) {
//         let cartPrice = document.querySelectorAll(".price")[index];
//         let quantity = document.querySelectorAll("cart-product-quantity")[index];
//         let result = cartPrice * quantity;
//         return result;
//     }
        
// }
// // ------------------------- Purchaseeeee button 
//  const purchaseFunction = () =>{
//      const purchase = document.querySelector(".purchase-button");
//      purchase.addEventListener("click" , () => {
//          alert("Thanks for buying!")
//      })
//  }
// //  --------------------------- Cart Total 


// // ---------------functions 
// addingCartToProducts();
// purchaseFunction();
// cartPriceXQuantity();
