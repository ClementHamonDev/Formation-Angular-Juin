import { Component, input, Input } from '@angular/core';
import { NgComponentOutlet } from '@angular/common';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [NgComponentOutlet],
  templateUrl: './modal.component.html',
  styles: [`
    .modal { border: 1px solid #ccc; padding: 1rem; border-radius: 8px; margin: 1rem 0; }
    .modal-header { font-weight: bold; margin-bottom: 1rem; }
  `]
})
export class ModalComponent {
  component =  input<any>();
}
