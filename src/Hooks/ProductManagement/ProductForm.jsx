const handleOnSubmit = (event) =>{
event.preventDefault();
const name = event.target.name.value;
const price = event.target.price.value;
const quantity = event.target.quantity.value;

const newProduct = {
    name,
    price,
    quantity,
}
console.log(newProduct)
}

const ProductForm = () => {
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
        </div>
    );
};

export default ProductForm;