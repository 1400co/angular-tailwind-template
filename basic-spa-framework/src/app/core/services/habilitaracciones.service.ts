import { Injectable } from '@angular/core';
import { TokenService } from './token.service';
@Injectable({
  providedIn: 'root'
})
export class Habilitaracciones {
  mostrarCreate: boolean = false;
  mostraUpdate: boolean = false;
  mostraDelete: boolean = false;
  mostraPrint: boolean = false;
  mostraList: boolean = false;
  constructor(private tokenService: TokenService) {}
      // Función para verificar los permisos y establecer la visibilidad del botón
      MostrarBotones(module: string) {
        const permisos = this.tokenService.getPermisos();
        const resultados = [];
    
        if (!module) {
          permisos.forEach(permiso => {
            resultados.push({ module: permiso.module, listed: permiso.listed });
          });
        } else {
          permisos.forEach(permiso => {
            if (permiso.module === module) {
              this.mostrarCreate = permiso.created;
              this.mostraUpdate = permiso.edited;
              this.mostraDelete = permiso.deleted;
              this.mostraPrint = permiso.printed;
              this.mostraList = permiso.listed;
            }
          });
    
          resultados.push({
            crear: this.mostrarCreate,
            editar: this.mostraUpdate,
            eliminar: this.mostraDelete,
            imprimir: this.mostraPrint,
            listar: this.mostraList
          });
        }
    
        return resultados;
    }
    

}
