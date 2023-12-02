import { BaseDto } from "./base-dto";

export interface PermisosDto extends BaseDto {
  module: string;
  created: boolean;
  edited: boolean;
  listed: boolean;
  deleted: boolean;
  printed: boolean;
}
