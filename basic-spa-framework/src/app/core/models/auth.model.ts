import { PermisosDto } from "./permisos-dto";

export interface ResponseLogin {
  authToken: string;
  refreshToken: string;
  userId: number;
  userName: string;
  permisos:PermisosDto[];
}
