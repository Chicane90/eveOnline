import { Router, RouterModule } from '@angular/router';
import { PlanetaryInteractionComponent } from "./planetaryInteraction/planetaryInteraction.component";
import { NotFoundComponent } from './notFound/notFound.component';


export const routing = RouterModule.forRoot([
  { path: 'planetaryInteraction', component: PlanetaryInteractionComponent },
  { path: '**', component: NotFoundComponent }

]);
