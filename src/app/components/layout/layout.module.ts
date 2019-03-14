import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { BrandsComponent } from './brands/brands.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';


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
        TestimonialsComponent
    ],
    exports: [
        HeaderComponent,
        FooterComponent,
        HomeComponent,
        BrandsComponent,
        TestimonialsComponent

    ],
})
export class LayoutModule { }
