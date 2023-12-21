import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ChildComponent } from '@components/child/child.component';
import { CapitalizePipe } from '@pipes/capitalize.pipe';

@Component({
  selector: 'st-parent',
  standalone: true,
  imports: [ChildComponent, CapitalizePipe],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ParentComponent {
  public readonly title: string = 'parent component';
}
