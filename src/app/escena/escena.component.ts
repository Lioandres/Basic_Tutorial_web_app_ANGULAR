import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-escena',
  templateUrl: './escena.component.html',
  styleUrls: ['./escena.component.css']
})
export class EscenaComponent {

@Input("data") sentences:string[]=[]

currentSentence:number=0

prev(){
  if ( this.currentSentence>0) this.currentSentence--
  else this.currentSentence=3
}

next(){
  if ( this.currentSentence<3) this.currentSentence++
  else this.currentSentence=0

}

}
