import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SubListPage } from './sublist';

@NgModule({
  declarations: [
    SubListPage,
  ],
  imports: [
    IonicPageModule.forChild(SubListPage),
  ],
})
export class SublistPageModule {}
