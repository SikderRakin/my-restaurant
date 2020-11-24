import { Component,  OnInit,  } from '@angular/core';

import { Recipe } from '../recipe.model';
import{RecipeService} from '../recipe.service'
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']

})
export class RecipeListComponent implements OnInit {
  recipes:Recipe[];
 
 constructor(private recipeItems:RecipeService){};

ngOnInit(): void {
  //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
  //Add 'implements OnInit' to the class.
  this.recipes=this.recipeItems.getRecipe();
}

 

}
