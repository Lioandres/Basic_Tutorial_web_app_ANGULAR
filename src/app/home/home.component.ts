import { Component} from '@angular/core';
import { Sentences } from '../interfaces/interfaces';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent  {

  sentences:Sentences[]=[
     {
        txt:"El nostre heroi estava surant per l'espai sideral quan a la llunyania va albirar una nau espacial",
        img:""
    },

     {
       txt:"Sentia curiositat per l'interior de la nau i es va posar a inspeccionar-la. Va arribar a una sala amb dues portes.",
       img:""
     },
     {
      txt:"L'heroi va decidir travessar la porta que el portava a casa",
      img:""
     },
     {
       txt:"Mentrestant, altres heroes no van tenir tanta sort en la seva elecció ...",
       img:""
     }
  ]
  
  started:boolean=false

  toStart(){
    this.started=true
  }
}
