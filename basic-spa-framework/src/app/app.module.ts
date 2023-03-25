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

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    OverlayModule,
    BrowserAnimationsModule
  ],
  providers: [
    { provide: 'API_URL', useValue: environment.API_URL },
    { provide: AuthService, useClass: AuthServiceMock },  //TODO: comment to remove mock
    { provide: RenewTokenService, useClass: RenewTokenServiceMock } //TODO: comment to remove mock
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
