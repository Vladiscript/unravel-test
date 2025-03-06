export const CARDS_DATA: CardItem[] = [
  {
    title: 'You See What Others Can’t.',
    subTitle: 'You Foresee the Future of Change.',
    text: 'The thrill of creating, the obsession of bringing an idea to life, the relentless pursuit of something monumental—it’s what keeps you moving.'
  },
  {
    title: 'You Don’t Follow Trends.',
    subTitle: 'You Set Them.',
    text: 'You don’t just participate in the market; you shape it, redefine it, own it. Every milestone fuels your next move, every success raises the bar. '
  },
  {
    title: 'You Don’t Just Add Value.',
    subTitle: 'You Build Legacies.',
    text: 'You build something that resonates, that becomes a part of people’s lives, that stands for something bigger.'
  }
]

export type CardItem = {
  title: string;
  subTitle: string;
  text: string;
}
