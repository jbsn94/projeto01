import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BezerroshojePage } from './bezerroshoje';
import { IonicImageViewerModule } from 'ionic-img-viewer';

@NgModule({
  declarations: [
    BezerroshojePage,
  ],
  imports: [
    IonicImageViewerModule,
    IonicPageModule.forChild(BezerroshojePage),
  ]
})
export class BezerroshojePageModule {}
