import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Raposa_Angular';
  taskName: string = '';
  listoftasks: { name: string, checked: boolean }[] = [];

  addName() {
    this.listoftasks.push({ name: this.taskName, checked: false });
    this.taskName = ''; // Clear the input field after adding a task
    console.log(this.listoftasks);
  }

  deleteName(index: number) {
    this.listoftasks.splice(index, 1);
  }
}
