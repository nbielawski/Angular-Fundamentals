import{ Directive, ElementRef, Inject, Input, OnInit } from '@angular/core'
import { JQ_TOKEN } from './Jquery.service';

@Directive({
    selector:'[modal-trigger]'
})

export class ModalTriggerDirective implements OnInit{
    @Input('modal-trigger') modalId:string;

    private el: HTMLElement;
    constructor(ref: ElementRef, @Inject(JQ_TOKEN) private $ : any){
        this.el = ref.nativeElement;
    }
    
    ngOnInit(): void {
        this.el.addEventListener('click', e=> {
            this.$(`#${this.modalId}`).modal({})
        })
        
    }

}