import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product, Branch } from '../models';
import { InventoryService } from '../inventory.service';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];
  branches: Branch[] = [];

  constructor(private inventoryService: InventoryService) { }

  ngOnInit(): void {
    this.products = this.inventoryService.getProducts();
    this.branches = this.inventoryService.getBranches();
  }

  getStockForBranch(product: Product, branchId: number): number {
    return product.stock[branchId] || 0;
  }
}