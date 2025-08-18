const root = "./";

const sections = [
    {
        id: "webDev",
        name: "Web Development",
        href: `${root}webDevelopment/index.html`
    },
    {
        id: "gameDev",
        name: "Game Development",
        href: `${root}gameDevelopment/index.html`
    },
    {
        id: "about",
        name: "About",
        href: `${root}about/index.html`
    },
    {
        id: "contact",
        name: "Contact",
        href: `${root}contact/index.html`
    },
]

const sectionLinks = document.querySelector(".sections");

addSections();

function addSections() {
    let buttons = sections.map((section) => {
        const { id, name, href } = section;

        return `<a class="sectionLink" id="${id}" href="${href}">
                    <p>
                    ${name}
                    </p>
                </a>`
    }).join("");

    sectionLinks.innerHTML = buttons;
}