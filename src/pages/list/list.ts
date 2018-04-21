import { Component } from '@angular/core';
import { NavController, NavParams, IonicPage} from 'ionic-angular';
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
    this.selectedItem = navParams.get('item');

    //console.log(this.selectedItem)

   this.items = afDB.list('/'+ this.selectedItem.child_items, ref => ref.orderByChild('order')).valueChanges()

    console.log(this.items)

    // Let's populate this page with some filler content for funzies
    // this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
    // 'american-football', 'boat', 'bluetooth', 'build'];

    // this.items = [
    //   {
    //     title:"Trans-throacic Echo Protocol",
    //     note:"9 modules",
    //     icon:"aov(1).jpg"
    //   },
    //   {
    //     title:"Trans-Esophageal Echo Protocol",
    //     note:"9 modules",
    //     icon:"aov(3).jpg"
    //   }
    // ];
  }

  itemTapped(event, item) {
    // That's right, we're pushing to ourselves!
    console.log(event);

    this.navCtrl.push('sub-list-page', {
      item: item
    });
  }
}
