const root = "../";

const navigationMenu = [
    {name: "Home", href: `${root}index.html`},
    {name: "Web Development", href: `${root}webDevelopment/index.html`},
    {name: "Game Development", href: `${root}gameDevelopment/index.html`},
    {name: "About", href: `${root}about/index.html`},
    {name: "Contact", href: `${root}contact/index.html`},
];

const navList = document.querySelector(".navigationLinks");
const mobileMenu = document.querySelector(".mobileNavigation")

export function navigationBar(currentPage) {
    let links = navigationMenu.map((menuItem) => {
        return `<a class="navLink" id="${menuItem.name}" href="${menuItem.href}">${menuItem.name}</a>`
    }).join("");

    navList.innerHTML = links;
    mobileMenu.innerHTML = links;

    const linkList = document.querySelectorAll(".navLink");

    linkList.forEach((link) => {
        if (link.id !== currentPage) {
            link.setAttribute('id', "otherPage");
        }      
        else {
            link.setAttribute('id', "currentPage");
        }  
    });
}