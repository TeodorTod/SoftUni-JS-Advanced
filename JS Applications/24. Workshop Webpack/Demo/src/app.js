import '..n/static/site.css'

import { html, render } from "lit-html";

import { sum, product } from "./util.js";

const homeTemplate = (a, b) => html`
<h1>Hello World</h1>
<p>Sum: ${a}</p>
<p>Product: ${b}</p>
`;

const root = document.body;

render(homeTemplate(sum(4, 7), product(3, 4)), root);
