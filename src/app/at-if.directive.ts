import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[if]',
  standalone: true
})
export class AtIfDirective {
  private hasView = false;

  constructor(private vcr: ViewContainerRef, private tpl: TemplateRef<any>) {}

  @Input('if')
  set condition(value: any) {
    const show = !!value;
    if (show && !this.hasView) {
      this.vcr.createEmbeddedView(this.tpl);
      this.hasView = true;
    } else if (!show && this.hasView) {
      this.vcr.clear();
      this.hasView = false;
    }
  }
}
