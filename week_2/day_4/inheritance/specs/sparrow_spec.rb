require "minitest/autorun"
require "minitest/rg"
require_relative "../sparrow"

class SparrowTest < MiniTest::Test

  def setup
    @sparrow = Sparrow.new(2)
  end

  def test_sparrow_can_fly
    assert_equal( "flying", @sparrow.fly() )
  end

end
