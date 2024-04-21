import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Servicio } from '../ServicioProducto/ServicioProducto.component';

export interface Usuario {
  nombre: string;
  correo: string;
  celular: number;
  contraseña: string;
  reservas: Reserva[];
}

export interface Proveedor {
  id: number;
  nombre: string;
  calificacion: number;
  comentarios: string[];
  servicios: Servicio[];
}

interface Reserva {
  id: number;
  fecha: Date;
  hora: string;
  servicio: Servicio;
}


@Component({
  selector: 'app-User',
  templateUrl: './User.component.html',
  styleUrls: ['./User.component.css']
})
export class UserComponent implements OnInit {

  usuarios: Usuario[] = [];
  proveedores: Proveedor[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get<Usuario[]>('./usuarios.json')
      .subscribe(usuarios => this.usuarios = usuarios);

    this.http.get<Proveedor[]>('./proveedores.json')
      .subscribe(proveedores => this.proveedores = proveedores);
  }
}
