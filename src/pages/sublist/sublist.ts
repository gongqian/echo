import { Component } from '@angular/core';
import { NavController, NavParams, IonicPage } from 'ionic-angular';
import { ListItemsPage} from '../listitems/listitems';

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
  items: Array<{url: string, note: string, order:number, icon: string}>;
  grid: Array<Array<any>>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    // If we navigated to this page, we will have an item available as a nav param
    this.selectedItem = navParams.get('item');

    // Let's populate this page with some filler content for funzies
    // this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
    // 'american-football', 'boat', 'bluetooth', 'build'];

    this.items = [
      {"url": "a_m_t(1).mp4","order": 1,"note": "Optimize the apical 4-ch to include LV, RV, LA and RA. Narrow the b-mode sector to increase frame rates. Do not forshorten. Acquire 3 beat acquistions.","icon":null
      },
      {"url": "lh(1).mp4","order": 2,"note": "Optimize the apical 2-ch to include LV and LA.Do not forshorten. Acquire 3 beat acquistions.", "icon":null
      },
      {"url": "mv(5).mp4","order": 3,"note": "Apical 2-ch with color to include the Mitral apparatus and pulmonary veins. The color box width should be from annulus to annulus; heighth mid-LV, and depth past the left atrial roof to include the pulmonary veins. Adjust color Doppler scale and gain as needed to optimize. Acquire 3 beat acquisitions", "icon":null
      },
      {"url": "lh(3).mp4","order": 4,"note": "Optimize the apical LAX to include LV and LA and Aorta.Do not forshorten. Acquire 3 beat acquistions", "icon":null
      },
      {"url": "mv(7).mp4","order": 5,"note": "Apical LAX with color to include the Mitral apparatus and pulmonary veins. The color box width should be from annulus to annulus; heighth mid-LV, and depth past the atrial roof to include the pulmonary veins. Acquire 3 beat acquisitions", "icon":null
      },
      {"url": "aov(1).mp4","order": 6,"note": "Apical LAX with color to include the Aortic valve and Aorta. The color box width should include the Aorta; heighth mid-LV, and depth past the Asecneding Aorta. Acquire 3 beat acquisitions", "icon":null
      },
      {"url": "lh(4).mp4","order": 7,"note": "Apical LAX: decrease the depth to exclude 1/3 of the LA. Optimize for LV assessment and strain. Do not foreshorten. Frame rates should be between 50Hz to 95Hz. Attempt to match or increase frame rates above the HR (heart rate). Acquire 3 beat HFR (high frame rate) acquisition.", "icon":null
      },
      {"url": "lh(5).mp4","order": 8,"note": "Apical 2-ch: depth to exclude 1/3 of the LA. Optimize for LV assessment and strain. Do not foreshorten. Frame rates should be between 50Hz to 95Hz. Attempt to match or increase frame rates above the HR (heart rate). Acquire 3 beat HFR (high frame rate) acquisition.", "icon":null
      },
      {"url": "lh_rh(6).mp4","order": 9,"note": "Apical 4-ch: depth to exclude 1/3 of the LA and RA. Optimize for LV and RV assessment and strain. Do not foreshorten. Frame rates should be between 50Hz to 95Hz. Attempt to match or increase frame rates above the HR (heart rate). Acquire 3 beat HFR (high frame rate) acquisition.", "icon":null
      }/*,
      {"url": "rh_he_s(6).mp4","order": 10,"note": "Apical 4-ch, focused RV: depth to exclude 1/3 of the LA and RA. Optimize RV assessment and strain. Do not foreshorten. Frame rates should be between 50Hz to 95Hz. Attempt to match or increase frame rates above the HR (heart rate). Acquire 3 beat HFR (high frame rate) acquisition.", "icon":null
      },
      {"url": "rh_he(6).jpg","order": 11,"note": "Apical 4-ch, optimized RV or focused RV for RV basal dimension. Do not foreshorten. This measurement is done at end diastole when the RV is at it's largest and the Tricuspid valve is open. Using the tips of the TV as a landmark measure from the RV free wall to the RV septum, paralell to the TV annulus.  ", "icon":null
      }*/,
      {"url": "rh_he(7).mp4","order": 12,"note": "Apical 4-ch, optimized RV and RA or focused RV and RA: Acquire 3 beat acquisition.", "icon":null
      },
      {"url": "rh_he(7).jpg","order": 13,"note": "Apical 4-ch, optimized RV and RA or focused RV and RA: Measure the RA area, tracing from annulus to annulus. Do not include veins or TV leaflets.", "icon":null
      },
      {"url": "rh_he(8).jpg","order": 14,"note": "Apical 4-ch, optimized RV and RA or focused RV and RA: M-mode of TV free wall annulus. Sweep speed should set to demonstrate at least 3 waveforms without variation or artifact. Adjust M-mode gain as needed and acquire.", "icon":null
      }/*,
      {"url": "rh_he(9).jpg","order": 15,"note": "Measure optimized M-mode of TV free wall annulus.", "icon":null
      }*,
      {"url": "rh_he(10).jpg","order": 16,"note": "Apical 4-ch, optimized RV and RA or focused RV and RA: TDI (tissue Doppler) of TV free wall annulus. Sweep speed should set to demonstrate at least 3 waveforms without variation or artifact. Adjust frequency, dynamic range and gain as needed and acquire.", "icon":null
      },
      {"url": "rh_he(11).jpg","order": 17,"note": "Measure optimized e' and s' TDI of TV free wall annulus.", "icon":null
      },
      {"url": "rh_he(12).jpg","order": 18,"note": "Apical 4-ch, optimized RV and RA or focused RV and RA: PW (pulse wave) spectral Doppler of TV Inflow. Sweep speed should set to demonstrate at least 3 waveforms without variation or artifact. Adjust spectral Doppler frequency, gain, reject and compression as needed and acquire.", "icon":null
      },
      {"url": "rh_he(13).jpg","order": 19,"note": "Measure E and A of optimized TV inflow spectral Doppler.", "icon":null
      },
      {"url": "rh_he_t(8).mp4","order": 20,"note": "Apical 4-ch with color to include the Tricuspid valve apparatus and veins. The color box width should be from annulus to annulus; heighth mid-LV, and depth past the right atrial roof. Acquire 3 beat acquisitions", "icon":null
      },
      {"url": "rh_h3(14).jpg","order": 21,"note": "Optimized apical 4-ch with color to include the Tricuspid valve apparatus and veins. CW (continuous wave) spectral Doppler sample for TR at valve coaptation. Sweep speed should demonstrate at least 3 waveforms without without variation or artifact. Adjust frequency, gain,reject and compression as needed and acquire. An additional acquisition is required for measurement if there is a optimized TR signal. Only trace a TR VTI if there is a complete optimized spectral envelope; when in doubt measure TR Vmax and acquire. Do not measure what you can't see.", "icon":null
      },
      {"url": "aov(2).mp4","order": 22,"note": "Optimized apical 5-ch for Aortic valve and Aorta. Acquire 3 beat acquisitions", "icon":null
      },
      {"url": "aov(3).mp4","order": 23,"note": "Optimized apical 5-ch with color to include the Aortic valve and Aorta. The color box width should include the Aorta; heighth mid-LV, and depth past the Asecneding Aorta. Acquire 3 beat acquisitions", "icon":null
      },
      {"url": "aov(3).jpg","order": 24,"note": "Optimized apical 5-ch for Aortic valve and Aorta. CW spectral Doppler of Aorta. Place sample volume in the aorta where the highest velocities are seen with color Doppler. Sweep spped should be set to demonstrate 3 waveforms without variation or artifact. Adjust spectral Doppler gain, reject and compress as needed and acquire.", "icon":null
      },
      {"url": "aov(4).jpg","order": 25,"note": "Measure by tracing AoV VTI for VTI, Vmax, AT, Mean and Peak gradients and AVA. Acquire. *Note: some platforms may require a seperate measurement for AV AT (acceleration time).", "icon":null
      },
      {"url": "aov(5).jpg","order": 26,"note": "Optimized apical 5-ch for Aortic valve and Aorta. PW spectral Doppler of LVOT. Place sample volume in the LVOT proximal to the AV where you would measure the LVOT diameter. Sweep spped should be set to demonstrate 3 waveforms without variation or artifact. Adjust spectral Doppler frequency, gain, reject and compress as needed and acquire.", "icon":null
      },
      {"url": "aov(6).jpg","order": 27,"note": "Measure by tracing LVOT VTI for VTI, Vmax, Mean and Peak gradients and AVA. Acquire", "icon":null
      },
      {"url": "m(8).mp4","order": 28,"note": "Apical 4-ch with color to include the Mitral apparatus and pulmonary veins. The color box width should be from annulus to annulus; heighth mid-LV, and depth past the atrial roof to include the pulmonary veins. Acquire 3 beat acquisitions", "icon":null
      },
      {"url": "m(2).jpg","order": 29,"note": "Optimized apical 4-ch with color to include the Mitral valve apparatus and veins. CW (continuous wave) spectral Doppler sample for MV Inflow and MR at valve coaptation. Sweep speed should demonstrate at least 3 waveforms without without variation or artifact. Adjust frequency, gain,reject and compression as needed and acquire. An additional acquisition is required for measurement if there is a optimized MR signal. Only trace a TR VTI if there is an complete optimized spectral envelope; when in doubt measure MR Vmax and acquire. Do not measure what you can't see.", "icon":null
      },
      {"url": "m(3).jpg","order": 30,"note": "Optimized apical 4-ch with color to include the Mitral valve apparatus and veins. PW (pulse wave) spectral Doppler sample for PV flow. Sweep speed should demonstrate at least 3 waveforms without without variation or artifact. Adjust frequency, gain,reject and compression as needed and acquire.", "icon":null
      },
      {"url": "m(4).jpg","order": 31,"note": "Optimized apical 4-ch. PW (pulse wave) spectral Doppler sample for MV inflow at tips of MV leaflets. Sweep speed should demonstrate at least 3 waveforms without without variation or artifact. Adjust frequency, gain,reject and compression as needed and acquire.", "icon":null
      },
      {"url": "m(5).jpg","order": 32,"note": "Optimized apical 4-ch. PW (pulse wave) spectral Doppler sample for MV inflow at tips of MV leaflets. *Note: adjust sweep speed when appropriate for accurate measurements (e.g. MV DT) and acquire.", "icon":null
      },
      {"url": "m(6).jpg","order": 33,"note": "Measure MV inflow E, A and DT.", "icon":null
      },
      {"url": "lh_d(7).jpg","order": 34,"note": "Apical 4-ch, optimized: TDI (tissue Doppler) of MV lateral annulus. Sweep speed should set to demonstrate at least 3 waveforms without variation or artifact. Adjust frequency, dynamic range and gain as needed and acquire. *Note: Acquire and measure medial TDI as appropriate.", "icon":null
      },
      {"url": "lh_d(8).jpg","order": 35,"note": "Measure optimized e' and s' TDI of MV lateral annulus.", "icon":null
      },
      {"url": "lh(11).mp4","order": 36,"note": "Optimize the PLAX to include LV, RV, LA and Aorta/AoV. Narrow the B-mode sector to increase frame rates. Ensure for true PLAX view. Acquire 3 beat acquistions.", "icon":null
      },
      {"url": "lh(1).jpg","order": 37,"note": "Measure septal wall, LVIDd and infero lateral wall from true optimized PLAX. Done at end diastole when LV is at it's largest. Use the MV leaflets tips as a landmark. Acquire.", "icon":null
      },
      {"url": "lh(2).jpg","order": 38,"note": "Measure LVIDs from true optimized PLAX. Done at end systole when LV is at it's smallest. Use the MV leaflets tips as a landmark and measure at the same level as LVIDd. Acquire.", "icon":null
      },
      {"url": "m_aoV(3).mp4","order": 39,"note": "From true PLAX, optimize PLAX Zoom to include MV apparatus and Aorta/AoV. Acquire 3 beat acquistions.", "icon":null
      },
      {"url": "m(4).mp4","order": 40,"note": "Optimized PLAX Zoom to include MV apparatus and Aorta/AoV with color. Color Doppler to include only the MV apparatus, the ROI (region of interest).Adjust color Doppler scale and gain as needed to optimize. Acquire 3 beat acquistions.", "icon":null
      },
      {"url": "aov(7).mp4","order": 41,"note": "Optimized PLAX Zoom to include MV apparatus and Aorta/AoV with color. Color Doppler to include only the ROI: the LVOT, AoV and Aortic Root. Adjust color Doppler scale and gain as needed to optimize. Acquire 3 beat acquistions.", "icon":null
      },
      {"url": "aov(7).jpg","order": 42,"note": "Optimized PLAX Zoom to include MV apparatus and Aorta/AoV. Measure LVOT diameter at mid systole proximal to the AoV (approximately 1mm to 5mm from the valve). Measured from inner to inner edge. Acquire. *Note: When there is septal hypertrophy or a sigmoid septum, it may be appropriate to measure the LVOT at the AoV annulus.  ", "icon":null
      },
      {"url": "aov(1).jpg","order": 43,"note": "Optimized PLAX Zoom to include MV apparatus and Aorta/AoV. Measure the Aortic Root (AoV annulus, sinus and STJ) at mid systole where the Aortic Root is its largest. Measured from inner to inner edge. Acquire.", "icon":null
      },
      {"url": "art.mp4","order": 44,"note": "Optimized PLAX Zoom to include MV apparatus and Aorta/AoV. Slide up an intercostal space for the ascending Aorta. Adjust gain and focus as needed. Acquire 3 beat acquistions.", "icon":null
      },
      {"url": "art.jpg","order": 45,"note": "Optimized PLAX Zoom to include Ascending Aorta. Measure the Ascending Aortic where the aorta is its largest. Measured from inner to inner edge. Acquire.", "icon":null
      },
      {"url": "rh_he_t(3).mp4","order": 46,"note": "Optimized RVIT. Adjust the B-mode sector, gain, TGC's and focus as needed. Acquire 3 beat acquisition.", "icon":null
      },
      {"url": "rh_he_t(4).mp4","order": 47,"note": "Optimized RVIT with color to include the TV apparatus and veins. The color box width should be from annulus to annulus; heighth mid-LV, and depth past the right atrial roof. Acquire 3 beat acquisitions", "icon":null
      },
      {"url": "rh_he_t(5).jpg","order": 48,"note": "Optimized RVIT with color to include the TV apparatus and veins. CW (continuous wave) spectral Doppler sample for TR at valve coaptation. Sweep speed should demonstrate at least 3 waveforms without without variation or artifact. Adjust frequency, gain,reject and compression as needed and acquire. An additional acquisition is required for measurement if there is an optimized TR signal. Only trace a TR VTI if there is a complete optimized spectral envelope; when in doubt measure TR Vmax and acquire. Do not measure what you can't see.", "icon":null
      },
      {"url": "aov_t_p(4).mp4","order": 49,"note": "Optimized PSAX at the level of the AoV. Adjust the B-mode sector, gain, TGC's and focus as needed. Acquire 3 beat acquisition.", "icon":null
      },
      {"url": "aov(5).mp4","order": 50,"note": "Optimized PSAX at the level of the AoV; Zoom of the AoV. Adjust the gain, TGC's and focus as needed. Acquire 3 beat acquisition.", "icon":null
      },
      {"url": "aov(6).mp4","order": 51,"note": "Optimized PSAX at the level of the AoV; Zoom of the AoV with color. Color Doppler to include only the ROI: the AoV and annulus. Adjust color Doppler scale and gain as needed to optimize. Acquire 3 beat acquistions.", "icon":null
      },
      {"url": "rh_he_t(9).mp4","order": 52,"note": "", "icon":null
      },
      {"url": "rh_he_t(15).jpg","order": 53,"note": "", "icon":null
      },
      {"url": "rh_he_p(1).mp4","order": 54,"note": "", "icon":null
      },
      {"url": "rh_he_p(2).mp4","order": 55,"note": "", "icon":null
      },
      {"url": "rh_he_p(1).jpg","order": 56,"note": "", "icon":null
      },
      {"url": "rh_he_p(2).jpg","order": 57,"note": "", "icon":null
      },
      {"url": "rh_he_p(3).jpg","order": 58,"note": "", "icon":null
      },
      {"url": "rh_he_p(4).jpg","order": 59,"note": "", "icon":null
      },
      {"url": "m(1).mp4","order": 60,"note": "", "icon":null
      },
      {"url": "m(2).mp4","order": 61,"note": "", "icon":null
      },
      {"url": "lh(9).mp4","order": 62,"note": "", "icon":null
      },
      {"url": "lh(10).mp4","order": 63,"note": "", "icon":null
      },
      {"url": "lh(8).mp4","order": 64,"note": "", "icon":null
      },
      {"url": "lh(7).mp4","order": 65,"note": "", "icon":null
      },
      {"url": "cos(2).mp4","order": 66,"note": "", "icon":null
      },
      {"url": "cos(3).mp4","order": 67,"note": "", "icon":null
      },
      {"url": "cos(4).mp4","order": 68,"note": "", "icon":null
      },
      {"url": "cos_rh_he(1).mp4","order": 69,"note": "", "icon":null
      },
      {"url": "cos_rh_he(5).mp4","order": 70,"note": "", "icon":null
      },
      {"url": "cos_rh_he(^).mp4","order": 71,"note": "", "icon":null
      },
      {"url": "cos_rh-he(1).jpg","order": 72,"note": "", "icon":null
      },
      {"url": "3_a_m_t(7).mp4","order": 73,"note": "", "icon":null
      },
      {"url": "3_a_m_t(9).mp4","order": 74,"note": "", "icon":null
      },
      {"url": "3_a_m_t(10).mp4","order": 75,"note": "", "icon":null
      },
      {"url": "3_lh_m_aov(10).mp4","order": 76,"note": "", "icon":null
      },
      {"url": "3_lh_m_aov(11).mp4","order": 77,"note": "", "icon":null
      },
      {"url": "3_lh_m_aov(1).mp4","order": 78,"note": "", "icon":null
      },
      {"url": "3_rv(1).mp4","order": 79,"note": "", "icon":null
      },
      {"url": "3_rv(2).mp4","order": 80,"note": "", "icon":null
      },
      {"url": "dc(2).mp4","order": 81,"note": "", "icon":null
      },
      {"url": "dc(3).mp4","order": 82,"note": "", "icon":null
      },
      {"url": "dc(4).mp4","order": 83,"note": "", "icon":null
      },
      {"url": "dc(5).mp4","order": 84,"note": "", "icon":null
      },
      {"url": "dc(6).mp4","order": 85,"note": "", "icon":null
      },
      {"url": "dc(7).mp4","order": 86,"note": "", "icon":null
      },
      {"url": "dc(8).mp4","order": 87,"note": "", "icon":null
      },
      {"url": "dc(9).mp4","order": 88,"note": "", "icon":null
      },
      {"url": "dc(10).mp4","order": 89,"note": "", "icon":null
      },
      {"url": "dc(11).mp4","order": 90,"note": "", "icon":null
      },
      {"url": "dc(15).mp4","order": 91,"note": "", "icon":null
      },
      {"url": "dc(14).mp4","order": 92,"note": "", "icon":null
      },
      {"url": "dc(13).mp4","order": 93,"note": "", "icon":null
      },
      {"url": "dc(12).mp4","order": 94,"note": "", "icon":null
      },
      {"url": "dc(18).mp4","order": 95,"note": "", "icon":null
      },
      {"url": "dc(17).mp4","order": 96,"note": "", "icon":null
      },
      {"url": "dc(16).mp4","order": 97,"note": "", "icon":null
      },
      {"url": "dc(1).mp4","order": 98,"note": "", "icon":null
      },
      {"url": "dc(1).jpg","order": 99,"note": "", "icon":null
      }*/
  ];

    this.grid = Array(Math.ceil(this.items.length/2));
    this.ionViewLoaded();
  }

  ionViewLoaded() {

    let rowNum = 0; //counter to iterate over the rows in the grid

    for (let i = 0; i < this.items.length; i+=2) { //iterate images

      this.grid[rowNum] = Array(2); //declare two elements per row

      if (this.items[i]) { //check file URI exists
        if(!this.items[i].icon){
          this.items[i].icon="aov(1).jpg"
        }

        this.grid[rowNum][0] = this.items[i] //insert image
      }

      if (this.items[i+1]) { //repeat for the second image
        if(!this.items[i+1].icon)
          this.items[i+1].icon="aov(1).jpg"
        this.grid[rowNum][1] = this.items[i+1]
      }

      rowNum++; //go on to the next row
    }

  }

  itemTapped(event, item) {
    // That's right, we're pushing to ourselves!
    console.log(event);
    console.log(item);

    this.navCtrl.push('list-items-page', {
      item: item
    });
  }
}
