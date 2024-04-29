import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-examine',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './examine.component.html',
  styleUrl: './examine.component.scss'
})
export class ExamineComponent {
  @Input() items: string[] = [];
  @Output() addButtonClicked = new EventEmitter<any>();

  add(item: string) {
    this.addButtonClicked.emit(item);
  }

  addPet(item: string) {
    this.addButtonClicked.emit({
      name: item,
      status: 'examine'
    });
  }
}
