import { NavController } from '@ionic/angular';
import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-chat-prestador',
  templateUrl: './chat-prestador.page.html',
  styleUrls: ['./chat-prestador.page.scss']
})
export class ChatPrestadorPage {

  constructor(public navCtrl:NavController, public alertController: AlertController, private storage: Storage){}

	pageColor:string;

	ngOnInit() {
	this.presentAlert();
	this.storage.get('color').then((val) => {
	  console.log('Your color is', val);
	  this.pageColor = val;
	});
	}
//////////////////////////////////////////////////////////////////////////////////////
  async presentAlert() {
	 const alert = await this.alertController.create({
	   cssClass: 'alertDanger',
	   header: 'Parabéns',
	   subHeader: 'Solicitação concluida',
	   message: 'Sua solicitação para se candidatar a vaga do anuncio foi aprovada.',
	   buttons: ['OK']
	 });
	 return alert.present();
	}
//////////////////////////////////////////////////////////////////////////////////////

}
