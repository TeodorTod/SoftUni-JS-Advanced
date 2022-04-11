import { html } from '../../node_modules/lit-html/lit-html.js';
import * as gameService from '../api/games.js';
import { createSumbitHandler } from '../util.js';


const editTemplate = (game, onSubmit) => html`
<section id="editPage">
            <form @submit=${onSubmit} class="editForm">
                <img src="./images/editpage-dog.jpg">
                <div>
                    <h2>Edit PetPal</h2>
                    <div class="name">
                        <label for="name">Name:</label>
                        <input name="name" id="name" type="text" .value=${game.name}>
                    </div>
                    <div class="breed">
                        <label for="breed">Breed:</label>
                        <input name="breed" id="breed" type="text" .value=${game.breed}>
                    </div>
                    <div class="Age">
                        <label for="age">Age:</label>
                        <input name="age" id="age" type="text" .value=${game.age}>
                    </div>
                    <div class="weight">
                        <label for="weight">Weight:</label>
                        <input name="weight" id="weight" type="text" .value=${game.weight}>
                    </div>
                    <div class="image">
                        <label for="image">Image:</label>
                        <input name="image" id="image" type="text" .value=${game.image}>
                    </div>
                    <button class="btn" type="submit">Edit Pet</button>
                </div>
            </form>
        </section>
`;

export async function editPage(ctx) {
    const gameId = ctx.params.id;
    const game = await gameService.getById(gameId);

    ctx.render(editTemplate(game, createSumbitHandler(ctx, onSubmit)));
}

async function onSubmit(ctx, data, event) {
    const gameId = ctx.params.id;
    if (Object.values(data).some(f => f == '')) {
        return alert('All fields are required!');
    }
   
   await gameService.update(gameId, {
     name: data.name,
     breed: data.breed,
     age: data.age,
     weight: data.weight,
     image: data.image
   });
 
   event.target.reset();
    ctx.page.redirect('/details/' + gameId);
 }