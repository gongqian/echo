import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the TabsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage(
  {
    name: "tabs-page"
  }
)
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {
   tab1Root: any = "basic-page";
   tab2Root: any = "caculator-page";
   tab3Root: any = "tip-page";

  tab1Params: any;



  source: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.source = this.navParams.get("source");
    this.tab1Params = {source:this.source}
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TabsPage');
  }

}
