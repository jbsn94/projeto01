import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform, ModalController, LoadingController } from 'ionic-angular';
import { Http } from '@angular/http';
import * as xml2js from 'xml2js';
import * as moment from 'moment';
import $ from 'jquery';
import { DomSanitizer } from '@angular/platform-browser';

@IonicPage()
@Component({
  selector: 'page-boletimesportivo',
  templateUrl: 'boletimesportivo.html',
})
export class BoletimesportivoPage {
  url: string = 'http://www.boletimesportivo.net/novo/feed/';
  posts: any = [];
  _posts: any = [];
  carregando: boolean = true;
  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    public platform: Platform,
    public http: Http,
    public modal: ModalController,
    public loading: LoadingController,
    public dom: DomSanitizer) {
      this.platform.ready().then(()=>{
        this.carregar();
      });
  }

  reload(){
    if(!this.carregando){
      this.carregar();
    }
  }

  carregar(){
    this._posts = [];
    this.carregando = true;
    this.http.get(this.url).subscribe(res => {
      this.ajustaXml(res.text());
    }, err => {
      setTimeout(() => {
        this.carregando = false;
      }, 500);
    });
  }

  /**
   * @description Método para o tratamento do xml
   * @param {String} xml
   */
  ajustaXml(xml){
    xml2js.parseString(xml, (err, result) => {
      let posts = result.rss.channel[0].item;
      let regex = /(https?:\/\/.*\.(?:png|jpg|jpeg))/i;
      let regex2 = /(?:favicon\.png)/i;
      for(let i in posts){
        let imgs = [];
        if(posts[i]['content:encoded']) {
          $(posts[i]['content:encoded'][0]).find('img').each(function(index,value){
            if($(this).attr('src').match(regex) && !$(this).attr('src').match(regex2) && !$(this).hasClass('wp-smiley')){
              imgs.push({
                src: $(this).attr('srcset') ? $(this).attr('srcset').split(',')[0].replace(/-\d+x\d+/g,'').match(regex)[0] : $(this).attr('src'),
              });
            }
          });
        }
        this._posts.push({
          title: posts[i].title[0],
          imgs: imgs,
          texto: posts[i]['content:encoded'] ? $(posts[i]['content:encoded'][0]).text() : posts[i]['description'][0],
          content: this.dom.bypassSecurityTrustHtml(posts[i]['description'][0].replace(/<img\s[a-z\=\"\s\-0-9\:\/\/\.\,\(\)\_]+(\>|\/\>)/gi,'')),
          categoria: posts[i]['category'][0],
          link: posts[i]['link'][0],
          data: moment(new Date(posts[i]['pubDate'][0])).format('DD/MM/YYYY'),
          autor: posts[i]['dc:creator'][0],
          iframe: posts[i]['content:encoded'] ? $(posts[i]['content:encoded'][0]).find('iframe')[0] : null,
          fonte: result.rss.channel[0]['title'][0] ? result.rss.channel[0]['title'][0] : result.rss.channel[0]['link'][0],
          mp3: posts[i]['description'][0].match(/(https?:\/\/.*\.(?:mp3))/i) ? posts[i]['description'][0].match(/(https?:\/\/.*\.(?:mp3))/i)[0] : null
        });
      }
      this.posts = this._posts.slice(0,3);
    });
    this.carregando = false;
  }

  openModal(noticia){
    let modal = this.modal.create('NoticiaPage', {noticia: noticia});
    modal.present();
  }

  doInfinite(infiniteScroll) {
    if(this.posts.length < this._posts.length){
      setTimeout(() => {
        this.posts = this.posts.concat(this._posts.slice(this.posts.length,this.posts.length+3));
        infiniteScroll.complete();
      }, 700);
    } else {
      infiniteScroll.complete();
    }
  }

}
