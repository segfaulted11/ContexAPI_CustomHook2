const ProductTable = ({ products }) => {
  //receving the 'product' array.

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>No.</th>
            <th>Product</th>
            <th>Price</th>
            <th>Quantity</th>
          </tr>
        </thead>
        <tbody>
          {products.map((eachProductObj, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{eachProductObj.name}</td>
              <td>{eachProductObj.price}</td>
              <td>{eachProductObj.quantity}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductTable;
