import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {NuevoDestinatarioComponent} from "./nuevo-destinatario/nuevo-destinatario.component";


const routes: Routes = [
  { path: 'muevo-destinatario', component: NuevoDestinatarioComponent },
  { path: '', component: NuevoDestinatarioComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
