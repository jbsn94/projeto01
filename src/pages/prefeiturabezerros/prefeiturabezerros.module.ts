import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PrefeiturabezerrosPage } from './prefeiturabezerros';
import { IonicImageViewerModule } from 'ionic-img-viewer';
import { CardbuttonoptionsDirectiveModule } from '../../directives/cardbuttonoptions/cardbuttonoptions.module';

@NgModule({
  declarations: [
    PrefeiturabezerrosPage,
  ],
  imports: [
    IonicImageViewerModule,
    CardbuttonoptionsDirectiveModule,
    IonicPageModule.forChild(PrefeiturabezerrosPage),
  ],
})
export class PrefeiturabezerrosPageModule {}
