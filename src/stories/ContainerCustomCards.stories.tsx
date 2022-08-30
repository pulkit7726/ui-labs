/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import { ContainerCustomCards } from "../components/ContainerCustomCards";
import { ComponentMeta, ComponentStory } from "@storybook/react";

let images1: any = [
  {
    title: 'asas'
  }
]
export default {
  title: "Components/ContainerCustomCards",
  component: ContainerCustomCards,
  props: {
    images1
  },
  // argTypes: {
  //   imageList: {
  //     control: {
  //       type: 'select',
  //       labels: {
  //         first: 'First Option',
  //         second: 'Second Option'
  //       }
  //     },
  //     options: ['first', 'second'],
  //     mapping: {
  //       first: "",
  //       second:"" 
  //     }
  //   }
  // },
  // args: {
  //   primary: true
  // }
} as ComponentMeta<typeof ContainerCustomCards>;

const Example: ComponentStory<typeof ContainerCustomCards> = args => {
  return <ContainerCustomCards {...args} images={images} />;
};

const images = [
  {
    adult: false,
    backdrop_path: "/ugS5FVfCI3RV0ZwZtBV3HAV75OX.jpg",
    genre_ids: [16, 878, 28],
    id: 610150,
    original_language: "ja",
    original_title: "ドラゴンボール超 スーパーヒーロー",
    overview:
      "The Red Ribbon Army, an evil organization that was once destroyed by Goku in the past, has been reformed by a group of people who have created new and mightier Androids, Gamma 1 and Gamma 2, and seek vengeance against Goku and his family.",
    popularity: 7195.285,
    poster_path: "/rugyJdeoJm7cSJL1q4jBpTNbxyU.jpg",
    release_date: "2022-06-11",
    title: "Dragon Ball Super: Super Hero",
    video: false,
    vote_average: 7.5,
    vote_count: 148
  },
  {
    adult: false,
    backdrop_path: "/p1F51Lvj3sMopG948F5HsBbl43C.jpg",
    genre_ids: [28, 12, 14],
    id: 616037,
    original_language: "en",
    original_title: "Thor: Love and Thunder",
    overview:
      "After his retirement is interrupted by Gorr the God Butcher, a galactic killer who seeks the extinction of the gods, Thor Odinson enlists the help of King Valkyrie, Korg, and ex-girlfriend Jane Foster, who now inexplicably wields Mjolnir as the Relatively Mighty Girl Thor. Together they embark upon a harrowing cosmic adventure to uncover the mystery of the God Butcher’s vengeance and stop him before it’s too late.",
    popularity: 7623.514,
    poster_path: "/pIkRyD18kl4FhoCNQuWxWu5cBLM.jpg",
    release_date: "2022-07-06",
    title: "Thor: Love and Thunder",
    video: false,
    vote_average: 6.8,
    vote_count: 2017
  },
  {
    adult: false,
    backdrop_path: "/7ZO9yoEU2fAHKhmJWfAc2QIPWJg.jpg",
    genre_ids: [28, 878, 27],
    id: 766507,
    original_language: "en",
    original_title: "Prey",
    overview:
      "When danger threatens her camp, the fierce and highly skilled Comanche warrior Naru sets out to protect her people. But the prey she stalks turns out to be a highly evolved alien predator with a technically advanced arsenal.",
    popularity: 5763.164,
    poster_path: "/ujr5pztc1oitbe7ViMUOilFaJ7s.jpg",
    release_date: "2022-08-02",
    title: "Prey",
    video: false,
    vote_average: 8.1,
    vote_count: 3058
  },
  {
    adult: false,
    backdrop_path: "/odJ4hx6g6vBt4lBWKFD1tI8WS4x.jpg",
    genre_ids: [28, 18],
    id: 361743,
    original_language: "en",
    original_title: "Top Gun: Maverick",
    overview:
      "After more than thirty years of service as one of the Navy’s top aviators, and dodging the advancement in rank that would ground him, Pete “Maverick” Mitchell finds himself training a detachment of TOP GUN graduates for a specialized mission the likes of which no living pilot has ever seen.",
    popularity: 4168.747,
    poster_path: "/62HCnUTziyWcpDaBO2i1DX17ljH.jpg",
    release_date: "2022-05-24",
    title: "Top Gun: Maverick",
    video: false,
    vote_average: 8.4,
    vote_count: 2591
  },
  {
    adult: false,
    backdrop_path: "/pVjrIf7iISs4KQwwbvT2pQOvQZI.jpg",
    genre_ids: [12, 28, 878],
    id: 507086,
    original_language: "en",
    original_title: "Jurassic World Dominion",
    overview:
      "Four years after Isla Nublar was destroyed, dinosaurs now live—and hunt—alongside humans all over the world. This fragile balance will reshape the future and determine, once and for all, whether human beings are to remain the apex predators on a planet they now share with history’s most fearsome creatures.",
    popularity: 3264.853,
    poster_path: "/kAVRgw7GgK1CfYEJq8ME6EvRIgU.jpg",
    release_date: "2022-06-01",
    title: "Jurassic World Dominion",
    video: false,
    vote_average: 7.1,
    vote_count: 2984
  },
  {
    adult: false,
    backdrop_path: "/qATVdZdqtKUpO4D78wNCejsfp5S.jpg",
    genre_ids: [10749, 18],
    id: 829560,
    original_language: "pl",
    original_title: "Kolejne 365 dni",
    overview:
      "Laura and Massimo's relationship hangs in the balance as they try to overcome trust issues while a tenacious Nacho works to push them apart.",
    popularity: 2880.597,
    poster_path: "/6FsGeIp7heHm5eh4tIxTzHIRxmt.jpg",
    release_date: "2022-08-19",
    title: "The Next 365 Days",
    video: false,
    vote_average: 7,
    vote_count: 236
  },
  {
    adult: false,
    backdrop_path: "/nmGWzTLMXy9x7mKd8NKPLmHtWGa.jpg",
    genre_ids: [16, 12, 35, 14],
    id: 438148,
    original_language: "en",
    original_title: "Minions: The Rise of Gru",
    overview:
      "A fanboy of a supervillain supergroup known as the Vicious 6, Gru hatches a plan to become evil enough to join them, with the backup of his followers, the Minions.",
    popularity: 2866.79,
    poster_path: "/wKiOkZTN9lUUUNZLmtnwubZYONg.jpg",
    release_date: "2022-06-29",
    title: "Minions: The Rise of Gru",
    video: false,
    vote_average: 7.8,
    vote_count: 1567
  },
  {
    adult: false,
    backdrop_path: "/5L6RPHHUFlsliTqKRmUxFnIkXpR.jpg",
    genre_ids: [28, 14, 27],
    id: 755566,
    original_language: "en",
    original_title: "Day Shift",
    overview:
      "An LA vampire hunter has a week to come up with the cash to pay for his kid's tuition and braces. Trying to make a living these days just might kill him.",
    popularity: 2650.914,
    poster_path: "/bI7lGR5HuYlENlp11brKUAaPHuO.jpg",
    release_date: "2022-08-10",
    title: "Day Shift",
    video: false,
    vote_average: 6.8,
    vote_count: 598
  },
  {
    adult: false,
    backdrop_path: "/bL7VIHQ4Nl0hZMw8ZeX6byoEEZJ.jpg",
    genre_ids: [878, 35, 28],
    id: 1006851,
    original_language: "en",
    original_title: "Office Invasion",
    overview:
      "Three friends come together to defend their valuable mining company from…aliens?! What could possibly go wrong?",
    popularity: 2445.71,
    poster_path: "/kDC9Q3kiVaxrJijaGeZ8ZB2ZoiX.jpg",
    release_date: "2022-08-10",
    title: "Office Invasion",
    video: false,
    vote_average: 6,
    vote_count: 43
  },
  {
    adult: false,
    backdrop_path: "/AfvIjhDu9p64jKcmohS4hsPG95Q.jpg",
    genre_ids: [27, 53],
    id: 756999,
    original_language: "en",
    original_title: "The Black Phone",
    overview:
      "Finney Blake, a shy but clever 13-year-old boy, is abducted by a sadistic killer and trapped in a soundproof basement where screaming is of little use. When a disconnected phone on the wall begins to ring, Finney discovers that he can hear the voices of the killer’s previous victims. And they are dead set on making sure that what happened to them doesn’t happen to Finney.",
    popularity: 2163.773,
    poster_path: "/lr11mCT85T1JanlgjMuhs9nMht4.jpg",
    release_date: "2022-06-22",
    title: "The Black Phone",
    video: false,
    vote_average: 8,
    vote_count: 2090
  },
  {
    adult: false,
    backdrop_path: "/3VQj6m0I6gkuRaljmhNZl0XR3by.jpg",
    genre_ids: [16, 12, 35, 14],
    id: 585511,
    original_language: "en",
    original_title: "Luck",
    overview:
      "Suddenly finding herself in the never-before-seen Land of Luck, the unluckiest person in the world must unite with the magical creatures there to turn her luck around.",
    popularity: 1952.292,
    poster_path: "/1HOYvwGFioUFL58UVvDRG6beEDm.jpg",
    release_date: "2022-08-05",
    title: "Luck",
    video: false,
    vote_average: 8.2,
    vote_count: 513
  },
  {
    adult: false,
    backdrop_path: "/2oXQpm0wfOkIL0jBJABbL5AfMs6.jpg",
    genre_ids: [27, 9648, 53],
    id: 760104,
    original_language: "en",
    original_title: "X",
    overview:
      "In 1979, a group of young filmmakers set out to make an adult film in rural Texas, but when their reclusive, elderly hosts catch them in the act, the cast find themselves fighting for their lives.",
    popularity: 1397.368,
    poster_path: "/woTQx9Q4b8aO13jR9dsj8C9JESy.jpg",
    release_date: "2022-03-17",
    title: "X",
    video: false,
    vote_average: 6.7,
    vote_count: 778
  },
  {
    adult: false,
    backdrop_path: "/nW5fUbldp1DYf2uQ3zJTUdachOu.jpg",
    genre_ids: [16, 878, 12, 28, 10751],
    id: 718789,
    original_language: "en",
    original_title: "Lightyear",
    overview:
      "Legendary Space Ranger Buzz Lightyear embarks on an intergalactic adventure alongside a group of ambitious recruits and his robot companion Sox.",
    popularity: 1491.7,
    poster_path: "/8qHwlezCZzOhq88mnpeqK4asz4n.jpg",
    release_date: "2022-06-15",
    title: "Lightyear",
    video: false,
    vote_average: 7.3,
    vote_count: 1811
  },
  {
    adult: false,
    backdrop_path: "/cu2xVhRZJrEkOHC8GQUWEJz3lk5.jpg",
    genre_ids: [16, 27, 35],
    id: 667276,
    original_language: "es",
    original_title: "Las Leyendas: El Origen",
    overview:
      "When a human baby crosses the Eternal Mirror, the portal between the living and the death opens its path to the beings from the underworld.",
    popularity: 1339.101,
    poster_path: "/7aju8OJ2F7jHkKJ68jfM6DGzMMD.jpg",
    release_date: "2021-02-15",
    title: "Legend Quest: The Origin",
    video: false,
    vote_average: 8.4,
    vote_count: 129
  },
  {
    adult: false,
    backdrop_path: "/wcKFYIiVDvRURrzglV9kGu7fpfY.jpg",
    genre_ids: [14, 28, 12],
    id: 453395,
    original_language: "en",
    original_title: "Doctor Strange in the Multiverse of Madness",
    overview:
      "Doctor Strange, with the help of mystical allies both old and new, traverses the mind-bending and dangerous alternate realities of the Multiverse to confront a mysterious new adversary.",
    popularity: 1551.048,
    poster_path: "/9Gtg2DzBhmYamXBS1hKAhiwbBKS.jpg",
    release_date: "2022-05-04",
    title: "Doctor Strange in the Multiverse of Madness",
    video: false,
    vote_average: 7.5,
    vote_count: 5427
  },
  {
    adult: false,
    backdrop_path: "/14QbnygCuTO0vl7CAFmPf1fgZfV.jpg",
    genre_ids: [28, 12, 878],
    id: 634649,
    original_language: "en",
    original_title: "Spider-Man: No Way Home",
    overview:
      "Peter Parker is unmasked and no longer able to separate his normal life from the high-stakes of being a super-hero. When he asks for help from Doctor Strange the stakes become even more dangerous, forcing him to discover what it truly means to be Spider-Man.",
    popularity: 1368.16,
    poster_path: "/uJYYizSuA9Y3DCs0qS4qWvHfZg4.jpg",
    release_date: "2021-12-15",
    title: "Spider-Man: No Way Home",
    video: false,
    vote_average: 8,
    vote_count: 14798
  },
  {
    adult: false,
    backdrop_path: "/jazlkwXfw4KdF6fVTRsolOvRCmu.jpg",
    genre_ids: [53],
    id: 924482,
    original_language: "en",
    original_title: "The Ledge",
    overview:
      "A rock climbing adventure between two friends turns into a terrifying nightmare. After Kelly captures the murder of her best friend on camera, she becomes the next target of a tight-knit group of friends who will stop at nothing to destroy the evidence and anyone in their way. Desperate for her safety, she begins a treacherous climb up a mountain cliff and her survival instincts are put to the test when she becomes trapped with the killers just 20 feet away.",
    popularity: 975.305,
    poster_path: "/dHKfsdNcEPw7YIWFPIhqiuWrSAb.jpg",
    release_date: "2022-02-18",
    title: "The Ledge",
    video: false,
    vote_average: 6.2,
    vote_count: 82
  },
  {
    adult: false,
    backdrop_path: "/t9K8ycUBCplWiICDOKRNRYcEH9e.jpg",
    genre_ids: [16, 28, 14],
    id: 810693,
    original_language: "ja",
    original_title: "劇場版 呪術廻戦 0",
    overview:
      "Yuta Okkotsu is a nervous high school student who is suffering from a serious problem—his childhood friend Rika has turned into a curse and won't leave him alone. Since Rika is no ordinary curse, his plight is noticed by Satoru Gojo, a teacher at Jujutsu High, a school where fledgling exorcists learn how to combat curses. Gojo convinces Yuta to enroll, but can he learn enough in time to confront the curse that haunts him?",
    popularity: 1249.084,
    poster_path: "/3pTwMUEavTzVOh6yLN0aEwR7uSy.jpg",
    release_date: "2021-12-24",
    title: "Jujutsu Kaisen 0",
    video: false,
    vote_average: 7.8,
    vote_count: 256
  },
  {
    adult: false,
    backdrop_path: "/8wwXPG22aNMpPGuXnfm3galoxbI.jpg",
    genre_ids: [28, 12, 10751, 35],
    id: 675353,
    original_language: "en",
    original_title: "Sonic the Hedgehog 2",
    overview:
      "After settling in Green Hills, Sonic is eager to prove he has what it takes to be a true hero. His test comes when Dr. Robotnik returns, this time with a new partner, Knuckles, in search for an emerald that has the power to destroy civilizations. Sonic teams up with his own sidekick, Tails, and together they embark on a globe-trotting journey to find the emerald before it falls into the wrong hands.",
    popularity: 1126.867,
    poster_path: "/6DrHO1jr3qVrViUO6s6kFiAGM7.jpg",
    release_date: "2022-03-30",
    title: "Sonic the Hedgehog 2",
    video: false,
    vote_average: 7.7,
    vote_count: 2852
  },
  {
    adult: false,
    backdrop_path: "/qViFGWCHaSmW4gP00RGh3xjMjsP.jpg",
    genre_ids: [27, 9648],
    id: 758724,
    original_language: "en",
    original_title: "The Cellar",
    overview:
      "When Keira Woods' daughter mysteriously vanishes in the cellar of their new house in the country, she soon discovers there is an ancient and powerful entity controlling their home that she will have to face or risk losing her family's souls forever.",
    popularity: 1040.613,
    poster_path: "/rtfGeS5WMXA6PtikIYUmYTSbVdg.jpg",
    release_date: "2022-03-25",
    title: "The Cellar",
    video: false,
    vote_average: 6.7,
    vote_count: 172
  }
];

export const CardComponentTest = Example.bind({});

// CardComponentTest.args = {
//   imageList: []
// };
