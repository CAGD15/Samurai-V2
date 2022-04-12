// mostrar menu 


const menu = document.querySelector(".menu-bar");
const navigation = document.querySelector(".navigation")
const close = document.querySelector(".close");


menu.addEventListener("click", () =>{
    navigation.classList.add("active");
});

close.addEventListener("click", () =>{
    navigation.classList.remove("active");
});


//cambiar imagen


const img = document.querySelector('.caja-adentro-1-image .img-1');
const img2 = document.querySelector('.caja-adentro-1-image .img-2');
const caja1 = document.querySelector('.titulo-1');
const caja2 = document.querySelector('.titulo-2');


caja2.addEventListener("mouseover", ()=>{
    img.classList.remove("active");
    img2.classList.add("active");
})

caja1.addEventListener("mouseover", ()=>{
    img.classList.add("active");
    img2.classList.remove("active");
    
})
