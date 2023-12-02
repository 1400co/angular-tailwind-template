import { Component, ElementRef, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthUser } from 'src/app/core/models/auth-user.model';
import { TokenService } from 'src/app/core/services/token.service';
import {Habilitaracciones } from 'src/app/core/services/habilitaracciones.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit{

  userLogged:string;
  openUserMenu:Boolean = false;
  mostraList: boolean = false;
  menuusuario: boolean = false;
  menuactividades: boolean = false;
  menupermisos: boolean = false;
  menumaestra: boolean = false;
  menuhome: boolean = false;
  menudetalle: boolean = false;
  menumodules: boolean = false;
  menuespacios: boolean = false;
  menubasicTable: boolean = false;
  menucredenciales: boolean = false;
  menuroles: boolean = false;
  menucenso: boolean = false;
  reportes: boolean = false;
  constructor(private tokenService: TokenService,
    private router: Router,
    private elementRef: ElementRef,
    private habilitaracciones: Habilitaracciones){

  }

  showDropdown = false;

  toggleDropdown() {
    this.showDropdown = !this.showDropdown;
  }

  toggleUserMenu()
  {
    console.log(this.openUserMenu)
    this.openUserMenu= !this.openUserMenu;
  }

  ngOnInit(): void {
    this.userLogged = this.tokenService.getTokenUserName();
    document.addEventListener('click', this.handleClickOutside.bind(this));
    //recorremos los modulos
    const resultados = this.habilitaracciones.MostrarBotones('');
    if (resultados.length > 0) {
      resultados.forEach(resultado => {
          if (resultado.module) {
                  
                  switch (resultado.module) {
                    case 'Actividades':
                      this.menuactividades = resultado.listed;
                   
                      break;
                    case 'Maestra':
                      this.menumaestra = resultado.listed;
                      
                      break;
                    case 'Permisos':
                      this.menupermisos= resultado.listed;
                      
                      break;
                    case 'Home':
                      this.menuhome= resultado.listed;
                     
                      break;
                    case 'Detalle':
                      this.menudetalle= resultado.listed;
                      break;
                    case 'Modules':
                      this.menumodules= resultado.listed;
                      
                      break;
                    case 'Espacios':
                      this.menuespacios= resultado.listed;
                    
                      break;
                    case 'Roles':
                      this.menuroles= resultado.listed;
                      
                      break;
                    case 'Usuarios':
                      this.menuusuario = resultado.listed;
                      
                      break;
                    case 'Censo':
                      this.menucenso = resultado.listed;
                     
                      break;
                    case 'Credenciales':
                      this.menucredenciales = resultado.listed;
                    
                      break;
                    case 'BasicTable':
                      this.menubasicTable= resultado.listed;
                     
                      break;
                      case 'Reportes':
                        this.reportes= resultado.listed;
                       
                        break;
                    default:
                    
                      break;
                  }
                
          } 
      });
  }
  }

  SignOut()
  {
    this.tokenService.removeToken();
    this.router.navigate(['/login']);
  }

  handleClickOutside(event: Event) {
    if (
      this.openUserMenu &&
      !this.elementRef.nativeElement.contains(event.target)
    ) {
      // Cerrar el menú si está abierto y se hizo clic fuera de él
      this.openUserMenu = false;
    }
  }

}
