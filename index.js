/* cart section */
    const cartIcon = document.querySelector(".cart-icon");
    cartIcon.addEventListener("click" , () => {
    cartIcon.parentElement.classList.toggle("cart");    
    const cartSection = document.querySelector(".cart-section");
    cartSection.classList.toggle("hide");
    
})

