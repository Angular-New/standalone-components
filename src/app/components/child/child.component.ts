import { Component } from '@angular/core';
import { NgIf } from '@angular/common';

@Component({
  selector: 'st-child',
  standalone: true,
  imports: [NgIf],
  templateUrl: './child.component.html',
  styleUrl: './child.component.scss',
})
export class ChildComponent {
  public readonly show: boolean = true;
}
