import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
// import { HomePage } from '../pages/home/home';
// import { ListPage } from '../pages/list/list';
// import { SubListPage } from '../pages/sublist/sublist';
// import { ListItemsPage} from '../pages/listitems/listitems';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { IonicImageViewerModule } from 'ionic-img-viewer';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule, AngularFireDatabase } from 'angularfire2/database';
import { firebaseConfig } from '../environment';
//import { EchoServiceProvider } from '../providers/EchoService/echo-service';

@NgModule({
  declarations: [
    MyApp
    // HomePage,
    // ListPage,
    // SubListPage,
    // ListItemsPage
  ],
  imports: [
    BrowserModule,
    IonicImageViewerModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp
    // HomePage,
    // ListPage,
    // SubListPage,
    // ListItemsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    AngularFireDatabase,
    {provide: ErrorHandler, useClass: IonicErrorHandler}//,
   // EchoServiceProvider
  ]
})
export class AppModule {}
