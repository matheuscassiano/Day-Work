import { NavController } from '@ionic/angular';
import { Component } from '@angular/core';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
	constructor(public navCtrl:NavController, private storage: Storage){}

	pageColor:string;

	ngOnInit() {
	this.storage.get('color').then((val) => {
	  console.log('Your color is', val);
	  this.pageColor = val;
	});
	}

	goServicos(){
		this.navCtrl.navigateForward('/servicos');
	}
	goCliente(){
		this.navCtrl.navigateForward('/cliente');
	}
}
