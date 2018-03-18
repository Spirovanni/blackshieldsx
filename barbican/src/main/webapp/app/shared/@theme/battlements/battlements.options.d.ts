/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { InjectionToken } from '@angular/core';
import { BsMediaBreakpoint } from './services/breakpoints.service';
import { BsJSThemeOptions } from './services/js-themes/theme.options';
export interface BsThemeOptions {
    name: string;
}
export declare const bsThemeOptionsToken: InjectionToken<BsThemeOptions>;
export declare const bsMediaBreakpointsToken: InjectionToken<BsMediaBreakpoint[]>;
export declare const bsBuiltInJSThemesToken: InjectionToken<BsJSThemeOptions[]>;
export declare const bsJSThemesToken: InjectionToken<BsJSThemeOptions[]>;
