import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Company } from '../models/company';
import { InventoryService } from '../inventory.service';

@Component({
  selector: 'app-company-info',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './company-info.component.html',
  styleUrls: ['./company-info.component.css']
})
export class CompanyInfoComponent implements OnInit {
  company: Company = {} as Company;

  constructor(private inventoryService: InventoryService) { }

  ngOnInit(): void {
    this.company = this.inventoryService.getCompanyInfo();
  }
}