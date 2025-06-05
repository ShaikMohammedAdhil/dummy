import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import CategorySection from '../components/home/CategorySection';
import ProductCarousel from '../components/home/ProductCarousel';
import Banner from '../components/home/Banner';
import { featuredProducts, newArrivals, topDeals } from '../data/products';

const HomePage: React.FC = () => {
  return (
    <div className="animate-fadeIn">
      {/* Main Banner */}
      <Banner />
      
      {/* Categories Section */}
      <section className="py-8 bg-white">
        <div className="container-custom">
          <CategorySection />
        </div>
      </section>
      
      {/* Deals of the Day */}
      <section className="py-8 bg-gray-50">
        <div className="container-custom">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-800">Deals of the Day</h2>
            <Link 
              to="/products/deals" 
              className="flex items-center text-flipkart-blue font-medium hover:underline"
            >
              View All <ChevronRight size={16} />
            </Link>
          </div>
          
          <ProductCarousel products={topDeals} />
        </div>
      </section>
      
      {/* Featured Products */}
      <section className="py-8 bg-white">
        <div className="container-custom">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-800">Featured Products</h2>
            <Link 
              to="/products/featured" 
              className="flex items-center text-flipkart-blue font-medium hover:underline"
            >
              View All <ChevronRight size={16} />
            </Link>
          </div>
          
          <ProductCarousel products={featuredProducts} />
        </div>
      </section>
      
      {/* New Arrivals */}
      <section className="py-8 bg-gray-50">
        <div className="container-custom">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-800">New Arrivals</h2>
            <Link 
              to="/products/new" 
              className="flex items-center text-flipkart-blue font-medium hover:underline"
            >
              View All <ChevronRight size={16} />
            </Link>
          </div>
          
          <ProductCarousel products={newArrivals} />
        </div>
      </section>
      
      {/* Features/Benefits Section */}
      <section className="py-10 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="flex flex-col items-center text-center p-4">
              <img 
                src="https://rukminim2.flixcart.com/www/240/240/promos/16/05/2019/d438a32e-765a-4d8b-b4a6-520b560971e8.png" 
                alt="Fast Delivery" 
                className="w-16 h-16 mb-4"
              />
              <h3 className="text-lg font-semibold mb-2">Fast Delivery</h3>
              <p className="text-gray-600 text-sm">Guaranteed delivery within 24-48 hours</p>
            </div>
            
            <div className="flex flex-col items-center text-center p-4">
              <img 
                src="https://rukminim2.flixcart.com/www/240/240/promos/16/05/2019/08dddd8d-162c-4e51-ae39-8586cdb273d1.png" 
                alt="Secure Payment" 
                className="w-16 h-16 mb-4"
              />
              <h3 className="text-lg font-semibold mb-2">Secure Payment</h3>
              <p className="text-gray-600 text-sm">Multiple secure payment options</p>
            </div>
            
            <div className="flex flex-col items-center text-center p-4">
              <img 
                src="https://rukminim2.flixcart.com/www/240/240/promos/16/05/2019/c7db5609-2243-4a74-95c6-0e2b4a8e4fac.png" 
                alt="Easy Returns" 
                className="w-16 h-16 mb-4"
              />
              <h3 className="text-lg font-semibold mb-2">Easy Returns</h3>
              <p className="text-gray-600 text-sm">10-day easy return policy on most items</p>
            </div>
            
            <div className="flex flex-col items-center text-center p-4">
              <img 
                src="https://rukminim2.flixcart.com/www/240/240/promos/16/05/2019/6e4c6f39-bdfc-4816-b8a7-78136a6bf0df.png" 
                alt="24/7 Support" 
                className="w-16 h-16 mb-4"
              />
              <h3 className="text-lg font-semibold mb-2">24/7 Support</h3>
              <p className="text-gray-600 text-sm">Customer support available round the clock</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;