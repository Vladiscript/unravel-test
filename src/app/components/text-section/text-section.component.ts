import {Component, signal} from '@angular/core'
import {animate, query, stagger, state, style, transition, trigger} from '@angular/animations'
import {IntersectionDirective} from '../../directives/intersection.directive'

@Component({
  selector: 'app-text-section',
  imports: [
    IntersectionDirective
  ],
  templateUrl: './text-section.component.html',
  styleUrl: './text-section.component.scss',
  animations: [
    trigger('fadeInWords', [
      transition(':enter', [
        query('.word', [
          style({opacity: 0, transform: 'translateY(10px)'}),
          stagger('50ms', [
            animate('600ms cubic-bezier(0, 0, 1, 1)',
              style({opacity: 1, transform: 'translateY(0)'}))
          ])
        ], {optional: true})
      ])
    ])
  ]
})
export class TextSectionComponent {
  text = 'Then, reading the following is absolutely essential for you.'
  words = this.text.split(' ').map(word => word + ' ')
  show = signal<boolean>(false)

  onIntersection(isIntersecting: boolean) {
    if (isIntersecting) this.show.set(isIntersecting)
  }
}
