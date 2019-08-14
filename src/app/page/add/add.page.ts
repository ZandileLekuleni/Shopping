import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GroceryService } from 'src/app/services/grocery.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-add',
  templateUrl: './add.page.html',
  styleUrls: ['./add.page.scss'],
})
export class AddPage implements OnInit {
  
 

 item = {  name: " ", price:0, type:"" }

 constructor(private route: ActivatedRoute, private grocery: GroceryService, private router: Router, private alertContoller: AlertController) { }

 ngOnInit() {

}
add(){

this.grocery.post(this.item, this.alertContoller)
this.router.navigate(['/home']);
}


 

}