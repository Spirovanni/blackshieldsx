import { Component } from '@angular/core';

// TODO: move layouts into the framework
@Component({
    selector: 'jhi-two-columns-layout',
    styleUrls: ['./two-columns.layout.scss'],
    template: `
        <nb-layout [center]="layout.id === 'center-column'" [windowMode]="">

        </nb-layout>
  `,
})
export class TwoColumnsLayoutComponent {
}
