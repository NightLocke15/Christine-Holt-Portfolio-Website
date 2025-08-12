import { gameDevItems } from "./data.js";

const itemsSection = document.querySelector('.gameDevItemsContainer');

addWebItems();

function addWebItems() {
    let items = gameDevItems.map((item) => {
            return `<a class="gameDevItem" id="${item.id}" href="../gameDevelopment/gamePortfolioItem.html?id=${item.id}">
                        <img src="${item.img}"/>
                        <p>${item.name}</p>
                    </a>`
        }).join("");
    
        itemsSection.innerHTML = items;
}