import { Injectable } from '@angular/core';
import { AngularFirestoreCollection, AngularFirestoreDocument, AngularFirestore } from '@angular/fire/firestore';
import { Startup } from '../modelo/startup.model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class StartupServicio{
    startupsColeccion: AngularFirestoreCollection<Startup>;
    startupsColeccionLocal: AngularFirestoreCollection<Startup>;
    startupDoc: AngularFirestoreDocument<Startup>;
    startups: Observable<Startup[]>;
    startupsBusqueda: Observable<Startup[]>;
    startup: Observable<Startup>;
    startupLocal : Startup;
    /* Variables auxiliares */
    factoresFracaso:string[];
    startupBusqueda: Startup[];


    constructor(private db: AngularFirestore){
        this.startupsColeccion = db.collection('startup', ref => ref.orderBy('codigo', 'asc'));
    }



    getStartups(): Observable<Startup[]>{
        //Obtener los clientes
        this.startups = this.startupsColeccion.snapshotChanges().pipe(
            map( cambios => {
                return cambios.map( accion => {
                    const datos = accion.payload.doc.data() as Startup;
                    datos.id = accion.payload.doc.id;
                    return datos;
                })
            })
        );
        return this.startups;
    }

    agregarStartup(cliente: Startup){
        this.startupsColeccion.add(cliente);
    }

    getStartup(id: string){
        this.startupDoc = this.db.doc<Startup>(`startup/${id}`);
        this.startup = this.startupDoc.snapshotChanges().pipe(
            map( accion => {
                if(accion.payload.exists === false){
                    return null;
                }
                else{
                    const datos = accion.payload.data() as Startup;
                    datos.id = accion.payload.id;
                    return datos;
                }
            })
        );
        return this.startup;
    }

    modificarStartup(cliente: Startup){
        this.startupDoc = this.db.doc(`startup/${cliente.id}`);
        this.startupDoc.update(cliente);
    }

    eliminarStartup(cliente: Startup){
        this.startupDoc = this.db.doc(`startup/${cliente.id}`);
        this.startupDoc.delete();
    }

    getStartupsEnFracaso(factor: string): Observable<Startup[]>{
        this.startupsColeccion = this.db.collection('startup', ref => ref.where('factores_fracaso','array-contains',factor)
        .where('estado','==','F'));
        this.startups = this.startupsColeccion.snapshotChanges().pipe(
            map( cambios => {
                return cambios.map( accion => {
                    const datos = accion.payload.doc.data() as Startup;
                    datos.id = accion.payload.doc.id;
                    return datos;
                })
            })
        );
        return this.startups;
    }
    getStartupEnProceso(fase :string): Observable<Startup[]>{
        this.startupsColeccion = this.db.collection('startup', ref => ref.where('estado','==','A').where('fase','==',fase));
        this.startups = this.startupsColeccion.snapshotChanges().pipe(
            map( cambios => {
                return cambios.map( accion => {
                    const datos = accion.payload.doc.data() as Startup;
                    datos.id = accion.payload.doc.id;
                    return datos;
                })
            })
        );
        return this.startups;
    }


}
