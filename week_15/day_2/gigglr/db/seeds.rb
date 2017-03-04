Gig.delete_all
Venue.delete_all

Album.delete_all
Artist.delete_all

a1 = Artist.create({ name: "Wu-Tang Clan" })
a2 = Artist.create({ name: "Beastie Boys" })

Album.create({ artist_id: a1.id, name: "Enter the 36 Chambers" })
Album.create({ artist_id: a2.id, name: "Check Your Head" })

v1 = Venue.create({ 
  name: "Barrowlands", 
  location: "Glasgow" })
v2 = Venue.create({ 
  name: "Madison Square Gardens", 
  location: "New York City" })

Gig.create({ 
  price: 15,
  date: "2017-08-15",
  artist: a1,
  venue: v2 })

Gig.create({
  price: 25,
  date: "2017-05-29",
  artist: a2,
  venue: v1 })