header {
    background-color: var(--headerColor);
    padding: 30px;
    height: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

html {
    scroll-behavior: smooth;
}

* {
    margin: 0;
    padding: 0;
}

header ul {
    display: flex;
    list-style: none;
    gap: 20px;
    margin-right: 20px;
}

li:hover {
    transform: scale(1.1);
    color: rgb(224, 80, 80);
}

li::after {
    transition: .5s;
    bottom: 0;
    left: 0;
    content: "";
    position: absolute;
    height: 2px;
    background-color: var(--blackWhite);
    width: 0;
}

li {
    position: relative;
    transition: .5s;
    color: var(--blackWhite);
    cursor: pointer;
    font-size: .8em;
}

li:hover::after {
    width: 100%;
}

body {
    position: relative;
    background-color: var(--body-Background);
    font-family: "Bungee", sans-serif;
}

html,
body {
    overflow-x: hidden;
}

.logo {
    color: var(--blackWhite);
    font-weight: bold;
}
.hr{
    display: flex;
    justify-content: center;
}
.hr-original {
    height: 2px;
    border: none;
    width: 90%;
    position: absolute;
    background-color: var(--blackWhite);
}

a {
    text-decoration: none;
    color: black;
}

.sun {
    fill: var(--blackWhite);
    display: block;
    padding: 10px;
}

.moon {
    fill: var(--blackWhite);
    display: none;
    padding: 10px;
}

.sun-btn {
    background: none;
    border: none;
    cursor: pointer;
}

:root {
    --body-Background: #ffe1c9;
    --whiteBlack: white;
    --sobre-mim-color: rgba(221, 104, 104, .5);
    --circles-color: rgb(211, 44, 44);
    --blackGray: black;
    --blackWhite: black;
    --bodyBackground: rgb(221, 219, 219);
    --headerColor: #ffe1c9;
}

.darkmode {
    --body-Background: rgb(36, 23, 23);
    --whiteBlack: black;
    --sobre-mim-color: #7B7272;
    --circles-color: rgba(221, 104, 104, .2);
    --blackGray: rgb(223, 198, 198);
    --blackWhite: white;
    --bodyBackground: rgb(36, 23, 23);
    --headerColor: rgb(36, 23, 23);
}

.container {
    position: relative;
    left: 50%;
}

.hr-projetos {
    height: 2px;
    border: none;
    width: 50%;
    background-color: var(--circles-color);
}

.margin-top {
    margin-top: 20px;
}

.projetos-itens {
    cursor: pointer;
    padding: 20px;
}

.box {
    width: 30%;
    border: 1px solid black;
    background-color: black;
    position: absolute;
    left: 5%;
    opacity: 0;
    transition: opacity .2s;
}

.display {
    transition:2s;
    opacity: 1;
}

main {
    height: 80vh;
}

.description {
    display: none;
    padding: 20px;
    width: 35%;
    height: 75%;
    top: 10%;
    transform: translateX(-50%);
    left: 50%;
    background: white;
    border: 1px solid black;
    border-radius: 10px;
    position: absolute;
}

.description h1 {
    text-align: center;
}

.description p {
    margin: 40px 0;
    line-height: 1.5;
    position: absolute;
    bottom: 30px;
    transform: translateY(-50%);
}

.description span {
    text-decoration: underline;
    font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;
    font-weight: 900;
}

.overlay {
    width: 100%;
    height: 100%;
    position: fixed;
    background: rgba(0, 0, 0, .5);
}

.x-mark {
    position: absolute;
    top: 10px;
    right: 10px;
}

.linha-fina-descricao {
    border: 1px solid black;
    border-radius: 10px;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    transition: .5s;
    margin: 20px 0;
    width: 70%;
}

.linha-fina-descricao:hover {
    scale: 1.5;
    transform: translateX(-34%);
}

.description button {
    cursor: pointer;
    position: absolute;
    bottom: 30px;
    left: 50%;
    transform: translateX(-50%);
    border: none;
    background: #8CB4BD;
    padding: 10px;
    font-weight: bold;
    border-radius: 10px;
    font-size: 1.4em;
}

.container h1,
.container p {
    color: var(--blackWhite);
}

.menu-bars-nav {
    fill: var(--blackWhite);
    display: none;
}

.menu {
    display: none;
    transform: translateY(-100%);
}
.p-hover{
    color: var(--blackWhite);
    position: absolute;
    transition: .5s;
    margin-top: 100px;
    margin-left: 100px;
}
.p-sumir {
    transition: 1s;
    display: none;
}

@media (max-width: 860px) {
    .description p {
        font-size: .8em;
    }
}

@media (max-width: 570px) {
    header nav ul {
        display: none;
    }

    .habilidades ul {
        display: grid;
        grid-template-columns: auto auto;
    }

    .menu-bars-nav {
        display: block;
    }

    .menu {
        border-bottom: 1px solid black;
        display: block;
        transition: .5s;
        width: 100%;
        height: 40%;
        background: #000;
        position: absolute;
        top: 0;
        z-index: 5;
    }

    .menu.ativo {
        transform: translateY(0);
    }

    .menu ul {
        height: 100%;
    }

    .menu ul a {
        /* border-top: 1px solid rgb(221, 104, 104);
        border-bottom: 1px solid rgb(221, 104, 104); */
        text-align: center;
        width: 100%;
        height: 33.3%;
        display: block;
        background: black;
    }

    .menu ul a li {
        color: var(--sobre-mim-color);
        position: relative;
        transform: translateY(-50%);
        top: 50%;
    }
}

@media (max-width: 500px) {
    .description {
        width: 60%;
    }

    .description p {
        font-size: .7em;
        bottom: 60px;
    }

    .container {
        left: 0;
    }

    aside {
        display: none;
    }

    .hr-projetos {
        width: 100%;
        background-color: rgb(221, 104, 104);
    }
}
