class Bike
  def initialize( sounder, propulsion )
    @sounder = sounder
    @propulsion = propulsion
  end

  def alert
    @sounder.trigger()
  end

  def accelerate
    @propulsion.move()
  end
end

class Bell
  def trigger
    return "Ring Ring"
  end
end

class Horn
  def trigger
    return "Honk Honk"
  end
end

class Pedal
  def move
    return "Pedal Pedal"
  end
end

class ElectricEngine
  def move
    return "hmmmm hmmmm"
  end
end

bell = Bell.new
pedal = Pedal.new
horn = Horn.new
engine = ElectricEngine.new

bike = Bike.new(bell, pedal)
bike_with_horn = Bike.new(horn, pedal)
electric_bike = Bike.new(bell, engine)

puts bike.accelerate
puts bike.alert

puts ""

puts bike_with_horn.accelerate
puts bike_with_horn.alert

puts ""

puts electric_bike.accelerate
puts electric_bike.alert

puts ""