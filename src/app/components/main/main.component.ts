import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { ListedComponent } from '../listed/listed.component';
import { ExamineComponent } from '../examine/examine.component';
import { OwnerComponent } from '../owner/owner.component';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [ReactiveFormsModule, ListedComponent, ExamineComponent, OwnerComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {
  frmContrl = new FormControl('');
  listedList: any = [];
  examineList: any = [];
  ownerList: any = [];
  @Output() newItemEvent = new EventEmitter<string[]>();

  addPet() {
    this.listedList.push(this.frmContrl.value);
    this.newItemEvent.emit(this.listedList);
  }

  nextButtonClicked(value: any) {
    if (value.status === 'listed') {
      this.listedList.splice(this.listedList.indexOf(value.name), 1);
      this.examineList.push(value.name);
    } else {
      this.examineList.splice(this.listedList.indexOf(value.name), 1);
      this.ownerList.push(value.name)
    }
  }
}
