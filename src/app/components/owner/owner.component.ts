import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-owner',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './owner.component.html',
  styleUrl: './owner.component.scss'
})
export class OwnerComponent {
  @Input() items: string[] = [];
}
