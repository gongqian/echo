import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ListitemsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-listitems',
  templateUrl: 'listitems.html'
})
export class ListItemsPage {
  selectedItem: any;
  isVideo : boolean;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.selectedItem = navParams.get('item');
    this.isVideo = this.selectedItem.url.endsWith("mp4");
    console.log(this.isVideo);
    console.log(this.selectedItem);
  }

  // updateSchedule() {
  //   // Close any open sliding items when the schedule updates
  //   this.scheduleList && this.scheduleList.closeSlidingItems();

  //   this.confData.getTimeline(this.dayIndex, this.queryText, this.excludeTracks, this.segment).subscribe((data: any) => {
  //     this.shownSessions = data.shownSessions;
  //     this.groups = data.groups;
  //   });
  // }

  // presentFilter() {
  //   let modal = this.modalCtrl.create(ScheduleFilterPage, this.excludeTracks);
  //   modal.present();

  //   modal.onWillDismiss((data: any[]) => {
  //     if (data) {
  //       this.excludeTracks = data;
  //       this.updateSchedule();
  //     }
  //   });

  // }

  // goToSessionDetail(sessionData: any) {
  //   // go to the session detail page
  //   // and pass in the session data

  //   this.navCtrl.push(SessionDetailPage, { sessionId: sessionData.id, name: sessionData.name });
  // }

  // addFavorite(slidingItem: ItemSliding, sessionData: any) {

  //   if (this.user.hasFavorite(sessionData.name)) {
  //     // woops, they already favorited it! What shall we do!?
  //     // prompt them to remove it
  //     this.removeFavorite(slidingItem, sessionData, 'Favorite already added');
  //   } else {
  //     // remember this session as a user favorite
  //     this.user.addFavorite(sessionData.name);

  //     // create an alert instance
  //     let alert = this.alertCtrl.create({
  //       title: 'Favorite Added',
  //       buttons: [{
  //         text: 'OK',
  //         handler: () => {
  //           // close the sliding item
  //           slidingItem.close();
  //         }
  //       }]
  //     });
  //     // now present the alert on top of all other content
  //     alert.present();
  //   }

  // }

  // removeFavorite(slidingItem: ItemSliding, sessionData: any, title: string) {
  //   let alert = this.alertCtrl.create({
  //     title: title,
  //     message: 'Would you like to remove this session from your favorites?',
  //     buttons: [
  //       {
  //         text: 'Cancel',
  //         handler: () => {
  //           // they clicked the cancel button, do not remove the session
  //           // close the sliding item and hide the option buttons
  //           slidingItem.close();
  //         }
  //       },
  //       {
  //         text: 'Remove',
  //         handler: () => {
  //           // they want to remove this session from their favorites
  //           this.user.removeFavorite(sessionData.name);
  //           this.updateSchedule();

  //           // close the sliding item and hide the option buttons
  //           slidingItem.close();
  //         }
  //       }
  //     ]
  //   });
  //   // now present the alert on top of all other content
  //   alert.present();
  // }

  // openSocial(network: string, fab: FabContainer) {
  //   let loading = this.loadingCtrl.create({
  //     content: `Posting to ${network}`,
  //     duration: (Math.random() * 1000) + 500
  //   });
  //   loading.onWillDismiss(() => {
  //     fab.close();
  //   });
  //   loading.present();
  // }

  // doRefresh(refresher: Refresher) {
  //   this.confData.getTimeline(this.dayIndex, this.queryText, this.excludeTracks, this.segment).subscribe((data: any) => {
  //     this.shownSessions = data.shownSessions;
  //     this.groups = data.groups;

  //     // simulate a network request that would take longer
  //     // than just pulling from out local json file
  //     setTimeout(() => {
  //       refresher.complete();

  //       const toast = this.toastCtrl.create({
  //         message: 'Sessions have been updated.',
  //         duration: 3000
  //       });
  //       toast.present();
  //     }, 1000);
  //   });
  // }

}
