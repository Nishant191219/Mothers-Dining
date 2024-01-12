import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-thali',
  templateUrl: './thali.page.html',
  styleUrls: ['./thali.page.scss'],
})
export class ThaliPage implements OnInit {
  public cart=[{"image": "assets/images/menu.jpg"}];
  constructor() { }

  ngOnInit() {
  }

}
