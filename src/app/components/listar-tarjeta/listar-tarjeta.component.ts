import { Component, OnInit } from '@angular/core';
import { TarjetaCredito } from '../models/tarjeta-credito';
import { TarjetaService } from '../services/tarjeta.service';

@Component({
  selector: 'app-listar-tarjeta',
  templateUrl: './listar-tarjeta.component.html',
  styleUrls: ['./listar-tarjeta.component.scss']
})
export class ListarTarjetaComponent implements OnInit {

  datosFirebase: TarjetaCredito[] = [];
  constructor(
    private TarjetaService: TarjetaService,
  ) { }

  ngOnInit() {
    this.traerDatos()
  }

  traerDatos() {
    this.TarjetaService.obtenerOrdenarTarjetas().subscribe((response: any) => {
      /* Limpiar el array de datos, ya que se pueden duplicar si se eliminan desde firebase */
      this.datosFirebase = [];
      /* Para agarrar el id */
      response.forEach(element => {
        this.datosFirebase.push({
          id: element.payload.doc.id,
           ...element.payload.doc.data()         
        })
      });
      console.log(this.datosFirebase, 'datos');
    }, (error) => {
      console.log(error, 'TraerDatos');
    })
  }

}
