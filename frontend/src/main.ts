import type { Fruit } from "./types";

const fruits: Fruit[] = [
  { name: "Banana", weight: 24, color: "Yellow" },
  { name: "Apple", weight: 35, color: "Red" },
  { name: "Mini-Apple", weight: 24, color: "Green" },
  { name: "Lemon", weight: 32, color: "Yellow" },
  { name: "Tomaten", weight: 12, color: "Red" },
];

fruits.forEach((fruit) => {
  console.log(`name: ${fruit.name} - weight: ${fruit.weight}`);
});
