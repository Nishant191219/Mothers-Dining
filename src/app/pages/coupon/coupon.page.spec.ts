import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CouponPage } from './coupon.page';

describe('CouponPage', () => {
  let component: CouponPage;
  let fixture: ComponentFixture<CouponPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CouponPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
