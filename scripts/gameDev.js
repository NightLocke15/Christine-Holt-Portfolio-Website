const webDevItems = [
    {
        name: "Puck Defenders",
        github: "https://github.com/NightLocke15/Christine-Holt-Portfolio-Website",
        itch: "https://chris-the-awkward-elf.itch.io/puck-defenders",
        img: "../images/gameDev/PuckDefenders.png",
        href: "",
        status: "Completed"
    },
    {
        name: "Arena Bash",
        github: "https://github.com/NightLocke15/Christine-Holt-Portfolio-Website",
        itch: "https://chris-the-awkward-elf.itch.io/arena-bash",
        img: "../images/gameDev/ArenaBash.png",
        href: "",
        status: "Completed"
    },
    {
        name: "Splatris",
        github: "https://github.com/NightLocke15/Christine-Holt-Portfolio-Website",
        itch: "https://chris-the-awkward-elf.itch.io/splatris",
        img: "../images/gameDev/Splatris.png",
        href: "",
        status: "Completed"
    },
    {
        name: "A Day in The Life of A Student",
        github: "https://github.com/NightLocke15/Christine-Holt-Portfolio-Website",
        itch: "https://chris-the-awkward-elf.itch.io/a-day-in-the-life-of-a-student",
        img: "../images/gameDev/StudentLife.png",
        href: "",
        status: "Completed"
    },
    {
        name: "Potato CULTivator (PotatoType)",
        github: "https://github.com/NightLocke15/Christine-Holt-Portfolio-Website",
        itch: "https://chris-the-awkward-elf.itch.io/idle-potatotype",
        img: "../images/gameDev/PotatoType.png",
        href: "",
        status: "Completed"
    },
    {
        name: "Platformer Juicyness Simulator",
        github: "https://github.com/NightLocke15/Christine-Holt-Portfolio-Website",
        itch: "https://chris-the-awkward-elf.itch.io/platformer-juicyness-simulator",
        img: "../images/gameDev/PlatformerJuice.png",
        href: "",
        status: "Completed"
    },
    {
        name: "Rope Tied Prototype",
        github: "https://github.com/NightLocke15/Christine-Holt-Portfolio-Website",
        itch: "https://chris-the-awkward-elf.itch.io/rope-tied-prototype",
        img: "../images/gameDev/RopeTied.png",
        href: "",
        status: "Completed"
    },
    {
        name: "Weight Prototype",
        github: "https://github.com/NightLocke15/Christine-Holt-Portfolio-Website",
        itch: "https://chris-the-awkward-elf.itch.io/weight-prototype",
        img: "../images/gameDev/WeightProto.png",
        href: "",
        status: "Completed"
    },
]

const itemsSection = document.querySelector('.gameDevItemsContainer');
const itemShowcase = document.querySelector('.portfolioItemShowcase')

addWebItems();

function addWebItems() {
    let items = webDevItems.map((item) => {
        return `<article class="gameDevItem" id="${item.name}">
                    <img src="${item.img}"/>
                    <p>${item.name}</p>
                </article>`
    }).join("");

    itemsSection.innerHTML = items;

    let allItems = document.querySelector(".gameDevItem");

    allItems.forEach((item) => {
        item.addEventListener('click', () => {
            
        })        
    });
}