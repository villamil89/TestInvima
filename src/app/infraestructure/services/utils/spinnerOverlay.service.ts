import { Injectable } from '@angular/core';
import { WindowScrollingService } from './windowScrolling.service';

@Injectable({ providedIn: 'root' })
export class SpinnerOverlayService {

    public showSpinner: boolean = false;

    constructor(
        private wss: WindowScrollingService
    ) { }

    public show(message: string) {
        this.showSpinner = true;
        this.wss.disable();
    }

    public hide() {
        this.showSpinner = false;
        this.wss.enable();
    }
}   