import "./style.css";
import type { Fruit } from "./types";

const fruitList = document.querySelector<HTMLUListElement>("#fruit-list");
const entryCount = document.querySelector<HTMLElement>("#entry-count");

if (!fruitList) {
  throw new Error("Fruit list element not found.");
}

const list = fruitList;

function renderFruits(fruits: Fruit[]): void {
  list.replaceChildren();

  fruits.forEach((fruit, index) => {
    const listItem = document.createElement("li");

    const number = document.createElement("span");
    number.className = "fruit-index";
    number.textContent = String(index + 1).padStart(2, "0");

    const name = document.createElement("span");
    name.className = "fruit-name";
    name.textContent = fruit.name;

    const weight = document.createElement("span");
    weight.className = "fruit-weight";
    weight.textContent = `${fruit.weight}g`;

    const color = document.createElement("span");
    color.className = "fruit-color";
    color.dataset.color = fruit.color;
    color.textContent = fruit.color;

    listItem.append(number, name, weight, color);
    list.appendChild(listItem);
  });

  if (entryCount) {
    entryCount.textContent = `${fruits.length} entries`;
  }
}

async function loadFruits(): Promise<void> {
  try {
    const response = await fetch("http://127.0.0.1:8000/fruits/");

    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }

    const fruits: Fruit[] = await response.json();

    console.log("Fruits received from Django:", fruits);
    renderFruits(fruits);
  } catch (error) {
    console.error("Failed to load fruits:", error);

    const message = document.createElement("li");
    message.textContent = "Failed to load fruits. Check the Django server.";
    list.replaceChildren(message);

    if (entryCount) {
      entryCount.textContent = "Unavailable";
    }
  }
}

void loadFruits();
