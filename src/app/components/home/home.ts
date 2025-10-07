import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';
@Component({
  selector: 'app-home',
  imports: [FormsModule],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
  productObj = {
    photo:'',
    name:'',
    description:'',
    price:''
  }

  productList: any = [];


  onsaveRecord() {
    this.productList.push(this.productObj);
    localStorage.setItem('product',JSON.stringify(this.productList));
    console.log(this.productList);
  } 
}