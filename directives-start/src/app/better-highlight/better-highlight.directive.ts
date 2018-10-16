import { Directive, OnInit, Renderer2, ElementRef, HostListener, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})

export class BetterHighlightDirective implements OnInit {
  @Input() defaultColor: string = 'transparent';
  @Input('appBetterHighlight') highlightColor: string = 'lightblue';
  // @Input() highlightColor: string = 'lightblue';
  @HostBinding('style.backgroundColor') backgroundColor: string;

  constructor(private elRef: ElementRef, private rendered: Renderer2) { }

  ngOnInit() {
    this.backgroundColor = this.defaultColor;
   // this.rendered.setStyle(this.elRef.nativeElement, "background-color", "lightblue");
  }

  @HostListener('mouseenter') mouseover(eventData: Event) {
    // this.rendered.setStyle(this.elRef.nativeElement, "background-color", "lightblue");
    // this.backgroundColor = 'lightblue';
    this.backgroundColor = this.highlightColor;
  }

  @HostListener('mouseleave') mouseleave(eventData: Event) {
    // this.rendered.setStyle(this.elRef.nativeElement, "background-color", "transparent");
    // this.backgroundColor = 'transparent';
    this.backgroundColor = this.defaultColor;
  }
}
