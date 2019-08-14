import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class GroceryService {
  getitem() {
    throw new Error("Method not implemented.");
  }
  getItems2() {
    throw new Error("Method not implemented.");
  }
  list;
  writePost;
  item = {
    name: "",
    price: 0,
    type: "",
    key: "",
    };

 private itemDoc: AngularFirestoreDocument<Item>;

  constructor(private firestore: AngularFirestore,private afs: AngularFirestore) { }

  //getItems(){
  //return this.firestore.collection('Grocery').valueChanges();
 // }
getSecItem(){
  return this.firestore.collection('Grocery').snapshotChanges();
}
  post(item,alert){
    this.writePost = this.firestore.collection<any>('Grocery');
    this.writePost.add(item).then(() => {
      
      console.log("successfully added");
    });
  }
//   update(item) {
//     item.name = "Strawberry";
//     item.price = "20";
//     item.type = "fruit"
//    this.itemDoc = this.afs.doc<Item>('Grocery/aM6oCtUbldKO2k6bw6Od');
//    this.itemDoc.update(item);
// }
update(item, key) {
 this.itemDoc = this.afs.doc<Item>('Grocery/' + key);
 this.itemDoc.update(item);
}
delete(key){
  this.afs.doc('Grocery/' + key).delete();
}
}

