/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { Injectable } from '@angular/core';
import { Location } from '@angular/common';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { ReplaySubject } from 'rxjs/ReplaySubject';
import { share } from 'rxjs/operators/share';
var itemClick$ = new ReplaySubject(1);
var addItems$ = new ReplaySubject(1);
var navigateHome$ = new ReplaySubject(1);
var getSelectedItem$ = new ReplaySubject(1);
var itemSelect$ = new ReplaySubject(1);
var itemHover$ = new ReplaySubject(1);
var submenuToggle$ = new ReplaySubject(1);
/**
 * Menu Item options
 * TODO: check if we need both URL and LINK
 */
var /**
 * Menu Item options
 * TODO: check if we need both URL and LINK
 */
NbMenuItem = /** @class */ (function () {
    function NbMenuItem() {
        /**
           * Children items height
           * @type {number}
           */
        this.subMenuHeight = 0;
        /**
           * Item is selected when partly or fully equal to the current url
           * @type {string}
           */
        this.pathMatch = 'full';
    }
    return NbMenuItem;
}());
/**
 * Menu Item options
 * TODO: check if we need both URL and LINK
 */
export { NbMenuItem };
// TODO: map select events to router change events
// TODO: review the interface
/**
 * Menu Service. Allows you to listen to menu events, or to interact with a menu.
 */
var NbMenuService = /** @class */ (function () {
    function NbMenuService() {
    }
    /**
     * Add items to the end of the menu items list
     * @param {List<NbMenuItem>} items
     * @param {string} tag
     */
    /**
       * Add items to the end of the menu items list
       * @param {List<NbMenuItem>} items
       * @param {string} tag
       */
    NbMenuService.prototype.addItems = /**
       * Add items to the end of the menu items list
       * @param {List<NbMenuItem>} items
       * @param {string} tag
       */
    function (items, tag) {
        addItems$.next({ tag: tag, items: items });
    };
    /**
     * Navigate to the home menu item
     * @param {string} tag
     */
    /**
       * Navigate to the home menu item
       * @param {string} tag
       */
    NbMenuService.prototype.navigateHome = /**
       * Navigate to the home menu item
       * @param {string} tag
       */
    function (tag) {
        navigateHome$.next({ tag: tag });
    };
    /**
     * Returns currently selected item. Won't subscribe to the future events.
     * @param {string} tag
     * @returns {Observable<{tag: string; item: NbMenuItem}>}
     */
    /**
       * Returns currently selected item. Won't subscribe to the future events.
       * @param {string} tag
       * @returns {Observable<{tag: string; item: NbMenuItem}>}
       */
    NbMenuService.prototype.getSelectedItem = /**
       * Returns currently selected item. Won't subscribe to the future events.
       * @param {string} tag
       * @returns {Observable<{tag: string; item: NbMenuItem}>}
       */
    function (tag) {
        var listener = new BehaviorSubject(null);
        getSelectedItem$.next({ tag: tag, listener: listener });
        return listener.asObservable();
    };
    NbMenuService.prototype.onItemClick = function () {
        return itemClick$.pipe(share());
    };
    NbMenuService.prototype.onItemSelect = function () {
        return itemSelect$.pipe(share());
    };
    NbMenuService.prototype.onItemHover = function () {
        return itemHover$.pipe(share());
    };
    NbMenuService.prototype.onSubmenuToggle = function () {
        return submenuToggle$.pipe(share());
    };
    NbMenuService.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    NbMenuService.ctorParameters = function () { return []; };
    return NbMenuService;
}());
export { NbMenuService };
var NbMenuInternalService = /** @class */ (function () {
    function NbMenuInternalService(location) {
        this.location = location;
        this.items = [];
        this.items = [];
    }
    NbMenuInternalService.prototype.getItems = function () {
        return this.items;
    };
    NbMenuInternalService.prototype.prepareItems = function (items) {
        var _this = this;
        items.forEach(function (i) { return _this.setParent(i); });
    };
    NbMenuInternalService.prototype.updateSelection = function (items, tag, collapseOther) {
        var _this = this;
        if (collapseOther === void 0) { collapseOther = false; }
        if (collapseOther) {
            this.collapseAll(items, tag);
        }
        items.forEach(function (item) { return _this.selectItemByUrl(item, tag); });
    };
    NbMenuInternalService.prototype.resetItems = function (items) {
        var _this = this;
        items.forEach(function (i) { return _this.resetItem(i); });
    };
    NbMenuInternalService.prototype.collapseAll = function (items, tag, except) {
        var _this = this;
        items.forEach(function (i) { return _this.collapseItem(i, tag, except); });
    };
    NbMenuInternalService.prototype.onAddItem = function () {
        return addItems$.pipe(share());
    };
    NbMenuInternalService.prototype.onNavigateHome = function () {
        return navigateHome$.pipe(share());
    };
    NbMenuInternalService.prototype.onGetSelectedItem = function () {
        return getSelectedItem$.pipe(share());
    };
    NbMenuInternalService.prototype.itemHover = function (item, tag) {
        itemHover$.next({ tag: tag, item: item });
    };
    NbMenuInternalService.prototype.submenuToggle = function (item, tag) {
        submenuToggle$.next({ tag: tag, item: item });
    };
    NbMenuInternalService.prototype.itemSelect = function (item, tag) {
        itemSelect$.next({ tag: tag, item: item });
    };
    NbMenuInternalService.prototype.itemClick = function (item, tag) {
        itemClick$.next({ tag: tag, item: item });
    };
    NbMenuInternalService.prototype.resetItem = function (item) {
        var _this = this;
        item.selected = false;
        item.children && item.children.forEach(function (child) {
            _this.resetItem(child);
        });
    };
    NbMenuInternalService.prototype.isParent = function (parent, child) {
        return child.parent
            ? child.parent === parent || this.isParent(parent, child.parent)
            : false;
    };
    NbMenuInternalService.prototype.collapseItem = function (item, tag, except) {
        var _this = this;
        if (except && (item === except || this.isParent(item, except))) {
            return;
        }
        var wasExpanded = item.expanded;
        item.expanded = false;
        if (wasExpanded) {
            this.submenuToggle(item);
        }
        item.children && item.children.forEach(function (child) { return _this.collapseItem(child, tag); });
    };
    NbMenuInternalService.prototype.setParent = function (item) {
        var _this = this;
        item.children && item.children.forEach(function (child) {
            child.parent = item;
            _this.setParent(child);
        });
    };
    NbMenuInternalService.prototype.selectItem = function (item, tag) {
        item.selected = true;
        this.itemSelect(item, tag);
        this.selectParent(item, tag);
    };
    NbMenuInternalService.prototype.selectParent = function (_a, tag) {
        var item = _a.parent;
        if (!item) {
            return;
        }
        if (!item.expanded) {
            item.expanded = true;
            this.submenuToggle(item, tag);
        }
        item.selected = true;
        this.selectParent(item, tag);
    };
    NbMenuInternalService.prototype.selectItemByUrl = function (item, tag) {
        var wasSelected = item.selected;
        var isSelected = this.selectedInUrl(item);
        if (!wasSelected && isSelected) {
            this.selectItem(item, tag);
        }
        if (item.children) {
            this.updateSelection(item.children, tag);
        }
    };
    NbMenuInternalService.prototype.selectedInUrl = function (item) {
        var exact = item.pathMatch === 'full';
        var location = this.location.path();
        return ((exact && location === item.link) ||
            (!exact && location.includes(item.link)) ||
            (exact && item.fragment && location.substr(location.indexOf('#') + 1).includes(item.fragment)));
    };
    NbMenuInternalService.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    NbMenuInternalService.ctorParameters = function () { return [
        { type: Location, },
    ]; };
    return NbMenuInternalService;
}());
export { NbMenuInternalService };
//# sourceMappingURL=menu.service.js.map