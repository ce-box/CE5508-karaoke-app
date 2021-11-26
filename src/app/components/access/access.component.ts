import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { Access, AccessUserDTO } from './../../models/access';
import {Token } from './../../models/token';

import { UsersService } from './../../services/users.service';

@Component({
  selector: 'app-access',
  templateUrl: './access.component.html',
  styleUrls: ['./access.component.scss']
})
export class AccessComponent implements OnInit {

  @Output() token = new EventEmitter<string>();

  isRegister: boolean = false;
  userLogin: AccessUserDTO = {
    email: '',
    password: ''
  }
  userRegister: Access = {
    email: '',
    name: '',
    username: '',
    password: '',
    role: '',
  }

  constructor(private userService: UsersService) { }

  ngOnInit(): void {}

  handledIsRegister() {
    this.isRegister = !this.isRegister;
  }

  onLogin() {
    this.userService.loginUser(this.userLogin).subscribe(response => {
      this.token.emit(response.token);
    });
  }

  onRegister() {
    const user = this.userService.registerUser(this.userRegister).subscribe();
    console.log(user);
    this.isRegister = !this.isRegister;
  }

}
