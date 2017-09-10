import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BoletimesportivoPage } from './boletimesportivo';
import { IonicImageViewerModule } from 'ionic-img-viewer';

@NgModule({
  declarations: [
    BoletimesportivoPage,
  ],
  imports: [
    IonicImageViewerModule,
    IonicPageModule.forChild(BoletimesportivoPage),
  ],
})
export class BoletimesportivoPageModule {}
