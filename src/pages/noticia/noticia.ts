import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, PopoverController } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-noticia',
  templateUrl: 'noticia.html',
})
export class NoticiaPage {
  noticia: any;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public view: ViewController,
              public popoverCtrl: PopoverController) {
              this.noticia = this.navParams.get('noticia');
  }

  menu(event){
    let popover = this.popoverCtrl.create('NoticiamenuPage', {noticia: this.noticia});
    popover.present({
      ev: event
    });
  }

  close(){
    this.view.dismiss();
  }
}
