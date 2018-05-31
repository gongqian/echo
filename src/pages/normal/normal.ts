import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the NormalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage(
  {
    name: "normal-page"
  }
)
@Component({
  selector: 'page-normal',
  templateUrl: 'normal.html',
})
export class NormalPage {


  source : string;
  basicinput : string = `{
    "normal-range":
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
  constructor(public navCtrl: NavController, public navParams: NavParams) {

    this.source = navParams.get("source");
    console.log(this.source)
    this.basic = JSON.parse(this.basicinput)[this.source];
    console.log(this.basic);

  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad NormalPage');
  }

}
