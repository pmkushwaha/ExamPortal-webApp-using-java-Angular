import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SignupComponent } from './pages/signup/signup.component';
import { LoginComponent } from './pages/login/login.component';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './pages/home/home.component';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { FootercmpComponent } from './components/footercmp/footercmp.component';
import { authInterceptorProviders } from './services/auth.interceptor';
import { DashboardComponent } from './Admi/dashboard/dashboard.component';
import { UserDashboardComponent } from './User/user-dashboard/user-dashboard.component';


@NgModule(
  {
    declarations: [
      AppComponent,
      NavbarComponent,
      SignupComponent,
      LoginComponent,
      HomeComponent,
      FootercmpComponent,
      DashboardComponent,
      UserDashboardComponent,

    ],

    imports: [
      BrowserModule,
      AppRoutingModule,
      BrowserAnimationsModule,
      MatButtonModule,
      MatInputModule,
      MatFormFieldModule,
      FormsModule,
      HttpClientModule,
      MatCardModule,
      MatToolbarModule,
      MatIconModule
    ],

    providers: [
      provideClientHydration(),
      authInterceptorProviders
    ],

    bootstrap: [
      AppComponent,
    ]

  }
)
export class AppModule { }
