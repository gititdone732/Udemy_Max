import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding-example',
  templateUrl: './data-binding-example.component.html',
  styleUrls: ['./data-binding-example.component.css']
})
export class DataBindingExampleComponent implements OnInit {

  userName='';
  disableButton=true;
  constructor() { }

  checkUserName(event:Event)
  {
      if(((<HTMLInputElement>event.target).value).trim().length!=0)
      {
        this.disableButton=false;
      }
  }
  resetUserName(event:Event)
  {
    this.userName='';
    this.disableButton=true;
  }
  ngOnInit() {
  }

}
