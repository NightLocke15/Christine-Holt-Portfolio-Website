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
    
    itemsShowcase.innerHTML = `
    <div class="basicInfoContainer">
    <h1>${portfolioItem[0].name}</h1>
    <div class="container">
    <p class="heading">Status: ${portfolioItem[0].status}</p>
    </div>
    <img class="mainImage" src="${portfolioItem[0].img}" /> 
    <div class="itemLinks">
    <a href="${portfolioItem[0].github}">GitHub</a>
    ${portfolioItem[0].link ? `<a href="${portfolioItem[0].link}">Link to site</a>
    ` : ``}
    </div>
    </div>
    <div class="documentContainer">
    <h2>About</h2>
    <article class="documentation">${portfolioItem[0].documentation}</article>
    </div>`
    title.innerHTML = `${portfolioItem[0].name}`;
}   