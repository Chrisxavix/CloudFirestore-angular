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

  obtenerTarjetas(): Observable<any> {
    return this.firebase.collection('tarjetas').snapshotChanges();
  }
}
