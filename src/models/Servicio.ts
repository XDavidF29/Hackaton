import { Proveedor } from "./Proveedor";

export interface Servicio {
    id: number;
    nombre: string;
    descripcion: string;
    //imagenes: string[];
    precio: number;
    region: string;
    tipo: string;
    disponibilidad: boolean;
    calificacion: number;
    comentarios: string[];
    proveedor: Proveedor;
  }
  