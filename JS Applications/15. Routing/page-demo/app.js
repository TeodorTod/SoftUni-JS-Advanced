import page from "//unpkg.com/page/page.mjs";


function homePage(ctx, next) {
    console.log(ctx);
    console.log(next);
    main.innerHTML = '<h2>Home Page</h2>';
}
function catalogPage() {
    main.innerHTML = '<h2>Catalog Page</h2>';
}
function aboutPage() {
    main.innerHTML = '<h2>About Page</h2>';
}

function detailsPage() {
    main.innerHTML = '<h2>Product</h2>';
}
    


const main = document.querySelector('main');


page('/home', homePage);
page('/catalog', catalogPage);
page('/catalog/:id', detailsPage);
page('/about', aboutPage);

page.redirect('/', '/home');
page.start();

