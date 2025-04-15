import {ApplicationRef, ChangeDetectionStrategy, Component, inject, PLATFORM_ID} from '@angular/core'
import {gsap} from "gsap"
import {ScrollTrigger} from "gsap/ScrollTrigger"
import {isPlatformBrowser} from '@angular/common'
import {first} from 'rxjs'
import {RouterLink, RouterLinkActive, RouterOutlet} from '@angular/router'

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class AppComponent {

  platformId = inject(PLATFORM_ID)
  appRef = inject(ApplicationRef)

  constructor() {
    //Init third-party code after an application becomes stable
    this.appRef.isStable
      .pipe(first((isStable) => isStable))
      .subscribe(() => {
        if (isPlatformBrowser(this.platformId)) {
          gsap.registerPlugin(ScrollTrigger)
        }
      })
  }
}
