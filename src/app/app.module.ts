import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PicorptaxService } from './picorptax/picorptax.service'

import { RequestFormComponent } from './planetaryInteraction/request-form.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    RequestFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [PicorptaxService],
  bootstrap: [AppComponent]
})
export class AppModule { }
