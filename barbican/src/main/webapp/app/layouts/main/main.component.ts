import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRouteSnapshot, NavigationEnd } from '@angular/router';
import { MENU_ITEMS } from './../pages-menu';
// import * as $ from 'jquery';
import 'granim';

import {
    NbMediaBreakpoint,
    NbMediaBreakpointsService,
    NbMenuItem,
    NbMenuService,
    NbSidebarService,
    NbThemeService,
} from '@nebular/theme';

import { StateService } from '../../shared';

import { JhiLanguageHelper } from '../../shared';

import { Subscription } from 'rxjs/Subscription';
import 'rxjs/add/operator/withLatestFrom';
import 'rxjs/add/operator/delay';

@Component({
    selector: 'jhi-main',
    templateUrl: './main.component.html',
    styleUrls: ['./main.component.scss'],
})
export class JhiMainComponent implements OnInit, OnDestroy {

    menu = MENU_ITEMS;
    subMenu: NbMenuItem[] = [
        {
            title: 'PAGE LEVEL MENU',
            group: true,
        },
        {
            title: 'Buttons',
            icon: 'ion ion-android-radio-button-off',
            link: '/pages/ui-features/buttons',
        },
        {
            title: 'Grid',
            icon: 'ion ion-android-radio-button-off',
            link: '/pages/ui-features/grid',
        },
        {
            title: 'Icons',
            icon: 'ion ion-android-radio-button-off',
            link: '/pages/ui-features/icons',
        },
        {
            title: 'Modals',
            icon: 'ion ion-android-radio-button-off',
            link: '/pages/ui-features/modals',
        },
        {
            title: 'Typography',
            icon: 'ion ion-android-radio-button-off',
            link: '/pages/ui-features/typography',
        },
        {
            title: 'Animated Searches',
            icon: 'ion ion-android-radio-button-off',
            link: '/pages/ui-features/search-fields',
        },
        {
            title: 'Tabs',
            icon: 'ion ion-android-radio-button-off',
            link: '/pages/ui-features/tabs',
        },
    ];
    layout: any = {};
    sidebar: any = {};

    protected layoutState$: Subscription;
    protected sidebarState$: Subscription;
    protected menuClick$: Subscription;

    constructor(
        private jhiLanguageHelper: JhiLanguageHelper,
        private router: Router,
        protected stateService: StateService,
        protected menuService: NbMenuService,
        protected themeService: NbThemeService,
        protected bpService: NbMediaBreakpointsService,
        protected sidebarService: NbSidebarService) {
        this.layoutState$ = this.stateService.onLayoutState()
            .subscribe((layout: string) => this.layout = layout);

        this.sidebarState$ = this.stateService.onSidebarState()
            .subscribe((sidebar: string) => {
                this.sidebar = sidebar;
            });

        const isBp = this.bpService.getByName('is');
        this.menuClick$ = this.menuService.onItemSelect()
            .withLatestFrom(this.themeService.onMediaQueryChange())
            .delay(20)
            .subscribe(([item, [bpFrom, bpTo]]: [any, [NbMediaBreakpoint, NbMediaBreakpoint]]) => {

                if (bpTo.width <= isBp.width) {
                    this.sidebarService.collapse('menu-sidebar');
                }
            });
    }

    private getPageTitle(routeSnapshot: ActivatedRouteSnapshot) {
        let title: string = (routeSnapshot.data && routeSnapshot.data['pageTitle']) ? routeSnapshot.data['pageTitle'] : 'barbicanApp';
        if (routeSnapshot.firstChild) {
            title = this.getPageTitle(routeSnapshot.firstChild) || title;
        }
        return title;
    }

    ngOnInit() {
        this.router.events.subscribe((event) => {
            if (event instanceof NavigationEnd) {
                this.jhiLanguageHelper.updateTitle(this.getPageTitle(this.router.routerState.snapshot.root));
            }
        });

        // $(document).ready(function () {
        //     $(window).scroll(function () {
        //         let scroll = $(window).scrollTop();
        //         if (scroll > 100) {
        //             $('.navbar').removeClass('navbar-dark').addClass('navbar-light');
        //             $('.navbar .navbar-brand img').attr('src', 'img/fav.png');
        //         }
        //
        //         else {
        //             $('.navbar').removeClass('navbar-light').addClass('navbar-dark');
        //             $('.navbar .navbar-brand img').attr('src', 'img/logo.png');
        //         }
        //     })
        // })
        //
        // $(".navbar a").on("click", function () {
        //     $(".navbar").find(".active").removeClass("active");
        //     $(this).parent().addClass("active");
        // });

    }

    ngOnDestroy() {
        this.layoutState$.unsubscribe();
        this.sidebarState$.unsubscribe();
        this.menuClick$.unsubscribe();
    }
}
