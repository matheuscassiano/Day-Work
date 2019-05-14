import * as core from '@angular/core';
import { IonSlides } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { MenuController } from '@ionic/angular';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  @core.ViewChild(IonSlides) slides: IonSlides;
  
  constructor(public navCtrl:NavController, private menu: MenuController, private storage: Storage){}
  
  pageColor:string;

  ngOnInit() {
    this.menu.close('menu');
    this.storage.remove('color');
    this.storage.set('color', 'dark');
  }

  login(){
		this.navCtrl.navigateForward('/home');
	}
  slideN(){
  	this.slides.slideNext();
  }
  slideP(){
  	this.slides.slidePrev();
  }
}
