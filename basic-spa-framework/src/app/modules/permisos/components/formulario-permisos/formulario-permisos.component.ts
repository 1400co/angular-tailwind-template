import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ModulesDto } from 'src/app/core/models/modules-dto';
import { RequestStatus } from 'src/app/core/models/request-status.model';
import { RolModuleDto } from 'src/app/core/models/rol-module-dto';
import { RolesDto } from 'src/app/core/models/roles-dto';
import { ModuleService } from 'src/app/core/services/modules-service';
import { RolesService } from 'src/app/core/services/roles-service';
import { SweetAlertService } from 'src/app/core/services/sweet-alert.service';
import {Habilitaracciones } from 'src/app/core/services/habilitaracciones.service';
@Component({
  selector: 'app-formulario-permisos',
  templateUrl: './formulario-permisos.component.html',
  styleUrls: ['./formulario-permisos.component.scss']
})
export class FormularioPermisosComponent {
  statusDetail: RequestStatus = 'init';
  form:FormGroup;
  isNew:boolean = true;
  userNameRequired:boolean = false;
  passwordRequired:boolean = false;
  user:RolModuleDto;
  roles:RolesDto[];
  modulos:ModulesDto[];
  mostraUpdate: boolean = false;
  mostraDelete: boolean = false;
  @Input()
  set dataDto(data:RolModuleDto)
  {
    if(data)
    {
      this.isNew = false;
      this.form.patchValue(data);
      this.form.markAllAsTouched();
      this.user = data;
    }
  };
  @Input()
  set status(data:RequestStatus)
  {
    if(data)
    {
      this.statusDetail = data;
    }
  };


  @Output() create= new EventEmitter();
  @Output() update= new EventEmitter();
  @Output() delete= new EventEmitter();

  constructor( private formbuilder:FormBuilder,
    private moduleService: ModuleService,
    private roleService: RolesService,
    private sweetAlertService: SweetAlertService,
    private habilitaracciones: Habilitaracciones
  ){
      this.BuildForm();
      this.getModulos();
      this.getRoles();
  }

  ngOnInit(): void {
    const resultados = this.habilitaracciones.MostrarBotones('Permisos');

    if (resultados.length > 0) {
        resultados.forEach(resultado => {
             this.mostraDelete=resultado.eliminar;
             this.mostraUpdate=resultado.editar;
            
        });
    }
  }

  private BuildForm(){

    this.form = this.formbuilder.group({
      created: [false],
      edited: [false],
      listed: [false],
      deleted: [false],
      printed: [false],
      idRol: ['', Validators.required],
      idModule: ['', Validators.required],
    });
  }

  getModulos() {
    this.moduleService.getAll().subscribe(
      periodos => {
        this.modulos = periodos.data
      }
    );
  }

  getRoles() {
    this.roleService.getAll().subscribe(
      periodos => {
        this.roles = periodos.data
      }
    );
  }

  Guardar()
  {
    
    if(this.form.invalid)
    {
      this.form.markAllAsTouched();
      return;
    }


    this.create.emit(this.form.value);
  }

  Actualizar()
  {
    if(this.form.invalid)
    {
      this.form.markAllAsTouched();
      return;
    }
    this.update.emit(this.form.value);
  }

  async mostrarConfirmacion() {
    const TitleUp = 'Cambiara el estado del permiso';
    const TitleDonw = '¿Esta seguro de cambiar el estado?';
    this.sweetAlertService.showConfirmationCallback(TitleUp,TitleDonw, () => {
      //ejecuto el llamado a la funcion Borrar
      this.Borrar();
    }, () => {
         //en caso de usar cancelacion
    });
  }

  Borrar()
  {
    if(this.form.invalid)
    {
      this.form.markAllAsTouched();
      return;
    }
    this.delete.emit()
  }

  get isFormInValid() {
    return this.form.invalid && this.form.touched;
  }

  field(name: string) {
      return {
          get: () => this.form.get(name),
          isValid: () => this.form.get(name).touched && this.form.get(name).valid
      };
  }
}
