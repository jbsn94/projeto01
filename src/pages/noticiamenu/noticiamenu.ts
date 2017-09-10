import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, ViewController } from 'ionic-angular';
import { SocialSharing } from '@ionic-native/social-sharing';
import { Clipboard } from '@ionic-native/clipboard';
import { Toast } from '@ionic-native/toast';
declare var window: any;
@IonicPage()
@Component({
  selector: 'page-noticiamenu',
  templateUrl: 'noticiamenu.html',
})
export class NoticiamenuPage {
  conteudo: any;
  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public loaderCtrl: LoadingController,
              public social: SocialSharing,
              public viewCtrl: ViewController,
              private clipboard: Clipboard,
              public toastCtrl: Toast) {
                this.conteudo = this.navParams.get('noticia');
              }

  compartilhar(){
    let loader = this.loaderCtrl.create({
      content: 'Carregando..'
    });
    loader.present();
    this.social.share(this.conteudo.title, this.conteudo.fonte, this.conteudo.imgs.length > 0 ? this.conteudo.imgs[0].src : null, this.conteudo.link).then(() => {
      this.close();
      loader.dismiss();
    });
  }

  abrir(){
    window.open(this.conteudo.link, '_system', 'location=yes');
    this.close();
  }

  copiar(){
    this.clipboard.copy(this.conteudo.link);
    this.toastCtrl.show('Copiado', '1000', 'center').subscribe(
      toast => {
      }
    );
    this.close();
  }

  close(){
    this.viewCtrl.dismiss();
  }
}
