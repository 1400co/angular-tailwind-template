import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { RequestStatus } from 'src/app/core/models/request-status.model';
import { UserDto } from 'src/app/core/models/user-dto.model';
import { UsuarioService } from 'src/app/core/services/usuario.service';
import {Habilitaracciones } from 'src/app/core/services/habilitaracciones.service';

@Component({
  selector: 'app-lista-usuarios',
  templateUrl: './lista-usuarios.component.html',
  styleUrls: ['./lista-usuarios.component.scss']
})
export class ListaUsuariosComponent implements OnInit {

  credenciales: UserDto[] = [];
  form: FormGroup;
  pageSize: number = 5;
  page: number = 1;
  collectionSize: number = 1
  statusDetail: RequestStatus = 'init';
  algo:boolean =false;
  mostrarCreate: boolean = false;

  constructor(private formbuilder: FormBuilder,
    private usuarioService: UsuarioService,
    private habilitaracciones: Habilitaracciones
   ) {

  }

  ngOnInit(): void {

    this.BuildForm();
    this.getCredentials();
    const resultados = this.habilitaracciones.MostrarBotones('Censo');

    if (resultados.length > 0) {
        resultados.forEach(resultado => {
             this.mostrarCreate=resultado.editar;
            
        });
    }
    

  }

  private getCredentials() {

    this.usuarioService.get(this.filterField, this.page, this.pageSize).subscribe(
      barrios => {
        this.credenciales = barrios.data
        this.collectionSize = barrios.meta.totalCount;
        this.pageSize = barrios.meta.pageSize;
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

    this.usuarioService.get(this.filterField, this.page, this.pageSize).subscribe(
      barrios => {
        this.credenciales = barrios.data
        this.collectionSize = barrios.meta.totalCount;
        this.pageSize = barrios.meta.pageSize;
        this.statusDetail = 'init';
      }
    );
  }

  refreshGrid(event) {
    this.statusDetail = 'loading';

    this.page = event.first / event.rows + 1
    this.pageSize = event.rows;
    this.usuarioService.get(this.filterField, this.page, this.pageSize).subscribe(
      barrios => {
        this.credenciales = barrios.data
        this.collectionSize = barrios.meta.totalCount;
        this.pageSize = barrios.meta.pageSize;
        this.statusDetail = 'init';
      }
    );
  }

  get filterField(): string {
    return this.form.get('filter').value;
  }

}
