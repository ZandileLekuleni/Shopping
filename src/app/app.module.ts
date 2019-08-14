import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';




const firebaseConfig = {
  apiKey: 'AIzaSyAVstRLk8QN8T99Gb-RqPLGIM8mmcEBNKQ',
  authDomain: "shoppingapp-8dc59.firebaseapp.com",
  databaseURL: "https://shoppingapp-8dc59.firebaseio.com",
  projectId: "shoppingapp-8dc59",
  storageBucket: "shoppingapp-8dc59.appspot.com",
  messagingSenderId: "517846494338",
  appId: "1:517846494338:web:b0e4c9c2b2ac722a"
};
@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, AngularFireModule.initializeApp(firebaseConfig), AngularFirestoreModule, AngularFireAuthModule],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}



