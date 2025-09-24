import { gameDevItems } from "./data.js";

const params = new URLSearchParams(window.location.search);
const id = params.get('id')

const itemsShowcase = document.querySelector('.portfolioItemShowcase');
const title = document.querySelector('title');

gameDevItem();

function gameDevItem() {
    let portfolioItem = gameDevItems.filter((item) => {
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
    <a href="${portfolioItem[0].itch}">itch.io</a>
    </div>
    </div>    
    <div class="documentContainer">
    <h2>About</h2>
    <section class="documentation">${portfolioItem[0].documentation}</section>
    </div>`
    title.innerHTML = `${portfolioItem[0].name}`;
}   
