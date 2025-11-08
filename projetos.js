const projetos = document.querySelectorAll(".projetos-itens")
projetos.forEach(projeto => {
    projeto.addEventListener("mouseenter", () => {
        document.querySelector(".box").classList.add("display")
    })
    projeto.addEventListener("mouseleave", () => {
        document.querySelector(".box").classList.remove("display")
    })
});
const primeiro = document.querySelector(".primeiro-js")
const description = document.querySelector(".description")
primeiro.addEventListener("click", () => {
    description.style.display = "block"
    document.body.classList.add("overlay")
})

document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
        description.style.display = "none"
        document.body.classList.remove("overlay")
    }
})
const x = document.querySelector(".x-mark")
x.addEventListener("click", () => {
    description.style.display = "none"
    document.body.classList.remove("overlay")
})

primeiro.addEventListener("mouseenter", () => {
    document.querySelector(".p-hover").classList.add("p-sumir")
})
primeiro.addEventListener("mouseleave", () => {
    document.querySelector(".p-hover").classList.remove("p-sumir")
})