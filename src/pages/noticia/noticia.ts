import { Component } from '@angular/core';
import { IonicPage, NavParams, ViewController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-noticia',
  templateUrl: 'noticia.html',
})
export class NoticiaPage {
  noticia: any;

  constructor(public navParams: NavParams,
              public view: ViewController) {
              this.noticia = this.navParams.get('noticia');
  }

  /**
   * @description Fecha o modal da noticia
   */
  close(){
    this.view.dismiss();
  }
}
