import { Component } from '@angular/core';
import { ChildComponent } from '@components/child/child.component';

@Component({
  selector: 'st-parent',
  standalone: true,
  imports: [ChildComponent],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.scss',
})
export class ParentComponent {}
