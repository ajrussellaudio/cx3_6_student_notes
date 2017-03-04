require "minitest/autorun"
require "minitest/rg"
require_relative "../block_app"

class TestBlockApp < MiniTest::Test

  def test_up_to_you
    assert_equal( 2, up_to_you { 1 + 1 } )
  end

  def test_up_to_you_greet_by_name
    assert_equal("Hello Alan", up_to_you { |name| "Hello " + name } )
  end

  def test_add_one
    assert_equal( [2,3,4], map([1,2,3]) { |number| number + 1 } )
  end

  def test_multiply_by_two
    assert_equal( [2,4,6], map([1,2,3]) { |number| number * 2 } )
  end

  def test_map_add_one
    array = [1,2,3]
    result = array.map { |number| number + 1 }
    assert_equal( [2,3,4], result )
  end

end