import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipesWasSelected=new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe('A Test Recipe1', 'This is simply a test1', 'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg'),
    new Recipe('A Test Recipe2', 'This is simply a test2', 'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg')
  ];

  constructor() { }
  onRecipeSelceted(recipe: Recipe){
this.recipesWasSelected.emit(recipe);

  }
  ngOnInit() {
  }

}
