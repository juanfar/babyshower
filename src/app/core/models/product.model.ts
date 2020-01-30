export interface Product {
  nombre: string;
  precio: number;
  img: string;
  fracionar: boolean;
  compradores?: string[];
  url: string;
}