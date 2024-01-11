import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-course-meal',
  templateUrl: './course-meal.page.html',
  styleUrls: ['./course-meal.page.scss'],
})
export class CourseMealPage implements OnInit {
  public cart=[{"image": "assets/images/menu.jpg"}];
  constructor() { }

  ngOnInit() {
  }

}
