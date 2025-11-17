import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class AuthLoginService {
    private URL = 'http://localhost:3000';

    constructor(private http: HttpClient) { }

    async login(correo: string, contrasena: string): Promise<any> { 
        try {
            const body = { correo, contrasena }; 
            const data = await firstValueFrom(this.http.post(`${this.URL}/login`, body));
            return data;
        } catch (error) {
            console.error('Error en el servicio de login:', error);
            throw error;
        }
    }
}