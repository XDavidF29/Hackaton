import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

 export interface Servicio {
    id: number;
    nombre: string;
    descripcion: string;
    precio: number;
    proveedor: string;
  }
  
 export interface Producto {
    id: number;
    nombre: string;
    descripcion: string;
    precio: number;
    disponibilidad: number;
    proveedor: string;
  }

@Component({
    selector: 'app-ServicioProducto',
    templateUrl: './ServicioProducto.component.html',
    styleUrls: ['./ServicioProducto.component.css']
})

export class ServicioProductoComponent implements OnInit {
    servicios : Servicio[]  = [];
    productos : Producto[] = [];

    constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get<Servicio[]>('http://localhost:3000/servicios')
      .subscribe(servicios => this.servicios = servicios);

    this.http.get<Producto[]>('http://localhost:3000/productos')
      .subscribe(productos => this.productos = productos);
  }
 }