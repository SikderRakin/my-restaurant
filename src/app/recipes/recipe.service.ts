import { EventEmitter, Injectable } from '@angular/core';

import { Ingredient } from '../shared/ingredient.model';
import { Recipe } from './recipe.model';
import {ShoppingListService} from '../shopping-list/shopping-list.service';
@Injectable()
export class RecipeService{
    recipeSelceted=new EventEmitter<Recipe>();
    recipes: Recipe[] = [
        new Recipe('A Test Recipe1'
        , 'This is simply a test1', 
        'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg',[
            new Ingredient('patty',10)
        ]),
        new Recipe('A Test Recipe2', 'This is simply a test2', 'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg',[ new Ingredient('Burn',10)]),
      ];

getRecipe(){
    return this.recipes.slice();
}
constructor(private slService:ShoppingListService){}
addIngredientsToShoppingList(ingredients :Ingredient[]){

this.slService.addIngredients(ingredients);
}
}