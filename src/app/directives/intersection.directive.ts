import {AfterViewInit, Directive, ElementRef, inject, OnDestroy, output, PLATFORM_ID} from '@angular/core'
import {isPlatformBrowser} from '@angular/common'

@Directive({
  selector: '[appIntersection]'
})
export class IntersectionDirective implements AfterViewInit, OnDestroy {
  #elementRef = inject(ElementRef)
  #platformId = inject(PLATFORM_ID)

  isIntersecting = output<boolean>()

  #observer?: IntersectionObserver

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.#platformId)) {

      this.#observer = new IntersectionObserver(
        ([entry]) => this.isIntersecting.emit(entry.isIntersecting),
        {threshold: 0.5}
      )

      this.#observer.observe(this.#elementRef.nativeElement)
    }
  }

  ngOnDestroy(): void {
    if (this.#observer) {
      this.#observer.disconnect()
    }
  }
}
