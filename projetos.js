const projetos = document.querySelectorAll(".projetos-itens")
projetos.forEach(projeto => {
    projeto.addEventListener("mouseenter", () => {
        document.querySelector(".box").classList.add("display")
    })
    projeto.addEventListener("mouseleave", () => {
        document.querySelector(".box").classList.remove("display")
    })
});