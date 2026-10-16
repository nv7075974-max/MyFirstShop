const products = [
  { id: 1, title: 'Ноутбук 15"',       category: 'Компьютеры', price: 85000 },
  { id: 2, title: 'Монитор 27"',       category: 'Компьютеры', price: 28000 },
  { id: 3, title: 'Клавиатура',        category: 'Аксессуары', price: 6500 },
  { id: 4, title: 'Мышь беспроводная', category: 'Аксессуары', price: 2500 },
  { id: 5, title: 'Саундбар',          category: 'аудиотехника', price: 12000 },
  { id: 6, title: 'Наушники',          category: 'Аксессуары', price: 5499 },
  { id: 7, title: 'Игровой стул',      category: 'Мебель', price: 25000 },
];

const catalog = document.getElementById('catalog');

function renderProducts() {
  catalog.innerHTML = products.map(p => `
    <div class="card">
      <div class="category">${p.category}</div>
      <h3>${p.title}</h3>
      <div class="price">${p.price.toLocaleString('ru-RU')} ₽</div>
      <button data-id="${p.id}">В корзину</button>
    </div>
  `).join('');
}

catalog.addEventListener('click', function(event) {
  if (event.target.tagName === 'BUTTON') {
    const id = Number(event.target.dataset.id);
    const product = products.find(p => p.id === id);

    if (product) {
      console.log(product.title);
    }
  }
});

renderProducts();