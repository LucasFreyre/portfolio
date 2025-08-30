const menuBars = document.querySelector(".menu-bars-nav")
const menu = document.querySelector(".menu")

menuBars.addEventListener("click", (e) => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
    menu.classList.add('ativo')

    e.stopPropagation()
})
document.addEventListener("click", (e) => {
    if (menu.classList.contains("ativo") && !menu.contains(e.target)) {
        menu.classList.remove("ativo")
    }
})
document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
        menu.classList.remove("ativo")
    }
})
const menuItens = document.querySelectorAll(".menu-item")
menuItens.forEach(item => {
    item.addEventListener("click", () => {
        menu.classList.remove('ativo')
    })
})
if (menu.classList.contains("ativo")) {
    document.body.style.overflow = "hidden"
}