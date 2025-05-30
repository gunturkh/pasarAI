import { Label } from "@prisma/client";
import { Seller } from "./market";

// Product Types
export type Product = {
  id: string;
  name: string;
  description: string;
  brand: Brand[];
  price: number;
  originalPrice: number | null;
  stock: number;
  isAvailable: boolean;
  category?: Category; // Category is optional
  tags: string[];
  marketId: string;
  location?: {
    region: string;
    subregion: string;
    city: string;
  };
  currency: "IDR" | "USD";
  imageUrls: string[];
  createdAt: Date;
  updatedAt: Date;
  lastSoldAt?: Date | null;
  rating: number;
  reviews: Review[];
  labels: Label[];
  discount?: number;
  isFeatured?: boolean;
  image?: string; // Make sure image is optional if some products might not have one
  isNewArrival?: boolean; // Optional property for new arrivals
  isBestSeller?: boolean; // Optional property for best sellers
  isOnSale?: boolean; // Optional property for sale products
  isActive?: boolean;
  accountId: string;
  marketType: ProductType; // Add marketType to indicate domestic or global
};

export type Brand = {
  id: string;
  name: string;
  description?: string;
  createdAt: Date;
  updatedAt: Date;
};

// Used for filtering between product types (e.g., Domestic vs Global)
export type ProductType = "domestic" | "global";

// Product creation input type
export type CreateProductInput = {
  name: string;
  description: string;
  price: number;
  stock: number;
  category: string;
  tags?: string[];
  imageUrls: string[];
};

// Product update input type
export type UpdateProductInput = {
  name?: string;
  description?: string;
  price?: number;
  stock?: number;
  isAvailable?: boolean;
  category?: string;
  tags?: string[];
  imageUrls?: string[];
};

// Product filter input type for advanced filtering
export type ProductFilterInput = {
  search?: string;
  categoryId?: string;
  minPrice?: number;
  maxPrice?: number;
  inStock?: boolean;
  sortBy?: "price_asc" | "price_desc" | "rating" | "newest";
  region?: string;
  subregion?: string;
  city?: string;
  marketType?: ProductType;
  brandId?: number;
  labels?: string[];
  discountOnly?: boolean;
};

// Product with seller info
export type ProductWithUser = Product & {
  accountId: number; // ID of the seller who owns the product
  accountName: string; // Name of the seller
  accountRating: number; // Rating of the seller (for marketplace scenarios)
};

// Review type
export type Review = {
  id: string; // Unique identifier for the review
  accountId: string; // ID of the user who posted the review
  rating: number; // Rating given in the review (e.g., out of 5)
  comment: string; // Text comment in the review
  createdAt: Date; // When the review was posted
};

// Inventory updates
export type StockUpdate = {
  productId: number;
  stockDelta: number;
  updatedAt: Date;
};

export type PriceUpdate = {
  productId: number;
  oldPrice: number;
  newPrice: number;
  updatedAt: Date;
};

export type ProductAvailabilityUpdate = {
  productId: number;
  isAvailable: boolean;
  updatedAt: Date;
};

// Category Type
export type Category = {
  id: string;
  name: string;
  description: string;
  createdAt: Date;
};

// Inventory statistics
export type InventoryStats = {
  totalProducts: number;
  totalStock: number;
  totalValue: number;
  lowStockCount: number;
  outOfStockCount: number;
};

// Product Hierarchy
export type ProductCity = {
  id: string;
  name: string;
  products: Product[];
  sellers: Seller[];
};

export type ProductSubregion = {
  id: string;
  name: string;
  cities: ProductCity[];
  sellers: Seller[];
};

export type ProductRegion = {
  id: string;
  name: string;
  subregions: ProductSubregion[];
  sellers: Seller[];
};

export type Currency = "USD" | "IDR" | string;
