import {ChangeDetectionStrategy, Component, input, output} from '@angular/core'
import {NgOptimizedImage} from "@angular/common"

@Component({
  selector: 'app-video-controls',
  imports: [
    NgOptimizedImage
  ],
  templateUrl: './video-controls.component.html',
  styleUrl: './video-controls.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class VideoControlsComponent {
  isPlaying = input.required<boolean>()
  isFullscreen = input.required<boolean>()

  togglePlaying = output()
  toggleFullscreen = output()
}
