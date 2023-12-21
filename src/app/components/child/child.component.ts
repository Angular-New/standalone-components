import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NgIf } from '@angular/common';
import { HighlightDirective } from '@directives/highlight.directive';

@Component({
  selector: 'st-child',
  standalone: true,
  imports: [NgIf, HighlightDirective],
  templateUrl: './child.component.html',
  styleUrl: './child.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChildComponent {
  public readonly show: boolean = true;
  public readonly color: string = 'tomato';
}
