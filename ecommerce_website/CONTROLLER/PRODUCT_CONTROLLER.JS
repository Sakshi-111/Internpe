import productOperations from "../SCRIPTS/SERVICES/PRODUCT_OP.JS";
 
async function loadPIZZAS(){
    const pizzas=await productOperations.loadProducts();
    console.log(pizzas);
    for(let pizza of pizzas){
        prepareCard(pizza);

    }

}
loadPIZZAS();
/* <div class="card" style="width: 18rem;">
<img src="..." class="card-img-top" alt="...">
<div class="card-body">
  <h5 class="card-title">Card title</h5>
  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  <a href="#" class="btn btn-primary">Go somewhere</a>
</div>
</div> */
function prepareCard(pizza){
    const outputDiv=document.querySelector('#output')


//Create the main column div 
  const colBody=document.createElement('div');
  colBody.className='col-4';
 // Create the main card div
 const card = document.createElement('div');
 card.className = 'card';
 card.style.width = '18rem';

 // Create the image element
 const cardImg = document.createElement('img');
 cardImg.className = 'card-img-top';
 cardImg.src = '...'; // Add the source URL of the image
 cardImg.alt = '...';

 // Create the card body div
 const cardBody = document.createElement('div');
 cardBody.className = 'card-body';

 // Create the card title
 const cardTitle = document.createElement('h5');
 cardTitle.className = 'card-title';
 cardTitle.textContent = pizza.name;

 // Create the card text paragraph
 const cardText = document.createElement('p');
 cardText.className = 'card-text';
 cardText.textContent = 'Some quick example text to build on the card title and make up the bulk of the card\'s content.';

 // Create the button link
 const cardButton = document.createElement('a');
 cardButton.className = 'btn btn-primary';
 cardButton.href = '#';
 cardButton.textContent = 'Go somewhere';
 colBody.appendChild(card);
 card.appendChild(cardBody);
 card.appendChild(cardImg);

 // Append the elements to the card body
 cardBody.appendChild(cardTitle);

 cardBody.appendChild(cardText);
 cardBody.appendChild(cardButton);

 // Append the image and card body to the main card div


 outputDiv.appendChild(colBody);
};
 


