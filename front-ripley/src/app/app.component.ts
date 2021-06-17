import { Component } from '@angular/core';
import {CuentaService} from "./services/cuenta.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [ CuentaService ]
})
export class AppComponent {
  title = 'front-ripley';
}
