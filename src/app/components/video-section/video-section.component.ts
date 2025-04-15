import {Component, inject, PLATFORM_ID} from '@angular/core'
import {CardComponent} from "../card/card.component"
import {VideoComponent} from "../video/video.component"
import {CARDS_DATA} from '../../cards'
import {first} from 'rxjs'
import {isPlatformBrowser} from '@angular/common'
import {gsap} from 'gsap'
import {ScrollTrigger} from 'gsap/ScrollTrigger'

@Component({
  selector: 'app-video-section',
    imports: [
        CardComponent,
        VideoComponent
    ],
  templateUrl: './video-section.component.html',
  styleUrl: './video-section.component.scss'
})
export class VideoSectionComponent {
  platformId = inject(PLATFORM_ID)

  protected readonly cards = CARDS_DATA

  constructor() {
    if (isPlatformBrowser(this.platformId)) {
      this.#initCardsAnimation()
    }
  }

  #initCardsAnimation() {

    const tl = gsap.timeline({
      id: 'tl',
      scrollTrigger: {
        id: 'scroll-animation',
        trigger: '.video-section',
        start: 'center center',
        pinnedContainer: '.video-section',
        pin: true,
        pinSpacing: true,
        scrub: 2,
        once: true,
        // onScrubComplete: self => {
        //   self.endAnimation()
        // }
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
