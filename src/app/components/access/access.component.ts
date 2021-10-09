import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { Access, AccessUserDTO } from './../../models/access'

@Component({
  selector: 'app-access',
  templateUrl: './access.component.html',
  styleUrls: ['./access.component.scss']
})
export class AccessComponent implements OnInit {

  @Output() token = new EventEmitter<string>();

  isResister: boolean = false;
  userLogin: AccessUserDTO = {
    email: '',
    password: ''
  }
  userRegister: Access = {
    email: '',
    name: '',
    username: '',
    password: '',
    confirmPassword: ''
  }

  constructor() { }

  ngOnInit() {
  }

  handledIsRegister() {
    this.isResister = !this.isResister;
  }

  onLogin() {
    console.log(this.userLogin);
    this.token.emit('este_es_un_token');
  }

  onRegister() {
    console.log(this.userRegister);
    this.isResister = !this.isResister;
  }

}
