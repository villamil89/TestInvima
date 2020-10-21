import { Injectable, RendererStyleFlags2, Renderer2, RendererFactory2 } from '@angular/core';

const importantFlag = RendererStyleFlags2.Important

@Injectable({ providedIn: 'root' })
export class WindowScrollingService {

    private renderer: Renderer2

    constructor(
        private rendererFactory: RendererFactory2
    ) {
        this.renderer = rendererFactory.createRenderer(null, null)
    }
    
    /* disable scrolling on body */
    public disable(): void {
        this.renderer.setStyle(document.body, 'overflow', 'hidden', importantFlag);
    }

    /* enable scrolling on body */
    public enable(): void {
        this.renderer.removeStyle(document.body, 'overflow');
    }
}