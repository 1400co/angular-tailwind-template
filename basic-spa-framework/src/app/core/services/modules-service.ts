import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { GenericService } from "./generic-service";
import { TokenService } from "./token.service";
import { ModulesDto } from "../models/modules-dto";

@Injectable({
  providedIn: 'root'
})
export class ModuleService extends GenericService<ModulesDto> {
    protected override endpoint = 'modules';  // Aquí estableces el endpoint específico para UserDto

  constructor(http: HttpClient, tokenService: TokenService) {
    super(http, tokenService);
  }
}
