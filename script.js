const form = document.getElementById('product-form');
const output = document.getElementById('json-output');
const downloadBtn = document.getElementById('download-btn');

let products = [];

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const name = document.getElementById('name').value;
  const description = document.getElementById('description').value;
  const price = document.getElementById('price').value;
  const image = document.getElementById('image').value;

  const newProduct = {
    id: products.length + 1,
    name,
    description,
    price,
    image
  };

  products.push(newProduct);
  output.textContent = JSON.stringify(products, null, 2);

  form.reset();
});

downloadBtn.addEventListener('click', () => {
  const blob = new Blob([JSON.stringify(products, null, 2)], { type: 'application/json' });
  const link = document.createElement('a');
  link.href = URL.createObjectURL(blob);
  link.download = 'products.json';
  link.click();
});
