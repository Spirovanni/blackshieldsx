/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { ComponentFactory, ComponentFactoryResolver, Type } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { BsJSThemeOptions } from './js-themes/theme.options';
import { BsJSThemesRegistry } from './js-themes-registry.service';
import { BsMediaBreakpointsService, BsMediaBreakpoint } from './breakpoints.service';
/**
 * Main Nebular service. Includes various helper methods.
 */
export declare class BsThemeService {
    protected options: any;
    private breakpointService;
    private jsThemesRegistry;
    private componentFactoryResolver;
    currentTheme: string;
    private themeChanges$;
    private appendToLayoutTop$;
    private createLayoutTop$;
    private appendLayoutClass$;
    private removeLayoutClass$;
    private changeWindowWidth$;
    constructor(options: any, breakpointService: BsMediaBreakpointsService, jsThemesRegistry: BsJSThemesRegistry, componentFactoryResolver: ComponentFactoryResolver);
    changeTheme(name: string): void;
    changeWindowWidth(width: number): void;
    appendToLayoutTop<T>(entity: Type<T> | ComponentFactory<T>): Observable<any>;
    /**
     * Returns a theme object with variables (color/paddings/etc) on a theme change.
     * Once subscribed - returns current theme.
     *
     * @returns {Observable<NbJSThemeOptions>}
     */
    getJsTheme(): Observable<BsJSThemeOptions>;
    clearLayoutTop(): Observable<any>;
    /**
     * Triggers media query breakpoint change
     * Returns a pair where the first item is previous media breakpoint and the second item is current breakpoit.
     * ```
     *  [{ name: 'xs', width: 0 }, { name: 'md', width: 768 }] // change from `xs` to `md`
     * ```
     * @returns {Observable<[NbMediaBreakpoint, NbMediaBreakpoint]>}
     */
    onMediaQueryChange(): Observable<BsMediaBreakpoint[]>;
    onThemeChange(): Observable<any>;
    onAppendToTop(): Observable<any>;
    onClearLayoutTop(): Observable<any>;
    appendLayoutClass(className: string): void;
    onAppendLayoutClass(): Observable<any>;
    removeLayoutClass(className: string): void;
    onRemoveLayoutClass(): Observable<any>;
}
