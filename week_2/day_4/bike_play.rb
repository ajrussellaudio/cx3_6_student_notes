class Bike
  def alert
    "Ring Ring"
  end

  def accelerate
    "Pedal Pedal"
  end  
end

class BikeWithHorn < Bike
  def alert
    "Honk Honk"
  end
end

class ElectricBike < Bike
  def accelerate
    "hmmmm hmmmm"
  end
end

class ElectricBikeWithHorn < BikeWithHorn
  def accelerate
    "hmmmm hmmmm"
  end
end

bike = Bike.new()
puts bike.accelerate()
puts bike.alert()

puts ""

bike_with_horn = BikeWithHorn.new()
puts bike_with_horn.accelerate()
puts bike_with_horn.alert()

puts ""

electric_bike = ElectricBike.new()
puts electric_bike.accelerate()
puts electric_bike.alert()