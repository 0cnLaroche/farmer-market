export class Address {
  street: string;
  city: string;
  state: string;
  postalcode: string;
  country: string;
  latitude: number;
  longitude: number;

  constructor() {
    this.street = String();
    this.city = String();
    this.state = String();
    this.postalcode = String();
    this.country = String();
    this.latitude = null;
    this.longitude = null;

  }
}
