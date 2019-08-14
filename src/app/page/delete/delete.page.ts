// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-delete',
//   templateUrl: './delete.page.html',
//   styleUrls: ['./delete.page.scss'],
// })
// export class DeletePage implements OnInit {

//   constructor() { }

//   ngOnInit() {
//   }

// }


import { Component } from '@angular/core';


import { Router } from '@angular/router';
import { GroceryService } from 'src/app/services/grocery.service';

@Component({
  selector: 'app-delete',
  templateUrl: 'delete.page.html',
  styleUrls: ['delete.page.scss'],
})
export class DeletePage {
  
  itemList;
  grocerieslist: any;
 

  constructor(private groceries: GroceryService, private route: Router ) {

    // this.groceryList = this.grocery.getItems();
//   this.grocerieslist.getSecItem().subscribe(data => {

//     this.itemList = data.map( e => {
//       return{
//         key: e.payload.doc.id,
//         ...e.payload.doc.data()
//       }as Item;
      
//   });
//   console.log(this.itemList);


  
//  });

  }

  delete( key){
  this.groceries.delete( key)

  }

  
}

