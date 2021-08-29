import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Recipe } from "../recipes/recipe.model";
import { RecipeService } from "../recipes/recipe.service";
import { exhaustMap, map, take, tap } from "rxjs/operators";
import { AuthService } from "../auth/auth.service";
@Injectable({
  providedIn: "root",
})
export class DataStorageService {
  constructor(
    private http: HttpClient,
    private recipeService: RecipeService,
    private authService: AuthService
  ) {}

  storeRecipe() {
    const recipe = this.recipeService.getRecipe();
    return this.http.put(
      "https://angular-test-6bfec-default-rtdb.firebaseio.com/recpie.json",
      recipe
    );
  }

  fetchRecipe() {
    // take(1) operator take value for 1 time then unsubscribe
    //exhaustMap operator replace the return value with the subscribe value inside of it

    return this.http
      .get<Recipe[]>(
        "https://angular-test-6bfec-default-rtdb.firebaseio.com/recpie.json"
      )
      .pipe(
        map((recipe) => {
          return recipe.map((recipe) => {
            return {
              ...recipe,
              ingredients: recipe.ingredients ? recipe.ingredients : [],
            };
          });
        }),
        tap((recipe) => {
          this.recipeService.setRecipe(recipe);
        })
      );
  }
}
