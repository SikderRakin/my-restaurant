import { Injectable } from "@angular/core";

import { Ingredient } from "../shared/ingredient.model";
import { Recipe } from "./recipe.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { Subject } from "rxjs";
@Injectable()
export class RecipeService {
  recipeChange = new Subject<Recipe[]>();
  recipes: Recipe[] = [];

  getRecipe() {
    return this.recipes.slice();
  }
  setRecipe(recipe: Recipe[]) {
    this.recipes = recipe;
    this.recipeChange.next(this.recipes.slice());
  }
  getRecipes(index: number) {
    console.log(this.recipes[index]);
    return this.recipes[index];
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipeChange.next(this.recipes.slice());
  }
  updateRecipe(recipe: Recipe, index: number) {
    this.recipes[index] = recipe;
    this.recipeChange.next(this.recipes.slice());
  }
  constructor(private slService: ShoppingListService) {}
  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }
  deleteRecipe(index) {
    this.recipes.splice(index, 1);
    this.recipeChange.next(this.recipes.slice());
  }
}
