require "minitest/autorun"
require "minitest/rg"
require_relative "../duck"

class DuckTest < MiniTest::Test

  def setup
    @duck = Duck.new(2)
  end

  def test_duck_can_fly
    assert_equal( "duck flying", @duck.fly() )
  end

  def test_duck_has_two_legs
    assert_equal(2, @duck.num_legs)
  end

end