export interface Product {
  id?: string;
  nombre: string;
  precio: number;
  img: string;
  fracionar: boolean;
  compradores?: string[];
  disponible: boolean;
  url: string;
}