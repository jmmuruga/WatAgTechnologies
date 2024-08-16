import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ServicesAndTechnologyComponent } from './services-and-technology/services-and-technology.component';
import { IotComponent } from './iot/iot.component';
import { ContactComponent } from './contact/contact.component';
import { WasteWaterAndSewageComponent } from './services-and-technology/waste-water-and-sewage/waste-water-and-sewage.component';
import { WaterTreatmentSystemsComponent } from './services-and-technology/water-treatment-systems/water-treatment-systems.component';
import { SolidWasteManagementComponent } from './services-and-technology/solid-waste-management/solid-waste-management.component';
import { BioAugmentationComponent } from './services-and-technology/bio-augmentation/bio-augmentation.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    ServicesAndTechnologyComponent,
    IotComponent,
    ContactComponent,
    WasteWaterAndSewageComponent,
    WaterTreatmentSystemsComponent,
    SolidWasteManagementComponent,
    BioAugmentationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
