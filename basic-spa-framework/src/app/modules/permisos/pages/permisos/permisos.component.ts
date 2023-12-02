import { Component } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { RequestStatus } from 'src/app/core/models/request-status.model';
import { RolModuleDto } from 'src/app/core/models/rol-module-dto';
import { RolModuleService } from 'src/app/core/services/roles-modules-service';

@Component({
  selector: 'app-permisos',
  templateUrl: './permisos.component.html',
  styleUrls: ['./permisos.component.scss']
})
export class PermisosComponent {
  id: string;
  statusDetail: RequestStatus;
  data:RolModuleDto

constructor(private activatedRoute: ActivatedRoute,
  private permisoservice: RolModuleService,
  private router: Router){

}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params: Params) => {
      this.id = params['id'];
      if(this.id)
      {
        this.permisoservice.getById(this.id)
        .subscribe(usuario => {
          this.data = usuario.data;
        });
      }
    });

  }

  Guardar(data)
  {
    this.permisoservice.create(data).subscribe(
      (data) => {
        this.statusDetail = 'success';
        this.router.navigate(['/app/permisos']);
      },
      (errorMsg) => {
        this.statusDetail = 'error';
      }
    );
  }

  Actualizar(data)
  {

    this.permisoservice.update(this.id, data).subscribe(
      (data) => {
        this.statusDetail = 'success';
        this.router.navigate(['/app/permisos']);
      },
      (errorMsg) => {
        this.statusDetail = 'error';
      }
    );
  }

  Borrar(data)
  {
    this.permisoservice.delete(this.id, data).subscribe(
      (data) => {
        this.statusDetail = 'success';
        this.router.navigate(['/app/permisos']);
      },
      (errorMsg) => {
        this.statusDetail = 'error';
      }
    );
  }
}
