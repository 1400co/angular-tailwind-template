import { RenewTokenServiceMock } from './core/services/renew-token.service.mock';
import { IAuthService } from './core/services/interfaces/iauth.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { OverlayModule } from '@angular/cdk/overlay'
import { environment } from 'src/environments/environment';
import { AuthServiceMock } from './core/services/auth.service.mock';
import { AuthService } from './core/services/auth.service';
import { RenewTokenService } from './core/services/renew-token.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptor } from './core/Interceptor/token-interceptor';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { AuthGuard } from './core/guards/auth.guard';
import { AuthGuardMock } from './core/guards/auth.guard.mock';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    OverlayModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [
    { provide: 'API_URL', useValue: environment.API_URL },
    // { provide: AuthGuard, useClass: AuthGuardMock },
    // { provide: AuthService, useClass: AuthServiceMock },  //TODO: comment to remove mock
    { provide: AuthGuard, useClass: AuthGuard },
    { provide: AuthService, useClass: AuthService },
    { provide: RenewTokenService, useClass: RenewTokenService }, //TODO: comment to remove mock
    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true },
    { provide: LocationStrategy, useClass: HashLocationStrategy },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
