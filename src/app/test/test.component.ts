import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `<h2 [class]="class_selected" >
            Welcome Gowthami {{myname}}
            {{banana}}
            </h2>
            <h2 *ngIf="warning; else elseBlock" [ngClass] = "messages">{{greetUser("Duggineni")}}</h2>
            <h2>{{siteUrl}}<h2>
            <button (click) = "onClick(name.value)">Click Here</button>
            <h2>{{myname}}</h2>
            <input [id] = 'id' type = "text" value = "{{myname}}" #name>
            <input [id] = 'id' type = "text" [(ngModel)]="banana">{{banana}}
            
            <ng-template #elseBlock> <h2>hloo</h2> </ng-template>
            `,
  styles: [`
  .text-success{
    color: green;
  }
  .text-warning{
    font-style: italic;
  }      
  .text-danger{
    color: red;
  }
  `]
})
export class TestComponent implements OnInit {

  public myname = "";
  public siteUrl = window.location.href;
  public id = 12;
  public banana = ""
  public class_selected = "text-success"
  public warning = true;
  public error = false;
  public messages = {
    "text-success" : !this.error,
    "text-danger" : this.error,
    "text-warning" : this.warning
  }

  constructor() { 
   
  }

  ngOnInit(): void {
  }

  greetUser(k:string) {
    return "Hello  " + k;
  }

  onClick(name:string)
  {
    this.myname = "Duggineni"
    console.log(name)
    return "Welcome !!"
  }

}
