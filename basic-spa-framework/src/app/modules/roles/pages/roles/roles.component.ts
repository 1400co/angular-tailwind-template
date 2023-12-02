import { Component } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { RequestStatus } from 'src/app/core/models/request-status.model';
import { RolesDto } from 'src/app/core/models/roles-dto';
import { RolesService } from 'src/app/core/services/roles-service';

@Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.scss']
})
export class RolesComponent {
  id: string;
  statusDetail: RequestStatus;
  data:RolesDto

constructor(private activatedRoute: ActivatedRoute,
  private rolesService: RolesService,
  private router: Router){

}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params: Params) => {
      this.id = params['id'];
      if(this.id)
      {
        this.rolesService.getById(this.id)
        .subscribe(usuario => {
          this.data = usuario.data;
        });
      }
    });

  }

  Guardar(data)
  {
    this.rolesService.create(data).subscribe(
      (data) => {
        this.statusDetail = 'success';
        this.router.navigate(['/app/roles']);
      },
      (errorMsg) => {
        this.statusDetail = 'error';
      }
    );
  }

  Actualizar(data)
  {
    
    this.rolesService.update(this.id, data).subscribe(
      (data) => {
        this.statusDetail = 'success';
        this.router.navigate(['/app/roles']);
      },
      (errorMsg) => {
        this.statusDetail = 'error';
      }
    );
  }

  Borrar(data)
  {
    console.log("borrar")
    this.rolesService.delete( this.id, data).subscribe(
      (data) => {
        this.statusDetail = 'success';
        this.router.navigate(['/app/roles']);
      },
      (errorMsg) => {
        this.statusDetail = 'error';
      }
    );
  }

}
