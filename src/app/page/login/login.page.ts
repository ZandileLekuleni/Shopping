
import { Component } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { WindowService } from 'src/app/services/windows.service';
import * as firebase from 'firebase';
import { PhoneNumber } from 'src/app/Module/phone';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss']
})
export class LoginPage {
  
  title = 'firebaseLogin';
 
  selectedVal: string;
  responseMessage: string = '';
  responseMessageType: string = '';
  emailInput: string;
  passwordInput: string;
  isForgotPassword: boolean;
  userDetails: any;
  windowRef: any;

  phoneNumber = new PhoneNumber()

  verificationCode: string;

  user: any;
 
  constructor(
    private authService: AuthenticationService, private win: WindowService
  ) {
    this.selectedVal = 'login';
    this.isForgotPassword = false;
 
  }
  ngOnInit() {
    this.windowRef = this.win.windowRef
    this.windowRef.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container')

    this.windowRef.recaptchaVerifier.render()
  }


  sendLoginCode() {

    const appVerifier = this.windowRef.recaptchaVerifier;

    const num = this.phoneNumber.e164;

    firebase.auth().signInWithPhoneNumber(num, appVerifier)
            .then(result => {

                this.windowRef.confirmationResult = result;

            })
            .catch( error => console.log(error) );

  }
  // Comman Method to Show Message and Hide after 2 seconds
  showMessage(type, msg) {
    this.responseMessageType = type;
    this.responseMessage = msg;
    setTimeout(() => {
      this.responseMessage = "";
    }, 2000);
  }
 
  // Called on switching Login/ Register tabs
  public onValChange(val: string) {
    this.showMessage("", "");
    this.selectedVal = val;
  }
 
  // Check localStorage is having User Data
  isUserLoggedIn() {
    this.userDetails = this.authService.isUserLoggedIn();
  }
 
  // SignOut Firebase Session and Clean LocalStorage
  logoutUser() {
    this.authService.logout()
      .then(res => {
        console.log(res);
        this.userDetails = undefined;
        localStorage.removeItem('user');
      }, err => {
        this.showMessage("danger", err.message);
      });
  }
 
  // Login user with  provided Email/ Password
  loginUser() {
    this.responseMessage = "";
    this.authService.login(this.emailInput, this.passwordInput)
      .then(res => {
        console.log(res);
        this.showMessage("success", "Successfully Logged In!");
        this.isUserLoggedIn();
      }, err => {
        this.showMessage("danger", err.message);
      });
  }
 
  // Register user with  provided Email/ Password
  registerUser() {
    this.authService.register(this.emailInput, this.passwordInput)
      .then(res => {
 
        // Send Varification link in email
        this.authService.sendEmailVerification().then(res => {
          console.log(res);
          this.isForgotPassword = false;
          this.showMessage("success", "Registration Successful! Please Verify Your Email");
        }, err => {
          this.showMessage("danger", err.message);
        });
        this.isUserLoggedIn();
 
 
      }, err => {
        this.showMessage("danger", err.message);
      });
  }
 
  // Send link on given email to reset password
  forgotPassword() {
    this.authService.sendPasswordResetEmail(this.emailInput)
      .then(res => {
        console.log(res);
        this.isForgotPassword = false;
        this.showMessage("success", "Please Check Your Email");
      }, err => {
        this.showMessage("danger", err.message);
      });
  }
 
  // Open Popup to Login with Google Account
  googleLogin() {
    this.authService.loginWithGoogle()
      .then(res => {
        console.log(res);
        this.showMessage("success", "Successfully Logged In with Google");
        this.isUserLoggedIn();
      }, err => {
        this.showMessage("danger", err.message);
      });
  }
 
}


