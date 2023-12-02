import { Component } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { RequestStatus } from 'src/app/core/models/request-status.model';
import { RolesDto } from 'src/app/core/models/roles-dto';
import { RolesService } from 'src/app/core/services/roles-service';
import {Habilitaracciones } from 'src/app/core/services/habilitaracciones.service';
@Component({
  selector: 'app-lista-roles',
  templateUrl: './lista-roles.component.html',
  styleUrls: ['./lista-roles.component.scss']
})
export class ListaRolesComponent {
  data: RolesDto[] = [];
  form: FormGroup;
  pageSize: number = 5;
  page: number = 1;
  collectionSize: number = 1
  statusDetail: RequestStatus = 'init';
  algo:boolean =false;  
  mostrarCreate: boolean = false;
  constructor(private formbuilder: FormBuilder,
    private roleService: RolesService,
    private habilitaracciones: Habilitaracciones) {

  }

  ngOnInit(): void {

    this.BuildForm();
    this.getCredentials();
    const resultados = this.habilitaracciones.MostrarBotones('Roles');

    if (resultados.length > 0) {
        resultados.forEach(resultado => {
             this.mostrarCreate=resultado.editar;
            
        });
    }
  }

  private getCredentials() {
    this.roleService.get(this.filterField, this.page, this.pageSize).subscribe(
      response => {
        this.data = response.data
        this.collectionSize = response.meta.totalCount;
        this.pageSize = response.meta.pageSize;
        this.statusDetail = 'init';
        this.algo = true;
      }
    );
  }

  private BuildForm() {
    this.form = this.formbuilder.group({
      filter: ['', []]
    })
  }

  Buscar() {
    if (this.filterField == "")
      this.getCredentials();

    this.roleService.get(this.filterField, this.page, this.pageSize).subscribe(
      response => {
        this.data = response.data
        this.collectionSize = response.meta.totalCount;
        this.pageSize = response.meta.pageSize;
        this.statusDetail = 'init';
      }
    );
  }

  refreshGrid(event) {
    this.statusDetail = 'loading';

    this.page = event.first / event.rows + 1
    this.pageSize = event.rows;
    this.roleService.get(this.filterField, this.page, this.pageSize).subscribe(
      response => {
        this.data = response.data
        this.collectionSize = response.meta.totalCount;
        this.pageSize = response.meta.pageSize;
        this.statusDetail = 'init';
      }
    );
  }

  get filterField(): string {
    return this.form.get('filter').value;
  }
}
