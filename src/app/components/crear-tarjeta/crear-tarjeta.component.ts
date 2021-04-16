import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { TarjetaCredito } from '../models/tarjeta-credito';
import { TarjetaService } from '../services/tarjeta.service';

@Component({
  selector: 'app-crear-tarjeta',
  templateUrl: './crear-tarjeta.component.html',
  styleUrls: ['./crear-tarjeta.component.scss']
})
export class CrearTarjetaComponent implements OnInit {

  form: FormGroup;
  constructor( 
    private fb: FormBuilder, 
    private TarjetaService: TarjetaService,
  ) { 
    this.form = this.fb.group({
      titular: [''],
      numeroTarjeta: [''],
      fechaExpiracion: [''],
      cvv: [''],
    })
  }

  ngOnInit() {
  }

  enviarDatos() {
    const tarjeta: TarjetaCredito = {
      titular: this.form.value.titular,
      fechaExpiracion: this.form.value.fechaExpiracion,
      numeroTarjeta: this.form.value.numeroTarjeta,
      cvv: this.form.value.cvv,
      fechaCreación: new Date(),
      fechaActualizacion: new Date(),
    }
    this.TarjetaService.guardarTarjeta(tarjeta).then(response => {
      console.log(response, 'response firestore');
      this.form.reset();
    }).catch(error => {
      console.log(error, 'error firestore');
    })
  }

}
