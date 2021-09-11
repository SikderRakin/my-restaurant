import { NgModule } from "@angular/core";
import { PreloadAllModules, RouterModule, Routes } from "@angular/router";

const appRoute: Routes = [
  { path: "", redirectTo: "/recipe", pathMatch: "full" },

  {
    path: "recipe",
    loadChildren: () =>
      import("./recipes/recipes.module").then((m) => m.RecipesModule),
  },
  {
    path: "shopping-list",
    loadChildren: () =>
      import("./shopping-list/shopping.module").then((m) => m.ShoppingModule),
  },
  {
    path: "auth",
    loadChildren: () => import("./auth/auth.module").then((m) => m.AuthModule),
  },
];
@NgModule({
  imports: [
    RouterModule.forRoot(appRoute, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
