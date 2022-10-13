import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

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
    VehicleFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
