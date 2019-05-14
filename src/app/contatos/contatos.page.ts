import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-contatos',
  templateUrl: './contatos.page.html',
  styleUrls: ['./contatos.page.scss'],
})
export class ContatosPage implements OnInit {

  constructor(private storage: Storage) { }
  pageColor: any;

  ngOnInit() {
    this.storage.get('color').then((val) => {
      this.pageColor = val;
    });

  }

  email:string;
  titulo:string;
  mensagem:string;

  limpar(){
  	this.email = "";
  	this.titulo = "";
  	this.mensagem = "";
  }
}
