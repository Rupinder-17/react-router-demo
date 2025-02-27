import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="space-y-8">
      <div className="text-center mb-10">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">React Router Demo</h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Welcome to the React Router Demo project! This project demonstrates various features of React Router.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 border-b pb-2 border-gray-200 dark:border-gray-700">Basic Navigation</h2>
          <ul className="space-y-2">
            <li>
              <Link to="/about" className="text-blue-600 dark:text-blue-400 hover:underline">About Page</Link>
            </li>
            <li>
              <Link to="/contact" className="text-blue-600 dark:text-blue-400 hover:underline">Contact Page</Link>
            </li>
          </ul>
        </div>
        
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 border-b pb-2 border-gray-200 dark:border-gray-700">Route Parameters</h2>
          <ul className="space-y-2">
            <li>
              <Link to="/products" className="text-blue-600 dark:text-blue-400 hover:underline">Products List</Link>
            </li>
            <li>
              <Link to="/products/1" className="text-blue-600 dark:text-blue-400 hover:underline">Product 1</Link>
            </li>
            <li>
              <Link to="/products/2" className="text-blue-600 dark:text-blue-400 hover:underline">Product 2</Link>
            </li>
          </ul>
        </div>
        
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 border-b pb-2 border-gray-200 dark:border-gray-700">Nested Routes</h2>
          <ul className="space-y-2">
            <li>
              <Link to="/dashboard" className="text-blue-600 dark:text-blue-400 hover:underline">Dashboard</Link>
            </li>
          </ul>
        </div>
        
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 border-b pb-2 border-gray-200 dark:border-gray-700">Protected Routes</h2>
          <ul className="space-y-2">
            <li>
              <Link to="/profile" className="text-blue-600 dark:text-blue-400 hover:underline">Profile (Protected)</Link>
            </li>
            <li>
              <Link to="/admin" className="text-blue-600 dark:text-blue-400 hover:underline">Admin (Protected)</Link>
            </li>
          </ul>
        </div>
        
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 border-b pb-2 border-gray-200 dark:border-gray-700">Other Features</h2>
          <ul className="space-y-2">
            <li>
              <Link to="/search?query=react" className="text-blue-600 dark:text-blue-400 hover:underline">Search with Query Params</Link>
            </li>
            <li>
              <Link to="/lazy" className="text-blue-600 dark:text-blue-400 hover:underline">Lazy Loaded Route</Link>
            </li>
            <li>
              <Link to="/nonexistent" className="text-blue-600 dark:text-blue-400 hover:underline">404 Page (Not Found)</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Home;
