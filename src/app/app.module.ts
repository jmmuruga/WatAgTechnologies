import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ServicesAndTechnologyComponent } from './services-and-technology/services-and-technology.component';
import { GalleryComponent} from './Gallery/gallery.component';
import { ContactComponent } from './contact/contact.component';
import { WasteWaterAndSewageComponent } from './services-and-technology/waste-water-and-sewage/waste-water-and-sewage.component';
import { WaterTreatmentSystemsComponent } from './services-and-technology/water-treatment-systems/water-treatment-systems.component';
import { SolidWasteManagementComponent } from './services-and-technology/solid-waste-management/solid-waste-management.component';
import { BioAugmentationComponent } from './services-and-technology/bio-augmentation/bio-augmentation.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { EnvironmentalConsultingServiceComponent } from './services-and-technology/environmental-consulting-service/environmental-consulting-service.component';
import { AnnualMaintainanceComponent } from './services-and-technology/annual-maintainance/annual-maintainance.component'; // Import MatDialogModule
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ContactFormOneComponent } from './contact-form-one/contact-form-one.component';
import { ContactFormTwoComponent } from './contact-form-two/contact-form-two.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    ServicesAndTechnologyComponent,
    GalleryComponent,
    ContactComponent,
    WasteWaterAndSewageComponent,
    WaterTreatmentSystemsComponent,
    SolidWasteManagementComponent,
    BioAugmentationComponent,
    EnvironmentalConsultingServiceComponent,
    AnnualMaintainanceComponent,
    ContactFormOneComponent,
    ContactFormTwoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatDialogModule, // Add MatDialogModule here
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
