import { 
  getProductsByCategory as fetchProductsByCategory,
  getProductById as fetchProductById,
  getRelatedProducts as fetchRelatedProducts
} from '../data/products';

// Re-export functions from the mock data
// In a real application, these would be API calls to the backend
export const getProductsByCategory = fetchProductsByCategory;
export const getProductById = fetchProductById;
export const getRelatedProducts = fetchRelatedProducts;