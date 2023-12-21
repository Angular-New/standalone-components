import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'st-secondo',
  templateUrl: './secondo.component.html',
  styleUrl: './secondo.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SecondoComponent {
  public readonly title: string = 'NgModule-based component';
}
