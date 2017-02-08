import { Router, RouterModule } from '@angular/router';
import { PlanetaryInteractionComponent } from "./planetaryInteraction/planetaryInteraction.component";
import { NotFoundComponent } from './notFound/notFound.component';
import {HomeComponent} from "./home/home.component";


export const routing = RouterModule.forRoot([
  { path: '', component: HomeComponent },
  { path: 'planetaryInteraction', component: PlanetaryInteractionComponent },
  { path: '**', component: NotFoundComponent }

]);
