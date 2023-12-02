import { BaseDto } from './base-dto'; // Asumiendo que BaseDto está en el mismo directorio. Ajusta la ruta de importación si es necesario.
import { ModulesDto } from './modules-dto';
import { RolesDto } from './roles-dto'; // Importa RolesDto si ya lo tienes definido en otro lugar.


export class RolModuleDto extends BaseDto {
  created: boolean;
  edited: boolean;
  listed: boolean;
  deleted: boolean;
  printed: boolean;

  idRol: string;  // Guids se representan como strings en JS/TS
  rol: RolesDto;

  idModule: string;  // Guids se representan como strings en JS/TS
  module: ModulesDto;  // Asumo que "Modules" es el nombre de la clase. Si tiene un nombre diferente en TypeScript, cámbialo.
}
