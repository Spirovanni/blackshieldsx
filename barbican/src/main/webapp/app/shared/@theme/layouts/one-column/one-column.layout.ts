import { Component } from '@angular/core';

// TODO: move layouts into the framework
@Component({
    selector: 'jhi-one-column-layout',
    styleUrls: ['./one-column.layout.scss'],
    template: `
        <nb-layout [center]="layout.id === 'center-column'" [windowMode]="">

        </nb-layout>
  `,
})
export class OneColumnLayoutComponent {
}
