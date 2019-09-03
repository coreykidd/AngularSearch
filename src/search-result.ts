import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { OnInit } from '@angular/core';

export class SearchResult {
    subject: string;
    body: string;
    hexEntryId: string;
    // safeUrl: SafeUrl;
    safeUrl2: string;

    constructor() {
        // this.safeUrl = this.sanitizer.bypassSecurityTrustHtml(this.hexEntryId);
        this.safeUrl2 = 'https://www.youtube.com/embed/';
    }
}
