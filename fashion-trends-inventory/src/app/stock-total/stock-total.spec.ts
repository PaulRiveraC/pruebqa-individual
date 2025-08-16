import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StockTotal } from './stock-total';

describe('StockTotal', () => {
  let component: StockTotal;
  let fixture: ComponentFixture<StockTotal>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StockTotal]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StockTotal);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
