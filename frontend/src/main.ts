import "./style.css";
import type { Fruit } from "./types";

const fruits: Fruit[] = [
  { name: "Banana", weight: 24, color: "Yellow" },
  { name: "Apple", weight: 35, color: "Red" },
  { name: "Mini-Apple", weight: 24, color: "Green" },
  { name: "Lemon", weight: 32, color: "Yellow" },
  { name: "Tomaten", weight: 12, color: "Red" },
];

const fruitList = document.querySelector<HTMLUListElement>("#fruit-list");
if (!fruitList) {
  throw new Error("Fruit list element not found.");
}

function createCell(className: string, text: string): HTMLSpanElement {
  const cell = document.createElement("span");
  cell.className = className;
  cell.textContent = text;
  return cell;
}

fruits.forEach((fruit, index) => {
  const listItem = document.createElement("li");
  const color = createCell("fruit-color", fruit.color);
  color.dataset.color = fruit.color;

  listItem.append(
    createCell("fruit-index", String(index + 1).padStart(2, "0")),
    createCell("fruit-name", fruit.name),
    createCell("fruit-weight", `${fruit.weight}g`),
    color,
  );
  fruitList.appendChild(listItem);
});
