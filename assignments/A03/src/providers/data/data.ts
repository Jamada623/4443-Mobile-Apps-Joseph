import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import {  map } from 'rxjs/operators';

/*
  Generated class for the DataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DataProvider {

  constructor(private firestore: AngularFirestore) {
    console.log('Hello DataProvider Provider');
  }
  async getLocationWithIDs() {
    console.log("Getting all the location with id's...")
    let locationCollection = this.firestore.collection<any>('locations');

    let location = locationCollection.snapshotChanges().pipe(map(actions => {
        return actions.map(action => {
            const id = action.payload.doc.id;
            const data = action.payload.doc.data();
            return { id, ...data };
        });
    }));
    location.subscribe((location) => console.log(location));
}
}
