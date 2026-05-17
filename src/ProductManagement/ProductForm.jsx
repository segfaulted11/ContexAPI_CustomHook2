import { useState } from "react";

const ProductForm = ({handleAddProducts}) => {
//receving the function(handleAddProduct) and deconstructuring it.

//error state 
const [error, setError] = useState("");

const handleOnSubmit = (event) =>{

event.preventDefault();

const name = event.target.name.value;
const price = event.target.price.value;
const quantity = event.target.quantity.value;


if(name.length===0){
setError("Error! Enter a valid name pls!");
return;
}else if(price.length===0){
    setError("Error! Enter a price pls!");
    return;
}else if(price<0){
    setError("Error! Enter a valid price pls!")
    return;
}else if(quantity.length===0){
    setError("Error! Enter the quantity pls!");
    return;
}else if(quantity<0){
    setError("Error! Enter a valid quantity pls!")
    return;
}else{
    setError("");
}

const newProduct = {
    name,
    price,
    quantity,
}

handleAddProducts(newProduct);//array of objects
//sending newProduct(object) as the argument.

}
    return (
        <div>
            <form onSubmit={handleOnSubmit}>
                <input type="text" placeholder="product name" name="name"/>
                <br />
                <input type="text" placeholder="product price" name="price"/>
                <br />
                <input type="text" placeholder="product quantity" name="quantity"/>
                <br />
                <input type="submit" value="submit" />
            </form>
            <b style={{color:"red"}}>{error}</b>
        </div>
    );
};

export default ProductForm;