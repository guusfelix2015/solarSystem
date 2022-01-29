const button = document.querySelector("button");
const planetselect = document.querySelector("#selectPlanet");
const input = document.querySelector("input");
const flexItem = document.querySelector("#flexItem");
const description = document.querySelector("#description");
const imgItem = document.querySelector("img");

const clearResults = () => {
  flexItem.innerHTML = "";
  imgItem.src = "";
};

const create = (value, selectInput, factor) => {
  const massOfPlanet = value * factor;
  imgItem.src = `./images/${selectInput}.png`;
  imgItem.style.opacity = "0";
  const div = document.createElement("div");
  div.style.opacity = "0";
  div.textContent = `O peso neste planeta é de ${massOfPlanet}Kg`;
  div.className = "item1";
  flexItem.appendChild(div);
  description.appendChild(imgItem);
  setTimeout(() => {
    div.style.opacity = "1";
    imgItem.style.opacity = "1";
  }, 9);
};

const planets = [
  {
    name: "mercury",
    factor: 0.38,
  },
  {
    name: "vanus",
    factor: 0.91,
  },
  {
    name: "earth",
    factor: 1,
  },
  {
    name: "mars",
    factor: 0.38,
  },
  {
    name: "jupiter",
    factor: 2.34,
  },
  {
    name: "saturn",
    factor: 1.06,
  },
  {
    name: "uranus",
    factor: 0.92,
  },
  {
    name: "neptune",
    factor: 1.19,
  },
  {
    name: "pluto",
    factor: 0.06,
  },
];

button.addEventListener("click", (event) => {
  clearResults();
  let chosenPlanet = null;
  planets.forEach((planet) => {
    if (planet.name === planetselect.value) return (chosenPlanet = planet);
  });
  const { value } = input;
  create(value, chosenPlanet.name, chosenPlanet.factor);
});
