import { BaseDto } from "./base-dto";
import { RolesDto } from "./roles-dto";
import { UserDto } from "./user-dto.model";

export class UserInRolesDto extends BaseDto {
  userId: string;  // Guids se representan como strings en JS/TS
  user: UserDto;
  rolId: string;  // Guids se representan como strings en JS/TS
  rol: RolesDto;
}
