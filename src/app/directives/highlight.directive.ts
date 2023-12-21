import { Directive, ElementRef, HostListener, Input } from '@angular/core';

type HighlightColor = string | null;

@Directive({
  selector: '[highlight]',
  standalone: true,
})
export class HighlightDirective {
  constructor(private readonly element: ElementRef) {}

  @Input('highlight')
  public highlightColor: string = '';

  @HostListener('mouseenter') public onMouseEnter(): void {
    this.highlightElement(this.highlightColor || this.defaultColor || null);
  }

  @HostListener('mouseleave') public onMouseLeave(): void {
    this.highlightElement(null);
  }

  private readonly defaultColor: string = 'darkgreen';

  private highlightElement(color: HighlightColor): void {
    this.element.nativeElement.style.color = color;
  }
}
