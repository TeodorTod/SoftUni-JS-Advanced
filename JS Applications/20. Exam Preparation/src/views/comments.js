import { html } from '../../node_modules/lit-html/lit-html.js';
import { createSumbitHandler } from '../util.js';
import * as commentsService from '..api/comments.js';

const commentsTemplate = () => html`
<div class="details-comments">
    <h2>Comments:</h2>
        <ul>
            <li class="comment">
                <p>Content: I rate this one quite highly.</p>
            </li>
            <li class="comment">
                <p>Content: The best game.</p>
            </li>
        </ul>
                <p class="no-comment">No comments.</p>
</div>
`;