import { TokenService } from './token.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GenericService } from './generic-service';
import { ModulesDto } from '../models/modules-dto';

@Injectable({
  providedIn: 'root'
})
export class ModulesService extends GenericService<ModulesDto> {
    protected override endpoint = 'modules';  // Aquí estableces el endpoint específico para UserDto

  constructor(http: HttpClient, tokenService: TokenService) {
    super(http, tokenService);
  }
}
