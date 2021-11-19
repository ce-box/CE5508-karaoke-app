import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Access, AccessInformationUserDTO, AccessUserDTO } from './../models/access';
import {Token } from './../models/token';

@Injectable()
export class UsersService {

  private urlAPI: string = 'http://23.99.226.234:8000/api/v1';
  private apiKEY: string = 'H8q9eSgR';

  constructor(
    private http: HttpClient
  ) { }

  registerUser(user: Access) {
    return this.http.post<AccessInformationUserDTO>(`${this.urlAPI}/users`, user, {
      headers: {
        "api": this.apiKEY
      }
    });
  }

  loginUser(user: AccessUserDTO) {
    return this.http.post<Token>(`${this.urlAPI}/auth/login`, user, {
      headers: {
        "api": this.apiKEY
      }
    });
  }

  getUserInformation(token: string) {
    return this.http.get<AccessInformationUserDTO>(`${this.urlAPI}/users/me`, {
      headers: {
        Authorization: `Bearer ${token}`,
        api: this.apiKEY
      }
    })
  }
}
