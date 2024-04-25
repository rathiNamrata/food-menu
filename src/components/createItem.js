// import createButton from './createButton.js';

const createItem = (item) => {
    // create article
    const article = document.createElement('article');
    article.classList.add('menu-item', item.category);

    // create img
    const img = document.createElement('img');
    img.classList.add('photo');
    img.src = item.src;
    img.alt = item.title;

    // create a div for item info
    const itemInfo = document.createElement('div');
    itemInfo.classList.add('item-info');

    article.append(img, itemInfo);

    // create a header
    const header = document.createElement('header');

    // create title
    const title = document.createElement('h4');
    title.innerText = item.title;

    // create price
    const price = document.createElement('h4');
    price.classList.add('price');
    price.innerText = `$${item.price}`;

    // append title and price
    header.append(title, price);

    // create description
    const description = document.createElement('p');
    description.classList.add('item-text');
    description.innerText = item.desc;

    // append header and description
    itemInfo.append(header, description);

    return article;
};

export default createItem;