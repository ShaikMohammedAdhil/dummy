import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  LayoutDashboard, 
  Package, 
  Users, 
  ShoppingBag,
  AlertCircle,
  Plus,
  Search,
  Edit,
  Trash2
} from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { products } from '../data/products';

const AdminDashboard: React.FC = () => {
  const { isAdmin } = useAuth();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('dashboard');
  const [searchQuery, setSearchQuery] = useState('');

  // Redirect if not admin
  React.useEffect(() => {
    if (!isAdmin) {
      navigate('/');
    }
  }, [isAdmin, navigate]);

  const totalProducts = products.length;
  const outOfStock = products.filter(p => !p.inStock).length;
  const lowStock = products.filter(p => p.inStock && Math.random() < 0.2).length; // Mock low stock
  const totalOrders = 156; // Mock data
  const pendingOrders = 23; // Mock data
  const totalCustomers = 89; // Mock data

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    product.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
    (product.brand && product.brand.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="flex">
        {/* Sidebar */}
        <div className="w-64 bg-white shadow-sm h-screen fixed">
          <div className="p-4 border-b">
            <h1 className="text-xl font-bold text-flipkart-blue">Admin Dashboard</h1>
          </div>
          
          <nav className="p-4">
            <button
              onClick={() => setActiveTab('dashboard')}
              className={`flex items-center w-full p-3 rounded-md mb-2 ${
                activeTab === 'dashboard' ? 'bg-blue-50 text-flipkart-blue' : 'text-gray-700 hover:bg-gray-50'
              }`}
            >
              <LayoutDashboard size={18} className="mr-3" />
              <span>Dashboard</span>
            </button>
            
            <button
              onClick={() => setActiveTab('products')}
              className={`flex items-center w-full p-3 rounded-md mb-2 ${
                activeTab === 'products' ? 'bg-blue-50 text-flipkart-blue' : 'text-gray-700 hover:bg-gray-50'
              }`}
            >
              <Package size={18} className="mr-3" />
              <span>Products</span>
            </button>
            
            <button
              onClick={() => setActiveTab('orders')}
              className={`flex items-center w-full p-3 rounded-md mb-2 ${
                activeTab === 'orders' ? 'bg-blue-50 text-flipkart-blue' : 'text-gray-700 hover:bg-gray-50'
              }`}
            >
              <ShoppingBag size={18} className="mr-3" />
              <span>Orders</span>
            </button>
            
            <button
              onClick={() => setActiveTab('customers')}
              className={`flex items-center w-full p-3 rounded-md mb-2 ${
                activeTab === 'customers' ? 'bg-blue-50 text-flipkart-blue' : 'text-gray-700 hover:bg-gray-50'
              }`}
            >
              <Users size={18} className="mr-3" />
              <span>Customers</span>
            </button>
          </nav>
        </div>

        {/* Main Content */}
        <div className="ml-64 flex-1 p-8">
          {activeTab === 'dashboard' && (
            <div>
              <h2 className="text-2xl font-bold mb-6">Dashboard Overview</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                {/* Products Stats */}
                <div className="bg-white rounded-lg shadow-sm p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-semibold">Products</h3>
                    <Package className="text-flipkart-blue" size={24} />
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Total Products</span>
                      <span className="font-semibold">{totalProducts}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Out of Stock</span>
                      <span className="font-semibold text-red-500">{outOfStock}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Low Stock</span>
                      <span className="font-semibold text-orange-500">{lowStock}</span>
                    </div>
                  </div>
                </div>

                {/* Orders Stats */}
                <div className="bg-white rounded-lg shadow-sm p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-semibold">Orders</h3>
                    <ShoppingBag className="text-flipkart-blue" size={24} />
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Total Orders</span>
                      <span className="font-semibold">{totalOrders}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Pending</span>
                      <span className="font-semibold text-orange-500">{pendingOrders}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Completed</span>
                      <span className="font-semibold text-green-500">{totalOrders - pendingOrders}</span>
                    </div>
                  </div>
                </div>

                {/* Customers Stats */}
                <div className="bg-white rounded-lg shadow-sm p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-semibold">Customers</h3>
                    <Users className="text-flipkart-blue" size={24} />
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Total Customers</span>
                      <span className="font-semibold">{totalCustomers}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">New (This Month)</span>
                      <span className="font-semibold text-green-500">12</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Alerts Section */}
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="text-lg font-semibold mb-4">Recent Alerts</h3>
                <div className="space-y-4">
                  {outOfStock > 0 && (
                    <div className="flex items-start text-red-600">
                      <AlertCircle size={20} className="mr-2 flex-shrink-0" />
                      <span>{outOfStock} products are currently out of stock</span>
                    </div>
                  )}
                  {lowStock > 0 && (
                    <div className="flex items-start text-orange-600">
                      <AlertCircle size={20} className="mr-2 flex-shrink-0" />
                      <span>{lowStock} products are running low on stock</span>
                    </div>
                  )}
                  {pendingOrders > 0 && (
                    <div className="flex items-start text-blue-600">
                      <AlertCircle size={20} className="mr-2 flex-shrink-0" />
                      <span>{pendingOrders} orders pending processing</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}

          {activeTab === 'products' && (
            <div>
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold">Products</h2>
                <button className="bg-flipkart-blue text-white px-4 py-2 rounded-md flex items-center">
                  <Plus size={18} className="mr-2" />
                  Add Product
                </button>
              </div>

              <div className="bg-white rounded-lg shadow-sm p-6">
                <div className="flex justify-between items-center mb-6">
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Search products..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="pl-10 pr-4 py-2 border rounded-md w-64"
                    />
                    <Search size={18} className="absolute left-3 top-2.5 text-gray-400" />
                  </div>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left py-3 px-4">Product</th>
                        <th className="text-left py-3 px-4">Category</th>
                        <th className="text-left py-3 px-4">Price</th>
                        <th className="text-left py-3 px-4">Stock Status</th>
                        <th className="text-left py-3 px-4">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {filteredProducts.map((product) => (
                        <tr key={product.id} className="border-b">
                          <td className="py-3 px-4">
                            <div className="flex items-center">
                              <img 
                                src={product.image} 
                                alt={product.name} 
                                className="w-12 h-12 object-cover rounded"
                              />
                              <div className="ml-3">
                                <div className="font-medium">{product.name}</div>
                                <div className="text-sm text-gray-500">{product.brand}</div>
                              </div>
                            </div>
                          </td>
                          <td className="py-3 px-4">{product.category}</td>
                          <td className="py-3 px-4">₹{product.price.toLocaleString()}</td>
                          <td className="py-3 px-4">
                            <span className={`px-2 py-1 rounded-full text-xs ${
                              product.inStock 
                                ? 'bg-green-100 text-green-800' 
                                : 'bg-red-100 text-red-800'
                            }`}>
                              {product.inStock ? 'In Stock' : 'Out of Stock'}
                            </span>
                          </td>
                          <td className="py-3 px-4">
                            <div className="flex space-x-2">
                              <button className="text-blue-600 hover:text-blue-800">
                                <Edit size={18} />
                              </button>
                              <button className="text-red-600 hover:text-red-800">
                                <Trash2 size={18} />
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'orders' && (
            <div>
              <h2 className="text-2xl font-bold mb-6">Orders</h2>
              <div className="bg-white rounded-lg shadow-sm p-6">
                <p className="text-gray-500">Order management coming soon...</p>
              </div>
            </div>
          )}

          {activeTab === 'customers' && (
            <div>
              <h2 className="text-2xl font-bold mb-6">Customers</h2>
              <div className="bg-white rounded-lg shadow-sm p-6">
                <p className="text-gray-500">Customer management coming soon...</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;