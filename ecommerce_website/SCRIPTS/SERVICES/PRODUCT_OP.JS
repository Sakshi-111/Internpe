import product from "../MODELS/PRODUCT.JS";
import doNetworkCall from "./API-CLIENT.JS";
const productOperations={
     async loadProducts(){
        const pizzas= await doNetworkCall();
        const pizzaarray= pizzas['Vegetarian'];
        const productarray=pizzaarray.msp(pizza=>{
            const currentpizza= new product(pizza.id,pizza.name,pizza
                .menu_description,pizza.price,pizza.assests.product_details_page[0].url)
                return currentpizza;
        })
        return productarray;

    }
}
export default productOperations;