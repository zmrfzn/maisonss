import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { BrandsComponent } from './brands/brands.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { GalleryComponent } from './gallery/gallery.component';
import { FeaturesComponent } from './features/features.component';
import { ServiceTypesComponent } from './service-types/service-types.component';
import { BlogComponent } from './blog/blog.component';
import { CallInfoComponent } from './call-info/call-info.component';


@NgModule({
    imports: [
        CommonModule,
        RouterModule
    ],
    providers: [],
    declarations: [
        HeaderComponent,
        FooterComponent,
        HomeComponent,
        BrandsComponent,
        TestimonialsComponent,
        GalleryComponent,
        FeaturesComponent,
        ServiceTypesComponent,
        BlogComponent,
        CallInfoComponent
    ],
    exports: [
        HeaderComponent,
        FooterComponent,
        HomeComponent,
        BrandsComponent,
        TestimonialsComponent,
        GalleryComponent,
        FeaturesComponent,
        ServiceTypesComponent,
        BlogComponent,
        CallInfoComponent
    ],
})
export class LayoutModule { }
