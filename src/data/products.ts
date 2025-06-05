import { Product } from '../types/product';

// Mock products data
export const products: Product[] = [
  // Clothing
  {
    id: 'p1',
    name: 'Men\'s Cotton Slim Fit T-Shirt',
    price: 499,
    originalPrice: 999,
    image: 'https://images.pexels.com/photos/2466756/pexels-photo-2466756.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    images: [
      'https://images.pexels.com/photos/2466756/pexels-photo-2466756.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/2896840/pexels-photo-2896840.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/2896853/pexels-photo-2896853.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    ],
    category: 'clothes',
    description: 'This slim-fit T-shirt is made from soft, breathable cotton and features a classic round neck design. Perfect for casual wear.',
    rating: 4.3,
    ratingCount: 1245,
    brand: 'Nike',
    inStock: true,
    tags: ['men', 't-shirt', 'cotton'],
    featured: true,
  },
  {
    id: 'p2',
    name: 'Women\'s Casual Summer Dress',
    price: 1299,
    originalPrice: 1999,
    image: 'https://images.pexels.com/photos/7679720/pexels-photo-7679720.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    images: [
      'https://images.pexels.com/photos/7679720/pexels-photo-7679720.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/7679740/pexels-photo-7679740.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/7679727/pexels-photo-7679727.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    ],
    category: 'clothes',
    description: 'A beautiful summer dress made from lightweight fabric. Features a floral pattern and a comfortable fit for warm weather.',
    rating: 4.5,
    ratingCount: 835,
    brand: 'Zara',
    inStock: true,
    tags: ['women', 'dress', 'summer'],
    featured: true,
  },
  {
    id: 'p3',
    name: 'Men\'s Slim Fit Formal Shirt',
    price: 899,
    originalPrice: 1499,
    image: 'https://images.pexels.com/photos/297933/pexels-photo-297933.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'clothes',
    rating: 4.2,
    ratingCount: 657,
    brand: 'Arrow',
    inStock: true,
  },
  {
    id: 'p4',
    name: 'Women\'s Hooded Sweatshirt',
    price: 1199,
    originalPrice: 1799,
    image: 'https://images.pexels.com/photos/6311136/pexels-photo-6311136.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'clothes',
    rating: 4.0,
    ratingCount: 412,
    brand: 'Puma',
    inStock: true,
  },
  
  // Shoes
  {
    id: 'p5',
    name: 'Men\'s Running Shoes',
    price: 2499,
    originalPrice: 3999,
    image: 'https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    images: [
      'https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/1598508/pexels-photo-1598508.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/1598507/pexels-photo-1598507.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    ],
    category: 'shoes',
    description: 'Lightweight running shoes with responsive cushioning and breathable mesh upper. Designed for comfort during long runs.',
    rating: 4.6,
    ratingCount: 1823,
    brand: 'Nike',
    inStock: true,
    tags: ['men', 'running', 'sports'],
    featured: true,
  },
  {
    id: 'p6',
    name: 'Women\'s Fashion Heels',
    price: 1799,
    originalPrice: 2499,
    image: 'https://images.pexels.com/photos/3782786/pexels-photo-3782786.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'shoes',
    rating: 4.1,
    ratingCount: 548,
    brand: 'Nine West',
    inStock: true,
  },
  {
    id: 'p7',
    name: 'Men\'s Casual Loafers',
    price: 1499,
    originalPrice: 2299,
    image: 'https://images.pexels.com/photos/2562992/pexels-photo-2562992.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'shoes',
    rating: 4.3,
    ratingCount: 732,
    brand: 'Clarks',
    inStock: true,
  },
  {
    id: 'p8',
    name: 'Women\'s Walking Shoes',
    price: 1999,
    originalPrice: 2799,
    image: 'https://images.pexels.com/photos/1464625/pexels-photo-1464625.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'shoes',
    rating: 4.4,
    ratingCount: 915,
    brand: 'Skechers',
    inStock: true,
  },
  
  // Watches
  {
    id: 'p9',
    name: 'Men\'s Analog Watch with Leather Strap',
    price: 2999,
    originalPrice: 4499,
    image: 'https://images.pexels.com/photos/1697214/pexels-photo-1697214.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    images: [
      'https://images.pexels.com/photos/1697214/pexels-photo-1697214.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/1697213/pexels-photo-1697213.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/1697215/pexels-photo-1697215.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    ],
    category: 'watches',
    description: 'Classic analog watch with a genuine leather strap. Features a sleek design with water resistance up to 30 meters.',
    rating: 4.5,
    ratingCount: 1056,
    brand: 'Fossil',
    inStock: true,
    tags: ['men', 'analog', 'leather'],
    featured: true,
  },
  {
    id: 'p10',
    name: 'Women\'s Rose Gold Watch',
    price: 3499,
    originalPrice: 4999,
    image: 'https://images.pexels.com/photos/9979881/pexels-photo-9979881.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'watches',
    rating: 4.7,
    ratingCount: 872,
    brand: 'Michael Kors',
    inStock: true,
  },
  {
    id: 'p11',
    name: 'Smart Watch with Fitness Tracker',
    price: 5999,
    originalPrice: 7999,
    image: 'https://images.pexels.com/photos/393047/pexels-photo-393047.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'watches',
    rating: 4.4,
    ratingCount: 1543,
    brand: 'Samsung',
    inStock: true,
  },
  {
    id: 'p12',
    name: 'Luxury Automatic Watch',
    price: 9999,
    originalPrice: 12999,
    image: 'https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'watches',
    rating: 4.8,
    ratingCount: 645,
    brand: 'Seiko',
    inStock: true,
  },
  
  // Groceries
  {
    id: 'p13',
    name: 'Organic Fresh Vegetables Combo',
    price: 499,
    originalPrice: 699,
    image: 'https://images.pexels.com/photos/1458694/pexels-photo-1458694.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    images: [
      'https://images.pexels.com/photos/1458694/pexels-photo-1458694.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/2252584/pexels-photo-2252584.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/2252587/pexels-photo-2252587.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    ],
    category: 'groceries',
    description: 'A selection of fresh, organic vegetables including tomatoes, carrots, bell peppers, and leafy greens. Sourced from local farmers.',
    rating: 4.2,
    ratingCount: 328,
    brand: 'Organic Farms',
    inStock: true,
    tags: ['organic', 'vegetables', 'fresh'],
    featured: true,
  },
  {
    id: 'p14',
    name: 'Premium Basmati Rice - 5kg',
    price: 699,
    originalPrice: 899,
    image: 'https://images.pexels.com/photos/4110251/pexels-photo-4110251.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'groceries',
    rating: 4.6,
    ratingCount: 492,
    brand: 'India Gate',
    inStock: true,
  },
  {
    id: 'p15',
    name: 'Cold Pressed Extra Virgin Olive Oil',
    price: 799,
    originalPrice: 999,
    image: 'https://images.pexels.com/photos/1435904/pexels-photo-1435904.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'groceries',
    rating: 4.7,
    ratingCount: 276,
    brand: 'Borges',
    inStock: true,
  },
  {
    id: 'p16',
    name: 'Mixed Dry Fruits Pack - 500g',
    price: 899,
    originalPrice: 1199,
    image: 'https://images.pexels.com/photos/1295572/pexels-photo-1295572.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'groceries',
    rating: 4.5,
    ratingCount: 358,
    brand: 'Happilo',
    inStock: true,
  },
];

// Top deals products
export const topDeals = products.filter(product => {
  const discountPercentage = product.originalPrice && product.price
    ? ((product.originalPrice - product.price) / product.originalPrice) * 100
    : 0;
  return discountPercentage >= 30;
});

// Featured products
export const featuredProducts = products.filter(product => product.featured);

// New arrivals (mock data)
export const newArrivals = products.slice(0, 8).map(product => ({
  ...product,
  id: `new-${product.id}`,
  name: `New ${product.name}`,
  createdAt: new Date().toISOString(),
}));

// Export functions to simulate API calls
export const getProductsByCategory = async (
  category: string,
  filters: {
    search?: string;
    sortBy?: string;
    priceRange?: [number, number];
    brands?: string[];
  } = {}
): Promise<Product[]> => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 500));
  
  let filteredProducts = [...products];
  
  // Filter by category
  if (category && category !== 'all') {
    filteredProducts = filteredProducts.filter(product => product.category === category);
  }
  
  // Apply search filter
  if (filters.search) {
    const searchLower = filters.search.toLowerCase();
    filteredProducts = filteredProducts.filter(product => 
      product.name.toLowerCase().includes(searchLower) || 
      product.brand?.toLowerCase().includes(searchLower) ||
      product.category.toLowerCase().includes(searchLower)
    );
  }
  
  // Apply price range filter
  if (filters.priceRange) {
    const [min, max] = filters.priceRange;
    filteredProducts = filteredProducts.filter(product => 
      product.price >= min && product.price <= max
    );
  }
  
  // Apply brand filter
  if (filters.brands && filters.brands.length > 0) {
    filteredProducts = filteredProducts.filter(product => 
      product.brand && filters.brands?.includes(product.brand)
    );
  }
  
  // Apply sorting
  if (filters.sortBy) {
    switch (filters.sortBy) {
      case 'priceLow':
        filteredProducts.sort((a, b) => a.price - b.price);
        break;
      case 'priceHigh':
        filteredProducts.sort((a, b) => b.price - a.price);
        break;
      case 'newest':
        filteredProducts.sort((a, b) => {
          if (!a.createdAt || !b.createdAt) return 0;
          return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
        });
        break;
      default: // 'popular'
        filteredProducts.sort((a, b) => (b.rating || 0) - (a.rating || 0));
    }
  }
  
  return filteredProducts;
};

export const getProductById = async (id: string): Promise<Product | null> => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 300));
  
  const product = products.find(p => p.id === id) || 
                  newArrivals.find(p => p.id === id);
  
  return product || null;
};

export const getRelatedProducts = async (id: string): Promise<Product[]> => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 300));
  
  const product = await getProductById(id);
  
  if (!product) return [];
  
  // Get products in the same category but not the current product
  const related = products
    .filter(p => p.category === product.category && p.id !== id)
    .slice(0, 6);
  
  return related;
};