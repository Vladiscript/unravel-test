import {ApplicationRef, ChangeDetectionStrategy, Component, inject, PLATFORM_ID} from '@angular/core'
import {CardComponent} from './components/card/card.component'
import {VideoComponent} from './components/video/video.component'
import {gsap} from "gsap"
import {ScrollTrigger} from "gsap/ScrollTrigger"
import {isPlatformBrowser} from '@angular/common'
import {first} from 'rxjs'
import {TextSectionComponent} from './components/text-section/text-section.component'
import {CARDS_DATA} from './cards'

@Component({
  selector: 'app-root',
  imports: [
    CardComponent,
    VideoComponent,
    TextSectionComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class AppComponent {

  platformId = inject(PLATFORM_ID)
  appRef = inject(ApplicationRef)

  cards = CARDS_DATA

  constructor() {
    //Init third-party code after an application becomes stable
    this.appRef.isStable
      .pipe(first((isStable) => isStable))
      .subscribe(() => {
        if (isPlatformBrowser(this.platformId)) {
          gsap.registerPlugin(ScrollTrigger)
          this.#initCardsAnimation()
        }
      })
  }

  #initCardsAnimation() {

    const tl = gsap.timeline({
      id: 'tl',
      scrollTrigger: {
        id: 'scroll-animation',
        trigger: '.video-section',
        start: 'center center',
        pin: true,
        pinSpacing: true,
        scrub: 1,
        once: true,
      },
    })

    tl.fromTo('#card1', {yPercent: 20, opacity: 0}, {yPercent: 0, opacity: 1})
      .fromTo('#card2', {yPercent: 20, opacity: 0}, {yPercent: 0, opacity: 1}, "+=0.1")
      .to('#card1', {scale: 0.95, opacity: 0.5, yPercent: -10}, "-=0.3")
      .fromTo('#card3', {yPercent: 20, opacity: 0}, {yPercent: 0, opacity: 1}, "+=0.1")
      .to('#card2', {scale: 0.95, opacity: 0.5, yPercent: -10}, "-=0.3")
      .to('#card1', {scale: 0.90, yPercent: -20}, "<")
  }
}
