// types/Product.ts

export interface Product {
  id: number;
  gender: string;
  category: string;
  name: string;
  subLabel?: string;
  price: number;
  discount?: number;
  image: string;
  offer?: string;
}
