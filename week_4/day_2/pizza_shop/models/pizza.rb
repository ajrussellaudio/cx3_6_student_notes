require_relative "../db/sql_runner"

class Pizza

  attr_reader :first_name, :last_name, :topping, :quantity, :id

  def self.all()
    sql = "SELECT * FROM pizzas;"
    pizzas = SqlRunner.run( sql )
    return pizzas.map {|pizza| Pizza.new(pizza)}
  end


  def initialize( options )
    @first_name = options["first_name"]
    @last_name  = options["last_name"]
    @topping    = options["topping"]
    @quantity   = options["quantity"].to_i
    @id         = options["id"].to_i
  end

  def pretty_name()
    return @first_name.concat(" #{@last_name}")
  end
#!/usr/bin/env ruby -wKU
  def total()
    return @quantity * 10
  end

  def save()
    sql = "INSERT INTO pizzas (
      first_name,
      last_name,
      topping,
      quantity
    ) VALUES (
      '#{@first_name}',
      '#{@last_name}',
      '#{@topping}',
      #{@quantity}
    ) RETURNING * ;"
    pizza = SqlRunner.run( sql ).first
    @id = pizza["id"].to_i
  end

end