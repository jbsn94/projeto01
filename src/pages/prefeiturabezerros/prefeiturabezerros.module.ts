import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PrefeiturabezerrosPage } from './prefeiturabezerros';
import { IonicImageViewerModule } from 'ionic-img-viewer';

@NgModule({
  declarations: [
    PrefeiturabezerrosPage,
  ],
  imports: [
    IonicImageViewerModule,
    IonicPageModule.forChild(PrefeiturabezerrosPage),
  ],
})
export class PrefeiturabezerrosPageModule {}
