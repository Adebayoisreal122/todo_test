import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, } from '@angular/forms';

@Component({
  selector: 'app-todoapp',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './todoapp.component.html',
  styleUrl: './todoapp.component.css'
})
export class TodoappComponent {

  titt: string = '';
  cont: string = '';
  public todarray: any[] = [];



  public newTittle = '';
  public newContent = '';
  public newtodarray: any[] = [];

  public  newIndex: number | null = null; 



 
  ngOnInit() {
    const savedTodo = localStorage.getItem('todoapp');
    if (savedTodo) {
      this.todarray = JSON.parse(savedTodo);
    }
  }


  submit() {


    
  let todoobj= {
    tittle: this.titt,
    content: this.cont,
  }
    this.todarray.push(todoobj);
    console.log(this.todarray);
  localStorage.setItem('todoapp',JSON.stringify(this.todarray));

    this.titt = '';
    this.cont = '';
  }

  edit(todo: number){
    this.newTittle = this.todarray[todo].tittle;
    this.newContent = this.todarray[todo].content;
    this.newtodarray = this.todarray[todo];
    this.newIndex = todo;
  
  
    }

  
update(){


  if (this.newIndex !== null) {
  let newContactobj= {
    tittle: this.newTittle,
    content: this.newContent,
  };
 this.todarray[this.newIndex] = newContactobj;
  localStorage.setItem('todoapp', JSON.stringify(this.todarray));



  this.newTittle = '';
  this.newContent = '';



}

}


deleted(todo: number){
  this.todarray.splice(todo, 1);
  localStorage.setItem('todoapp', JSON.stringify(this.todarray));
}
}
