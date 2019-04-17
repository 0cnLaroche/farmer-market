import {Address} from './address';

export class Farm {
  id: number;
  name: string;
  address: Address;
  rating: number;

  constructor() {
    this.id = null;
    this.name = '';
    this.address = new Address();
    this.rating = 0;
  }
}
