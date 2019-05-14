import { NavController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { LocalNotifications } from '@ionic-native/local-notifications/ngx';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.page.html',
  styleUrls: ['./cliente.page.scss'],
})
export class ClientePage implements OnInit {

  constructor(public navCtrl:NavController, 
  			  public alertController:AlertController, 
  			  public localNotifications:LocalNotifications,
  			  private storage: Storage){}

	pageColor:string;

	ngOnInit() {
	this.storage.get('color').then((val) => {
	  console.log('Your color is', val);
	  this.pageColor = val;
	});
	}
//////////////////////////////////////////////////////////////////////////////////////
  async presentAlert() {
	 const alert = await this.alertController.create({
	   cssClass: 'alertDanger',
	   header: 'Atenção',
	   subHeader: 'Campo em branco',
	   message: 'Por favor, preencha todos os campos corretamente.',
	   buttons: ['OK']
	 });
	 return alert.present();
	}
//////////////////////////////////////////////////////////////////////////////////////
notificacao() {
		this.localNotifications.schedule({
			id: 1,
			title: 'Surpresa!!!',
			text: 'Alguem está interessado em seu anuncio',
		 });
	}
/////////////////////////////////////////////////////////////////////////////////////
  servico: string;
  valor: number;
  pagamento: any;

	goServicos(servico, valor, pagamento){
	  	if(servico == null || valor == null || pagamento == null){
			this.presentAlert();
		}
		else{
			this.navCtrl.navigateForward('/servicos-enviados');
			this.notificacao();
		}
	}
}
