import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { BasketComponent } from './basket/basket.component';
import {HelpComponent} from './help/help.component';
import {ContactComponent} from './contact/contact.component';
import {ProducerComponent} from './producer/producer.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'basket', component: BasketComponent},
  {path: 'help', component: HelpComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'producer/:farm', component: ProducerComponent},
  {path: 'home', redirectTo: '', pathMatch: 'full'}];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: false })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
