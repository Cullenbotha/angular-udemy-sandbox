import {
  Component,
  OnInit,
  Input,
  ViewEncapsulation,
  OnChanges,
  SimpleChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy,
  ViewChild,
  ElementRef,
  ContentChild
} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  //encapsulation: ViewEncapsulation.None
  encapsulation: ViewEncapsulation.Emulated // None, Native
  // By default ViewEncapsulation is emulated which means all styles defines within
  // this components css file only applies to this component
  // If set to None the css defined in this components file is global
  // Native = Shadow DOM, same behaviour as emulated, any style changes defined within this
  // components css file only applies this components elements,
  // not all browsers support Shadow Dom so stick to Emulated

})
export class ServerElementComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {
  //@Input() element: {type: string, name: string, content: string};
  @Input('srvElement') element: {type: string, name: string, content: string};// Can assign alias to property
  @Input() name: string;
  @ViewChild('heading') header: ElementRef;
  @ContentChild('contentParagraph') paragraph: ElementRef;

  constructor() {
    console.log("1 - contructor");
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log("2 - ngOnChages");
    console.log(changes);
  }

  ngOnInit() {
    console.log("3 - ngOnInit");
    console.log("text content of paragraph: " + this.paragraph.nativeElement.textContent);
    console.log("text content: " + this.header.nativeElement.textContent);
  }

  ngDoCheck() {
    console.log("4 - ngOnDoCheck");
  }

  ngAfterContentInit() {
    console.log("5 - ngAfterContentInit");
    console.log("text content of paragraph: " + this.paragraph.nativeElement.textContent);
  }

  ngAfterContentChecked() {
    console.log("6 - ngAfterContentChecked");
  }

  ngAfterViewInit() {
    console.log("7 - ngAfterViewInit");
    console.log("text content: " + this.header.nativeElement.textContent);
  }

  ngAfterViewChecked() {
    console.log("8 - ngAfterViewChecked");
  }

  ngOnDestroy() {
    console.log("9 - ngOnDestroy()")
  }
}
