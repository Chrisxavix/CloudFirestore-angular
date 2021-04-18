import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { TarjetaCredito } from '../models/tarjeta-credito';

@Injectable({
  providedIn: 'root'
})
export class TarjetaService {

  constructor( private firebase: AngularFirestore ) { }

  guardarTarjeta(tarjeta: TarjetaCredito): Promise<any> {
    return this.firebase.collection('tarjetas').add(tarjeta);
  }

  /* Solo obtiene la data */
  obtenerTarjetas(): Observable<any> {
    return this.firebase.collection('tarjetas').snapshotChanges();
  }

  /* Ordenar por fecha de creación */
  obtenerOrdenarTarjetas(): Observable<any> {
    return this.firebase.collection('tarjetas', ref => ref.orderBy('fechaCreación', 'asc')).snapshotChanges();
  }
}
