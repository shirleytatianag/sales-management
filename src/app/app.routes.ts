import {Routes} from '@angular/router';
import {DashboardComponent} from "@app/modules/dashboard/dashboard.component";
import {MainComponent} from "@app/modules/administration/main/main.component";

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('@app/modules/auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: 'administration',
    // loadChildren: ()=> import('@app/modules/administration/administration.module').then(m => m.AdministrationModule)
    component: MainComponent,
    children: [
      {
        path: 'dashboard',
        component: DashboardComponent
      },
      {
        path: 'product',
        loadChildren: () => import('@app/modules/products/products.module').then(m=> m.ProductsModule)
      }
    ]

  }
];
