import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../config.service';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-config',
  templateUrl: './config.page.html',
  styleUrls: ['./config.page.scss'],
  providers: [
    ConfigService
  ]
})
export class ConfigPage implements OnInit {

  constructor(public conf: ConfigService, private storage: Storage) { }
  pageColor: any;

  ngOnInit() {
    this.storage.get('color').then((val) => {
      this.pageColor = val;
    });

  }

  myColor(cor:string){
    if(cor == 'Vermelho'){
      this.storage.remove('color');
      this.storage.set('color', 'danger');
    }
    if(cor == 'Preto'){
      this.storage.remove('color');
      this.storage.set('color', 'dark');
    }
    if(cor == 'Amarelo'){
      this.storage.remove('color');
      this.storage.set('color', 'warning');
    }
    if(cor == 'Roxo'){
      this.storage.remove('color');
      this.storage.set('color', 'tertiary');
    }
    if(cor == 'Azul'){
      this.storage.remove('color');
      this.storage.set('color', 'primary');
    }

    this.storage.get('color').then((val) => {
      console.log('Your color is', val);
      this.pageColor = val;
      window.location.reload();
    });

    return this.pageColor;

  }
}
