import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

interface ForContext<T> {
  $implicit: T;
  index: number;
  count: number;
  first: boolean;
  last: boolean;
  even: boolean;
  odd: boolean;
}

@Directive({
  selector: '[for]',
  standalone: true
})
export class AtForDirective<T = any> {
  private items: T[] | null = null;

  constructor(private tpl: TemplateRef<ForContext<T>>, private vcr: ViewContainerRef) {}

  @Input('forOf')
  set forOf(value: T[] | null) {
    this.items = value;
    this.render();
  }

  private render() {
    this.vcr.clear();
    if (!this.items || this.items.length === 0) return;
    const count = this.items.length;
    this.items.forEach((item, index) => {
      const ctx: ForContext<T> = {
        $implicit: item,
        index,
        count,
        first: index === 0,
        last: index === count - 1,
        even: index % 2 === 0,
        odd: index % 2 !== 0
      };
      this.vcr.createEmbeddedView(this.tpl, ctx);
    });
  }
}
