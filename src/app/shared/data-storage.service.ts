import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Recipe } from "../recipes/recipe.model";
import { RecipeService } from "../recipes/recipe.service";
import { map, tap } from "rxjs/operators";
@Injectable({
  providedIn: "root",
})
export class DataStorageService {
  constructor(private http: HttpClient, private recipeService: RecipeService) {}

  storeRecipe() {
    const recipe = this.recipeService.getRecipe();
    return this.http.put(
      "https://angular-test-6bfec-default-rtdb.firebaseio.com/recpie.json",
      recipe
    );
  }

  fetchRecipe() {
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
