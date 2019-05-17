const Challenge = require('./Models/Challenge')
const Event = require('./Models/Event')

module.exports = async (req, res) => {
  events.map(seedEvent => {
    Event.create(seedEvent)
      .then()
      .catch(e => console.log(e.message))
  })
  challenges.map(seedChallenge => {
    Challenge.create(seedChallenge)
      .then()
      .catch(e => console.log(e.message))
  })

  const allEvents = await Event.find()
  const allChallenges = await Challenge.find()
  res.send({ allEvents, allChallenges })
}

const events = [
  {
    description: 'ominous foreshadowing',
    frequency: 'frequent',
    category: 'Editing',
    show: 'Masterchef AU'
  },
  {
    description: 'M FIRE',
    frequency: 'frequent',
    category: 'Editing',
    show: 'Masterchef AU'
  },
  {
    description: 'contestant flashback',
    frequency: 'normal',
    category: 'Editing',
    show: 'Masterchef AU'
  },
  {
    description: 'suspense followed by happy music',
    frequency: 'normal',
    category: 'Editing',
    show: 'Masterchef AU'
  },
  {
    description: 'balcony people notice a mistake',
    frequency: 'normal',
    category: 'Editing',
    show: 'Masterchef AU'
  },
  {
    description: 'medic shown on screen',
    frequency: 'rare',
    category: 'Editing',
    show: 'Masterchef AU'
  },
  {
    description: '"food dream"',
    frequency: 'frequent',
    category: 'Quotes',
    show: 'Masterchef AU'
  },
  {
    description: '"Today I have made for you..."',
    frequency: 'frequent',
    category: 'Quotes',
    show: 'Masterchef AU'
  },
  {
    description: 'someone yells how much time is left',
    frequency: 'frequent',
    category: 'Quotes',
    show: 'Masterchef AU'
  },
  {
    description: 'somebody\'s "gutted" or "chuffed"',
    frequency: 'frequent',
    category: 'Quotes',
    show: 'Masterchef AU'
  },
  {
    description: 'Boom boom shake the room',
    frequency: 'normal',
    category: 'Quotes',
    show: 'Masterchef AU'
  },
  {
    description: '"the garden\'s in play"',
    frequency: 'normal',
    category: 'Quotes',
    show: 'Masterchef AU'
  },
  {
    description: 'ice cream',
    frequency: 'frequent',
    category: 'Food Appearances',
    show: 'Masterchef AU'
  },
  {
    description: 'panna cotta',
    frequency: 'frequent',
    category: 'Food Appearances',
    show: 'Masterchef AU'
  },
  {
    description: 'white chocolate veloute (3x challenge)',
    frequency: 'frequent',
    category: 'Food Appearances',
    show: 'Masterchef AU'
  },
  {
    description: 'crispy cracklin',
    frequency: 'normal',
    category: 'Food Appearances',
    show: 'Masterchef AU'
  },
  {
    description: 'somebody cries',
    frequency: 'frequent',
    category: 'Actions',
    show: 'Masterchef AU'
  },
  {
    description: 'a klosh is lifted',
    frequency: 'frequent',
    category: 'Actions',
    show: 'Masterchef AU'
  },
  {
    description: 'real fire',
    frequency: 'normal',
    category: 'Actions',
    show: 'Masterchef AU'
  },
  {
    description: 'scrapping an element',
    frequency: 'normal',
    category: 'Actions',
    show: 'Masterchef AU'
  },
  {
    description: "something isn't set",
    frequency: 'rare',
    category: 'Actions',
    show: 'Masterchef AU'
  },
  {
    description: 'somebody freaks out/stops cooking',
    frequency: 'rare',
    category: 'Actions',
    show: 'Masterchef AU'
  },
  {
    description: 'contestant ignores advice from judges',
    frequency: 'rare',
    category: 'Actions',
    show: 'Masterchef AU'
  },
  {
    description: 'somebody gets instant pass to balcony',
    frequency: 'rare',
    category: 'Actions',
    show: 'Masterchef AU'
  },
  {
    description: '10 out of 10',
    frequency: 'rare',
    category: 'Actions',
    show: 'Masterchef AU'
  },
  {
    description: 'immunity pin won or used',
    frequency: 'rare',
    category: 'Actions',
    show: 'Masterchef AU'
  }
]

const challenges = [
  {
    description: '5 squats',
    game: 'exercise',
    frequency: 'frequent'
  },
  {
    description: '5 crunches',
    game: 'exercise',
    frequency: 'frequent'
  },
  {
    description: '5 forward lunges',
    game: 'exercise',
    frequency: 'frequent'
  },
  {
    description: '5 leg lifts',
    game: 'exercise',
    frequency: 'frequent'
  },
  {
    description: '5 sumo squat toe lifts',
    game: 'exercise',
    frequency: 'frequent'
  },
  {
    description: '5 side lunges (left)',
    game: 'exercise',
    frequency: 'frequent'
  },
  {
    description: '5 side lunges (right)',
    game: 'exercise',
    frequency: 'frequent'
  },
  {
    description: '30 second plank',
    game: 'exercise',
    frequency: 'normal'
  },
  {
    description: '30 sec right foot balance',
    game: 'exercise',
    frequency: 'normal'
  },
  {
    description: '30 second left foot balance',
    game: 'exercise',
    frequency: 'normal'
  },
  {
    description: '30 second squat',
    game: 'exercise',
    frequency: 'normal'
  },
  {
    description: '30 second wall sit',
    game: 'exercise',
    frequency: 'normal'
  },
  {
    description: '5 burpees',
    game: 'exercise',
    frequency: 'rare'
  },
  {
    description: '60 second plank',
    game: 'exercise',
    frequency: 'rare'
  },
  {
    description: '10 pushups',
    game: 'exercise',
    frequency: 'rare'
  }
]
