import { EventEmitter } from "@angular/core";
import { Injectable } from '@angular/core';
import { Recipe } from "./recipe.model";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";

@Injectable({
  providedIn: 'root'
})
export class RecipesService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      "Chicken Schnitzel",
      "A super-tasty Schnitzel",
      "https://www.dessertfortwo.com/wp-content/uploads/2014/12/Schnitzel-2.jpg",
      [
        new Ingredient('Chicken', 1),
        new Ingredient('Schnitzel', 2),
      ]
    ),
    new Recipe(
      "Burger & Fries",
      "Classic burger and fries",
      "https://sifu.unileversolutions.com/image/en-AU/recipe-topvisual/2/1260-709/beef-burger-with-deep-fried-bacon-and-thousand-island-dressing-50247463.jpg",
      [
        new Ingredient('Burger', 1),
        new Ingredient('Fries', 2),
      ]
    )
  ];

  getRecipes() {
    return this.recipes.slice();
  }

  addIngredientsToShoppingList(recipe) {
    this.shoppingListService.addIngredients(recipe.ingredients);
  }

  constructor(private shoppingListService: ShoppingListService) { }
}
