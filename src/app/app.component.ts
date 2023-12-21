import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ParentComponent } from '@components/parent/parent.component';
import { SecondoModule } from '@components/secondo/secondo.module';

@Component({
  selector: 'st-root',
  standalone: true,
  imports: [CommonModule, SecondoModule, RouterOutlet, ParentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  //
}
