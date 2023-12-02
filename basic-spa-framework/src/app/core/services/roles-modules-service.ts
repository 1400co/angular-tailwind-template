import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { UserDto } from "../models/user-dto.model";
import { GenericService } from "./generic-service";
import { TokenService } from "./token.service";
import { RolesDto } from "../models/roles-dto";
import { RolModuleDto } from "../models/rol-module-dto";

@Injectable({
  providedIn: 'root'
})
export class RolModuleService extends GenericService<RolModuleDto> {
    protected override endpoint = 'rolModule';  // Aquí estableces el endpoint específico para UserDto

  constructor(http: HttpClient, tokenService: TokenService) {
    super(http, tokenService);
  }
}
