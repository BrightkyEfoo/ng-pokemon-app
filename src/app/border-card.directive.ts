import { Directive, ElementRef, HostListener, Input } from "@angular/core";

@Directive({
  selector: "[pkmnBorderCard]",
})
export class BorderCardDirective {
  private initialColor = '#f5f5f5'
  private defaultColor = '#009688'
  private defaultHeight = 180
  constructor(private el: ElementRef) {
    this.setHeight(this.defaultHeight);
    this.setBorderColor(this.borderColor2 || this.initialColor);
  }

  @Input("pkmnBorderCard") borderColor: string;
  @Input("pkmnNoneBorder") borderColor2: string;
  // @Input('pkmnBorderCard') borderColor2:string;

  @HostListener("mouseenter") onMouseEnter() {
    this.setBorderColor(this.borderColor || this.defaultColor);
  }
  @HostListener("mouseleave") onMouseLeave() {
    console.log(this.borderColor2);
    this.setBorderColor(this.borderColor2 || this.initialColor);
  }

  setHeight(height: number) {
    this.el.nativeElement.style.height = `${height}px`;
  }
  setBorderColor(color: string) {
    this.el.nativeElement.style.border = `solid 4px ${color}`;
  }
}
