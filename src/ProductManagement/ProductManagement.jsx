import { useState } from "react";
import ProductForm from "./ProductForm";
import ProductTable from "./ProductTable";

const ProductManagement = () => {

    //declaring state
    const [product, setProduct] = useState([]);

    //state handler function 
    const handleAddProduct = (newProduct) => {
        const newProducts = [...product,newProduct];
        setProduct(newProducts);
    }
    return (
        <div>

{/* passing the function as props for storing the products (objects of products containing name,price and quantity of each product)*/}
<ProductForm handleAddProducts={handleAddProduct}/>

{/* passing the product variable(array consisting all the objects of products) as the props for showing each product that has been stored in the array.*/}
<ProductTable products={product}/>
        </div>
    )
};

export default ProductManagement;