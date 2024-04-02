import { Reserva } from "./Reserva";

export interface Usuario {
    nombre: string;
    correo: string;
    celular: number;
    contraseña: string;
    reservas: Reserva[];
  }
  