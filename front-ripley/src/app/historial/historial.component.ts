import { Component, OnInit } from '@angular/core';
import {TransferenciaService} from "../services/transferencia.service";
import {Transferencia} from "../model/transferencia";

@Component({
  selector: 'app-historial',
  templateUrl: './historial.component.html',
  styleUrls: ['./historial.component.scss']
})
export class HistorialComponent implements OnInit {
  transferencias: Transferencia[];
  displayedColumns: string[] = ['nombre', 'rut', 'banco', 'cuenta', 'monto'];
  dataSource: any;

  constructor(private transferenciaService: TransferenciaService) {
  }

  ngOnInit() {
    this.transferenciaService.getTransferencias()
      .subscribe(data => {
        this.transferencias = data.data;
        this.dataSource.data = data.data;
      })
  }
}
