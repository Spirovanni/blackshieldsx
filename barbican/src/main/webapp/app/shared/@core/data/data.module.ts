import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserServices } from './users.services';
import { ElectricityService } from './electricity.service';
import { StateService } from './state.service';
import { SmartTableService } from './smart-table.service';
import { PlayerService } from './player.service';

const SERVICES = [
    UserServices,
    ElectricityService,
    StateService,
    SmartTableService,
    PlayerService,
];

@NgModule({
    imports: [
        CommonModule,
    ],
    providers: [
        ...SERVICES,
    ],
})
export class DataModule {
    static forRoot(): ModuleWithProviders {
        return <ModuleWithProviders>{
            ngModule: DataModule,
            providers: [
                ...SERVICES,
            ],
        };
    }
}
