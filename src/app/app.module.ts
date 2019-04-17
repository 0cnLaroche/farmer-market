import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { ShelfComponent } from './shelf/shelf.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { BasketService } from './services/basket.service';
import {BasketComponent} from './basket/basket.component';
import { RegistrationComponent } from './registration/registration.component';
import {FormsModule} from '@angular/forms';
import {AuthenticationService} from './services';
import { HelpComponent } from './help/help.component';
import { ContactComponent } from './contact/contact.component';
import { ProducerComponent } from './producer/producer.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    ShelfComponent,
    HomeComponent,
    LoginComponent,
    BasketComponent,
    RegistrationComponent,
    HelpComponent,
    ContactComponent,
    ProducerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    BasketService,
    AuthenticationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
