import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class AuthLoginService { // Nueva clase de servicio
    private URL = 'http://localhost:3000'; // URL del Backend

    constructor(private http: HttpClient) { }

    async login(correo: string, contraseña: string): Promise<any> {
        try {
            const body = { correo, contraseña };
            const data = await firstValueFrom(this.http.post(`${this.URL}/login`, body));
            return data;
        } catch (error) {
            console.error('Error en el servicio de login:', error);
            // Relanzamos el error para que el componente lo pueda atrapar
            throw error;
        }
    }
}