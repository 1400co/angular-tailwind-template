import { TokenService } from './token.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SecurityDto } from './security.model';
import { GenericService } from './generic-service';

@Injectable({
  providedIn: 'root'
})
export class SecurityService extends GenericService<SecurityDto> {
    protected override endpoint = 'security';  // Aquí estableces el endpoint específico para UserDto

  constructor(http: HttpClient, tokenService: TokenService) {
    super(http, tokenService);
  }
}
