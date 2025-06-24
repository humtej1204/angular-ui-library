import * as i0 from '@angular/core';
import { Injectable, Component } from '@angular/core';

class UiComponentsService {
    constructor() { }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: UiComponentsService, deps: [], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: UiComponentsService, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: UiComponentsService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: () => [] });

class ButtonComponent {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: ButtonComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.3.12", type: ButtonComponent, isStandalone: true, selector: "lib-button", ngImport: i0, template: "<p>button works!</p>\n", styles: [""] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: ButtonComponent, decorators: [{
            type: Component,
            args: [{ selector: 'lib-button', standalone: true, imports: [], template: "<p>button works!</p>\n" }]
        }] });

class CardComponent {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: CardComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.3.12", type: CardComponent, isStandalone: true, selector: "lib-card", ngImport: i0, template: "<p>card works!</p>\n", styles: [""] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: CardComponent, decorators: [{
            type: Component,
            args: [{ selector: 'lib-card', standalone: true, imports: [], template: "<p>card works!</p>\n" }]
        }] });

/*
 * Public API Surface of ui-components
 */

/**
 * Generated bundle index. Do not edit.
 */

export { ButtonComponent, CardComponent, UiComponentsService };
//# sourceMappingURL=ui-components.mjs.map
