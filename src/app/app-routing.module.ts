import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ServicesAndTechnologyComponent } from './services-and-technology/services-and-technology.component';
import { ContactComponent } from './contact/contact.component';
import { IotComponent } from './iot/iot.component';
import { WasteWaterAndSewageComponent } from './waste-water-and-sewage/waste-water-and-sewage.component';
import { SolidWasteManagementComponent } from './solid-waste-management/solid-waste-management.component';
import { WaterTreatmentSystemsComponent } from './water-treatment-systems/water-treatment-systems.component';
import { BioAugmentationComponent } from './bio-augmentation/bio-augmentation.component';

const routes: Routes = [
  { path: '', redirectTo: '', pathMatch: 'full' },
  { path: '', component: HomeComponent },
  { path: 'aboutus', component: AboutComponent },
  { path: 'servicesandtechnology', component: ServicesAndTechnologyComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'iot', component: IotComponent },
  { path: 'iot', component: WasteWaterAndSewageComponent },
  { path: 'iot', component: WaterTreatmentSystemsComponent },
  { path: 'iot', component: SolidWasteManagementComponent },
  { path: 'iot', component: BioAugmentationComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
