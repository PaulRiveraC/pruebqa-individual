import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompanyInfoComponent } from './company-info/company-info.component';
import { ProductListComponent } from './product-list/product-list.component';
import { StockTotalComponent } from './stock-total/stock-total.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    CompanyInfoComponent,
    ProductListComponent,
    StockTotalComponent
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'fashion-trends-inventory';
}