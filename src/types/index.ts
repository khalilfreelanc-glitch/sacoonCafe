export type Language = 'en' | 'ps';

export type MenuCategory = 'all' | 'hot' | 'ice' | 'tea_chocolate';

export interface MenuItem {
  id: string;
  nameEn: string;
  namePs: string;
  category: 'hot' | 'ice' | 'tea_chocolate';
  priceRegular: number; // AFN
  priceLarge: number;   // AFN (+20)
  descriptionEn: string;
  descriptionPs: string;
  image?: string;
  popular?: boolean;
  tags?: string[];
  isCold?: boolean;
}

export interface EquipmentItem {
  id: string;
  nameEn: string;
  namePs: string;
  categoryEn: string;
  categoryPs: string;
  descriptionEn: string;
  descriptionPs: string;
  image: string;
  featuresEn: string[];
  featuresPs: string[];
}

export interface CartItem {
  id: string; // unique item id + size
  menuItemId: string;
  nameEn: string;
  namePs: string;
  size: 'regular' | 'large';
  price: number;
  quantity: number;
  category: 'hot' | 'ice' | 'tea_chocolate';
  image?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  roleEn: string;
  rolePs: string;
  commentEn: string;
  commentPs: string;
  rating: number;
}
