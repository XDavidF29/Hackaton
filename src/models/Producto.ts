import { Proveedor } from "./Proveedor";

export interface Producto {
    id: number;
    nombre: string;
    descripcion: string;
    //imagenes: string[];
    precio: number;
    region: string;
    tipo: string;
    duracion: number;
    proveedor: Proveedor;
    disponibilidad: boolean;
    calificacion: number;
    comentarios: string[];
  }
  