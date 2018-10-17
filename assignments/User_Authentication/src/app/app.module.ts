import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { Geolocation } from '@ionic-native/geolocation';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth'
import { FIREBASE_CONFIG } from './firebase'
import { AngularFirestoreModule } from 'angularfire2/firestore'
import { DataProvider } from '../providers/data/data';
import { LoginPage } from '../pages/login/login';
import { RegisterPage } from '../pages/register/register';
import { UserPage} from '../pages/user/user';
import { AuthService } from '../pages/core/auth.service';
import { UserService } from '../pages/core/user.service';
import { environment } from '../environments/environment';
import { Facebook } from '@ionic-native/facebook';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    RegisterPage,
    UserPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    //AngularFireModule.initializeApp(FIREBASE_CONFIG),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    RegisterPage,
    UserPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Facebook,
    Geolocation,
    AuthService,
    UserService,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    DataProvider
  ]
})
export class AppModule {}
