# countries = {
#   uk: {
#     capital: "London",
#     population: "At least 5"
#   },
#   germany: {
#     capital: "Berlin",
#     population: "More than nein"
#   }
# }

# puts countries[:germany][:capital]

# Avengers, real name, attack

avengers = {
  iron_man: {
    real_name: "Tony Stark",
    attacks: ["uni-beam projector", "pulse bolts"]
  },
  hulk: {
    real_name: "Bruce Banner",
    attacks: ["headbutt", "HULK SMASH!!"]
  },
  thor: {
    real_name: "Thor, of Asgard",
    attacks: ["Mjolnir", "punch"]
  },
  captain_america: {
    real_name: "Steve Rogers",
    attacks: {
      
    }
  }
}

puts avengers[:iron_man][:attacks][0]

# pokemon.at(0) == pokemon[0]
# avengers[:iron_man] == avengers.at(:iron_man)