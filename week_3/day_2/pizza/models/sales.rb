class Sales

  def initialize( pizzas )
    @pizzas = pizzas
  end

  def total_revenue()
    # total = 0
    # @pizzas.each do |pizza|
    #   total += pizza.quantity * 10
    # end
    # return total
    return @pizzas.inject(0) do |total, pizza|
      total + pizza.quantity * 10
    end
  end

  def customer_names()
    return @pizzas.map do |pizza|
      "#{pizza.first_name} #{pizza.last_name}"
    end
  end

end