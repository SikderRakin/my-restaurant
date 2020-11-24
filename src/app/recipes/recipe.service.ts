import { EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';
export class RecipeService{
    recipeSelceted=new EventEmitter<Recipe>();
    recipes: Recipe[] = [
        new Recipe('A Test Recipe1', 'This is simply a test1', 'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg'),
        new Recipe('A Test Recipe2', 'This is simply a test2', 'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg')
      ];

getRecipe(){
    return this.recipes.slice();
}
}