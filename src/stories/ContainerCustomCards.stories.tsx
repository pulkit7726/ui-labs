import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ContainerCustomCards } from '../components/ContainerCustomCards';

export default {
  title: 'UI/Container Custom Cards',
  component: ContainerCustomCards,
  argTypes: {
    cardType: {
      options: ['Horizontal Slider', 'Vertical Slider', 'Grid Slider'],
      control: { type: 'select' },
    },
  },
} as ComponentMeta<typeof ContainerCustomCards>;

const Example: ComponentStory<typeof ContainerCustomCards> = args => (
  <ContainerCustomCards images={args.images} cardType={args.cardType} />
);

const images = [
  {
    backdrop_path: '/ugS5FVfCI3RV0ZwZtBV3HAV75OX.jpg',
    id: 610150,
    original_title: 'ドラゴンボール超 スーパーヒーロー',
    overview:
      'The Red Ribbon Army, an evil organization that was once destroyed by Goku in the past, has been reformed by a group of people who have created new and mightier Androids, Gamma 1 and Gamma 2, and seek vengeance against Goku and his family.',
    title: 'Dragon Ball Super: Super Hero',
  },
  {
    backdrop_path: '/p1F51Lvj3sMopG948F5HsBbl43C.jpg',
    id: 616037,
    original_title: 'Thor: Love and Thunder',
    overview:
      'After his retirement is interrupted by Gorr the God Butcher, a galactic killer who seeks the extinction of the gods, Thor Odinson enlists the help of King Valkyrie, Korg, and ex-girlfriend Jane Foster, who now inexplicably wields Mjolnir as the Relatively Mighty Girl Thor. Together they embark upon a harrowing cosmic adventure to uncover the mystery of the God Butcher’s vengeance and stop him before it’s too late.',
    title: 'Thor: Love and Thunder',
  },
  {
    backdrop_path: '/7ZO9yoEU2fAHKhmJWfAc2QIPWJg.jpg',
    id: 766507,
    original_title: 'Prey',
    overview:
      'When danger threatens her camp, the fierce and highly skilled Comanche warrior Naru sets out to protect her people. But the prey she stalks turns out to be a highly evolved alien predator with a technically advanced arsenal.',
    title: 'Prey',
  },
  {
    backdrop_path: '/odJ4hx6g6vBt4lBWKFD1tI8WS4x.jpg',
    id: 361743,
    original_title: 'Top Gun: Maverick',
    overview:
      'After more than thirty years of service as one of the Navy’s top aviators, and dodging the advancement in rank that would ground him, Pete “Maverick” Mitchell finds himself training a detachment of TOP GUN graduates for a specialized mission the likes of which no living pilot has ever seen.',
    title: 'Top Gun: Maverick',
  },
  {
    backdrop_path: '/pVjrIf7iISs4KQwwbvT2pQOvQZI.jpg',
    id: 507086,
    original_title: 'Jurassic World Dominion',
    overview:
      'Four years after Isla Nublar was destroyed, dinosaurs now live—and hunt—alongside humans all over the world. This fragile balance will reshape the future and determine, once and for all, whether human beings are to remain the apex predators on a planet they now share with history’s most fearsome creatures.',
    title: 'Jurassic World Dominion',
  },
  {
    backdrop_path: '/qATVdZdqtKUpO4D78wNCejsfp5S.jpg',
    id: 829560,
    original_title: 'Kolejne 365 dni',
    overview:
      "Laura and Massimo's relationship hangs in the balance as they try to overcome trust issues while a tenacious Nacho works to push them apart.",
    title: 'The Next 365 Days',
  },
  {
    backdrop_path: '/nmGWzTLMXy9x7mKd8NKPLmHtWGa.jpg',
    id: 438148,
    original_title: 'Minions: The Rise of Gru',
    overview:
      'A fanboy of a supervillain supergroup known as the Vicious 6, Gru hatches a plan to become evil enough to join them, with the backup of his followers, the Minions.',
    title: 'Minions: The Rise of Gru',
  },
  {
    backdrop_path: '/5L6RPHHUFlsliTqKRmUxFnIkXpR.jpg',
    id: 755566,
    original_title: 'Day Shift',
    overview:
      "An LA vampire hunter has a week to come up with the cash to pay for his kid's tuition and braces. Trying to make a living these days just might kill him.",
    title: 'Day Shift',
  },
  {
    backdrop_path: '/bL7VIHQ4Nl0hZMw8ZeX6byoEEZJ.jpg',
    id: 1006851,
    original_title: 'Office Invasion',
    overview:
      'Three friends come together to defend their valuable mining company from…aliens?! What could possibly go wrong?',
    title: 'Office Invasion',
  },
  {
    backdrop_path: '/AfvIjhDu9p64jKcmohS4hsPG95Q.jpg',
    id: 756999,
    original_title: 'The Black Phone',
    overview:
      'Finney Blake, a shy but clever 13-year-old boy, is abducted by a sadistic killer and trapped in a soundproof basement where screaming is of little use. When a disconnected phone on the wall begins to ring, Finney discovers that he can hear the voices of the killer’s previous victims. And they are dead set on making sure that what happened to them doesn’t happen to Finney.',
    title: 'The Black Phone',
  },
  {
    backdrop_path: '/3VQj6m0I6gkuRaljmhNZl0XR3by.jpg',
    id: 585511,
    original_title: 'Luck',
    overview:
      'Suddenly finding herself in the never-before-seen Land of Luck, the unluckiest person in the world must unite with the magical creatures there to turn her luck around.',
    title: 'Luck',
  },
  {
    backdrop_path: '/2oXQpm0wfOkIL0jBJABbL5AfMs6.jpg',
    id: 760104,
    original_title: 'X',
    overview:
      'In 1979, a group of young filmmakers set out to make an adult film in rural Texas, but when their reclusive, elderly hosts catch them in the act, the cast find themselves fighting for their lives.',
    title: 'X',
  },
  {
    backdrop_path: '/nW5fUbldp1DYf2uQ3zJTUdachOu.jpg',
    id: 718789,
    original_title: 'Lightyear',
    overview:
      'Legendary Space Ranger Buzz Lightyear embarks on an intergalactic adventure alongside a group of ambitious recruits and his robot companion Sox.',
    title: 'Lightyear',
  },
  {
    backdrop_path: '/cu2xVhRZJrEkOHC8GQUWEJz3lk5.jpg',
    id: 667276,
    original_title: 'Las Leyendas: El Origen',
    overview:
      'When a human baby crosses the Eternal Mirror, the portal between the living and the death opens its path to the beings from the underworld.',
    title: 'Legend Quest: The Origin',
  },
  {
    backdrop_path: '/wcKFYIiVDvRURrzglV9kGu7fpfY.jpg',
    id: 453395,
    original_title: 'Doctor Strange in the Multiverse of Madness',
    overview:
      'Doctor Strange, with the help of mystical allies both old and new, traverses the mind-bending and dangerous alternate realities of the Multiverse to confront a mysterious new adversary.',
    title: 'Doctor Strange in the Multiverse of Madness',
  },
  {
    backdrop_path: '/14QbnygCuTO0vl7CAFmPf1fgZfV.jpg',
    id: 634649,
    original_title: 'Spider-Man: No Way Home',
    overview:
      'Peter Parker is unmasked and no longer able to separate his normal life from the high-stakes of being a super-hero. When he asks for help from Doctor Strange the stakes become even more dangerous, forcing him to discover what it truly means to be Spider-Man.',
    title: 'Spider-Man: No Way Home',
  },
  {
    backdrop_path: '/jazlkwXfw4KdF6fVTRsolOvRCmu.jpg',
    id: 924482,
    original_title: 'The Ledge',
    overview:
      'A rock climbing adventure between two friends turns into a terrifying nightmare. After Kelly captures the murder of her best friend on camera, she becomes the next target of a tight-knit group of friends who will stop at nothing to destroy the evidence and anyone in their way. Desperate for her safety, she begins a treacherous climb up a mountain cliff and her survival instincts are put to the test when she becomes trapped with the killers just 20 feet away.',
    title: 'The Ledge',
  },
  {
    backdrop_path: '/t9K8ycUBCplWiICDOKRNRYcEH9e.jpg',
    id: 810693,
    original_title: '劇場版 呪術廻戦 0',
    overview:
      "Yuta Okkotsu is a nervous high school student who is suffering from a serious problem—his childhood friend Rika has turned into a curse and won't leave him alone. Since Rika is no ordinary curse, his plight is noticed by Satoru Gojo, a teacher at Jujutsu High, a school where fledgling exorcists learn how to combat curses. Gojo convinces Yuta to enroll, but can he learn enough in time to confront the curse that haunts him?",
    title: 'Jujutsu Kaisen 0',
  },
  {
    backdrop_path: '/8wwXPG22aNMpPGuXnfm3galoxbI.jpg',
    id: 675353,
    original_title: 'Sonic the Hedgehog 2',
    overview:
      'After settling in Green Hills, Sonic is eager to prove he has what it takes to be a true hero. His test comes when Dr. Robotnik returns, this time with a new partner, Knuckles, in search for an emerald that has the power to destroy civilizations. Sonic teams up with his own sidekick, Tails, and together they embark on a globe-trotting journey to find the emerald before it falls into the wrong hands.',
    title: 'Sonic the Hedgehog 2',
  },
  {
    backdrop_path: '/qViFGWCHaSmW4gP00RGh3xjMjsP.jpg',
    id: 758724,
    original_title: 'The Cellar',
    overview:
      "When Keira Woods' daughter mysteriously vanishes in the cellar of their new house in the country, she soon discovers there is an ancient and powerful entity controlling their home that she will have to face or risk losing her family's souls forever.",
    title: 'The Cellar',
  },
];

export const CardComponent = Example.bind({});

CardComponent.args = {
  images,
  cardType: 'Horizontal Slider',
};
