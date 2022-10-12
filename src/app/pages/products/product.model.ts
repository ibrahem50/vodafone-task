export interface ProductExportModel {
  title: string;
  price: number;
  description: string;
  image: string;
  category: string;
  rating?: {
    rate: number;
    count: number;
  };
}

export interface ProductModel extends ProductExportModel {
  id: number;
}
