import { html } from '../../node_modules/lit-html/lit-html.js';
import * as gamesService from '../api/games.js';


const catalogTemplate = (games) => html`
            <h2 class="dashboard-title">Services for every animal</h2>
            <div class="animals-dashboard">
                
            ${games.length > 0
                ? games.map(cardTemplate)
                : html` <p class="no-pets">No pets in dashboard</p>`}
                
                
            </div>
        
`;

const cardTemplate = (game) => html`
<div class="animals-board">
                    <article class="service-img">
                        <img class="animal-image-cover" src="${game.image}">
                    </article>
                    <h2 class="name">${game.name}</h2>
                    <h3 class="breed">${game.breed}</h3>
                    <div class="action">
                        <a class="btn" href="/details/${game._id}">Details</a>
                    </div>
                </div>
`;

export async function catalogPage(ctx) {
    const games = await gamesService.getAll();
    ctx.render(catalogTemplate(games));
}