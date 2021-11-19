export interface Access {
  email: string;
  name: string;
  username: string;
  password: string;
  role: string;
}

export interface AccessUserDTO extends Omit<Access, 'name' | 'username' | 'role'> {

}

export interface AccessInformationUserDTO extends Omit<Access, 'password'> {
  _id: string;
}

