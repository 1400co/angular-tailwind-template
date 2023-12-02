import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { GenericService } from "./generic-service";
import { TokenService } from "./token.service";
import { UserInRolesDto } from "../models/user-in-roles-dto";
import { checkToken } from "../Interceptor/token-interceptor";
import { CustomApiResponse } from "../models/api-response";

@Injectable({
  providedIn: 'root'
})
export class UserInRolesService extends GenericService<UserInRolesDto> {
    protected override endpoint = 'userInRoles';  // Aquí estableces el endpoint específico para UserDto

  constructor(http: HttpClient, tokenService: TokenService) {
    super(http, tokenService);
  }

  getAllById(userId: string) {
    return this.http.get<CustomApiResponse<UserInRolesDto[]>>(`${this.apiUrl}/api/${this.endpoint}/getAll?userId=${userId}`, { context: checkToken() });
  }

}
