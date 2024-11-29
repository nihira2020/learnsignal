import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [MatButtonModule],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent implements OnChanges {

  ngOnChanges(changes: SimpleChanges): void {
    this.areaValue=this.height * this.width;
  }

  @Input({ required: true }) height: number = 0;
  @Input({ required: true }) width: number = 0;

  @Output() transferdata=new EventEmitter<number>()

  areaValue=this.height * this.width;


  SendData(){
   this.transferdata.emit(this.areaValue)
  }
}
