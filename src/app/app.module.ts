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
import { WasteWaterAndSewageComponent } from './waste-water-and-sewage/waste-water-and-sewage.component';
import { WaterTreatmentSystemsComponent } from './water-treatment-systems/water-treatment-systems.component';
import { SolidWasteManagementComponent } from './solid-waste-management/solid-waste-management.component';
import { BioAugmentationComponent } from './bio-augmentation/bio-augmentation.component';

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
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
