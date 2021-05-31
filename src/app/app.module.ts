import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { NavMenuComponent } from './shared/components/nav-menu/nav-menu.component';
import { HomeComponent } from './pages/home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { ToolbarComponent } from './shared/components/toolbar/toolbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { RegisterDialogComponent } from './pages/register-dialog/register-dialog.component';
import { HomeJugadorComponent } from './pages/Jugador-pages/home-jugador/home-jugador.component';
import { LoginDialogComponent } from './pages/login-dialog/login-dialog.component';
import { JugarComponent } from './pages/Jugador-pages/jugar/jugar.component';
import { ProximoEventoComponent } from './shared/components/proximo-evento/proximo-evento.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { CartonesComponent } from './pages/Jugador-pages/cartones/cartones.component';
import { CartontemplateComponent } from './shared/components/cartontemplate/cartontemplate.component';
import { JuegoPrincipalComponent } from './pages/Jugador-pages/juego-principal/juego-principal.component';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    ToolbarComponent,
    RegisterDialogComponent,
    HomeJugadorComponent,
    LoginDialogComponent,
    JugarComponent,
    ProximoEventoComponent,
    FooterComponent,
    CartonesComponent,
    CartontemplateComponent,
    JuegoPrincipalComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    MaterialModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule
  ],
  providers: [],
  entryComponents: [RegisterDialogComponent, LoginDialogComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
