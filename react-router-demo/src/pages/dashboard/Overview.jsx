const DashboardOverview = () => {
  return (
    <div>
      <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Dashboard Overview</h2>
      <p className="text-gray-600 dark:text-gray-300 mb-6">
        This is the main dashboard page. It demonstrates the default nested route.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
        <div className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow-sm">
          <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Users</h3>
          <p className="mt-1 text-2xl font-semibold text-blue-600 dark:text-blue-400">1,234</p>
          <div className="mt-2 flex items-center text-sm text-green-600 dark:text-green-400">
            <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
            </svg>
            <span>12% increase</span>
          </div>
        </div>
        
        <div className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow-sm">
          <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Revenue</h3>
          <p className="mt-1 text-2xl font-semibold text-blue-600 dark:text-blue-400">$12,345</p>
          <div className="mt-2 flex items-center text-sm text-green-600 dark:text-green-400">
            <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
            </svg>
            <span>8% increase</span>
          </div>
        </div>
        
        <div className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow-sm">
          <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Products</h3>
          <p className="mt-1 text-2xl font-semibold text-blue-600 dark:text-blue-400">42</p>
          <div className="mt-2 flex items-center text-sm text-red-600 dark:text-red-400">
            <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
            <span>3% decrease</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardOverview;
