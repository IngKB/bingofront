import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AdminHomeComponent } from "./pages/Admin-pages/admin-home/admin-home.component";
import { AdminJuegoComponent } from "./pages/Admin-pages/admin-juego/admin-juego.component";
import { AdminLoginComponent } from "./pages/Admin-pages/admin-login/admin-login.component";
import { HomeComponent } from "./pages/home/home.component";
import { CartonesComponent } from "./pages/Jugador-pages/cartones/cartones.component";
import { HomeJugadorComponent } from "./pages/Jugador-pages/home-jugador/home-jugador.component";
import { JuegoPrincipalComponent } from "./pages/Jugador-pages/juego-principal/juego-principal.component";
import { JugarComponent } from "./pages/Jugador-pages/jugar/jugar.component";

const routes: Routes = [
  {
    path: "home",
    component: HomeComponent,
  },
  {
    path: "userhome",
    component: HomeJugadorComponent,
    children: [
      {
        path: "jugar",
        component: JugarComponent,
      },
      {
        path: "cartones",
        component: CartonesComponent,
      },
      {
        path: "",
        redirectTo: "jugar",
        pathMatch: "full",
      },
    ],
  },
  {
    path: "juegoPrincipal",
    component: JuegoPrincipalComponent,
  },
  {
    path: "admin",
    children: [
      {
        path: "login",
        component: AdminLoginComponent,
      },
      {
        path: "home",
        component: AdminHomeComponent,
        children:[
          {
            path:"juego",
            component: AdminJuegoComponent
          }
        ]
      },
      {
        path: "",
        redirectTo: "login",
        pathMatch: "full",
      },
    ]
  },
  { path: "**", redirectTo: "home" },
  {
    path: "",
    redirectTo: "home",
    pathMatch: "full",
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
