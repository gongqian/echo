import { Component } from '@angular/core';
import { NavController,IonicPage } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
@IonicPage(
  {
    name: "home-page"
  }
)
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

}
