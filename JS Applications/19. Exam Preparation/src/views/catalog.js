import { html } from '../../node_modules/lit-html/lit-html.js';
import * as gamesService from '../api/games.js';


const catalogTemplate = (games) => html`
<section id="car-listings">
            <h1>Car Listings</h1>
            <div class="listings">

                ${games.length > 0
                    ? games.map(cardTemplate) 
                    : html`<p class="no-cars">No cars in database.</p>`}
            </div>
        </section>
`;

const cardTemplate = (game) => html`
<div class="listing">
                    <div class="preview">
                        <img src="${game.imageUrl}">
                    </div>
                    <h2>${game.brand} ${game.model}</h2>
                    <div class="info">
                        <div class="data-info">
                            <h3>Year: ${game.year}</h3>
                            <h3>Price: ${game.price} $</h3>
                        </div>
                        <div class="data-buttons">
                            <a href="/details/${game._id}" class="button-carDetails">Details</a>
                        </div>
                    </div>
                </div>
`;


export async function catalogPage(ctx) {
    const games = await gamesService.getAll();
    ctx.render(catalogTemplate(games));
}