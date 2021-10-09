export interface Access {
  email: string;
  name: string;
  username: string;
  password: string;
  confirmPassword: string;
}

export interface AccessUserDTO extends Omit<Access, 'name' | 'username' | 'confirmPassword'> {

}

