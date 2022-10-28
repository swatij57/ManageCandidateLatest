import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CandidateRegistrationComponent } from './candidate-registration/candidate-registration.component';
import { CandidateDetailComponent } from './candidate-detail/candidate-detail.component';
import { EditCandidateDetailComponent } from './edit-candidate-detail/edit-candidate-detail.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { NavbarComponent } from './home/navbar/navbar.component';
import { FooterComponent } from './home/footer/footer.component';
import { DefaultComponent } from './home/default/default.component';
import { MatSliderModule } from '@angular/material/slider';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatTableModule} from '@angular/material/table';
import {MatIconModule} from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CandidateRegistrationComponent,
    CandidateDetailComponent,
    EditCandidateDetailComponent,
    ErrorPageComponent,
    NavbarComponent,
    FooterComponent,
    DefaultComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatSliderModule,
    MatButtonModule,
    MatInputModule,
    MatTableModule,
    MatIconModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
