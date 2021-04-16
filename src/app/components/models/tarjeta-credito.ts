export class TarjetaCredito {
    /* la id es opcional porque como se autogenera con firebase */
    id?: string;
    titular: string;
    numeroTarjeta: string;
    fechaExpiracion: string;
    cvv: number;
    fechaCreación: Date;
    fechaActualizacion: Date;

    constructor( pTitular: string, pNumeroTarjeta: string, pFechaExpiracion: string, pCvv: number ) {
        this.titular = pTitular;
        this.numeroTarjeta = pNumeroTarjeta
        this.fechaExpiracion = pFechaExpiracion
        this.cvv = pCvv
        this.fechaCreación = new Date();
        this.fechaActualizacion = new Date();
    }
}
