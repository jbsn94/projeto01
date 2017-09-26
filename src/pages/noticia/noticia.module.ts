import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NoticiaPage } from './noticia';
import { IonicImageViewerModule } from 'ionic-img-viewer';
import { CardbuttonoptionsDirectiveModule } from '../../directives/cardbuttonoptions/cardbuttonoptions.module';

@NgModule({
  declarations: [
    NoticiaPage,
  ],
  imports: [
    IonicImageViewerModule,
    CardbuttonoptionsDirectiveModule,
    IonicPageModule.forChild(NoticiaPage),
  ]
})
export class NoticiaPageModule {}
