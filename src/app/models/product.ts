import {Marchant} from './marchant';
import {Farm} from './farm';

export class Product {

  id: number;
  name: string;
  price: number;
  category: string;
  section: string;
  rating: number;
  promotion: number;
  images: any[];
  farmId: number;
  farmName: string;
  //farm: Farm;
  vendor: Marchant;

  constructor() {
    this.id = null;
    this.name = '';
    this.price = null;
    this.category = '';
    this.section = '';
    this.rating = 0;
    this.promotion = 0;
    this.images = [];
    this.farmId = null;
    this.farmName = '';
    this.vendor = new Marchant();
  }

}

