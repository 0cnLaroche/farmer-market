import {Address} from './address';

export class Marchant {
  id: number;
  name: string;
  address: Address;
  phone: string;
  email: string;
  rating: number;

  constructor() {
    this.id = null;
    this.name = '';
    this.address = new Address();
    this.phone = '';
    this.email = '';
    this.rating = 0;
  }
}
