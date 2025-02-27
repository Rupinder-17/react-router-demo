import { Link } from 'react-router-dom';

const products = [
  { id: 1, name: 'Product 1', description: 'This is product 1' },
  { id: 2, name: 'Product 2', description: 'This is product 2' },
  { id: 3, name: 'Product 3', description: 'This is product 3' },
  { id: 4, name: 'Product 4', description: 'This is product 4' },
  { id: 5, name: 'Product 5', description: 'This is product 5' },
];

const ProductList = () => {
  return (
    <div className="page">
      <h1>Products</h1>
      <p>This page demonstrates route parameters in React Router.</p>
      
      <ul className="product-list">
        {products.map(product => (
          <li key={product.id}>
            <Link to={`/products/${product.id}`}>{product.name}</Link>
          </li>
        ))}
      </ul>
      
      <div className="navigation">
        <Link to="/">Back to Home</Link>
      </div>
    </div>
  );
};

export default ProductList;
