import {Routes} from '@angular/router'

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./components/placeholder/placeholder.component').then(c => c.PlaceholderComponent),
  },
  {
    path: 'video',
    loadComponent: () => import('./components/video/video.component').then(c => c.VideoComponent)
  },
  {
    path: 'video/:id',
    loadComponent: () => import('./components/video/video.component').then(c => c.VideoComponent),
  },
  {
    path: 'text',
    loadComponent: () => import('./components/text-section/text-section.component').then(c => c.TextSectionComponent),
  }
]
