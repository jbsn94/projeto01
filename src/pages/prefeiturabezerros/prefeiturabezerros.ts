import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform, ModalController, LoadingController } from 'ionic-angular';
import { Http } from '@angular/http';
import * as xml2js from 'xml2js';
import * as moment from 'moment';
import $ from 'jquery';

@IonicPage()
@Component({
  selector: 'page-prefeiturabezerros',
  templateUrl: 'prefeiturabezerros.html',
})
export class PrefeiturabezerrosPage {
  url: string = 'https://bezerros.pe.gov.br/portal/feed';
  posts: any = [];
  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    public platform: Platform,
    public http: Http,
    public modal: ModalController,
    public loading: LoadingController) {
      let loader = this.loading.create({
        content: 'Carregando..'
      });
      loader.present();
      this.platform.ready().then(()=>{
        this.http.get(this.url).subscribe(res => {
          this.ajustaXml(res.text(), loader);
        });
      });
  }

  /**
   * @description Método para o tratamento do xml
   * @param {String} xml
   */
  ajustaXml(xml, loader){
    xml2js.parseString(xml, (err, result) => {
      let posts = result.rss.channel[0].item;
      let regex = /(https?:\/\/.*\.(?:png|jpg|jpeg))/i;
      let regex2 = /(?:favicon\.png)/i;
      for(let i in posts){
        let imgs = [];
        $(posts[i]['content:encoded'][0]).find('img').each(function(index,value){
          if($(this).attr('src').match(regex) && !$(this).attr('src').match(regex2) && !$(this).hasClass('wp-smiley')){
            imgs.push({
              src: $(this).attr('srcset') ? $(this).attr('srcset').split(',')[0].replace(/-\d+x\d+/g,'').match(regex)[0] : $(this).attr('src'),
            });
          }
        });
        this.posts.push({
          title: posts[i].title[0],
          imgs: imgs,
          texto: $(posts[i]['content:encoded'][0]).text(),
          categoria: posts[i]['category'][0],
          link: posts[i]['link'][0],
          data: moment(new Date(posts[i]['pubDate'][0])).format('DD/MM/YYYY'),
          autor: posts[i]['dc:creator'][0],
          iframe: $(posts[i]['content:encoded'][0]).find('iframe')[0],
          fonte: result.rss.channel[0].title
        });
      }
    });
    loader.dismiss();
  }

  openModal(noticia){
    let modal = this.modal.create('NoticiaPage', {noticia: noticia});
    modal.present();
  }

}