import { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import { 
  Home, 
  Info, 
  ShoppingBag, 
  BarChart2, 
  Sun, 
  Moon, 
  LogIn, 
  LogOut, 
  Menu, 
  X,
  Route,
  Atom
} from 'lucide-react';

const Navbar = ({ isAuthenticated, setIsAuthenticated }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(() => {
    // Check if user has a theme preference in localStorage
    const savedTheme = localStorage.getItem('theme');
    return savedTheme === 'dark' || 
      (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches);
  });

  useEffect(() => {
    // Update the document class when dark mode changes
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <nav className="bg-white dark:bg-gray-900 shadow-md border-b border-gray-100 dark:border-gray-800 sticky top-0 z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <Link to="/" className="flex items-center text-lg font-semibold text-gray-900 dark:text-white">
                <div className="relative h-8 w-8 mr-2">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Atom className="h-8 w-8 text-blue-400" />
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Route className="h-5 w-5 text-red-400" />
                  </div>
                </div>
                <span className="text-blue-600 dark:text-blue-400">React</span> Router
              </Link>
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-4">
              <NavLink 
                to="/" 
                className={({ isActive }) => 
                  isActive 
                    ? "border-blue-500 dark:border-blue-400 text-gray-900 dark:text-white inline-flex items-center px-3 pt-1 border-b-2 text-sm font-medium" 
                    : "border-transparent text-gray-600 dark:text-gray-300 hover:border-gray-300 dark:hover:border-gray-600 hover:text-gray-800 dark:hover:text-gray-100 inline-flex items-center px-3 pt-1 border-b-2 text-sm font-medium"
                }
                end
              >
                <Home className="h-4 w-4 mr-1" />
                Home
              </NavLink>
              <NavLink 
                to="/about" 
                className={({ isActive }) => 
                  isActive 
                    ? "border-blue-500 dark:border-blue-400 text-gray-900 dark:text-white inline-flex items-center px-3 pt-1 border-b-2 text-sm font-medium" 
                    : "border-transparent text-gray-600 dark:text-gray-300 hover:border-gray-300 dark:hover:border-gray-600 hover:text-gray-800 dark:hover:text-gray-100 inline-flex items-center px-3 pt-1 border-b-2 text-sm font-medium"
                }
              >
                <Info className="h-4 w-4 mr-1" />
                About
              </NavLink>
              <NavLink 
                to="/products" 
                className={({ isActive }) => 
                  isActive 
                    ? "border-blue-500 dark:border-blue-400 text-gray-900 dark:text-white inline-flex items-center px-3 pt-1 border-b-2 text-sm font-medium" 
                    : "border-transparent text-gray-600 dark:text-gray-300 hover:border-gray-300 dark:hover:border-gray-600 hover:text-gray-800 dark:hover:text-gray-100 inline-flex items-center px-3 pt-1 border-b-2 text-sm font-medium"
                }
              >
                <ShoppingBag className="h-4 w-4 mr-1" />
                Products
              </NavLink>
              <NavLink 
                to="/dashboard" 
                className={({ isActive }) => 
                  isActive 
                    ? "border-blue-500 dark:border-blue-400 text-gray-900 dark:text-white inline-flex items-center px-3 pt-1 border-b-2 text-sm font-medium" 
                    : "border-transparent text-gray-600 dark:text-gray-300 hover:border-gray-300 dark:hover:border-gray-600 hover:text-gray-800 dark:hover:text-gray-100 inline-flex items-center px-3 pt-1 border-b-2 text-sm font-medium"
                }
              >
                <BarChart2 className="h-4 w-4 mr-1" />
                Dashboard
              </NavLink>
            </div>
          </div>
          <div className="hidden sm:ml-6 sm:flex sm:items-center sm:space-x-4">
            {/* Theme toggle button */}
            <button
              type="button"
              onClick={toggleTheme}
              className="p-2 rounded-full text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 dark:focus:ring-offset-gray-900 transition-colors"
              aria-label="Toggle dark mode"
            >
              {isDarkMode ? (
                <Sun className="h-5 w-5" />
              ) : (
                <Moon className="h-5 w-5" />
              )}
            </button>
            
            {/* Login/Logout button */}
            <button
              onClick={() => setIsAuthenticated(!isAuthenticated)}
              className="inline-flex items-center bg-red-500 px-3 py-1.5 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 dark:focus:ring-offset-gray-900 transition-colors"
            >
              {isAuthenticated ? (
                <>
                  <LogOut className="h-4 w-4 mr-1 text-red-500" />
                  Logout
                </>
              ) : (
                <>
                  <LogIn className="h-4 w-4 mr-1 text-green-500" />
                  Login
                </>
              )}
            </button>
          </div>
          
          {/* Mobile menu button */}
          <div className="flex items-center sm:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500 dark:focus:ring-offset-gray-900"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu, show/hide based on menu state */}
      <div className={`${isMenuOpen ? 'block' : 'hidden'} sm:hidden`}>
        <div className="pt-2 pb-3 space-y-1">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "bg-blue-50 dark:bg-gray-800 border-l-4 border-blue-500 dark:border-blue-400 text-blue-700 dark:text-blue-400 block pl-3 pr-4 py-2 text-base font-medium"
                : "border-l-4 border-transparent text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 hover:border-gray-300 dark:hover:border-gray-600 block pl-3 pr-4 py-2 text-base font-medium"
            }
            end
            onClick={() => setIsMenuOpen(false)}
          >
            <div className="flex items-center">
              <Home className="h-5 w-5 mr-2" />
              Home
            </div>
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive
                ? "bg-blue-50 dark:bg-gray-800 border-l-4 border-blue-500 dark:border-blue-400 text-blue-700 dark:text-blue-400 block pl-3 pr-4 py-2 text-base font-medium"
                : "border-l-4 border-transparent text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 hover:border-gray-300 dark:hover:border-gray-600 block pl-3 pr-4 py-2 text-base font-medium"
            }
            onClick={() => setIsMenuOpen(false)}
          >
            <div className="flex items-center">
              <Info className="h-5 w-5 mr-2" />
              About
            </div>
          </NavLink>
          <NavLink
            to="/products"
            className={({ isActive }) =>
              isActive
                ? "bg-blue-50 dark:bg-gray-800 border-l-4 border-blue-500 dark:border-blue-400 text-blue-700 dark:text-blue-400 block pl-3 pr-4 py-2 text-base font-medium"
                : "border-l-4 border-transparent text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 hover:border-gray-300 dark:hover:border-gray-600 block pl-3 pr-4 py-2 text-base font-medium"
            }
            onClick={() => setIsMenuOpen(false)}
          >
            <div className="flex items-center">
              <ShoppingBag className="h-5 w-5 mr-2" />
              Products
            </div>
          </NavLink>
          <NavLink
            to="/dashboard"
            className={({ isActive }) =>
              isActive
                ? "bg-blue-50 dark:bg-gray-800 border-l-4 border-blue-500 dark:border-blue-400 text-blue-700 dark:text-blue-400 block pl-3 pr-4 py-2 text-base font-medium"
                : "border-l-4 border-transparent text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 hover:border-gray-300 dark:hover:border-gray-600 block pl-3 pr-4 py-2 text-base font-medium"
            }
            onClick={() => setIsMenuOpen(false)}
          >
            <div className="flex items-center">
              <BarChart2 className="h-5 w-5 mr-2" />
              Dashboard
            </div>
          </NavLink>
        </div>
        <div className="pt-4 pb-3 border-t border-gray-200 dark:border-gray-700">
          <div className="flex items-center justify-between px-4">
            <div className="flex items-center">
              <button
                onClick={toggleTheme}
                className="p-1 rounded-full text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 dark:focus:ring-offset-gray-900"
              >
                {isDarkMode ? (
                  <Sun className="h-6 w-6" />
                ) : (
                  <Moon className="h-6 w-6" />
                )}
              </button>
              <span className="ml-3 text-sm text-gray-600 dark:text-gray-300">
                {isDarkMode ? 'Light Mode' : 'Dark Mode'}
              </span>
            </div>
            <button
              onClick={() => {
                setIsAuthenticated(!isAuthenticated);
                setIsMenuOpen(false);
              }}
              className="ml-auto flex-shrink-0 bg-blue-600 p-1 rounded-full text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 dark:focus:ring-offset-gray-900"
            >
              {isAuthenticated ? (
                <LogOut className="h-6 w-6" />
              ) : (
                <LogIn className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

Navbar.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  setIsAuthenticated: PropTypes.func.isRequired
};

export default Navbar;
