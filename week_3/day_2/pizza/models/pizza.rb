require "pry-byebug"
require "pg"

class Pizza

  attr_accessor :first_name, :last_name, :topping, :quantity

  def self.all()
    db = PG.connect({
      dbname: "pizza_shop",
      host: "localhost"
      })
    sql = "SELECT * FROM pizzas;"
    pizzas = db.exec(sql)
    db.close
    return pizzas.map { |options| Pizza.new(options) }
  end

  def initialize( options )
    @first_name = options["first_name"]
    @last_name = options["last_name"]
    @topping = options["topping"]
    @quantity = options["quantity"].to_i
    @id = options["id"].to_i if options["id"]
  end

  def db_exec()
    db = PG.connect({ 
      dbname: "pizza_shop", 
      host: "localhost" # or IP address
    })
    sql = yield
    db.exec ( sql )
    db.close
    return @pizza
  end

  def save()
    result = db_exec { "INSERT INTO pizzas (
      first_name,
      last_name,
      topping,
      quantity
    ) VALUES (
      '#{ @first_name }',
      '#{ @last_name }',
      '#{ @topping }',
      '#{ @quantity }'
    ) RETURNING *;"
  }
    @id = result[0]["id"]
  end

  # def update( new_pizza )
  #   db = PG.connect({ 
  #     dbname: "pizza_shop", 
  #     host: "localhost" # or IP address
  #   })
  #   new_pizza.each do |parameter, value|
  #     sql = "UPDATE pizzas SET 
  #       #{parameter} = '#{value}'
  #       WHERE id = #{@id}
  #     ;"
  #     db.exec( sql )
  #   end
  # end

  def update()
    db_exec() { "UPDATE pizzas SET 
      first_name = '#{@first_name}',
      last_name = '#{@last_name}',
      topping = '#{@topping}',
      quantity = '#{@quantity}'
      WHERE id = #{@id}
      ;" }
  end

  def delete()
    db_exec() { "DELETE FROM pizzas WHERE id = #{@id};" }
  end

end

pizza1 = Pizza.new({
  "first_name" => "David",
  "last_name" => "Morrison",
  "topping" => "anchovies",
  "quantity" => "5"
  })

pizza2 = Pizza.new({
  "first_name" => "Alan",
  "last_name" => "Russell",
  "topping" => "pepperoni",
  "quantity" => "3"
  })

pizza1.save()
pizza2.save()

pizza1.topping = "ham & pineapple"
pizza1.update()

pizza2.first_name = "Kurt"
pizza2.update()

pizza2.delete()

# binding.pry
# nil

