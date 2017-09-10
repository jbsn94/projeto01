import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BlitznasruasPage } from './blitznasruas';
import { IonicImageViewerModule } from 'ionic-img-viewer';

@NgModule({
  declarations: [
    BlitznasruasPage,
  ],
  imports: [
    IonicImageViewerModule,
    IonicPageModule.forChild(BlitznasruasPage),
  ],
})
export class BlitznasruasPageModule {}
