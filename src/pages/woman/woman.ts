import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform} from 'ionic-angular';

/**
 * Generated class for the WomanPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage(
  {
    name: "woman-page"
  }
)
@Component({
  selector: 'page-woman',
  templateUrl: 'woman.html',
})
export class WomanPage {
  category: string = "leftHeart";
  isAndroid: boolean = false;
  constructor(public navCtrl: NavController, public navParams: NavParams, platform: Platform) {
    this.isAndroid = platform.is('android');
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad WomanPage');
  }

}
