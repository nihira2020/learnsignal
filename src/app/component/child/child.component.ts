import { Component, computed, effect, EventEmitter, input, Input, OnChanges, output, Output, SimpleChanges } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [MatButtonModule],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {

  // ngOnChanges(changes: SimpleChanges): void {
  //   this.areaValue = this.height * this.width;
  // }

  // @Input({ required: true }) height: number = 0;
  // @Input({ required: true }) width: number = 0;

  height = input.required<number>({alias:'ht'});
  width = input.required<number>({alias:'wt'});

  //@Output() transferdata = new EventEmitter<number>()

  transferdata = output<number>({alias:'getdata'})

  //areaValue = this.height * this.width;
  areaValue = computed(() => this.height() * this.width())

  constructor(){
    effect(()=>{
      this.transferdata.emit(this.areaValue())
    })
  }


  SendData() {
    this.transferdata.emit(this.areaValue())
  }
}
