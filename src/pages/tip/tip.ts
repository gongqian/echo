import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the TipPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage(
  {
    name: "tip-page"
  }
)
@Component({
  selector: 'page-tip',
  templateUrl: 'tip.html',
})
export class TipPage {

  source : string;
  constructor(public navCtrl: NavController, public navParams: NavParams) {

    this.source = navParams.get("source");
    console.log(navParams)
    console.log(this.source)

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TipPage');
  }

}
