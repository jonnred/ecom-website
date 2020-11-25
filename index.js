/* cart section */
    const cartIcon = document.querySelector(".cart-icon");
    cartIcon.addEventListener("click" , () => {
    cartIcon.parentElement.classList.toggle("cart");    
    const cartSection = document.querySelector(".cart-section");
    cartSection.classList.toggle("hide");
    
})
const addToCart = Array.from(document.querySelectorAll(".add-to-cart"));

addToCart.forEach(element => {
    element.addEventListener("click" , (e) =>{
        setTimeout(() => {
        element.parentElement.classList.add("hide");
        }, 1000);
        
        element.parentElement.classList.add("animate__animated");
        element.parentElement.classList.add("animate__fadeOutTopRight");
        
    })
});