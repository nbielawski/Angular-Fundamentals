import { Component, ElementRef, Inject, Input, ViewChild } from '@angular/core'
import { $ } from 'protractor';
import { JQ_TOKEN } from './Jquery.service';


@Component({
    selector: 'simple-modal',
    templateUrl: 'simple-modal.component.html',
    styles: [`
    .modal-body {height: 250px; overflow-y:scroll;}
    `

    ]

})

export class SimpleModalComponent {
    @Input() title: string;
    @Input() elementId: string;
    @Input() closeOnModalBodyClick: string;
    @ViewChild('modalContainer') containerEl: ElementRef

    constructor(@Inject(JQ_TOKEN) private $: any) { }

    closeModal() {
        if (this.closeOnModalBodyClick.toLocaleLowerCase() === "true") {
            this.$(this.containerEl.nativeElement).modal('hide');
        }
    }
}