export interface CartData {
  userId: number;
  status: string;
  order: { productId: number; quantity: number }[];
}
