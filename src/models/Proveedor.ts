import { Servicio } from "./Servicio";

export interface Proveedor {
    id: number;
    nombre: string;
    calificacion: number;
    comentarios: string[];
    servicios: Servicio[];
  }
  