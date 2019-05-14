import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { TornarSeServidorPage } from './tornar-se-servidor.page';

const routes: Routes = [
  {
    path: '',
    component: TornarSeServidorPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [TornarSeServidorPage]
})
export class TornarSeServidorPageModule {}
