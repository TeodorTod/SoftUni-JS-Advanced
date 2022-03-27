import {
    html,
    render
} from 'https://unpkg.com/lit-html?module';

const articleTemplate = (onSumbit, data) => html `
<article>
<h3>${data.title}</h3>
<div class="content-body">
<p>
${data.content}
</p>
</div>
<footer>Author: ${data.author}</footer>
<div class="comments">
    <form @submit=${onSumbit}>
        <textarea name="comment"></textarea>
        <button>Submit comment</button>
    </form>
</div>
</article>
`;

start();

async function start() {
    const data = await (await fetch("./data.json")).json();

    const div = document.querySelector('.div');
    const renderBtn = document.getElementById('renderBtn');
    renderBtn.addEventListener('click', onRender);

    document.getElementById('change').addEventListener('click', onChange);

    function onRender() {
        const result = data.map(a => articleTemplate(onSumbit.bind(null, a), a));
        render(result, div);
    }

    function onSumbit(article, ev) {
        ev.preventDefault();
        console.log(article);
    }

    function onChange() {
        data.shift();

        data.unshift({
            "title": "Wazaa Article",
            "content": "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident, iste! Quae error, cumque ut inventore deleniti cupiditate accusamus tempora voluptate iusto ad rem",
            "author": "John Stockton",
            "comment": "first Comment"
        });
        onRender();
    }
}