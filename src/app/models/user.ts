import {Address} from './address';

export class User {
  id: number;
  username: string;
  password: string;
  firstName: string;
  lastName: string;
  email: string;
  address: Address;

  constructor() {
    this.id = null;
    this.username = '';
    this.password = '';
    this.firstName = '';
    this.lastName = '';
    this.lastName = '';
    this.email = '';
    this.address = new Address();
  }

}
