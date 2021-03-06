items_arr = [
  {
    id: 0,
    img_src: "./images/boots.png",
    name: "Ботинки женские",
    description: "Модные ботинки из натурального нубука. Согреют Ваши ноги во время зимних морозов.",
    price: 5000,
    currency: "руб"
  },
  {
    id: 1,
    img_src: "./images/boots.png",
    name: "Ботинки женские",
    description: "Модные ботинки из натурального нубука. Согреют Ваши ноги во время зимних морозов.",
    price: 5000,
    currency: "руб"
  },
  {
    id: 2,
    img_src: "./images/boots.png",
    name: "Ботинки женские",
    description: "Модные ботинки из натурального нубука. Согреют Ваши ноги во время зимних морозов.",
    price: 5000,
    currency: "руб"
  }
];

const htmlFromString = str => document.createRange().createContextualFragment(str);

const createItem = ({ id, img_src, name, description, price, currency}) => {
  return `
  <div class="item" id="item-${id}">
    <img class="item-img" src="${img_src}" alt="${name}" />
    <div class="item-info">
      <div class="item-info_name">${name}</div>
      <div class="item-info_description">${description}</div>
      <div class="price-block">
        <div>
          <span class="item-price">${price.toLocaleString()}</span> <span class="item-currency">${currency}.</span>
        </div>
        <div class="item-cart">
        <i class="fas fa-shopping-cart"></i>
        </div>
      </div>
    </div>
  </div>
  `;
}

const insertItems = () => {
  const wrapper = document.getElementById('itemsWrapper');
  const itemsTemplate = items_arr.reduce((acc, crntItem) => acc += createItem(crntItem), '');
  wrapper.appendChild(htmlFromString(itemsTemplate));
}

document.addEventListener('DOMContentLoaded', insertItems);