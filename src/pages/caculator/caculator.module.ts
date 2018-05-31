import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CaculatorPage } from './caculator';

@NgModule({
  declarations: [
    CaculatorPage,
  ],
  imports: [
    IonicPageModule.forChild(CaculatorPage),
  ],
})
export class CaculatorPageModule {}
