import { renderTemplate } from "./engine.js";

async function start() {
  const data = await (await fetch("./data.json")).json();
  const template = await (await fetch("./article.html")).text();

  const main = document.querySelector('main');

  main.innerHTML = data.map(a => renderTemplate(template, a)).join('');
}
start();
