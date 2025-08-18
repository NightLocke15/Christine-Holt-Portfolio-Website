import { webDevItems } from "./data.js";

const itemsSection = document.querySelector('.webDevItemsContainer');

addWebItems();

function addWebItems() {
    let items = webDevItems.map((item) => {
        return `<a class="webDevItem" id="${item.id}" href="../webDevelopment/webPortfolioItem.html?id=${item.id}">
                    <img src="${item.img}" alt="Front Page image of the ${item.name} project."/>
                    <p>${item.name}</p>
                    <p class="statusReport">${item.status}</p>
                </a>`
    }).join("");

    itemsSection.innerHTML = items;
}