import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-check-child',
  templateUrl: './check-child.component.html',
  styleUrls: ['./check-child.component.css']
})
export class CheckChildComponent implements OnInit {

  constructor() {
    console.log("     CheckChild constructor");
   }

  ngOnInit() {
    console.log("     CheckChild ngOnInit");
  }

  ngOnChanges(){
    console.log("     CheckChild ngOnChanges");
  }

  ngDoChecked(){
    console.log("     CheckChild ngDoChecked");
  }

  ngAfterContentInit(){
    console.log("     CheckChild ngAfterContentInit");
  }

  ngAfterContentChecked(){
    console.log("     CheckChild ngAfterContentChecked");
  }

  ngAfterViewInit(){
    console.log("     CheckChild ngAfterViewInit");
  }

  ngAfterChecked(){
    console.log("    CheckChild ngAfterChecked");
  }

  ngOnDestroy(){
    console.log("     CheckChild ngOnDestroy");
  }


}
