import { Directive } from '@angular/core';
import { ActionSheetController, LoadingController } from 'ionic-angular';
import { SocialSharing } from '@ionic-native/social-sharing';
import { Clipboard } from '@ionic-native/clipboard';
import { Toast } from '@ionic-native/toast';
import { InAppBrowser } from '@ionic-native/in-app-browser';

@Directive({
  selector: '[card-btn-options]',
  inputs: ['noticia'],
  providers: [
	  SocialSharing,
	  Clipboard,
	  Toast,
	  InAppBrowser
	],
  host: {
    '(click)': 'menu()'
  }
})

export class CardbuttonoptionsDirective {
  noticia: any;

  constructor(public actionSheet: ActionSheetController,
              public loaderCtrl: LoadingController,
              private clipboard: Clipboard,
              public toastCtrl: Toast,
              public browser: InAppBrowser,
              public social: SocialSharing) {
  }

  /**
   * @description Menu de opções das notícias
   */
  menu(){
    let actionSheet = this.actionSheet.create({
      title: 'Opções',
      buttons: [
        {
          text: 'Ir para o site',
          icon: 'ios-open-outline',
          handler: () => {
            this.abrirPagina();
          }
        },{
          text: 'Copiar link',
          icon: 'link',
          handler: () => {
            this.copiarLink();
          }
        },{
          text: 'Compartilhar',
          icon: 'md-share',
          handler: () => {
            this.compartilhar();
          }
        },{
          text: 'Cancelar',
          role: 'cancel',
          icon: 'close'
        }
      ]
    });
    actionSheet.present();
  }

  /**
   * @description Abre a folha de compartilhamento do celular
   */
  compartilhar(){
    let loader = this.loaderCtrl.create({
      content: 'Carregando..'
    });
    loader.present();
    this.social.share(this.noticia.title, this.noticia.fonte, this.noticia.imgs.length > 0 ? this.noticia.imgs[0].src : null, this.noticia.link).then(() => {
      loader.dismiss();
    });
  }

  /**
   * @description Redireciona o usuário para a pagina web da noticia
   */
  abrirPagina(){
    this.browser.create(this.noticia.link, '_self', 'zoom=no');
  }

  /**
   * @description Copia o link da noticia
   */
  copiarLink(){
    this.clipboard.copy(this.noticia.link);
    this.toastCtrl.show('Copiado', '1000', 'center').subscribe(
      toast => {
      }
    );
  }
}
