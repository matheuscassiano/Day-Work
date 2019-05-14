import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.page.html',
  styleUrls: ['./chat.page.scss'],
})
export class ChatPage implements OnInit {


  constructor(private storage: Storage){}

	pageColor:string;

	ngOnInit() {
	this.storage.get('color').then((val) => {
	  console.log('Your color is', val);
	  this.pageColor = val;
	});
	}

}
