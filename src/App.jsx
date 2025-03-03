import { Routes, Route, Navigate } from 'react-router-dom'
import { lazy, Suspense, useState } from 'react'
import Navbar from './components/Navbar'

// Pages
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import ProductList from './pages/ProductList'
import ProductDetail from './pages/ProductDetail'
import NotFound from './pages/NotFound'
import Dashboard from './pages/Dashboard'
import DashboardOverview from './pages/dashboard/Overview'
import DashboardStats from './pages/dashboard/Stats'
import DashboardSettings from './pages/dashboard/Settings'
import Search from './pages/Search'
import Profile from './pages/Profile'

// Lazy loaded component example
const LazyComponent = lazy(() => import('./pages/LazyComponent'))

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  // Protected route wrapper component
  const ProtectedRoute = ({ children }) => {
    if (!isAuthenticated) {
      return (
        <div className="p-8 bg-gray-50 dark:bg-gray-900 rounded-lg shadow-sm text-center">
          <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4">Authentication Required</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-4">You need to be logged in to view this page.</p>
          <button 
            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900"
            onClick={() => setIsAuthenticated(true)}
          >
            Login (Demo)
          </button>
        </div>
      )
    }
    return children
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Navbar isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated} />
      
      <main className="container mx-auto px-4 py-8 sm:px-6 lg:px-8 min-h-[calc(100vh-3.5rem)]">
        <Routes>
          {/* Basic Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          
          {/* Routes with Parameters */}
          <Route path="/products" element={<ProductList />} />
          <Route path="/products/:productId" element={<ProductDetail />} />
          
          {/* Nested Routes */}
          <Route path="/dashboard" element={<Dashboard />}>
            <Route index element={<DashboardOverview />} />
            <Route path="stats" element={<DashboardStats />} />
            <Route path="settings" element={<DashboardSettings />} />
          </Route>
          
          {/* Route with Query Parameters */}
          <Route path="/search" element={<Search />} />
          
          {/* Protected Routes */}
          <Route 
            path="/profile" 
            element={
              <ProtectedRoute>
                <Profile />
              </ProtectedRoute>
            } 
          />
          
          <Route 
            path="/admin" 
            element={
              <ProtectedRoute>
                <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
                  <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Admin Page</h1>
                  <p className="text-gray-600 dark:text-gray-300 bg-red-600">This is a protected admin page.</p>
                </div>
              </ProtectedRoute>
            } 
          />
          
          {/* Lazy Loaded Route */}
          <Route 
            path="/lazy" 
            element={
              <Suspense fallback={
                <div className="flex justify-center items-center h-32">
                  <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 dark:border-blue-400"></div>
                </div>
              }>
                <LazyComponent />
              </Suspense>
            } 
          />
          
          {/* Redirect Example */}
          <Route path="/old-page" element={<Navigate to="/about" replace />} />
          
          {/* 404 Route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
