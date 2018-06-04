import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListaPaisesPageModule } from '../pages/lista-paises/lista-paises.module';
import { DetalhePaisPageModule } from '../pages/detalhe-pais/detalhe-pais.module';
import {HttpModule} from "@angular/http";
import { RestPaisProvider } from '../providers/rest-pais/rest-pais';

@NgModule({
  declarations: [
    MyApp,
    HomePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    ListaPaisesPageModule,
    DetalhePaisPageModule,
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    RestPaisProvider
  ]
})
export class AppModule {}
