import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BoletimesportivoPage } from './boletimesportivo';
import { IonicImageViewerModule } from 'ionic-img-viewer';
import { CardbuttonoptionsDirectiveModule } from '../../directives/cardbuttonoptions/cardbuttonoptions.module';

@NgModule({
  declarations: [
    BoletimesportivoPage,
  ],
  imports: [
    IonicImageViewerModule,
    CardbuttonoptionsDirectiveModule,
    IonicPageModule.forChild(BoletimesportivoPage),
  ],
})
export class BoletimesportivoPageModule {}
