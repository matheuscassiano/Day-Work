import { NavController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { LocalNotifications } from '@ionic-native/local-notifications/ngx';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-servicos',
  templateUrl: './servicos.page.html',
  styleUrls: ['./servicos.page.scss'],
})
export class ServicosPage implements OnInit {

  constructor(public navCtrl:NavController, public localNotifications:LocalNotifications, private storage: Storage){}

  pageColor:string;

  ngOnInit() {
  this.storage.get('color').then((val) => {
    console.log('Your color is', val);
    this.pageColor = val;
  });
  }

//////////////////////////////////////////////////////////////////////////////////////
	notificacao() {
		this.localNotifications.schedule({
			id: 2,
			title: 'Parabéns!!!',
			text: 'O cliente aceitou sua proposta',
		 });
	}
/////////////////////////////////////////////////////////////////////////////////////

  goChat(){
  	this.navCtrl.navigateForward('/chat-prestador');
  	this.notificacao();
  }
}
