import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListItemsPage } from './listitems';

@NgModule({
  declarations: [
    ListItemsPage,
  ],
  imports: [
    IonicPageModule.forChild(ListItemsPage),
  ],
})
export class ListitemsPageModule {}
