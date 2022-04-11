import { html, nothing } from '../../node_modules/lit-html/lit-html.js';
import * as gamesService from '../api/games.js';


const detailsTemplate = (game, onDelete) => html`
<section id="detailsPage">
            <div class="details">
                <div class="animalPic">
                    <img src="${game.image}">
                </div>
                <div>
                    <div class="animalInfo">
                        <h1>Name: ${game.name}</h1>
                        <h3>Breed: ${game.breed}</h3>
                        <h4>Age: ${game.age}</h4>
                        <h4>Weight: ${game.weight}</h4>
                        <h4 class="donation">Donation: 0$</h4>
                    </div>
                    <!-- if there is no registered user, do not display div-->

                    ${game.isOwner 
                        ? html`<div class="actionBtn">
                        
                        <a href="/edit/${game._id}" class="edit">Edit</a>
                        <a @click=${onDelete} href="javascript:void(0)" class="remove">Delete</a>
                        
                        <a href="#" class="donate">Donate</a>
                    </div>`
                    : nothing}
                    
                </div>
            </div>
        </section>
`;

export async function detailsPage(ctx) {
    const gameId = ctx.params.id;
    const game = await gamesService.getById(gameId);

    if (ctx.user) {
        game.isOwner = ctx.user._id == game._ownerId;
    }
    ctx.render(detailsTemplate(game, onDelete));

    async function onDelete() {
       const choise = confirm('Are you sure to want to delete this game?');
       if (choise) {
           await gamesService.deleteById(gameId);
           ctx.page.redirect('/');
       } 
       
    }
}