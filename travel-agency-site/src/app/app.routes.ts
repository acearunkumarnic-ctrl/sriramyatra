import { Routes } from '@angular/router';
import { Home } from './home/home';
import { About } from './about/about';
import { TourPackages } from './tour-packages/tour-packages';
import { TaxiService } from './taxi-service/taxi-service';
import { Contact } from './contact/contact';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'about', component: About },
  { path: 'tours', component: TourPackages },
  { path: 'taxi', component: TaxiService },
  { path: 'contact', component: Contact }
];

