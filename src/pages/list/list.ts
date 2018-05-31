import { Component } from '@angular/core';
import { NavController, NavParams, IonicPage } from 'ionic-angular';
import { SubListPage } from '../../pages/sublist/sublist';
import { MenuItem } from '../../models/Menu_Item'
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';



@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
@IonicPage(
  {
    name: "list-page"
  }
)

export class ListPage {
  selectedItem: MenuItem;
  items: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, afDB: AngularFireDatabase) {
    // If we navigated to this page, we will have an item available as a nav param
    this.selectedItem = navParams.get('child_item');
    console.log(this.selectedItem)

    this.items = afDB.list('/protocoles_items', ref => ref.orderByChild('order')).valueChanges()
  }

  itemTapped(event, item) {
    // That's right, we're pushing to ourselves!
    console.log(event);

    this.navCtrl.push('sub-list1-page', {
      item: item
    });
  }
}
