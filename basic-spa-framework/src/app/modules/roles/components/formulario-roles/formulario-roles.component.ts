import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { RequestStatus } from 'src/app/core/models/request-status.model';
import { RolesDto } from 'src/app/core/models/roles-dto';
import { SweetAlertService } from 'src/app/core/services/sweet-alert.service';
import {Habilitaracciones } from 'src/app/core/services/habilitaracciones.service';
@Component({
  selector: 'app-formulario-roles',
  templateUrl: './formulario-roles.component.html',
  styleUrls: ['./formulario-roles.component.scss']
})
export class FormularioRolesComponent {
  statusDetail: RequestStatus = 'init';
  form:FormGroup;
  isNew:boolean = true;
  userNameRequired:boolean = false;
  passwordRequired:boolean = false;
  user:RolesDto;
  mostraUpdate: boolean = false;
  mostraDelete: boolean = false;
  @Input()
  set dataDto(data:RolesDto)
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
    private sweetAlertService: SweetAlertService,
    private habilitaracciones: Habilitaracciones
  ){
      this.BuildForm();
  }

  ngOnInit(): void {
    const resultados = this.habilitaracciones.MostrarBotones('Roles');

    if (resultados.length > 0) {
        resultados.forEach(resultado => {
             this.mostraDelete=resultado.eliminar;
             this.mostraUpdate=resultado.editar;
            
        });
    }
  }

  private BuildForm(){


    this.form = this.formbuilder.group({
      rolName:['', [Validators.required]]
    })
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
    const TitleUp = 'Cambiara el estado del rol';
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
