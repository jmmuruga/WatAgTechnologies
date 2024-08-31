import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ServicesAndTechnologyComponent } from './services-and-technology/services-and-technology.component';
import { ContactComponent } from './contact/contact.component';
import { IotComponent } from './Gallery/gallery.component';
import { WasteWaterAndSewageComponent } from './services-and-technology/waste-water-and-sewage/waste-water-and-sewage.component';
import { SolidWasteManagementComponent } from './services-and-technology/solid-waste-management/solid-waste-management.component';
import { WaterTreatmentSystemsComponent } from './services-and-technology/water-treatment-systems/water-treatment-systems.component';
import { BioAugmentationComponent } from './services-and-technology/bio-augmentation/bio-augmentation.component';

const routes: Routes = [
  { path: '', redirectTo: '', pathMatch: 'full' },
  { path: '', component: HomeComponent },
  { path: 'aboutus', component: AboutComponent },
  { path: 'servicesandtechnology', component: ServicesAndTechnologyComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'gallery', component: IotComponent },
  { path: 'servicesandtechnology/wastewaterandsewage', component: WasteWaterAndSewageComponent },
  { path: 'servicesandtechnology/watertreatmentsystems', component: WaterTreatmentSystemsComponent },
  { path: 'servicesandtechnology/solidwastemanagement', component: SolidWasteManagementComponent },
  { path: 'servicesandtechnology/bioaugmentation', component: BioAugmentationComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
