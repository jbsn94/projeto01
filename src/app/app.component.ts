import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AppVersion } from '@ionic-native/app-version';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = 'BezerroshojePage';
  versao: any;
  pages: Array<{nome: string}> = [
    {nome: 'BezerroshojePage'},
    {nome: 'PrefeiturabezerrosPage'},
    {nome: 'BlitznasruasPage'},
    {nome: 'BoletimesportivoPage'}
  ];

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen, private appVersion: AppVersion) {
    this.initializeApp();
  }

  initializeApp() {
    //Set de app version
    // this.appVersion.getVersionNumber().then(v =>  {
    //   this.versao = v;
    // });

    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.nome);
  }

  close(){
    this.platform.exitApp();
  }
}
