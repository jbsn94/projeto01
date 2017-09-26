import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BlitznasruasPage } from './blitznasruas';
import { IonicImageViewerModule } from 'ionic-img-viewer';
import { CardbuttonoptionsDirectiveModule } from '../../directives/cardbuttonoptions/cardbuttonoptions.module';

@NgModule({
  declarations: [
    BlitznasruasPage,
  ],
  imports: [
    IonicImageViewerModule,
    CardbuttonoptionsDirectiveModule,
    IonicPageModule.forChild(BlitznasruasPage),
  ],
})
export class BlitznasruasPageModule {}
