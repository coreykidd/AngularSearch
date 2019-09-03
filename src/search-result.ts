import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { Sanitizer } from '@angular/core';

export class SearchResult {
    subject: string;
    body: string;
    hexEntryId: string;
    safeUrl: SafeUrl;
    // safeUrl2 = 'Hello world';

    constructor(subject: string, body: string, hexEntryId: string, private sanitizer: DomSanitizer) {
        this.subject = subject;
        this.body = body;
        this.hexEntryId = hexEntryId;
        this.safeUrl = this.sanitizer.bypassSecurityTrustUrl(this.hexEntryId);
    }
}
