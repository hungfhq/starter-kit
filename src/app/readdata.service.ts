import { Injectable } from '@angular/core';
import { AngularFireObject, AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReaddataService {
  itemRef: AngularFireObject<any>;
  items: Observable<any>;

  constructor(public db: AngularFireDatabase) {}

  readData(data: string) {
    this.itemRef = this.db.object(data);
    // this.items.subscribe(data => console.log(data));
    return (this.items = this.itemRef.valueChanges());
  }
}
