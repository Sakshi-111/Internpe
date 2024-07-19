// Products CRUD Operation
// C - Create  , R  - Read, U - Update , D - Delete
import Product from '../MODELS/PRODUCT.JS';
import doNetworkCall from './API-CLIENT.JS';
export default async function readAllProducts(){
    try{
        const obj = await doNetworkCall();
        const pizzas = obj['Vegetarian'];
        const pizzaArray = pizzas.map(pizza=>{
            const pizzaObject = new Product(pizza.id,
                 pizza.name?pizza.name:'No Pizza',pizza.menu_description,
                  pizza.price,
                  pizza.assets.product_details_page[0].url);
                  return pizzaObject;
        });
        return pizzaArray;

    }
    catch(err){
        throw err;
    }
}