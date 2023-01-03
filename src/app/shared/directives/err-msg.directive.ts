import { Directive, ElementRef, INJECTOR, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[error-msg]'
})
export class ErrMsgDirective implements OnInit,OnChanges{

  private _color:string='red';
  private _mensaje:string='Diana';
 

  htmlElement:ElementRef<HTMLElement>;
  @Input() set color(valor:string){
    this._color=valor;
    this.setColor();
  }
 // @Input() mensaje:string='Dato requerido';
  @Input() set mensaje(valor:string){
    this._mensaje=valor;
    this.setMensaje()
  }

  constructor(private er:ElementRef<HTMLElement>) { 
    this.htmlElement=er;
  }

  ngOnChanges(changes: SimpleChanges): void {
    // if(changes['mensaje']){
    //   const mensaje = changes['mensaje'].currentValue;
    //   this.htmlElement.nativeElement.innerText = mensaje;
    // }
 
    // if(changes['color']){
    //   const color = changes['color'].currentValue;
    //   this.htmlElement.nativeElement.style.color = color;
    // }
  }

  ngOnInit(): void {
    this.setEstilo();
     this.setColor();
     this.setMensaje();
  }

  setEstilo(){
    this.htmlElement.nativeElement.classList.add('form-text');
  }

   setColor():void{
     this.htmlElement.nativeElement.style.color=this._color;
   }

   setMensaje(){
     this.htmlElement.nativeElement.innerHTML= this._mensaje;
   }

}
