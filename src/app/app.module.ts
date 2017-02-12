import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PicorptaxService } from './picorptax/picorptax.service'

import { routing } from './app.routing';

import { RequestFormComponent } from './planetaryInteraction/request-form.component';
import { PlanetaryInteractionComponent } from './planetaryInteraction/planetaryInteraction.component';
import { TaxTableComponent } from './planetaryInteraction/tax-table.component';
import { NotFoundComponent } from './notFound/notFound.component';
import { HomeComponent } from './home/home.component';
import {DatePickerModule} from "ng2-datepicker";

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    RequestFormComponent,
    PlanetaryInteractionComponent,
    TaxTableComponent,
    NotFoundComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    DatePickerModule,
    routing
  ],
  exports: [
    RequestFormComponent
  ],
  providers: [PicorptaxService],
  bootstrap: [AppComponent]
})
export class AppModule {

}
