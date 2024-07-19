// Glue B/w View and Model
// Controller UI I/O

import readAllProducts from "../SCRIPTS/SERVICES/PRODUCT_OP.JS";

/*
<div class="col-4">
                <div class="card" style="width: 18rem;">
                    <img src="https://img.freepik.com/free-photo/top-view-pepperoni-pizza-with-mushroom-sausages-bell-pepper-olive-corn-black-wooden_141793-2158.jpg" class="card-img-top" alt="...">
                    <div class="card-body">
                      <h5 class="card-title">Card title</h5>
                      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                      <a href="#" class="btn btn-primary">Add to Cart</a>
                    </div>
                  </div>
                </div>
*/

function addToCart(){
    console.log("Add to Cart Call ", this);
}

function printPizza(product){
    const colDiv = document.createElement('div'); //<div>
    colDiv.className = 'col-4';
    const cardDiv = document.createElement('div');
    cardDiv.className = 'card';
    cardDiv.style = 'width: 18rem;';
    colDiv.appendChild(cardDiv);
    const img = document.createElement('img');
    img.src = product.url;
    cardDiv.appendChild(img);
    const cardBody = document.createElement('div');
    cardBody.className = 'card-body';
    cardDiv.appendChild(cardBody);
    const h5 = document.createElement('h5');
    h5.className  = 'card-title';
    h5.innerText = product.name +" Rs "+product.price;
    const pTag = document.createElement('p');
    pTag.innerText  = product.desc;
    pTag.className = 'card-text';
    const button = document.createElement('button');
    button.className = 'btn btn-primary';
    button.innerText = 'Add to Cart';
    button.addEventListener('click',addToCart);
    cardBody.appendChild(h5);
    cardBody.appendChild(pTag);
    cardBody.appendChild(button);
    const outputDiv = document.querySelector('#output');
    outputDiv.appendChild(colDiv);


}

async function showProducts(){
    const products = await readAllProducts();
    console.log('Controller rec ', products);
    for(let product of products){
        printPizza(product);
    }
}
showProducts();


