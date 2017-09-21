import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BezerroshojePage } from './bezerroshoje';
import { IonicImageViewerModule } from 'ionic-img-viewer';
import { PhonegapLocalNotification } from '@ionic-native/phonegap-local-notification';

@NgModule({
  declarations: [
    BezerroshojePage,
  ],
  imports: [
    IonicImageViewerModule,
    IonicPageModule.forChild(BezerroshojePage),
  ],
  providers: [
    PhonegapLocalNotification
  ]
})
export class BezerroshojePageModule {}
