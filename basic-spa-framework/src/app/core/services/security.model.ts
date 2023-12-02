import { UserDto } from "../models/user-dto.model";

export class SecurityDto {
  id: number;
  fullName: string;
  email: string;
  userName: string;
  password: string;
  fechaCreacion: Date;
  ultimaActualizacion?: Date;
  PersonId: number;
  Person: UserDto;
}
