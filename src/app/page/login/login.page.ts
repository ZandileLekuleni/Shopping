import { Component, OnInit } from '@angular/core';
import { User } from '../../model/user';
import { AngularFireAuth } from '@angular/fire/auth';


 
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  user = {} as User;

  constructor(private afAuth: AngularFireAuth) { }

 async login(user: User){
   try{
  const result = this.afAuth.auth.signInWithEmailAndPassword(user.email, user.password)
  console.log(result);
}
catch(e){
  console.error(e);
}
 }
 
  ngOnInit() {
  }


}



