import { Component } from '@angular/core';

import { NavParams } from 'ionic-angular';

import { ListPage } from '../list/list';
// import { CaculatorPage } from '../caculator/caculator';
// import { TipPage } from '../tip/tip';

@Component({
  templateUrl: 'tabs-page.html'
})
export class TabsPage {
  // set the root pages for each tab
  tab1Root: any = ListPage;
  tab2Root: any = ListPage;
  tab3Root: any = ListPage;
  mySelectedIndex: number;

  constructor(navParams: NavParams) {
    this.mySelectedIndex = navParams.data.tabIndex || 0;
  }

}
