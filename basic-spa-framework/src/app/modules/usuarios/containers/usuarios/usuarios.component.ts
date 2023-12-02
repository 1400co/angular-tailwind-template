import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { RequestStatus } from 'src/app/core/models/request-status.model';
import { UserDto } from 'src/app/core/models/user-dto.model';
import { UserInRolesDto } from 'src/app/core/models/user-in-roles-dto';
import { UserInRolesService } from 'src/app/core/services/user-in-roles-service';
import { UsuarioService } from 'src/app/core/services/usuario.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.scss']
})
export class UsuariosComponent implements OnInit {

  id: string;
  statusDetail: RequestStatus;
  usuario:UserDto

constructor(private activatedRoute: ActivatedRoute,
  private usuarioService: UsuarioService,

  private router: Router){

}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params: Params) => {
      this.id = params['id'];
      if(this.id)
      {
        this.usuarioService.getById(this.id)
        .subscribe(usuario => {
          this.usuario = usuario.data;
        });
      }
    });

  }



  Guardar(data)
  {
    this.usuarioService.create(data).subscribe(
      (data) => {
        this.statusDetail = 'success';
        this.router.navigate(['/app/usuarios']);
      },
      (errorMsg) => {
        this.statusDetail = 'error';
      }
    );
  }

  Actualizar(data)
  {

    this.usuarioService.update(this.id, data).subscribe(
      (data) => {
        this.statusDetail = 'success';
        this.router.navigate(['/app/usuarios']);
      },
      (errorMsg) => {
        this.statusDetail = 'error';
      }
    );
  }

  Borrar(data)
  {
    console.log("borrar")
    this.usuarioService.delete( this.id, data).subscribe(
      (data) => {
        this.statusDetail = 'success';
        this.router.navigate(['/app/usuarios']);
      },
      (errorMsg) => {
        this.statusDetail = 'error';
      }
    );
  }

}
