import { Component, OnInit, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-server-form',
  templateUrl: './server-form.component.html',
  styleUrls: ['./server-form.component.css']
})
export class ServerFormComponent implements OnInit {
  @Output() serverCreated = new EventEmitter<{name: string, content: string}>();
  @Output('bpCreated') blueprintCreated = new EventEmitter<{name: string, content: string}>();
  // Can assign alias to event name
  // newServerName = '';
  // newServerContent = '';
  @ViewChild('serverContentInput') serverContentInput: ElementRef;

  constructor() { }

  ngOnInit() {
  }

  onAddServer(nameEl: HTMLInputElement) {
    this.serverCreated.emit({
      name: nameEl.value,
      content: this.serverContentInput.nativeElement.value
    });
  }

  onAddBlueprint(nameEl: HTMLInputElement) {
    this.blueprintCreated.emit({
      name: nameEl.value,
      content: this.serverContentInput.nativeElement.value
    });
  }
}

// NOTES:
// Ways of passing data from template to typescript logic:
// 1: Using ViewChild to fetch local reference from template and assign to ElementRef variable
// @ViewChild('localReference') variableName;
//
// 2: 2 way binding to tie an input to a variable defined in Component
// HTML: <input type="text" class="form-control" [(ngModel)]="variableName">
// TS  : variableName = "";
//
// 3: Passing a local reference as a argument to the function thats being called
// HTML: <input type="text" #someLocalReference>
// HTML: <button (click)="doSomething(someLocalReference)">Do Something</button>
// TS  : doSomething(argument) { }
