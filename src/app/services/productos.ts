import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Iisproductos } from '../models/is.Model'; 

@Injectable({
  providedIn: 'root'
})
export class Productos {
  
  private http = inject(HttpClient);
  
  private apiUrl = 'http://localhost:3000/OArt'; 

  obtenerProductos(): Observable<Iisproductos[]> {
    return this.http.get<Iisproductos[]>(this.apiUrl);
  }
}