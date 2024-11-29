import { Component, EventEmitter, Output } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-calc',
  standalone: true,
  imports: [MatCardModule,MatButtonModule,MatInputModule,
    MatFormFieldModule,
    ChildComponent,FormsModule],
  templateUrl: './calc.component.html',
  styleUrl: './calc.component.css'
})
export class CalcComponent {
  height=0;
  width=0;
  receiveddata=0;
  getdata(data:number){
    this.receiveddata=data;
  }
}
