import { Component } from '@angular/core';
import * as MyModule from '../amd/mymodule.js';
import * as MyAMDModule from '../amd/myNewAMDModule.js';
import {CommonService} from './common.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private cs:CommonService){
    console.log(MyModule.value); 
    console.log(MyModule.foo(),'Foo');
    console.log(MyAMDModule,'Foo1');
  }
  title = 'my-app';
}
