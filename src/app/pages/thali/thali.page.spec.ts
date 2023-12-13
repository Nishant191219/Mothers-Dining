import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ThaliPage } from './thali.page';

describe('ThaliPage', () => {
  let component: ThaliPage;
  let fixture: ComponentFixture<ThaliPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ThaliPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
