import {ChangeDetectionStrategy, Component, ElementRef, signal, ViewChild} from '@angular/core'
import {animate, state, style, transition, trigger} from '@angular/animations'
import {VideoControlsComponent} from '../video-controls/video-controls.component'
import {IntersectionDirective} from '../../directives/intersection.directive'

@Component({
  selector: 'app-video',
  imports: [
    VideoControlsComponent,
    IntersectionDirective
  ],
  templateUrl: './video.component.html',
  styleUrl: './video.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    trigger('containerAnimation', [
      state('inactive', style({
        transform: 'scale(1.04)',
        borderRadius: '0px',
      })),
      state('active', style({
        transform: 'scale(1)',
        borderRadius: '40px',
      })),
      transition('inactive => active', [
        animate('0.8s cubic-bezier(0.8, 0, 0.2, 1)')
      ])
    ]),
    trigger('videoAnimation', [
      state('inactive', style({
        transform: 'scale(1.1)',
      })),
      state('active', style({
        transform: 'scale(1)',
      })),
      transition('inactive => active', [
        animate('0.8s cubic-bezier(0.8, 0, 0.2, 1)')
      ])
    ])
  ]
})
export class VideoComponent {
  isActivated = signal(false)
  isVideoPlaying = signal(false)
  isFullscreen = signal(false)

  @ViewChild('videoContainer') videoContainer!: ElementRef
  @ViewChild('video') video!: ElementRef<HTMLVideoElement>

  onIntersection(isIntersecting: boolean) {
    if (isIntersecting) {
      this.isActivated.set(true)
      this.video.nativeElement.play().then(() => this.isVideoPlaying.set(true))
    } else {
      this.video.nativeElement.pause()
      this.isVideoPlaying.set(false)
    }
  }

  togglePlaying() {
    if (this.isVideoPlaying()) {
      this.video.nativeElement.pause()
      this.isVideoPlaying.set(false)
    } else {
      this.video.nativeElement.play()
        .then(() => this.isVideoPlaying.set(true))
    }
  }

  toggleFullscreen() {
    this.video.nativeElement.requestFullscreen()
  }
}
