import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Events } from 'ionic-angular';

/**
 * Generated class for the BasicPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage(
  {
    name: "basic-page"
  }
)
@Component({
  selector: 'page-basic',
  templateUrl: 'basic.html',
})
export class BasicPage {

  source : string;
  basicinput : string = `{
    "esvi":
      {
        "media": [
          {
            "media_url": "lvs_2-ch_simpsons_biplane_philips_machine.png",
            "note": "2-chamber view:"
          },
          {
            "media_url": "lvs_4-ch_simpsons_biplane_philips_machine.png",
            "note": "4-chamber view:"
          },
          {
            "media_url": "aov(3).mp4",
            "note": "2-chamber video:"
          },
          {
            "media_url": "lh(3).mp4",
            "note": "4-chamber video:"
          }
        ],
        "description": "LV Simpsons Biplane EF is defined as [(EDV-ESV/ EDV) (100%)]. EDV is the LV volume at end of diastole. ESV is the LV volume at end of systole. They can be measured in 2-chamber and 4-chamber views. ",
        "reference" : "reference here"
      },
      "edvi":
      {
        "media": [
          {
            "media_url": "lvs_2-ch_simpsons_biplane_philips_machine.png",
            "note": "2-chamber view:"
          },
          {
            "media_url": "lvs_4-ch_simpsons_biplane_philips_machine.png",
            "note": "4-chamber view:"
          },
          {
            "media_url": "aov(3).mp4",
            "note": "2-chamber video:"
          },
          {
            "media_url": "lh(3).mp4",
            "note": "4-chamber video:"
          }
        ],
        "description": "LV Simpsons Biplane EF is defined as [(EDV-ESV/ EDV) (100%)]. EDV is the LV volume at end of diastole. ESV is the LV volume at end of systole. They can be measured in 2-chamber and 4-chamber views. ",
        "reference" : "reference here"
      },
      "lvsbef":
      {
        "media": [
          {
            "media_url": "lvs_2-ch_simpsons_biplane_philips_machine.png",
            "note": "2-chamber view:"
          },
          {
            "media_url": "lvs_4-ch_simpsons_biplane_philips_machine.png",
            "note": "4-chamber view:"
          },
          {
            "media_url": "aov(3).mp4",
            "note": "2-chamber video:"
          },
          {
            "media_url": "lh(3).mp4",
            "note": "4-chamber video:"
          }
        ],
        "description": "LV Simpsons Biplane EF is defined as [(EDV-ESV/ EDV) (100%)]. EDV is the LV volume at end of diastole. ESV is the LV volume at end of systole. They can be measured in 2-chamber and 4-chamber views. ",
        "reference" : "reference here"
      }
}

  `

  basic :any ;
  constructor(public navCtrl: NavController, public navParams: NavParams, private events: Events) {

    this.source = navParams.get("source");
    console.log(this.source)
    this.basic = JSON.parse(this.basicinput)[this.source];
    console.log(this.basic);

  }

  changeTab() {
    console.log("change tab")
    this.events.publish('change-tab', 1, 2);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BasicPage');
  }

  // ionViewWillEnter() {
  //     // We initialize the showDeleted property so it can be ready
  //     // to be used in the SideMenuDisplayTextConditions decorator
  //     this.showDeleted = this.toBoolean(this.navParams.get('showDeleted'));
  // }

}
