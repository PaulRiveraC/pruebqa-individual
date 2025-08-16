export interface Product {
  id: number;
  name: string;
  category: string;
  stock: { [branchId: number]: number };
}