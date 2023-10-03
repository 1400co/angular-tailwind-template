import { Component, ElementRef, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthUser } from 'src/app/core/models/auth-user.model';
import { TokenService } from 'src/app/core/services/token.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit{

  userLogged:AuthUser;
  openUserMenu:Boolean = false;

  constructor(private tokenService: TokenService,
    private router: Router,
    private elementRef: ElementRef){

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
    this.userLogged = this.tokenService.getToken();
    document.addEventListener('click', this.handleClickOutside.bind(this));
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
