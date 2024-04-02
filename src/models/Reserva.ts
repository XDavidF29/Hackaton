import { Servicio } from "./Servicio";
import { Usuario } from "./Usuario";

export interface Reserva {
    id: number;
    fecha: string;
    estado: string; // pendiente, confirmada, cancelada
    usuario: Usuario;
    servicio: Servicio;
  }
  