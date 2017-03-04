require_relative "./models/album"
require_relative "./models/artist"

require "pry-byebug"

artist1 = Artist.new( { "name" => "Wu-Tang Clan" } )
artist1.save

album1 = Album.new( { 
  "name" => "Enter the 36 Chambers",  
  "artist_id" => artist1.id
  } )
album1.save

album2 = Album.new( { 
  "name" => "Wu-Tang Forever",  
  "artist_id" => artist1.id
  } )
album2.save

album3 = Album.new( { 
  "name" => "The W",  
  "artist_id" => artist1.id
  } )
album3.save



binding.pry
nil
