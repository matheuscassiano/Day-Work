import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-ajuda',
  templateUrl: './ajuda.page.html',
  styleUrls: ['./ajuda.page.scss'],
})
export class AjudaPage implements OnInit {

  constructor(private storage: Storage){}

	pageColor:string;

	ngOnInit() {
	this.storage.get('color').then((val) => {
	  console.log('Your color is', val);
	  this.pageColor = val;
	});
	}

}
