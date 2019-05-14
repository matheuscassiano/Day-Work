import { NavController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-propostas',
  templateUrl: './propostas.page.html',
  styleUrls: ['./propostas.page.scss'],
})
export class PropostasPage implements OnInit {

  constructor(public navCtrl:NavController, private storage: Storage){}

	pageColor:string;

	ngOnInit() {
	this.storage.get('color').then((val) => {
	  console.log('Your color is', val);
	  this.pageColor = val;
	});
	}

  goChat(){
  	this.navCtrl.navigateForward('/chat');
  }
}
