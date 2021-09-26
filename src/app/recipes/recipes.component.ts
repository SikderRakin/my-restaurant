import { Component, OnInit } from "@angular/core";
import { Meta, Title } from "@angular/platform-browser";
import { Recipe } from "e2e/src/app/recipes/recipe.model";

@Component({
  selector: "app-recipes",
  templateUrl: "./recipes.component.html",
  styleUrls: ["./recipes.component.css"],
})
export class RecipesComponent implements OnInit {
  constructor(private title: Title, private meta: Meta) {}

  ngOnInit() {
    this.title.setTitle("recipe");
    this.meta.addTag({ name: "Recipe", description: "Cake,Pizza,Burgers" });
  }
}
