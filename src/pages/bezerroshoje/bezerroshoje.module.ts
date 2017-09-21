import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BezerroshojePage } from './bezerroshoje';
import { IonicImageViewerModule } from 'ionic-img-viewer';
import { PhonegapLocalNotification } from '@ionic-native/phonegap-local-notification';
import { LazyLoadImageModule } from 'ng2-lazyload-image';

@NgModule({
  declarations: [
    BezerroshojePage,
  ],
  imports: [
    LazyLoadImageModule,
    IonicImageViewerModule,
    IonicPageModule.forChild(BezerroshojePage),
  ],
  providers: [
    PhonegapLocalNotification
  ]
})
export class BezerroshojePageModule {}
