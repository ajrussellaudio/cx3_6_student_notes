require "minitest/autorun"
require "minitest/rg"
require_relative "../models/pizza"

class TestPizza < MiniTest::Test

  def setup()
    @pizza = Pizza.new({
      "first_name" => "Gomez",
      "last_name"  => "Addams",
      "topping" => "Quattro Formaggio",
      "quantity" => "3"
      })
  end

  def test_first_name
    assert_equal("Gomez", @pizza.first_name)
  end

  def test_last_name
    assert_equal("Addams", @pizza.last_name)
  end

  def test_pretty_name
    assert_equal("Gomez Addams", @pizza.pretty_name)
  end

  def test_has_topping
    assert_equal("Quattro Formaggio", @pizza.topping)
  end

  def test_has_quantity
    assert_equal(3, @pizza.quantity)
  end

  def test_total
    assert_equal(30, @pizza.total)
  end

end