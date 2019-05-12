export const state = () => ({
  challenges: {
    quick: [
      '5 squats',
      '5 crunches',
      '5 forward lunges',
      '5 leg lifts',
      '5 sumo squat toe lifts',
      '5 side lunges (left)',
      '5 side lunges (right)'
    ],
    medium: [
      '30 second plank',
      '30 sec right foot balance',
      '30 second left foot balance',
      '30 second squat',
      '30 second wall sit'
    ],
    long: ['5 burpees', '60 second plank', '10 pushups']
  },
  events: {
    'Masterchef AU': {
      quick: {
        Editing: ['ominous foreshadowing', 'M FIRE'],
        Quotes: [
          '"food dream"',
          '"Today I have made for you..."',
          'someone yells how much time is left',
          'somebody\'s "gutted" or "chuffed"'
        ],
        'Food Appearances': [
          'ice cream',
          'panna cotta',
          'white chocolate veloute (3x challenge)'
        ],
        Actions: ['somebody cries', 'a klosh is lifted']
      },
      medium: {
        Editing: [
          'contestant flashback',
          'suspense followed by happy music',
          'balcony people notice a mistake'
        ],
        Quotes: ['Boom boom shake the room', '"the garden\'s in play"'],
        'Food Appearances': ['crispy cracklin'],
        Actions: ['real fire', 'scrapping an element', "something isn't set"]
      },
      long: {
        Editing: ['medic shown on screen'],
        Quotes: [],
        'Food Appearances': [],
        Actions: [
          'somebody freaks out/stops cooking',
          'contestant ignores advice from judges',
          'somebody gets instant pass to balcony',
          '10 out of 10',
          'immunity pin won or used'
        ]
      }
    }
  }
})

export const gettters = {
  //   getEventsByShow(state, showName) {
  //     return state.shows
  //       .filter(show => show.name === showName)[0]
  //       .map(({ quick, medium, long }) => ({
  //         quick: quick.events,
  //         medium: medium.events,
  //         long: long.events
  //       }))
  //   }
}
