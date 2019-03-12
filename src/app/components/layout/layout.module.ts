import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';


@NgModule({
    imports: [
        CommonModule,
        RouterModule
    ],
    providers: [],
    declarations: [
        HeaderComponent,
        FooterComponent,
        HomeComponent
    ],
    exports: [
        HeaderComponent,
        FooterComponent,
        HomeComponent
    ],
})
export class LayoutModule { }
