import { useParams, Link, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const products = [
  { id: 1, name: 'Product 1', description: 'This is product 1', price: '$19.99' },
  { id: 2, name: 'Product 2', description: 'This is product 2', price: '$29.99' },
  { id: 3, name: 'Product 3', description: 'This is product 3', price: '$39.99' },
  { id: 4, name: 'Product 4', description: 'This is product 4', price: '$49.99' },
  { id: 5, name: 'Product 5', description: 'This is product 5', price: '$59.99' },
];

const ProductDetail = () => {
  const { productId } = useParams();
  const navigate = useNavigate();
  
  // Convert productId to number for comparison
  const id = parseInt(productId, 10);
  const product = products.find(p => p.id === id);
  
  // Redirect to products page if product not found
  useEffect(() => {
    if (!product) {
      navigate('/products', { replace: true });
    }
  }, [product, navigate]);
  
  if (!product) {
    return <div>Loading...</div>;
  }
  
  return (
    <div className="page">
      <h1>{product.name}</h1>
      <div className="product-detail">
        <p><strong>ID:</strong> {product.id}</p>
        <p><strong>Description:</strong> {product.description}</p>
        <p><strong>Price:</strong> {product.price}</p>
      </div>
      
      <div className="navigation">
        <Link to="/products">Back to Products</Link>
        <Link to="/">Back to Home</Link>
      </div>
    </div>
  );
};

export default ProductDetail;
