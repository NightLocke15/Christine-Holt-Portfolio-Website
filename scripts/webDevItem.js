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
    <p>Status</p>
    <p>${portfolioItem[0].status}</p>
    <a href="${portfolioItem[0].github}">GitHub</a>
    ${portfolioItem[0].link ? `<a href="${portfolioItem[0].link}">Link to site</a>` : ``}
    <img src="${portfolioItem[0].img}" /> 
    <h2>Documentation</h2>`
    title.innerHTML = `${portfolioItem[0].name}`;
}   