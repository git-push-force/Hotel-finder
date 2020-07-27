import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { getHotels } from './helpers';
import { InfoPage } from '../info/info';

export interface IHotel {
  imageUrl: string,
  title: string,
  description: string,
  roomCost: number,
  hasParking: boolean,
  address: string,
  phone: string
}

@Component({
  selector: 'page-hotels',
  templateUrl: 'hotels.html'
})
export class HotelsPage {
  hotels: IHotel[];

  constructor(public navCtrl: NavController) {
    this.hotels = getHotels();
  }

  filter(data) {
    this.hotels = getHotels().filter(hotel => {
      
      const from = data.from ? data.from < hotel.roomCost : true;
      const to = data.to ? data.to > hotel.roomCost : true;
      const hasParking = data.hasParking ? hotel.hasParking : true;

      return from && to && hasParking;
    });
  }

  openInfo(data) {
    this.navCtrl.push(InfoPage, { data });
  }
}
