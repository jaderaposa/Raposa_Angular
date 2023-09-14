import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Raposa_Angular';


  name: string = '';
  listofnames: string[]=['Jaded', 'unknown price']
  addName(){
    console.log("add button is working!");
    this.listofnames.push(this.name)
    console.log(this.listofnames);
  }
  deleteName(index: number) {
    this.listofnames.splice(index, 1);
  }
}
