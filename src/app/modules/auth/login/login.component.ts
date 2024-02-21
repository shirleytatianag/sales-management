import {Component} from '@angular/core';
import {NgOptimizedImage} from "@angular/common";
import {Router, RouterLink} from "@angular/router";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    NgOptimizedImage,
    RouterLink
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  // private _route = inject(Router)

  constructor(
    private _router: Router
  ) {

  }


  goTo(){
    this._router.navigateByUrl('administration/dashboard').then();
  }

}
