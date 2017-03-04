class BankAccount

  attr_reader :type, :holder_name, :amount
  # attr_writer :holder_name
  attr_accessor :holder_name 
  # ^ both attr_reader and attr_writer

  def initialize(input_name, input_value, input_type)
    @holder_name = input_name
    @amount = input_value
    @type = input_type
  end

  def pay_in(amount_to_increase)
    @amount += amount_to_increase
  end

  def pay_monthly_fee2()
    @amount -= 10 if @type == "personal"
    @amount -= 50 if @type == "business"
  end


  def pay_monthly_fee()
    payment = {
      "personal" => 10,
      "business" => 50
    }
    @amount -= payment[@type]
  end

  ###############################
  # handled by attr_reader above
  # def holder_name()
  #   return @holder_name
  # end

  # def amount()
  #   return @amount
  # end

  # def type()
  #   return @type
  # end
  ###############################

  ###############################
  # handled by attr_writer / attr_accessor
  # def set_holder_name(new_holder_name)
  #   @holder_name = new_holder_name
  # end
  ###############################

end