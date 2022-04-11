import { html, render } from '../../node_modules/lit-html/lit-html.js';

const navTemplate = (user) => html`
<nav>
            <section class="logo">
                <img src="./images/logo.png" alt="logo">
            </section>
            <ul>
                <!--Users and Guest-->
                <li><a href="/">Home</a></li>
                <li><a href="/catalog">Dashboard</a></li>
                ${user 
                    ? html`<div id="user">
                <li><a href="/create">Create Postcard</a></li>
                <li><a href="/logout">Logout</a></li>
                </div>`
                : html`<div id="guest">
                <li><a href="/login">Login</a></li>
                <li><a href="/register">Register</a></li>
                </div>`}
                
            </ul>
        </nav>
`;
const header = document.querySelector('.my-header');
const root = document.getElementById('content');

function ctxRender(content) {
    render(content, root);
}

export function addRender(ctx, next) {
    render(navTemplate(ctx.user), header);
    ctx.render = ctxRender;
    next();
}