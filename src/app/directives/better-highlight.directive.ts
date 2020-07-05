import { Directive, Renderer2, ElementRef, OnInit, HostListener, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit{
  @Input() defaultHighlighColor:string;
  @Input() highlighColor:string;

  @HostBinding('style.backgroundColor') backgroundColor:string = 'red';

  constructor(private elem:ElementRef, private renderer:Renderer2) { }

  ngOnInit(){
    this.defaultHighlighColor = 'red';
  }

  @HostListener('mouseenter') mouseover(eventData:Event){
    //this.renderer.setStyle(this.elem.nativeElement,'background-color','blue')
    //this.backgroundColor = 'blue';
    this.backgroundColor = this.highlighColor;
  }

  @HostListener('mouseleave') mouseleave(eventData:Event){
    //this.renderer.setStyle(this.elem.nativeElement,'background-color','transparent')
    //this.backgroundColor = 'red';
    this.backgroundColor = this.defaultHighlighColor;
  }

}
