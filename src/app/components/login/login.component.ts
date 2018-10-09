import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CommonService } from '../../common.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  model: any = {};
  loading = false;
  returnUrl: string;
constructor( private route: ActivatedRoute,
  private router: Router,
  private cs: CommonService) { }

ngOnInit() {
  // reset login status

  // get return l from route parameters or default to '/'
  this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
}

login() {
  this.loading = true;
  this.cs.loginUser().subscribe((res:Response)=>{
    console.log(res.headers)
  this.cs.isLoggedIn = true;
  this.router.navigate([this.returnUrl]);
  });
}

}
