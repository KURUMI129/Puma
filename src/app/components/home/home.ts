import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router'; // 3. Importa ActivatedRoute
import { CommonModule } from '@angular/common';   // 4. Importa CommonModule para usar *ngIf

@Component({
  selector: 'app-home',
  imports: [FormsModule, CommonModule], // 5. Añádelo a los imports
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
  // Variable para saber si el usuario es admin
  isAdmin = false;
  
  productObj = {
    photo:'',
    name:'',
    description:'',
    price:''
  }
  productList: any = [];

  constructor(private route: ActivatedRoute) {
    // Leemos el parámetro 'userType' de la URL
    const userType = this.route.snapshot.paramMap.get('userType');
    // Si el parámetro es 'admin', ponemos isAdmin en true
    if (userType === 'admin') {
      this.isAdmin = true;
    }
  }

  onsaveRecord() {
    this.productList.push(this.productObj);
    localStorage.setItem('product',JSON.stringify(this.productList));
    console.log(this.productList);
  } 
}