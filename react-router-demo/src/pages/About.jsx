import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-sm">
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">About Page</h1>
      <div className="prose dark:prose-invert max-w-none">
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          This is the about page of our React Router demo project.
        </p>
        <p className="text-gray-600 dark:text-gray-300 mb-6">
          React Router is a standard library for routing in React applications. It enables navigation among views in a React application, 
          allows the browser URL to be changed, and keeps the UI in sync with the URL.
        </p>
      </div>
      <Link to="/" className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 dark:focus:ring-offset-gray-800">
        Back to Home
      </Link>
    </div>
  );
};

export default About;
