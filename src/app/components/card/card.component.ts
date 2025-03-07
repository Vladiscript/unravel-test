import {ChangeDetectionStrategy, Component, input} from '@angular/core'
import {CardItem} from '../../cards'

@Component({
  selector: 'app-card',
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CardComponent {
  cardData = input.required<CardItem>()
}
