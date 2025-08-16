import { Injectable } from '@angular/core';
import { Company, Product, Branch } from './models';

@Injectable({
  providedIn: 'root'
})
export class InventoryService {
  private companyInfo: Company = {
    name: 'Fashion Trends',
    ruc: '12345678901',
    address: 'Av. Principal 123, Lima',
    phone: '+51 987654321',
    email: 'contacto@fashiontrends.com'
  };

  private branches: Branch[] = [
    { id: 1, name: 'Sucursal Central', location: 'Lima' },
    { id: 2, name: 'Sucursal Norte', location: 'Trujillo' },
    { id: 3, name: 'Sucursal Sur', location: 'Arequipa' },
    { id: 4, name: 'Sucursal Este', location: 'Huancayo' },
    { id: 5, name: 'Sucursal Oeste', location: 'Callao' }
  ];

  private products: Product[] = [
    {
      id: 1,
      name: 'Camisa de algodón',
      category: 'Camisas',
      stock: { 1: 15, 2: 10, 3: 8, 4: 5, 5: 12 }
    },
    {
      id: 2,
      name: 'Pantalón de vestir',
      category: 'Pantalones',
      stock: { 1: 10, 2: 7, 3: 5, 4: 3, 5: 8 }
    }
  ];

  getCompanyInfo(): Company {
    return this.companyInfo;
  }

  getBranches(): Branch[] {
    return this.branches;
  }

  getProducts(): Product[] {
    return this.products;
  }

  getTotalStock(): number {
    return this.products.reduce((total, product) => {
      const stockValues = Object.values(product.stock) as number[];
      return total + stockValues.reduce((sum, stock) => sum + stock, 0);
    }, 0);
  }
}