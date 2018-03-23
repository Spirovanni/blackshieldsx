import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CarouselComponent } from './carousel/carousel.component';
import { BarbicanSharedModule, ThemeModule } from '../shared';

import { HOME_ROUTE, HomeComponent } from './';
import { HeroComponent } from './hero/hero.component';

@NgModule({
    imports: [
        BarbicanSharedModule,
        ThemeModule,
        RouterModule.forChild([ HOME_ROUTE ])
    ],
    declarations: [
        HomeComponent,
        CarouselComponent,
        HeroComponent
    ],
    entryComponents: [
    ],
    providers: [
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class BarbicanHomeModule {}
