import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { HttpClientModule } from '@angular/common/http';
import { IonicStorageModule } from '@ionic/storage';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { SQLite } from '@ionic-native/sqlite/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { RepositoryModule } from 'src/repository/repository.module';
import { ServiceModule } from 'src/service/service.module';
import { UtilsModule } from 'src/utils/utils.module';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule, FirestoreSettingsToken } from 'angularfire2/firestore';
import { environment } from 'src/environments/environment';
import { ComponentsModule } from './components/components.module';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports:
  [
    BrowserModule,
    IonicModule.forRoot(),
    IonicStorageModule.forRoot(),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AppRoutingModule,
    ServiceModule,
    RepositoryModule,
    UtilsModule,
    HttpClientModule,
    ComponentsModule
  ],
  providers:
  [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    { provide: FirestoreSettingsToken, useValue: {} },
    SQLite
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
