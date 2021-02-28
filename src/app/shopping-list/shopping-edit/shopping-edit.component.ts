
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Ingredient } from '../../shared/ingredient.model';
import {ShoppingListService} from '../shopping-list.service';
@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
//   @Output() newItem= new EventEmitter<Ingredient>();
@ViewChild('f',{static:false})slForm:NgForm;
 subscribtion:Subscription;
 editMode=false;
 editedItemIndex:number;
 editedItem:Ingredient;
constructor(private slService:ShoppingListService) { }

  ngOnInit() {

    this.subscribtion=this.slService.startedEditing.subscribe((index:number)=>{
          this.editMode=true;
       this.editedItemIndex=index;
       this.editedItem=this.slService.getIngredient(index);
     this.slForm.setValue({
       name:this.editedItem.name,
       amount:this.editedItem.amount
     })
     } );
  }

  onSubmit(form: NgForm){
 const value =form.value
 
 const newIngredient=new Ingredient(value.name,value.amount);
 if(this.editMode){
   this.slService.updateIngredient(this.editedItemIndex,newIngredient)
 } else{
//  console.log(newIngredient);
// this.newItem.emit(newIngredient);
this.slService.updateIngredientList(newIngredient);

  }
  form.resetForm();
  this.editMode=false;
}
onClear(){
  this.slForm.reset();
  this.editMode=false;
}
onDelete(){
  this.slService.deleteItem( this.editedItemIndex);
  this.onClear();
}
}
