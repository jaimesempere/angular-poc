export interface IProductService {
  getProducts(): Array<{ name: string; size: string; price: number }>;
}
