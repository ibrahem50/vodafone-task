export interface ProductModel {
  title: string;
  price: number;
  description: string;
  image: string;
  category: string;
  id: number;
  rating?: {
    rate: number;
    count: number;
  };
}
