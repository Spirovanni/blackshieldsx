/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { Component, Input } from '@angular/core';
/**
 * Badge is a simple labeling component.
 * It can be used to add additional information to any content or highlight unread items.
 *
 * Element is absolute positioned, so parent should be
 * [positioned element](https://developer.mozilla.org/en-US/docs/Web/CSS/position).
 * It means parent `position` should be set to anything except `static`, e.g. `relative`,
 * `absolute`, `fixed`, or `sticky`.
 *
 *
 * @example Badge with default position and status(color):
 *
 * ```
 * <nb-badge text="badgeText"></nb-badge>
 * ```
 *
 * @example Badge located on the bottom right with warning status:
 *
 * ```
 * <nb-badge text="badgeText" status="warning" position="bottom right">
 * </nb-badge>
 * ```
 *
 * @styles
 *
 * badge-fg-text:
 * badge-primary-bg-color:
 * badge-success-bg-color:
 * badge-info-bg-color:
 * badge-warning-bg-color:
 * badge-danger-bg-color:
 */
var BsBadgeComponent = /** @class */ (function () {
    function BsBadgeComponent() {
        this.positionClass = BsBadgeComponent.TOP_RIGHT;
        this.colorClass = BsBadgeComponent.STATUS_PRIMARY;
        /**
           * Text to display
           * @type string
           */
        this.text = '';
    }
    Object.defineProperty(BsBadgeComponent.prototype, "position", {
        set: /**
           * Badge position
           *
           * Can be set to any class or to one of predefined positions:
           * 'top left', 'top right', 'bottom left', 'bottom right'
           * @type string
           */
        function (value) {
            if (value) {
                this.positionClass = value;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BsBadgeComponent.prototype, "status", {
        set: /**
           * Badge status (adds specific styles):
           * 'primary', 'info', 'success', 'warning', 'danger'
           * @param {string} val
           * @type string
           */
        function (value) {
            if (value) {
                this.colorClass = value;
            }
        },
        enumerable: true,
        configurable: true
    });
    BsBadgeComponent.TOP_LEFT = 'top left';
    BsBadgeComponent.TOP_RIGHT = 'top right';
    BsBadgeComponent.BOTTOM_LEFT = 'bottom left';
    BsBadgeComponent.BOTTOM_RIGHT = 'bottom right';
    BsBadgeComponent.STATUS_PRIMARY = 'primary';
    BsBadgeComponent.STATUS_INFO = 'info';
    BsBadgeComponent.STATUS_SUCCESS = 'success';
    BsBadgeComponent.STATUS_WARNING = 'warning';
    BsBadgeComponent.STATUS_DANGER = 'danger';
    BsBadgeComponent.decorators = [
        { type: Component, args: [{
                    selector: 'bs-badge',
                    styles: [".bs-badge{position:absolute;padding:0.25em 0.4em;font-size:75%;font-weight:700;line-height:1;text-align:center;white-space:nowrap;vertical-align:baseline;border-radius:0.25rem}.bs-badge.top{top:0}.bs-badge.right{right:0}.bs-badge.bottom{bottom:0}.bs-badge.left{left:0} "],
                    template: "\n    <span class=\"bs-badge {{positionClass}} bs-badge-{{colorClass}}\">{{text}}</span>\n  ",
                },] },
    ];
    /** @nocollapse */
    BsBadgeComponent.ctorParameters = function () { return []; };
    BsBadgeComponent.propDecorators = {
        "text": [{ type: Input },],
        "position": [{ type: Input },],
        "status": [{ type: Input },],
    };
    return BsBadgeComponent;
}());
export { BsBadgeComponent };
//# sourceMappingURL=badge.component.js.map
