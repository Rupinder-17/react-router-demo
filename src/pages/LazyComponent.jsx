import { Link } from 'react-router-dom';

const LazyComponent = () => {
  return (
    <div className="page lazy-page">
      <h1>Lazy Loaded Component</h1>
      <p>This page demonstrates lazy loading with React Router.</p>
      <p>The component was loaded only when you navigated to this route, not during the initial page load.</p>
      <p>This helps improve initial load performance for large applications.</p>
      <Link to="/">Back to Home</Link>
    </div>
  );
};

export default LazyComponent;
