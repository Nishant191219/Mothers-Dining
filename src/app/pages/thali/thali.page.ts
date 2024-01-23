import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-thali',
  templateUrl: './thali.page.html',
  styleUrls: ['./thali.page.scss'],
})
export class ThaliPage implements OnInit {
  public cart=[{"image": "assets/images/menu.jpg"}];
  productQuantity:number=0;
  constructor(private router:Router) { }

  ngOnInit() {
  }
  goToCartPage(){
    this.router.navigate(['cart']);
  }
  handleQuantity(val:string){
    if(this.productQuantity<20 && val==='plus'){
      this.productQuantity=this.productQuantity+1;
    }else if(this.productQuantity>0 && val==='min'){
      this.productQuantity=this.productQuantity-1;
    }
  }

}
