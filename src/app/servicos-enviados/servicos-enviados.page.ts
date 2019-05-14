import { NavController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-servicos-enviados',
  templateUrl: './servicos-enviados.page.html',
  styleUrls: ['./servicos-enviados.page.scss'],
})
export class ServicosEnviadosPage implements OnInit {

  constructor(public navCtrl:NavController, private storage: Storage){}

	pageColor:string;

	ngOnInit() {
	this.storage.get('color').then((val) => {
	  console.log('Your color is', val);
	  this.pageColor = val;
	});
	}

  goPropostas(){
  	this.navCtrl.navigateForward('/propostas');
  }
}
