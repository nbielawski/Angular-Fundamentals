import { Component, Input } from '@angular/core';

@Component({
    selector: 'collapsible-well',
    template: `
    <div (click)="toggleContent()" class="well pointable">
        <h4>
        <ng-content select="[well-title]"></ng-content>
        </h4>
        <ng-content *ngIf="visible" select="[well-body]"></ng-content>
        <p *ngIf="!visible">click to expand</p>
    </div>
        `
})

export class CollapsibleWellComponent {
    @Input() visible: boolean ;
    

    toggleContent() {
        this.visible = !this.visible;
    }
}