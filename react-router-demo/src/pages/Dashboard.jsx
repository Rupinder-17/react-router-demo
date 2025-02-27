import { Link, Outlet, useLocation } from 'react-router-dom';

const Dashboard = () => {
  const location = useLocation();
  const currentPath = location.pathname;
  
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm overflow-hidden">
      <div className="p-6 border-b border-gray-200 dark:border-gray-700">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Dashboard</h1>
        <p className="text-gray-600 dark:text-gray-300 mt-2">
          This page demonstrates nested routes in React Router.
        </p>
      </div>
      
      <div className="bg-gray-50 dark:bg-gray-900 px-6 py-4 border-b border-gray-200 dark:border-gray-700">
        <nav className="flex space-x-4">
          <Link 
            to="/dashboard" 
            className={`px-3 py-2 rounded-md text-sm font-medium ${
              currentPath === '/dashboard' 
                ? 'bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-200' 
                : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
            }`}
          >
            Overview
          </Link>
          <Link 
            to="/dashboard/stats" 
            className={`px-3 py-2 rounded-md text-sm font-medium ${
              currentPath === '/dashboard/stats' 
                ? 'bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-200' 
                : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
            }`}
          >
            Stats
          </Link>
          <Link 
            to="/dashboard/settings" 
            className={`px-3 py-2 rounded-md text-sm font-medium ${
              currentPath === '/dashboard/settings' 
                ? 'bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-200' 
                : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
            }`}
          >
            Settings
          </Link>
        </nav>
      </div>
      
      <div className="p-6">
        <Outlet />
      </div>
      
      <div className="px-6 py-4 border-t border-gray-200 dark:border-gray-700">
        <Link 
          to="/" 
          className="text-blue-600 dark:text-blue-400 hover:underline"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default Dashboard;
