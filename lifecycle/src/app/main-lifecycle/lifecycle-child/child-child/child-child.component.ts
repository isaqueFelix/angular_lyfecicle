import { Component, OnInit, Input, AfterContentInit, OnChanges } from '@angular/core';

@Component({
  selector: 'app-child-child',
  templateUrl: './child-child.component.html',
  styleUrls: ['./child-child.component.css']
})
export class ChildChildComponent implements OnInit, AfterContentInit, OnChanges {

  @Input() name: string;

  constructor() { }

  ngOnInit() {
    console.log("      Child-child " + this.name + "(ngOnInit)");
  }

  ngOnChanges(  ){
    console.log("      Child-child " + this.name + "(ngOnChanges)");
  }

  ngAfterContentInit(){
    console.log("      Child-child " + this.name + "(ngAfterContentInit)");
  }
}
