import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./pages/home/home.component";
import { HomeJugadorComponent } from "./pages/Jugador-pages/home-jugador/home-jugador.component";
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
        path: "",
        redirectTo: "jugar",
        pathMatch: "full",
      },
    ],
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
