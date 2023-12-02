import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RequestStatus } from 'src/app/core/models/request-status.model';
import { RolesDto } from 'src/app/core/models/roles-dto';
import { UserDto } from 'src/app/core/models/user-dto.model';
import { UserInRolesDto } from 'src/app/core/models/user-in-roles-dto';
import { RolesService } from 'src/app/core/services/roles-service';
import { SweetAlertService } from 'src/app/core/services/sweet-alert.service';
import { UserInRolesService } from 'src/app/core/services/user-in-roles-service';
import {Habilitaracciones } from 'src/app/core/services/habilitaracciones.service';

@Component({
  selector: 'app-formulario-usuarios',
  templateUrl: './formulario-usuarios.component.html',
  styleUrls: ['./formulario-usuarios.component.scss']
})
export class FormularioUsuariosComponent implements OnInit {

  statusDetail: RequestStatus = 'init';
  form: FormGroup;
  formRoles: FormGroup;
  isNew: boolean = false;
  userNameRequired: boolean = false;
  passwordRequired: boolean = false;
  user: UserDto;
  roles: RolesDto[];
  userInRoles: UserInRolesDto[];
  mostraUpdate: boolean = false;
  mostraDelete: boolean = false;
  @Input()
  set userDto(data: UserDto) {
    if (data) {
      this.isNew = false;
      this.form.patchValue(data);
      this.form.markAllAsTouched();
      this.formRoles.patchValue({ userId: data.id });
      this.user = data;
      this.getUserInRoles();
    } else {
      this.isNew = true;
    }
  };
  @Input()
  set status(data: RequestStatus) {
    if (data) {
      this.statusDetail = data;
    }
  };


  @Output() create = new EventEmitter();
  @Output() update = new EventEmitter();
  @Output() delete = new EventEmitter();
  @Output() addRol = new EventEmitter();

  constructor(private formbuilder: FormBuilder,
    private sweetAlertService: SweetAlertService,
    private rolService: RolesService,
    private usuarioInRolService: UserInRolesService,
    private habilitaracciones: Habilitaracciones

  ) {
    this.BuildForm();
    this.BuildRolForm();
    this.getRoles();

  }

  ngOnInit(): void {
    this.ValidarBotones();

  }
  private ValidarBotones() {

    const resultados = this.habilitaracciones.MostrarBotones('Usuarios');

        if (resultados.length > 0) {
            resultados.forEach(resultado => {
                 this.mostraDelete=resultado.eliminar;
                 this.mostraUpdate=resultado.editar;

            });
        }
     }
  private BuildForm() {
    this.form = this.formbuilder.group({
      fullName: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      dni: ['', []],
      phone: ['', []],
      userName: ['', []],
      isActive: ['true', []],
      password: ['Password!01', []]
    })
  }

  private BuildRolForm() {
    this.formRoles = this.formbuilder.group({
      rolId: ['', [Validators.required]],
      userId: ['', [Validators.required]]
    })
  }

  getRoles() {
    this.statusDetail = 'loading';
    this.rolService.getAll().subscribe(
      response => {
        this.roles = response.data
        this.statusDetail = 'init';
      }
    );
  }

  getUserInRoles() {
    this.statusDetail = 'loading';

    this.usuarioInRolService.getAllById(this.user.id).subscribe(
      response => {
        this.userInRoles = response.data
        this.statusDetail = 'init';
      }
    );
  }

  Guardar() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    this.create.emit(this.form.value);
  }

  AgregarRol() {

    if (this.formRoles.invalid) {
      this.formRoles.markAllAsTouched();
      return;
    }

    this.usuarioInRolService.create(this.formRoles.value).subscribe(
      (data) => {
        this.statusDetail = 'success';
        this.getUserInRoles();
      },
      (errorMsg) => {
        this.statusDetail = 'error';
      }
    );
  }

  deleteRole(id: string, data: UserInRolesDto) {
    this.usuarioInRolService.delete(id, data).subscribe(
      (data) => {
        this.statusDetail = 'success';
        this.getUserInRoles();
      },
      (errorMsg) => {
        this.statusDetail = 'error';
      }
    );
  }

  Actualizar() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    this.update.emit(this.form.value);
  }

  async mostrarConfirmacion() {
    const TitleUp = 'Cambiara el estado del usuario';
    const TitleDonw = '¿Esta seguro de cambiar el estado?';
    this.sweetAlertService.showConfirmationCallback(TitleUp, TitleDonw, () => {
      //ejecuto el llamado a la funcion Borrar
      this.Borrar();
    }, () => {
      //en caso de usar cancelacion
    });
  }

  Borrar() {
    if (this.form.invalid) {
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
