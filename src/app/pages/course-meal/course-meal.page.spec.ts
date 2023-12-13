import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CourseMealPage } from './course-meal.page';

describe('CourseMealPage', () => {
  let component: CourseMealPage;
  let fixture: ComponentFixture<CourseMealPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CourseMealPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
