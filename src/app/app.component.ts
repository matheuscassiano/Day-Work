import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { MenuController } from '@ionic/angular';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    public navCtrl:NavController,
    private menu: MenuController, 
    private storage: Storage
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  pageColor:string;

  ngOnInit() {
    this.storage.get('color').then((val) => {
      console.log('Your color is', val);
      this.pageColor = val;
    });
  }

    


  goInicio(){
    this.navCtrl.navigateForward('/home');
    this.menu.close('menu');
  }
  goLogin(){
    this.navCtrl.navigateForward('/login');
    this.menu.close('menu');
  }
  goAjuda(){
    this.navCtrl.navigateForward('/ajuda');
    this.menu.close('menu');
  }
  goSE(){
    this.navCtrl.navigateForward('/servicos-enviados');
    this.menu.close('menu');
  }
  goConfig(){
    this.navCtrl.navigateForward('/config');
    this.menu.close('menu');
  }
  goTS(){
    this.navCtrl.navigateForward('/tornar-se-servidor');
    this.menu.close('menu');
  }
  goContatos(){
    this.navCtrl.navigateForward('/contatos');
    this.menu.close('menu');
  }
}
