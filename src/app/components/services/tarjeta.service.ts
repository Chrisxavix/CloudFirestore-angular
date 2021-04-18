import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable, Subject } from 'rxjs';
import { TarjetaCredito } from '../models/tarjeta-credito';

@Injectable({
  providedIn: 'root'
})
export class TarjetaService {

  /* Creando un Observable para obtener tarjeta y poder editar */
  private tarjetaSub = new Subject<any>();

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

  /* Eliminar una tarjeta */
  eliminarTarjeta(id: string): Promise<any> {
    return this.firebase.collection('tarjetas').doc(id).delete();
  }

  editarTarjeta(id: string, tarjeta: TarjetaCredito): Promise<any> {
    return this.firebase.collection('tarjetas').doc(id).update(tarjeta);
  }
  
  /* Transmitir datos entre componentes */
  addTarjetaEdit(tarjeta: TarjetaCredito) {
    this.tarjetaSub.next(tarjeta);
  }

  getTarjetaEdit(): Observable<TarjetaCredito> {
    return this.tarjetaSub.asObservable();
  }
}
