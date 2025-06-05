export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  images?: string[];
  category: string;
  description?: string;
  rating?: number;
  ratingCount: number;
  brand?: string;
  inStock?: boolean;
  tags?: string[];
  featured?: boolean;
  createdAt?: string;
}