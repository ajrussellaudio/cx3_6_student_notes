class Person

  attr_reader :name, :first_name, :last_name, :health

  def initialize(full_name)
    @name = full_name
    @first_name = full_name.split.first
    @last_name = full_name.split.last
    @health = 100
  end

  def talk
    return "Hi, my name is #{@name}."
  end

end