import { webDevItems } from "./data.js";

const params = new URLSearchParams(window.location.search);
const id = params.get('id')

const itemsShowcase = document.querySelector('.portfolioItemShowcase');
const title = document.querySelector('title');

webDevItem();

function webDevItem() {
    let portfolioItem = webDevItems.filter((item) => {
        if (item.id === id) {
            return item;
        }
    })    
    
    itemsShowcase.innerHTML = `<h1>${portfolioItem[0].name}</h1>
    <div class="container">
    <p class="heading">Status</p>
    <p class="statusParagraph">${portfolioItem[0].status}</p>
    </div>
    <img class="mainImage" src="${portfolioItem[0].img}" /> 
    <div class="itemLinks">
    <a href="${portfolioItem[0].github}">GitHub</a>
    ${portfolioItem[0].link ? `<a href="${portfolioItem[0].link}">Link to site</a>
    ` : ``}
    </div>
    <div class="downArrow">
        <i></i>
    </div>
    <div class="documentContainer">
    <h2>About</h2>
    <section class="documentation">${portfolioItem[0].documentation}</section>
    </div>`
    title.innerHTML = `${portfolioItem[0].name}`;
}   

const arrow = document.querySelector(".downArrow");

arrow.addEventListener("click", (scrollEvent) => {
    arrow.scrollIntoView({ behavior: "smooth", block: "start" });
})