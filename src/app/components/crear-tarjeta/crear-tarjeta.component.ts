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

  titulo = 'Crear Tarjeta';
  id: string | undefined;
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
    this.recibeDatosTarjeta();
  }

  recibeDatosTarjeta(){
    this.TarjetaService.getTarjetaEdit().subscribe(response => {
      this.id = response.id;
      this.titulo = 'Editar Tarjeta';
      console.log(response, 'response???');
      this.form.patchValue({
        titular: response.titular,
        numeroTarjeta: response.numeroTarjeta,
        fechaExpiracion: response.fechaExpiracion,
        cvv: response.cvv,
        fechaActualizacion: new Date()
      })
    })
  }

  guardarTarjeta() {
    if ( this.id === undefined) {
      /* Creamos una nueva tarjeta */
      this.agregarTarjeta();
    } else if (typeof(this.id) === 'string') {
      /* Editamos la tarjeta */
      this.editarTarjeta(this.id);
    } 
  }

  agregarTarjeta() {
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

  editarTarjeta(id: string) {
    const tarjeta: TarjetaCredito = {
      titular: this.form.value.titular,
      fechaExpiracion: this.form.value.fechaExpiracion,
      numeroTarjeta: this.form.value.numeroTarjeta,
      cvv: this.form.value.cvv,
      fechaActualizacion: new Date(),
    }
    this.TarjetaService.editarTarjeta(id, tarjeta).then(()=> {
      console.log('Tarjeta Guardada');
      this.titulo = 'Agregar Tarjeta';
      this.form.reset();
      this.id = undefined;
    }, (error) => {
      console.log(error, 'error');
    })
  }

}
