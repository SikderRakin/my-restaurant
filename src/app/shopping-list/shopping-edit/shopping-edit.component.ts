
import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';
@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @Output() newItem= new EventEmitter<Ingredient>();
@ViewChild('nameInput',{static:true}) nameInput:ElementRef; 
@ViewChild('amountInput',{static:true}) amountInput:ElementRef; 
  constructor() { }

  ngOnInit() {
  }
  addItem(){
  const ingName=this.nameInput.nativeElement.value;
  const ingAmount=this.amountInput.nativeElement.value;
  const newIngredient=new Ingredient(ingName,ingAmount);
 console.log(newIngredient);
this.newItem.emit(newIngredient);

  }
}
