import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule,Routes} from '@angular/router';
import {ActivatedRoute} from '@angular/router'
import { LoginComponent } from 'src/app/login/login.component';




// const routes: Routes = [
//   {
//     path: 'login',
//     component: LoginComponent,
//   },
// ]


@NgModule({
  declarations: [],
  imports: [CommonModule],
  exports:[RouterModule]
})
export class AppRoutingModule { }
