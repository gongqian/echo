import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { SubListPage } from '../../pages/sublist/sublist';


@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {
  selectedItem: any;
  items: Array<{title: string, note: string, icon: string}>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    // If we navigated to this page, we will have an item available as a nav param
    this.selectedItem = navParams.get('item');

    // Let's populate this page with some filler content for funzies
    // this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
    // 'american-football', 'boat', 'bluetooth', 'build'];

    this.items = [
      {
        title:"Trans-throacic Echo Protocol",
        note:"9 modules",
        icon:"aov(1).jpg"
      },
      {
        title:"Trans-Esophageal Echo Protocol",
        note:"9 modules",
        icon:"aov(3).jpg"
      }
    ];
  }

  itemTapped(event, item) {
    // That's right, we're pushing to ourselves!
    console.log(event);
    
    this.navCtrl.push(SubListPage, {
      item: item
    });
  }
}
