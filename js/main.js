import { games } from "./data.js";

console.log(games);

const list = document.querySelector("#list");
const count = document.querySelector("#count");
const empty = document.querySelector("#empty");
const loading = document.querySelector("#loading");

const cheap = ["ring-2", "ring-emerald-500"];

function createCard(game) {
    const card = document.createElement("article");
    card.className = "rounded-lg bg-slate-700 p-3 shadow";
    card.dataset.id = game.id;

    const image = document.createElement("img"); 
    image.src = game.image;
    image.alt = game.name;
    image.className = "mb-4 w-full rounded";
    
    const name = document.createElement("h2");
    name.className = "font-semibold";
    name.textContent = game.name;

    const price = document.createElement("p");
    price.textContent = `${game.price} EUR`;

    const link = document.createElement("a");
    link.href = game.url;
    link.className = "text-red-700 underline";
    link.textContent = "Više o igri";

    card.append(image, name, price, link);

    if (game.price < 3) {
        card.classList.add(...cheap);
    }

    return card;

}
function render(items) {
    list.innerHTML = "";

    const fragment = document.createDocumentFragment();
    for (const item of items) {
        fragment.append(createCard(item));
    }

    count.textContent = `Prikazane igre: ${items.length}`;

    empty.classList.toggle("hidden", items.length > 0);

    list.append(fragment);
}

const FPS = games
    .filter(game => game.category === "FPS")
    .sort((a, b) => a.name.localeCompare(b.name));

render(games);
//render(FPS);
//ludikomentar
loading.remove();