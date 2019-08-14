import { Component, OnInit } from '@angular/core';
import { User } from '../../model/user';
import { AngularFireAuth } from '@angular/fire/auth';


 
@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  user = {} as User;

  constructor(private afAuth: AngularFireAuth) { }

 async register(user: User){
   try{
  const result = this.afAuth.auth.createUserWithEmailAndPassword(user.email, user.password)
  console.log(result);
}
catch(e){
  console.error(e);
}
 }
 
  ngOnInit() {
  }


}
