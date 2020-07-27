import { IHotel } from './../hotels/hotels';
import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NavParams } from 'ionic-angular';

@Component({
  selector: 'page-info',
  templateUrl: 'info.html'
})
export class InfoPage implements OnInit{
  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  hotelData: IHotel

  ngOnInit() {
    this.hotelData = this.navParams.get('data');
  }
}
