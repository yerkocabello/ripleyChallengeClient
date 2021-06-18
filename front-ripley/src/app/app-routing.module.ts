import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {NuevoDestinatarioComponent} from "./nuevo-destinatario/nuevo-destinatario.component";
import {HistorialComponent} from "./historial/historial.component";
import {TransferirComponent} from "./transferir/transferir.component";


const routes: Routes = [
  { path: 'muevo-destinatario', component: NuevoDestinatarioComponent },
  { path: 'transferir', component: TransferirComponent},
  { path: 'historial', component: HistorialComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
