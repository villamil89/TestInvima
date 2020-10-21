import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class PdfViewerService {

    private document = new BehaviorSubject<DocumentLoad>(new DocumentLoad());
    public document$ = this.document.asObservable();

    documentValue(): DocumentLoad {
        return this.document.value;
    }

    resetDocument() {
        this.document.next(null);
    }

    addDocument(file: string, name?: string) {
        let item: DocumentLoad = {
            resource: file,
            resourceName: name ? name : ""
        }
        this.document.next(item);
    }
}

class DocumentLoad {
    resource: string;
    resourceName: string;
}