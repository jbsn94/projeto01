import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NoticiamenuPage } from './noticiamenu';
import { SocialSharing } from '@ionic-native/social-sharing';
import { Clipboard } from '@ionic-native/clipboard';
import { Toast } from '@ionic-native/toast';

@NgModule({
  declarations: [
    NoticiamenuPage,
  ],
  imports: [
    IonicPageModule.forChild(NoticiamenuPage),
  ],
  providers: [
    SocialSharing,
    Clipboard,
    Toast
  ]
})
export class NoticiamenuPageModule {}
