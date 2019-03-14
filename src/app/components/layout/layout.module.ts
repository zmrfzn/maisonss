import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { BrandsComponent } from './brands/brands.component';


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
        BrandsComponent
    ],
    exports: [
        HeaderComponent,
        FooterComponent,
        HomeComponent,
        BrandsComponent
    ],
})
export class LayoutModule { }
