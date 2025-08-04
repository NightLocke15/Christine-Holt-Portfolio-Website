const webDevItems = [
    {
        name: "This Portfolio Website",
        github: "https://github.com/NightLocke15/Christine-Holt-Portfolio-Website",
        img: "../images/main/picture.jpg",
        href: "",
        status: "In Progress"
    },
    {
        name: "First Portfolio Website",
        github: "https://github.com/Wits-Digital-Arts-Interactive-Media/WSOA3028A_2615283",
        link: "https://wits-digital-arts-interactive-media.github.io/WSOA3028A_2615283/",
        img: "../images/webDev/ChristineCharacter.jpg",
        href: "",
        status: "Completed"
    },
    {
        name: "Step 1",
        github: "https://github.com/NightLocke15/WSOA3029A_2615283_ChristineHolt_CommercialWebsite",
        link: "https://nightlocke15.github.io/WSOA3029A_2615283_ChristineHolt_CommercialWebsite/",
        img: "../images/webDev/StepOne.png",
        href: "",
        status: "Being Revamped"
    },
    {
        name: "The Character Collection",
        github: "https://github.com/NightLocke15/DIGA4015A_2615283_ChristineHolt_ExamWebApp",
        link: "",
        img: "../images/webDev/CharacterCollection.png",
        href: "",
        status: "In Progress" 
    },
    {
        name: "NUDGE Mobile App",
        github: "https://github.com/NightLocke15/Nudge-Mobile-App",
        link: "",
        img: "../images/webDev/Nudge.png",
        href: "",
        status: "In Progress" 
    },
    
]

const itemsSection = document.querySelector('.webDevItemsContainer');
const itemShowcase = document.querySelector('.portfolioItemShowcase')

addWebItems();

function addWebItems() {
    let items = webDevItems.map((item) => {
        return `<article class="webDevItem" id="${item.name}">
                    <img src="${item.img}"/>
                    <p>${item.name}</p>
                </article>`
    }).join("");

    itemsSection.innerHTML = items;

    let allItems = document.querySelector(".webDevItem");

    allItems.forEach((item) => {
        item.addEventListener('click', () => {
            
        })        
    });
}