import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NoticiaPage } from './noticia';
import { IonicImageViewerModule } from 'ionic-img-viewer';

@NgModule({
  declarations: [
    NoticiaPage,
  ],
  imports: [
    IonicImageViewerModule,
    IonicPageModule.forChild(NoticiaPage),
  ],
})
export class NoticiaPageModule {}
