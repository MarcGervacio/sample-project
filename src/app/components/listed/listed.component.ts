import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-listed',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './listed.component.html',
  styleUrl: './listed.component.scss'
})
export class ListedComponent implements OnChanges{
  @Input() items: string[] = [];
  @Output() addButtonClicked = new EventEmitter<any>();

  ngOnChanges(changes: SimpleChanges): void {
      console.log('===>', changes);
  }

  add(item: string) {
    this.addButtonClicked.emit({
      name: item,
      status: 'listed'
    });
  }
}
