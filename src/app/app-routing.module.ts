import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CandidateDetailComponent } from './candidate-detail/candidate-detail.component';
import { CandidateRegistrationComponent } from './candidate-registration/candidate-registration.component';

const routes: Routes = [
  { path: 'register-component', component: CandidateRegistrationComponent },
  { path: 'detail-component', component: CandidateDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
