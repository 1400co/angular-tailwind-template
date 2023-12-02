import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { CustomApiResponse } from '../models/api-response';
import { TokenService } from './token.service';
import { checkToken } from '../Interceptor/token-interceptor';

@Injectable({
  providedIn: 'root'
})
export class GenericService<T> {

  apiUrl = environment.API_URL;
  protected endpoint: string;

  constructor(
    protected http: HttpClient,
    protected tokenService: TokenService
  ) { }

  get(filter: string, pageNumber: number, pageSize: number) {
    const params = {
      filter: filter,
      pageNumber: pageNumber.toString(),
      pageSize: pageSize.toString()
    };

    return this.http.get<CustomApiResponse<T[]>>(`${this.apiUrl}/api/${this.endpoint}`, { params, context: checkToken() });
  }

  getAll() {
    return this.http.get<CustomApiResponse<T[]>>(`${this.apiUrl}/api/${this.endpoint}/getAll`, { context: checkToken() });
  }

  getById(id: string) {
    return this.http.get<CustomApiResponse<T>>(`${this.apiUrl}/api/${this.endpoint}/${id}`, { context: checkToken() });
  }

  create(item: T) {
    return this.http.post<CustomApiResponse<T>>(`${this.apiUrl}/api/${this.endpoint}`, { ...item, 'ResponsableId': this.tokenService.getTokenId() }, { context: checkToken() });
  }

  update(id: string, item: T) {
    return this.http.put<CustomApiResponse<T>>(`${this.apiUrl}/api/${this.endpoint}/${id}`, { ...item, 'ResponsableId': this.tokenService.getTokenId() }, { context: checkToken() });
  }

  delete(id: string, item: T) {
    return this.http.delete<CustomApiResponse<T>>(`${this.apiUrl}/api/${this.endpoint}/${id}`, { context: checkToken() });
  }
}
