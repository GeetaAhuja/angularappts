import { Component } from '@angular/core';
import * as MyModule from '../amd/mymodule.js';
import * as MyNewAMDModule from '../amd/myNewAMDModule.js';
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
    console.log(MyModule.foo(),'Foo My Module should return json {a:1, B:"test"} ');
    console.log(MyNewAMDModule,'Foo1 My New AMD Module should return {color:black,unisize:test}');
    console.log(MyAMDModule,'Foo1 My AMD Module should return {color:black,unisize:test}');


  }
  title = 'my-app';
}
