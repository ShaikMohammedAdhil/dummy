import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight, ShoppingCart } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import type { Product } from '../../types/product';

interface ProductCarouselProps {
  products: Product[];
}

const ProductCarousel: React.FC<ProductCarouselProps> = ({ products }) => {
  const { addItem } = useCart();
  const [startIndex, setStartIndex] = React.useState(0);
  
  const displayCount = {
    sm: 2,
    md: 3,
    lg: 5
  };
  
  const [visibleCount, setVisibleCount] = React.useState(displayCount.lg);
  
  React.useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setVisibleCount(displayCount.sm);
      } else if (window.innerWidth < 1024) {
        setVisibleCount(displayCount.md);
      } else {
        setVisibleCount(displayCount.lg);
      }
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  
  const handlePrevious = () => {
    setStartIndex((prev) => Math.max(0, prev - 1));
  };
  
  const handleNext = () => {
    setStartIndex((prev) => Math.min(products.length - visibleCount, prev + 1));
  };
  
  const visibleProducts = products.slice(startIndex, startIndex + visibleCount);
  const canGoLeft = startIndex > 0;
  const canGoRight = startIndex + visibleCount < products.length;
  
  return (
    <div className="relative">
      {canGoLeft && (
        <button 
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full shadow-md p-2 hover:bg-gray-100 transition-colors"
          onClick={handlePrevious}
        >
          <ChevronLeft size={20} />
        </button>
      )}
      
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
        {visibleProducts.map((product) => (
          <div key={product.id} className="product-card">
            <Link to={`/product/${product.id}`} className="block relative pb-[100%]">
              <img 
                src={product.image} 
                alt={product.name} 
                className="absolute inset-0 w-full h-full object-contain"
              />
            </Link>
            
            <div className="mt-auto">
              <Link to={`/product/${product.id}`} className="product-title">
                {product.name}
              </Link>
              
              <div className="flex items-center mt-1">
                <span className="product-price">₹{product.price.toLocaleString()}</span>
                {product.originalPrice && (
                  <span className="text-gray-400 text-xs line-through ml-2">
                    ₹{product.originalPrice.toLocaleString()}
                  </span>
                )}
              </div>
              
              {product.originalPrice && (
                <div className="product-discount">
                  {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% off
                </div>
              )}
              
              <button 
                onClick={() => addItem(product)}
                className="mt-3 w-full py-2 px-4 bg-flipkart-yellow text-gray-800 font-medium rounded-sm flex items-center justify-center hover:bg-yellow-500 transition-colors"
              >
                <ShoppingCart size={16} className="mr-2" />
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
      
      {canGoRight && (
        <button 
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full shadow-md p-2 hover:bg-gray-100 transition-colors"
          onClick={handleNext}
        >
          <ChevronRight size={20} />
        </button>
      )}
    </div>
  );
};

export default ProductCarousel;