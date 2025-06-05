import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Search, ShoppingCart, User, Menu, X, ChevronDown } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import { useCart } from '../../context/CartContext';

const Header: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showCategories, setShowCategories] = useState(false);
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const navigate = useNavigate();
  const { isAuthenticated, user, isAdmin, logout } = useAuth();
  const { totalItems } = useCart();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/products/all?search=${encodeURIComponent(searchQuery)}`);
    }
  };

  const categories = [
    { name: 'Clothes', path: '/products/clothes' },
    { name: 'Shoes', path: '/products/shoes' },
    { name: 'Watches', path: '/products/watches' },
    { name: 'Groceries', path: '/products/groceries' },
  ];

  const handleLogout = () => {
    logout();
    setShowProfileMenu(false);
    navigate('/');
  };

  return (
    <header className="bg-flipkart-blue shadow-md">
      <div className="container-custom mx-auto">
        {/* Desktop Header */}
        <div className="hidden md:flex items-center justify-between py-3">
          <div className="flex items-center space-x-8">
            <Link to="/" className="flex flex-col items-center">
              <img src="/flipkart-icon.svg" alt="Flipkart" className="h-8 w-auto" />
              <span className="text-white text-xs italic">Explore Plus</span>
            </Link>
            
            <form onSubmit={handleSearch} className="relative w-96">
              <input
                type="text"
                placeholder="Search for products, brands and more"
                className="input-field py-2 px-4 pr-10 w-full"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button type="submit" className="absolute right-3 top-1/2 transform -translate-y-1/2">
                <Search size={18} className="text-flipkart-blue" />
              </button>
            </form>
          </div>
          
          <div className="flex items-center space-x-6">
            {isAuthenticated ? (
              <div className="relative">
                <button 
                  className="flex items-center text-white"
                  onClick={() => setShowProfileMenu(!showProfileMenu)}
                >
                  <User size={18} className="mr-1" />
                  <span className="text-sm font-medium">{user?.name}</span>
                  <ChevronDown size={16} className="ml-1" />
                </button>
                {showProfileMenu && (
                  <div 
                    className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg overflow-hidden z-20"
                    onMouseLeave={() => setShowProfileMenu(false)}
                  >
                    {isAdmin ? (
                      <Link 
                        to="/admin" 
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        onClick={() => setShowProfileMenu(false)}
                      >
                        Admin Dashboard
                      </Link>
                    ) : (
                      <>
                        <Link 
                          to="/profile" 
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                          onClick={() => setShowProfileMenu(false)}
                        >
                          Profile
                        </Link>
                        <Link 
                          to="/orders" 
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                          onClick={() => setShowProfileMenu(false)}
                        >
                          Orders
                        </Link>
                        <Link 
                          to="/wishlist" 
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                          onClick={() => setShowProfileMenu(false)}
                        >
                          Wishlist
                        </Link>
                      </>
                    )}
                    <button 
                      onClick={handleLogout}
                      className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Logout
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <Link 
                to="/login" 
                className="bg-white text-flipkart-blue px-5 py-1 font-medium rounded hover:bg-gray-100 transition duration-150"
              >
                Login
              </Link>
            )}
            
            <Link to="/cart" className="flex items-center text-white relative">
              <ShoppingCart size={20} className="mr-1" />
              <span className="text-sm font-medium">Cart</span>
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-flipkart-orange text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center cart-badge-animate">
                  {totalItems}
                </span>
              )}
            </Link>
          </div>
        </div>
        
        {/* Mobile Header */}
        <div className="md:hidden flex items-center justify-between py-3">
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-white p-1"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
          
          <Link to="/" className="flex items-center">
            <img src="/flipkart-icon.svg" alt="Flipkart" className="h-8 w-auto" />
          </Link>
          
          <div className="flex items-center space-x-3">
            <Link to="/search" className="text-white">
              <Search size={22} />
            </Link>
            <Link to="/cart" className="text-white relative">
              <ShoppingCart size={22} />
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-flipkart-orange text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </Link>
          </div>
        </div>
        
        {/* Categories Navigation - Desktop */}
        <div className="hidden md:flex items-center justify-between bg-white py-2 px-4">
          {categories.map((category) => (
            <Link 
              key={category.name}
              to={category.path}
              className="flex flex-col items-center group"
            >
              <span className="text-sm font-medium text-gray-800 group-hover:text-flipkart-blue transition-colors duration-200">
                {category.name}
              </span>
            </Link>
          ))}
        </div>
        
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white absolute top-14 left-0 w-full z-30 shadow-lg animate-fade-in">
            <div className="py-3 px-4 border-b">
              {isAuthenticated ? (
                <div className="flex items-center space-x-3 py-2">
                  <User size={20} className="text-flipkart-blue" />
                  <div>
                    <span className="font-medium text-sm">Hi, {user?.name}</span>
                    <div className="flex space-x-4 mt-1">
                      {isAdmin ? (
                        <Link to="/admin\" className="text-xs text-flipkart-blue">Admin Dashboard</Link>
                      ) : (
                        <Link to="/profile" className="text-xs text-flipkart-blue">Profile</Link>
                      )}
                      <button onClick={handleLogout} className="text-xs text-flipkart-blue">Logout</button>
                    </div>
                  </div>
                </div>
              ) : (
                <Link 
                  to="/login" 
                  className="block w-full bg-flipkart-blue text-white text-center py-2 rounded font-medium"
                >
                  Login / Sign Up
                </Link>
              )}
            </div>
            
            <div className="py-2">
              <button 
                onClick={() => setShowCategories(!showCategories)}
                className="flex items-center justify-between w-full p-3 border-b"
              >
                <span className="font-medium">Shop By Category</span>
                <ChevronDown size={18} className={`transition-transform duration-200 ${showCategories ? 'rotate-180' : ''}`} />
              </button>
              
              {showCategories && (
                <div className="animate-slideUp">
                  {categories.map((category) => (
                    <Link 
                      key={category.name}
                      to={category.path}
                      className="block p-3 pl-6 border-b text-gray-700 hover:bg-gray-50"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {category.name}
                    </Link>
                  ))}
                </div>
              )}
              
              <Link to="/orders" className="block p-3 border-b" onClick={() => setIsMenuOpen(false)}>
                My Orders
              </Link>
              <Link to="/wishlist" className="block p-3 border-b" onClick={() => setIsMenuOpen(false)}>
                Wishlist
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;