import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { GenericService } from "./generic-service";
import { TokenService } from "./token.service";
import { PasswordRecovery } from "../models/password-recovery";
import { PasswordUpdate } from "../models/password-update";
import { CustomApiResponse } from "../models/api-response";
import { checkToken } from "../Interceptor/token-interceptor";

@Injectable({
  providedIn: 'root'
})
export class PasswordRecoverService extends GenericService<PasswordRecovery> {
    protected override endpoint = 'passwordRecovery';  // Aquí estableces el endpoint específico para UserDto

  constructor(http: HttpClient, tokenService: TokenService) {
    super(http, tokenService);
  }

  updatePassword(item: PasswordUpdate) {
    return this.http.post<CustomApiResponse<PasswordUpdate>>(`${this.apiUrl}/api/${this.endpoint}/PasswordUpdate`,
     { ...item, 'ResponsableId': this.tokenService.getTokenId() }, { context: checkToken() });
  }

}
