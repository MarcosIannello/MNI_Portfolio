import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing/app-routing.module';



@NgModule({
  declarations: [
    // AppComponent,
    // NavbarComponent,
  ],
  imports: [
    CommonModule,
    AppRoutingModule
  ]
})


export class AppModule { }
