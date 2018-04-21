import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ListitemsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage(
  {
    name: "list-items-page"
  }
)
@Component({
  selector: 'page-listitems',
  templateUrl: 'listitems.html'
})
export class ListItemsPage {
  selectedItem: any;
  isVideo : boolean;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.selectedItem = navParams.get('item');
    this.isVideo = this.selectedItem.url.endsWith("mp4");
  }
}
