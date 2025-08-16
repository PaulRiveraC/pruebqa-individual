import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InventoryService } from '../inventory.service';

@Component({
  selector: 'app-stock-total',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './stock-total.component.html',
  styleUrls: ['./stock-total.component.css']
})
export class StockTotalComponent implements OnInit {
  totalStock: number = 0;

  constructor(private inventoryService: InventoryService) { }

  ngOnInit(): void {
    this.totalStock = this.inventoryService.getTotalStock();
  }
}