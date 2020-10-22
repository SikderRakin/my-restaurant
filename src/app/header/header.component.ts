import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {
 

 isTrue:boolean;
 @Output() isShow= new EventEmitter<boolean>();
  onShoppingList(){
  this.isShow.emit(this.isTrue=true)
  
  }
  onRecipes(){
    this.isShow.emit(this.isTrue=false)
  }
}
