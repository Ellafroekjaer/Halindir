document.querySelector('.hamburger-menu').addEventListener('click', () => {
    document.querySelector('.navigation').classList.toggle("change")
})

const links = document.querySelectorAll(".nav-link");

for (const link of links) {

    link.addEventListener('click', function (event) {
        document.querySelector('.navigation').classList.toggle("change")
    })
}

const sublinks = document.querySelectorAll(".sub-menu-item");

for (const link of sublinks) {

    link.addEventListener('click', function (event) {
        document.querySelector('.navigation').classList.toggle("change")
    })
}

let button = document.querySelector('#menu-button');
let menu = document.querySelector('#box-submenu');
button.addEventListener('click', function (event) {
    if (menu.style.display == "flex") {
        menu.style.display = "none";
        //   button.innerHTML = "Show Menu";
    } else {
        menu.style.display = "flex";
        //   button.innerHTML = "Hide Menu";
    }
}
);