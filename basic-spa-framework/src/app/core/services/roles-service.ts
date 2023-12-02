import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { UserDto } from "../models/user-dto.model";
import { GenericService } from "./generic-service";
import { TokenService } from "./token.service";
import { RolesDto } from "../models/roles-dto";

@Injectable({
  providedIn: 'root'
})
export class RolesService extends GenericService<RolesDto> {
    protected override endpoint = 'roles';  // Aquí estableces el endpoint específico para UserDto

  constructor(http: HttpClient, tokenService: TokenService) {
    super(http, tokenService);
  }
}
