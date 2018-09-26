import { NgModule, Component } from "@angular/core";
import { Routes, RouterModule, PreloadAllModules } from "@angular/router";
// import { AuthModule } from "./auth/auth.module";
import { SystemComponent } from "./system/system.component";

export const appRoutes: Routes = [
  { path: "", redirectTo: "login", pathMatch: "full" },
  { path: "system", loadChildren: "./system/system.module#SystemModule" }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes, {
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
