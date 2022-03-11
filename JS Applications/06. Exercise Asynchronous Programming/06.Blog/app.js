function attachEvents() {
    let loadPostBtn = document.getElementById('btnLoadPosts');
    let viewBtn = document.getElementById('btnViewPost');
    
    loadPostBtn.addEventListener('click', getAllPosts);
    viewBtn.addEventListener('click', displayPosts);


}
attachEvents();

async function displayPosts() {
    let selectedID = document.getElementById('posts').value;
    
    const post = await getPostsByID(selectedID);
    const comments = await getCommentsByPostsID(selectedID);

    document.getElementById('post-title').textContent = post.title;
    document.getElementById('post-body').textContent = post.body;
    
    const ulEl = document.getElementById('post-comments');
    ulEl.replaceChildren();

    comments.forEach(c => {
        let liEl = document.createElement('li');
        liEl.textContent = c.text;
        ulEl.appendChild(liEl);
    });
   
}

async function getAllPosts() {
    const url = 'http://localhost:3030/jsonstore/blog/posts';

    const res = await fetch(url);
    const data = await res.json();

    let selectEl = document.getElementById('posts');
    selectEl.replaceChildren();
    Object.values(data).forEach(el => {
        let opitionEl = document.createElement('option');
        opitionEl.value = el.id;
        opitionEl.textContent = el.title;
        selectEl.appendChild(opitionEl);
        
    });
}

async function getPostsByID(postID) {
    const url = 'http://localhost:3030/jsonstore/blog/posts/' + postID;

    const res = await fetch(url);
    const data = await res.json();

    return data;
}

async function getCommentsByPostsID(postId) {
    const url = 'http://localhost:3030/jsonstore/blog/comments';

    const res = await fetch(url);
    const data = await res.json();

    const comments = Object.values(data).filter(c => c.postId == postId);

    return comments;
}