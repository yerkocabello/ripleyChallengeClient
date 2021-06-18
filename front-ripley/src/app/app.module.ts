import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NuevoDestinatarioComponent } from './nuevo-destinatario/nuevo-destinatario.component';
import { HttpClientModule } from "@angular/common/http";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule, MatButtonModule, MatSelectModule, MatTableModule } from '@angular/material';
import { NavbarComponent } from './navbar/navbar.component';
import { TransferirComponent } from './transferir/transferir.component';
import { HistorialComponent } from './historial/historial.component';
import { ReactiveFormsModule } from "@angular/forms";
import { FilterPipe } from './filters/filter.pipe';
import { FormsModule } from '@angular/forms';

const MaterialComponents =[
  MatToolbarModule, MatButtonModule
]

@NgModule({
  declarations: [
    AppComponent,
    NuevoDestinatarioComponent,
    NavbarComponent,
    TransferirComponent,
    HistorialComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialComponents,
    ReactiveFormsModule,
    MatSelectModule,
    FormsModule,
    MatTableModule
  ],
  exports: [MaterialComponents],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
