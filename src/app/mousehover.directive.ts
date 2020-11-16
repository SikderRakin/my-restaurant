import { Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appMousehover]'
})
export class MousehoverDirective implements OnInit {
  @Input() defultColor:string;
@HostBinding('style.backgroundColor') backgroundColor:string;
  constructor(private elemRef:ElementRef,private renderer:Renderer2)  {


   }
ngOnInit(){
this.backgroundColor=this.defultColor;
}
@HostListener('mouseenter') mouseover(eventData:Event){
  // this.renderer.setStyle(this.elemRef.nativeElement,'background-color','blue')
  this.backgroundColor="red"
}
@HostListener('mouseleave') mouseleaver(eventData:Event){
  //this.renderer.setStyle(this.elemRef.nativeElement,'background-color','white')
  this.backgroundColor="blue"
}
}



