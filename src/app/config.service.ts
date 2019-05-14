import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  constructor() { }

  color(cor:string){
  	if(cor == 'vermelho'){
    	return 'danger';
  	}

  	if(cor == 'azul'){
    	return 'primary';
  	}
  }
}
