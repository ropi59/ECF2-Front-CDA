import {LOCALE_ID, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import * as fr from '@angular/common/locales/fr';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './Components/header/header.component';
import { UserListComponent } from './pages/userPage/user-list/user-list.component';
import { VehicleListComponent } from './pages/vehiclePage/vehicle-list/vehicle-list.component';
import { UserCardComponent } from './pages/userPage/user-card/user-card.component';
import {ReactiveFormsModule} from "@angular/forms";
import { UserFormComponent } from './pages/userPage/user-form/user-form.component';
import { VehicleCardComponent } from './pages/vehiclePage/vehicle-card/vehicle-card.component';
import { VehicleFormComponent } from './pages/vehiclePage/vehicle-form/vehicle-form.component';
import {registerLocaleData} from "@angular/common";
import { RentalListComponent } from './pages/rentalPage/rental-list/rental-list.component';
import { RentalCardComponent } from './pages/rentalPage/rental-card/rental-card.component';
import { RentalFormComponent } from './pages/rentalPage/rental-form/rental-form.component';
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    UserListComponent,
    VehicleListComponent,
    UserCardComponent,
    UserFormComponent,
    VehicleCardComponent,
    VehicleFormComponent,
    RentalListComponent,
    RentalCardComponent,
    RentalFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'fr-FR' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {
    registerLocaleData(fr.default)
  }
}
