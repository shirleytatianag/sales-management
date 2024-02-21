import { Component } from '@angular/core';
import {RouterOutlet} from "@angular/router";
import {LateralMenuComponent} from "@app/shared/layout/lateral-menu/lateral-menu.component";

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [
    RouterOutlet,
    LateralMenuComponent,
  ],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {

}
