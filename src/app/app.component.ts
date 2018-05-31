import { Component, ViewChild } from '@angular/core';
import { Nav, Platform,MenuController,AlertController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

// import { ListPage } from '../pages/list/list';
import { Observable } from 'rxjs/Observable';
import { Subscription} from 'rxjs';
// import { EchoServiceProvider } from '../providers/EchoService/echo-service'
import { MenuItems } from '../models/Menu_Items'
import { AngularFireDatabase } from 'angularfire2/database';
import {MenuItem} from '../models/Menu_Item';

// Side Menu Component
import { SideMenuSettings } from './../shared/side-menu-content/models/side-menu-settings';
import { SideMenuOption } from './../shared/side-menu-content/models/side-menu-option';
import { SideMenuContentComponent } from './../shared/side-menu-content/side-menu-content.component';

// RxJS
import { ReplaySubject } from "rxjs/ReplaySubject";
// import { ArrayObservable } from "rxjs/observable/ArrayObservable";

export interface PageInterface {
  title: string;
  name: string;
  component: any;
  icon: string;
  logsOut?: boolean;
  index?: number;
  tabName?: string;
  tabComponent?: any;
}

@Component({
  templateUrl: 'app.html'
})
export class MyApp{//implements OnInit,OnDestroy{
  @ViewChild(Nav) nav: Nav;
  @ViewChild(SideMenuContentComponent) sideMenu: SideMenuContentComponent;

  rootPage: string = "home-page";

  pages: Array<{title: string, component: any}>;
  // menuItems: MenuItems;
  subscription : Subscription;
  menuItems : Observable<MenuItem[]>;
  // {
  //   "iconName": "home",
  //   "displayText": "Home",
  //   "component": "home-page",
  //   "title": "Home"
  // },
  menuOptions : string =`
  [
  {
    "iconName": "home",
    "displayText": "Normal Range",
    "component": "normaltabs-page",
    "title": "Normal Range",
        "custom": {
          			"param": { "source": "man" }
         			}
  },
  {
    "displayText": "Left Ventricle",
    "suboptions": [{
        "iconName": "basket",
        "displayText": "ESVi",
        "component": "tabs-page",
        "childItems": "esvi",
        "title": "ESVi",
        "custom": {
          			"param": { "source": "esvi" }
         			}
      },
      {
        "iconName": "heart",
        "displayText": "EDVi",
        "component": "SubOptionTwoPage",
        "childItems": "edvi",
        "title": "EDVi",
        "custom": {
          			"param": { "source": "edvi" }
         			}

      },
      {
        "iconName": "heart",
        "displayText": "Simpsons Biplane EF(%)",
        "title": "lvsbef",
        "component": "tabs-page",
        "custom": {
          			"param": { "source": "lvsbef" }
         			}
      },
      {
        "iconName": "heart-dislike",
        "displayText": "E/e' LV Lateral Anulus",
        "component": "",
        "childItems": "lvsbef",
        "title": "E/e' LV Lateral Anulus"
      },
      {
        "iconName": "medkit",
        "displayText": "E/e' LV Medical Anulus",
        "component": "",
        "childItems": "lvsbef",
        "title": "E/e' LV Lateral Anulus"
      }
    ]
  },
  {
    "displayText": "Left Atrium",
    "suboptions": [{
        "iconName": "basket",
        "displayText": "ESVi",
        "component": "Basic-Page",
        "childItems": "esvi",
        "title": "ESVi"
      },
      {
        "iconName": "bookmark",
        "displayText": "EDVi",
        "component": "SubOptionTwoPage",
        "childItems": "edvi",
        "title": "EDVi"

      },
      {
        "iconName": "bug",
        "displayText": "Dynamic Badge",
        "title": "Simpsons Biplane EF(%)",
        "component": ""
      },
      {
        "iconName": "bug",
        "displayText": "E/e' LV Lateral Anulus",
        "component": "",
        "childItems": "lvsbef",
        "title": "E/e' LV Lateral Anulus"
      },
      {
        "iconName": "bug",
        "displayText": "E/e' LV Medical Anulus",
        "component": "",
        "childItems": "lvsbef",
        "title": "E/e' LV Lateral Anulus"
      }
    ]
  },
  {
    "displayText": "Right Ventricle",
    "suboptions": [{
        "iconName": "basket",
        "displayText": "ESVi",
        "component": "Basic-Page",
        "childItems": "esvi",
        "title": "ESVi"
      },
      {
        "iconName": "bookmark",
        "displayText": "EDVi",
        "component": "SubOptionTwoPage",
        "childItems": "edvi",
        "title": "EDVi"

      },
      {
        "iconName": "bug",
        "displayText": "Dynamic Badge",
        "title": "Simpsons Biplane EF(%)",
        "component": ""
      },
      {
        "iconName": "bug",
        "displayText": "E/e' LV Lateral Anulus",
        "component": "",
        "childItems": "lvsbef",
        "title": "E/e' LV Lateral Anulus"
      },
      {
        "iconName": "bug",
        "displayText": "E/e' LV Medical Anulus",
        "component": "",
        "childItems": "lvsbef",
        "title": "E/e' LV Lateral Anulus"
      }
    ]
  },
  {
    "displayText": "Right Atrium",
    "suboptions": [{
        "iconName": "basket",
        "displayText": "ESVi",
        "component": "Basic-Page",
        "childItems": "esvi",
        "title": "ESVi"
      },
      {
        "iconName": "bookmark",
        "displayText": "EDVi",
        "component": "SubOptionTwoPage",
        "childItems": "edvi",
        "title": "EDVi"

      },
      {
        "iconName": "bug",
        "displayText": "Dynamic Badge",
        "title": "Simpsons Biplane EF(%)",
        "component": ""
      },
      {
        "iconName": "bug",
        "displayText": "E/e' LV Lateral Anulus",
        "component": "",
        "childItems": "lvsbef",
        "title": "E/e' LV Lateral Anulus"
      },
      {
        "iconName": "bug",
        "displayText": "E/e' LV Medical Anulus",
        "component": "",
        "childItems": "lvsbef",
        "title": "E/e' LV Lateral Anulus"
      }
    ]
  },
  {
    "iconName": "headset",
    "displayText": "Protocol",
    "component": "list-page",
    "title": "Protocal",
    "custom": {
      "param": { "childItems": "protocoles_items" }
     }
  },
  {
    "displayText": "Protocol",
    "suboptions": [{
        "iconName": "basket",
        "displayText": "Trans-throacic",
        "component": "sub-list-page",
        "childItems": "trans_throacic_items",
        "title": "Trans-throacic Echo Protocol",
        "custom": {
          "param": { "item": "trans_throacic_items" }
         }
      },
      {
        "iconName": "bookmark",
        "displayText": "Trans-Esophageal",
        "component": "SubOptionTwoPage",
        "childItems": "trans_esophageal_items",
        "title": "EDVi",
        "custom": {
          "param": { "childItems": "trans_esophageal_items" }
         }

      }
    ]
  }
]

  `



  // Options to show in the SideMenuContentComponent
	public options: Array<SideMenuOption>;

	// Settings for the SideMenuContentComponent
	public sideMenuSettings: SideMenuSettings = {
		accordionMode: true,
		showSelectedOption: true,
		selectedOptionClass: 'active-side-menu-option'
  };
  private unreadCountObservable: any = new ReplaySubject<number>(0);

  constructor(public platform: Platform,
    public statusBar: StatusBar,
    public splashScreen: SplashScreen,
    public menuCtrl: MenuController, /*private echoService :EchoServiceProvider,*/
    private alertCtrl: AlertController,
    afDB: AngularFireDatabase) {
    this.initializeApp();
    console.log("retrieving data")
   //this.menuItems = afDB.list<MenuItem>('/menu_items', ref => ref.orderByChild('order')).valueChanges()
   console.log(this.menuItems)

   // this.menuItems = afDB.list('/menu_items', ref => ref.orderByChild('order')).valueChanges();
    // used for an example of ngFor and navigation
    // this.pages = [
    //   { title: 'Home', component: HomePage },
    //   { title: 'Piemont Echo Protococol', component: ListPage },
    //   { title: 'Piemont Parameter', component: ListPage },
    //   { title: 'Piemont Tips/Guide', component: ListPage },
    //   { title: 'Chambers', component: ListPage },
    //   { title: 'Valves', component: ListPage },
    //   { title: 'Pericardium', component: ListPage },
    //   { title: 'AORTA,SVC,IVC', component: ListPage },
    //   { title: 'Formulas/Calculation', component: ListPage },
    //   { title: 'Disease', component: ListPage },
    //   { title: 'Links', component: ListPage }
    // ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.menuCtrl.open();
      this.splashScreen.hide();
      			// Initialize some options
			this.initializeOptions();
    });
    setInterval(() => {
			this.unreadCountObservable.next(Math.floor(Math.random() * 10) + 1);
		}, 5000);
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    console.log(page.component)
    this.nav.setRoot(page.component, {
      item: page
    });
  }

  isActive(page: PageInterface) {
    let childNav = this.nav.getActiveChildNavs()[0];

    // Tabs are a special case because they have their own navigation
    if (childNav) {
      if (childNav.getSelected() && childNav.getSelected().root === page.tabComponent) {
        return 'primary';
      }
      return;
    }

    if (this.nav.getActive() && this.nav.getActive().name === page.name) {
      return 'primary';
    }
    return;
  }
  // ngOnInit() : void{
  //   // console.log(this.echoService)
  //   // this.subscription = this.echoService.loadMenuItems(0,10).subscribe(items => this.menuItems = items);
  // }

  // ngOnDestroy() : void {
  //   // if (this.subscription)
  //   //   this.subscription.unsubscribe();
  // }
		// Change the value for the batch every 5 seconds


  private initializeOptions(): void {
		this.options = new Array<SideMenuOption>();

    // Load simple menu options
    this.options = JSON.parse(this.menuOptions);

		// ------------------------------------------
		// this.options.push({
		// 	iconName: 'home',
		// 	displayText: 'Home',
		// 	component: 'HomePage',
		// });

		// this.options.push({
		// 	iconName: 'analytics',
		// 	displayText: 'Option 1',
		// 	component: 'OptionOnePage'
		// });

		// this.options.push({
		// 	iconName: 'apps',
		// 	displayText: 'Option 2',
		// 	component: 'OptionTwoPage'
		// });

		// this.options.push({
		// 	iconName: 'bowtie',
		// 	displayText: 'Static Badge',
		// 	badge: ArrayObservable.of('NEW'),
		// 	component: 'StaticBadgePage'
		// });

		// // Load options with nested items (with icons)
		// // -----------------------------------------------
		// this.options.push({
		// 	displayText: 'Sub options with icons',
		// 	suboptions: [
		// 		{
		// 			iconName: 'basket',
		// 			displayText: 'Sub Option 1',
		// 			component: 'SubOptionOnePage'
		// 		},
		// 		{
		// 			iconName: 'bookmark',
		// 			displayText: 'Sub Option 2',
		// 			component: 'SubOptionTwoPage'
		// 		},
		// 		{
		// 			iconName: 'bug',
		// 			displayText: 'Dynamic Badge',
		// 			badge: this.unreadCountObservable,
		// 			component: 'DynamicBadgePage'
		// 		}
		// 	]
		// });

		// // Load options with nested items (without icons)
		// // -----------------------------------------------
		// this.options.push({
		// 	displayText: 'Sub options without icons',
		// 	suboptions: [
		// 		{
		// 			displayText: 'Sub Option 3',
		// 			component: 'SubOptionThreePage'
		// 		},
		// 		{
		// 			displayText: 'Sub Option 4',
		// 			component: 'SubOptionFourPage'
		// 		},
		// 		{
		// 			displayText: 'Sub Option 5',
		// 			component: 'SubOptionFivePage'
		// 		}
		// 	]
		// });

		// this.options.push({
		// 	displayText: 'Same component',
		// 	suboptions: [
		// 		{
		// 			iconName: 'mail',
		// 			displayText: 'Inbox',
		// 			component: 'EmailsPage',
		// 			custom: {
		// 				param: { showDeleted: false }
		// 			}
		// 		},
		// 		{
		// 			iconName: 'trash',
		// 			displayText: 'Bin',
		// 			component: 'EmailsPage',
		// 			custom: {
		// 				param: { showDeleted: true }
		// 			}
		// 		}
		// 	]
		// });

		// // Load special options
		// // -----------------------------------------------
		// this.options.push({
		// 	displayText: 'Special options',
		// 	suboptions: [
		// 		{
		// 			iconName: 'log-in',
		// 			displayText: 'Login',
		// 			custom: {
		// 				isLogin: true
		// 			}
		// 		},
		// 		{
		// 			iconName: 'log-out',
		// 			displayText: 'Logout',
		// 			custom: {
		// 				isLogout: true
		// 			}
		// 		},
		// 		{
		// 			iconName: 'globe',
		// 			displayText: 'Open Google',
		// 			custom: {
		// 				isExternalLink: true,
		// 				externalUrl: 'http://www.google.com'
		// 			}
		// 		}
		// 	]
		// });

	}

	public onOptionSelected(option: SideMenuOption): void {
		this.menuCtrl.close().then(() => {
			if (option.custom && option.custom.isLogin) {
				this.presentAlert('You\'ve clicked the login option!');
			} else if (option.custom && option.custom.isLogout) {
				this.presentAlert('You\'ve clicked the logout option!');
			} else if (option.custom && option.custom.isExternalLink) {
				let url = option.custom.externalUrl;
				window.open(url, '_blank');
			} else {
				// Get the params if any
				const params = option.custom && option.custom.param;

				// Redirect to the selected page
				this.nav.setRoot(option.component, params);
			}
		});
	}

	public collapseMenuOptions(): void {
		this.sideMenu.collapseAllOptions();
  }

  public presentAlert(message: string): void {
		let alert = this.alertCtrl.create({
			title: 'Information',
			message: message,
			buttons: ['Ok']
		});
		alert.present();
	}
}
