require 'test_helper'
require 'minitest-rg'

class AnimalTest < ActiveSupport::TestCase

  test "Animals have a name" do
    assert_equal( "Tiger", animals(:one).name )
  end

  test "Animals with legs can walk" do
    assert animals(:one).move == "walk"
  end

  test "Animals with no legs can slither" do
    assert animals(:two).move == "slither"
  end

end
