import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ServicosEnviadosPage } from './servicos-enviados.page';

const routes: Routes = [
  {
    path: '',
    component: ServicosEnviadosPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ServicosEnviadosPage]
})
export class ServicosEnviadosPageModule {}
