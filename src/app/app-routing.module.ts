import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ServicesAndTechnologyComponent } from './services-and-technology/services-and-technology.component';
import { ContactComponent } from './contact/contact.component';
import { IotComponent } from './iot/iot.component';

const routes: Routes = [
  { path: '', redirectTo: '', pathMatch: 'full' },
  { path: '', component: HomeComponent },
  { path: 'aboutus', component: AboutComponent },
  { path: 'servicesandtechnology', component: ServicesAndTechnologyComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'iot', component: IotComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
