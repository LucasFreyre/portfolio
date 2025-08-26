const navLinks = document.querySelectorAll("nav ul a")
const sections = document.querySelectorAll("#main-scroll, #sobre-mim")
const home = document.querySelector(".home")
const sobreMim = document.querySelector("#sobre-mim")



// window.addEventListener("scroll", () => {
//     let current = ""

//     sections.forEach(section => {
//         const sectionTop = section.offsetTop
//         const sectionHeight = section.offsetHeight

//         if (pageYOffset >= sectionTop) {
//             current = section.getAttribute("id")
//         }
//     })

//     navLinks.forEach(link => {
//         link.querySelector("li").style.color = ""
//         if (link.getAttribute("href") === `#${current}`) {
//             link.querySelector("li").style.color = "rgb(221, 104, 104)"
//         }
//     })
//     if (pageYOffset === 0 || pageYOffset < 130) {
//         home.style.color = "rgb(221, 104, 104)";
//     }else if (sobreMim.offsetTop <= 120) {
//         sobreMim.style.color = "rgb(221, 104, 104)";
//     }
// })
const observer = new IntersectionObserver(entries => {
    console.log(entries)
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const id = entry.target.getAttribute("id")

            navLinks.forEach(link => link.classList.remove("active"))

            const activeLink = document.querySelector(`nav a[href="#${id}"]`)
            if(activeLink) activeLink.classList.add("active")

        }
    })
},
{threshold: 0.5}
)
sections.forEach(section => {
    observer.observe(section)
})
