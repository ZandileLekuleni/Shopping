import { Component } from '@angular/core';
import { GroceryService } from '../services/grocery.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  item = {
    name: "",
    price: 0,
    type: "",
    key: "",
    };


  groceryList;
  itemList;
 

  constructor(private groceries: GroceryService, private router: Router ) {

    // this.groceryList = this.grocery.getItems();
  this.groceries.getSecItem().subscribe(data => {

    this.itemList = data.map( e => {
      return{
        key: e.payload.doc.id,
        ...e.payload.doc.data()
      }as Item;
      
  });
  console.log(this.itemList);


  
 });

  }

  

  edit(item){

    this.router.navigate( ['/edit'], {queryParams:{name:item.name, price:item.price, type:item.type, key:item.key}});
  }
  delete(){
    this.router.navigateByUrl("delete");
  }
add2(){
  this.router.navigateByUrl("add");
}
}