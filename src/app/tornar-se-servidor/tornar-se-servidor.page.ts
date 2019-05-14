import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-tornar-se-servidor',
  templateUrl: './tornar-se-servidor.page.html',
  styleUrls: ['./tornar-se-servidor.page.scss'],
})
export class TornarSeServidorPage implements OnInit {

  constructor(private storage: Storage){}

	pageColor:string;

	ngOnInit() {
	this.storage.get('color').then((val) => {
	  console.log('Your color is', val);
	  this.pageColor = val;
	});
	}

}
