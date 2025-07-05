export interface CartItem {
  id: number;
  name: string;
  price: number;
  image: string;
  quantity: number;
  category?: string; // ✅ Add this line (optional if not always present)
}