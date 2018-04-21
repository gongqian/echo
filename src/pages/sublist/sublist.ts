import { Component } from '@angular/core';
import { NavController, NavParams, IonicPage } from 'ionic-angular';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';


@Component({
  selector: 'page-sub-list',
  templateUrl: 'sublist.html'
})
@IonicPage(
  {
    name: "sub-list-page"
  }
)
export class SubListPage {
  selectedItem: any;
  items: any;
  grid: Array<Array<any>>;

  constructor(public navCtrl: NavController, public navParams: NavParams, afDB: AngularFireDatabase) {
    // If we navigated to this page, we will have an item available as a nav param
    this.selectedItem = navParams.get('item');
    this.items = afDB.list('/' + this.selectedItem.child_items, ref => ref.orderByChild('order')).valueChanges();
    // .subscribe(
    //   data => {
    //     this.items = data;
    //     this.grid = Array(Math.ceil(this.items.length/2));
    //     this.ionViewLoaded();

    //       console.log("subscribed");
    //   },
    //   err => console.error(err),
    //   () => {
    //     console.log("done")
      // }
    // )
    // Let's populate this page with some filler content for funzies
    // this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
    // 'american-football', 'boat', 'bluetooth', 'build'];

  //   this.items = [
  //     {"url": "a_m_t(1).mp4","order": 1,"note": "Optimize the apical 4-ch to include LV, RV, LA and RA. Narrow the b-mode sector to increase frame rates. Do not forshorten. Acquire 3 beat acquistions.","icon":null
  //     },
  //     {"url": "lh(1).mp4","order": 2,"note": "Optimize the apical 2-ch to include LV and LA.Do not forshorten. Acquire 3 beat acquistions.", "icon":null
  //     },
  //     {"url": "mv(5).mp4","order": 3,"note": "Apical 2-ch with color to include the Mitral apparatus and pulmonary veins. The color box width should be from annulus to annulus; heighth mid-LV, and depth past the left atrial roof to include the pulmonary veins. Adjust color Doppler scale and gain as needed to optimize. Acquire 3 beat acquisitions", "icon":null
  //     },
  //     {"url": "lh(3).mp4","order": 4,"note": "Optimize the apical LAX to include LV and LA and Aorta.Do not forshorten. Acquire 3 beat acquistions", "icon":null
  //     },
  //     {"url": "mv(7).mp4","order": 5,"note": "Apical LAX with color to include the Mitral apparatus and pulmonary veins. The color box width should be from annulus to annulus; heighth mid-LV, and depth past the atrial roof to include the pulmonary veins. Acquire 3 beat acquisitions", "icon":null
  //     },
  //     {"url": "aov(1).mp4","order": 6,"note": "Apical LAX with color to include the Aortic valve and Aorta. The color box width should include the Aorta; heighth mid-LV, and depth past the Asecneding Aorta. Acquire 3 beat acquisitions", "icon":null
  //     },
  //     {"url": "lh(4).mp4","order": 7,"note": "Apical LAX: decrease the depth to exclude 1/3 of the LA. Optimize for LV assessment and strain. Do not foreshorten. Frame rates should be between 50Hz to 95Hz. Attempt to match or increase frame rates above the HR (heart rate). Acquire 3 beat HFR (high frame rate) acquisition.", "icon":null
  //     },
  //     {"url": "lh(5).mp4","order": 8,"note": "Apical 2-ch: depth to exclude 1/3 of the LA. Optimize for LV assessment and strain. Do not foreshorten. Frame rates should be between 50Hz to 95Hz. Attempt to match or increase frame rates above the HR (heart rate). Acquire 3 beat HFR (high frame rate) acquisition.", "icon":null
  //     },
  //     {"url": "lh_rh(6).mp4","order": 9,"note": "Apical 4-ch: depth to exclude 1/3 of the LA and RA. Optimize for LV and RV assessment and strain. Do not foreshorten. Frame rates should be between 50Hz to 95Hz. Attempt to match or increase frame rates above the HR (heart rate). Acquire 3 beat HFR (high frame rate) acquisition.", "icon":null
  //     },
  //     {"url": "rh_he(7).mp4","order": 12,"note": "Apical 4-ch, optimized RV and RA or focused RV and RA: Acquire 3 beat acquisition.", "icon":null
  //     },
  //     {"url": "rh_he(7).jpg","order": 13,"note": "Apical 4-ch, optimized RV and RA or focused RV and RA: Measure the RA area, tracing from annulus to annulus. Do not include veins or TV leaflets.", "icon":null
  //     },
  //     {"url": "rh_he(8).jpg","order": 14,"note": "Apical 4-ch, optimized RV and RA or focused RV and RA: M-mode of TV free wall annulus. Sweep speed should set to demonstrate at least 3 waveforms without variation or artifact. Adjust M-mode gain as needed and acquire.", "icon":null
  //     }
  // ];

    // this.grid = Array(Math.ceil(this.items.length/2));
    // this.ionViewLoaded();
  }

  ionViewLoaded() {

    console.log("ionViewLoad")
    let rowNum = 0; //counter to iterate over the rows in the grid

    for (let i = 0; i < this.items.length; i+=2) { //iterate images

      this.grid[rowNum] = Array(2); //declare two elements per row

      if (this.items[i]) { //check file URI exists
        if(!this.items[i].icon){
          this.items[i].icon= this.items[i].icon_url? this.items[i].icon_url : "";
        }

        this.grid[rowNum][0] = this.items[i] //insert image
      }

      if (this.items[i+1]) { //repeat for the second image
        if(!this.items[i+1].icon)
          this.items[i+1].icon=this.items[i+1].icon_url ?this.items[i+1].icon_url : "";
        this.grid[rowNum][1] = this.items[i+1]
      }

      rowNum++; //go on to the next row
    }

  }

  itemTapped(event, item) {
    this.navCtrl.push('list-items-page', {
      item: item
    });
  }
}
