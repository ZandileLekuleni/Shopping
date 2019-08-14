import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GroceryService } from 'src/app/services/grocery.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.page.html',
  styleUrls: ['./edit.page.scss'],
})
export class EditPage implements OnInit {

// name;
// price;
// type;
// key;


item = {  key: " ", name: " ", price:0, type:"" }
  grocerieslist: any;
  // grocery: any;

  constructor(private route: ActivatedRoute, private grocery: GroceryService,private router:Router) { }

  ngOnInit() {

  this.route.queryParams.subscribe( params => 
 { this.item.name = params.name;
   this.item.price = params.price;
   this.item.type = params.type;
   this.item.key = params.key;

   console.log(this.item.name, this.item.price, this.item.type, this.item.key);

 });
 
}
updateItem(item){

  this.grocery.update(item, item.key);
  this.router.navigateByUrl("home");
}
delete( key){

  this.grocery.delete( key)
this.router.navigateByUrl("home");
  }
}
