let h1 = document.querySelector("h1")

h1.addEventListener("click", ()=>{
    h1.style.color = "black";
    setTimeout(() => {
        h1.style.color = "teal";
    }, 1000);
})