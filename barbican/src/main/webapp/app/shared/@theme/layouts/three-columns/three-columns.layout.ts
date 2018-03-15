import { Component } from '@angular/core';

// TODO: move layouts into the framework
@Component({
    selector: 'jhi-three-columns-layout',
    styleUrls: ['./three-columns.layout.scss'],
    template: `
        <nb-layout [center]="layout.id === 'center-column'" [windowMode]="">

        </nb-layout>
  `,
})
export class ThreeColumnsLayoutComponent {
}
