import { Component } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { ModulesDto } from 'src/app/core/models/modules-dto';
import { RequestStatus } from 'src/app/core/models/request-status.model';
import { ModulesService } from 'src/app/core/services/module.service';

@Component({
  selector: 'app-module',
  templateUrl: './module.component.html',
  styleUrls: ['./module.component.scss']
})
export class ModuleComponent {
  id: string;
  statusDetail: RequestStatus;
  data:ModulesDto

constructor(private activatedRoute: ActivatedRoute,
  private moduleService: ModulesService,
  private router: Router){

}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params: Params) => {
      this.id = params['id'];
      if(this.id)
      {
        this.moduleService.getById(this.id)
        .subscribe(usuario => {
          this.data = usuario.data;
        });
      }
    });

  }

  Guardar(data)
  {
    this.moduleService.create(data).subscribe(
      (data) => {
        this.statusDetail = 'success';
        this.router.navigate(['/app/modules']);
      },
      (errorMsg) => {
        this.statusDetail = 'error';
      }
    );
  }

  Actualizar(data)
  {
    this.moduleService.update(this.id, data).subscribe(
      (data) => {
        this.statusDetail = 'success';
        this.router.navigate(['/app/modules']);
      },
      (errorMsg) => {
        this.statusDetail = 'error';
      }
    );
  }

  Borrar(data)
  {
    console.log("borrar")
    this.moduleService.delete(this.id, data).subscribe(
      (data) => {
        this.statusDetail = 'success';
        this.router.navigate(['/app/modules']);
      },
      (errorMsg) => {
        this.statusDetail = 'error';
      }
    );
  }
}
