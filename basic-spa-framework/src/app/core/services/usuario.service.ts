import { UserDto } from './../models/user-dto.model';
import { TokenService } from './token.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GenericService } from './generic-service';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService extends GenericService<UserDto> {
    protected override endpoint = 'user';  // Aquí estableces el endpoint específico para UserDto

  constructor(http: HttpClient, tokenService: TokenService) {
    super(http, tokenService);
  }
}
