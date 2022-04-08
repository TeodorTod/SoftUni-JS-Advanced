import { html } from '../../node_modules/lit-html/lit-html.js';


const detailsTemplate = () => html`
<section id="listing-details">
            <h1>Details</h1>
            <div class="details-info">
                <img src="/images/audia3.jpg">
                <hr>
                <ul class="listing-props">
                    <li><span>Brand:</span>Audi</li>
                    <li><span>Model:</span>A3</li>
                    <li><span>Year:</span>2018</li>
                    <li><span>Price:</span>25000$</li>
                </ul>

                <p class="description-para">Some description of this car. Lorem ipsum dolor sit amet consectetur
                    adipisicing elit. Sunt voluptate quam nesciunt ipsa veritatis voluptas optio debitis repellat porro
                    sapiente.</p>

                <div class="listings-buttons">
                    <a href="#" class="button-list">Edit</a>
                    <a href="#" class="button-list">Delete</a>
                </div>
            </div>
        </section>
`;

export async function detailsPage(ctx) {
   
    ctx.render(detailsTemplate());
}