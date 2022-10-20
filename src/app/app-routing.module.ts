import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {UserListComponent} from "./pages/userPage/user-list/user-list.component";
import {VehicleListComponent} from "./pages/vehiclePage/vehicle-list/vehicle-list.component";
import {RentalListComponent} from "./pages/rentalPage/rental-list/rental-list.component";

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'users', component: UserListComponent},
  { path: 'vehicles', component: VehicleListComponent},
  { path: 'rentals', component: RentalListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
