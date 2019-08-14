import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { GroceryService } from 'src/app/services/grocery.service';
import { post } from 'selenium-webdriver/http';


@Component({
  selector: 'app-item',
  templateUrl: './item.page.html',
  styleUrls: ['./item.page.scss'],
})
export class ItemPage implements OnInit {

  item = {

    name: '',
    price: 0,
    type: '',
  };

  constructor(public alertController: AlertController, public service: GroceryService ) { }

  
  submit(){
    
    this.service.post(this.item,this.alertController)
   }


  ngOnInit() {
  }

}