import { Proveedor } from "./Proveedor";
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface Servicio {
    id: number;
    nombre: string;
    descripcion: string;
    //imagenes: string[];
    precio: number;
    region: string;
    tipo: string; //plan o producto
    disponibilidad: boolean;
    calificacion: number;
    comentarios: string[];
    proveedor: Proveedor;
  }
  @Injectable({ providedIn: 'root' })
  export class ServiciosService {
    apiUrl = 'http://localhost:3000/servicios'; // Reemplaza con la URL de tu backend
  
    constructor(private http: HttpClient) {}
  
    getServicios() {
      return this.http.get<Servicio[]>(this.apiUrl);
    }
  }
  