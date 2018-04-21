import { Component, ViewChild, OnInit, OnDestroy } from '@angular/core';
import { Nav, Platform,MenuController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { ListPage } from '../pages/list/list';
import { Observable } from 'rxjs/Observable';
import { Subscription} from 'rxjs';
import { EchoServiceProvider } from '../providers/EchoService/echo-service'
import { MenuItems } from '../models/Menu_Items'
import { AngularFireDatabase } from 'angularfire2/database';
import {MenuItem} from '../models/Menu_Item';


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

  rootPage: string = "home-page";

  pages: Array<{title: string, component: any}>;
  // menuItems: MenuItems;
  subscription : Subscription;
  menuItems : Observable<MenuItem[]>

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen, public menuCtrl: MenuController, /*private echoService :EchoServiceProvider,*/ afDB: AngularFireDatabase) {
    this.initializeApp();
    console.log("retrieving data")
   this.menuItems = afDB.list<MenuItem>('/menu_items', ref => ref.orderByChild('order')).valueChanges()
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
    });
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
}
