import "../scss/main.scss";

// uncomment the lines below to enable PWA
import { registerSW } from "./pwa.js";
registerSW();

const counter = document.querySelector(".glass__counter--js");
const addButton = document.querySelector(".button-add--js");
const removeButton = document.querySelector(".button-remove--js");

const key = new Date().toLocaleString().slice(0, 10);

let currentCounter = 0;

const localStorageValue = localStorage.getItem(key);

if (localStorageValue) currentCounter = localStorageValue;
else currentCounter = localStorage.setItem(key, 0);

counter.innerHTML = currentCounter;

addButton.addEventListener("click", () => {
  currentCounter++;
  counter.innerHTML = currentCounter;
  localStorage.setItem(key, currentCounter);
});

removeButton.addEventListener("click", () => {
  if (currentCounter > 0) currentCounter--;
  counter.innerHTML = currentCounter;
  localStorage.setItem(key, currentCounter);
});
