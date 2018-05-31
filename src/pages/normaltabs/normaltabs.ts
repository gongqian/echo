import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the NormaltabsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
@IonicPage(
  {
    name: "normaltabs-page"
  }
)
@Component({
  selector: 'page-normaltabs',
  templateUrl: 'normaltabs.html',
})
export class NormaltabsPage {



  ionViewDidLoad() {
    console.log('ionViewDidLoad NormaltabsPage');
  }

  tab1Root: any = "man-page";
  tab2Root: any = "woman-page";


 tab1Params: any;



 source: any;

 constructor(public navCtrl: NavController, public navParams: NavParams) {
   this.source = this.navParams.get("source");
   this.tab1Params = {source:this.source}
 }

}
