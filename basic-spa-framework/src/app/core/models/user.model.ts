import { PermisosDto } from "./permisos-dto";

export interface User {
  id: string;
  name: string;
  email: string;
  dni: string;
  avatar: string;
  isActive:boolean;
  role: string[];
  permisos:PermisosDto[]
}
