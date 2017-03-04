require("minitest/autorun")
require("minitest/rg")
require_relative("../my_functions")

class FunctionsTest < Minitest::Test
# inheritance - What is going on here?

  def test_my_jam()
    song = my_jam()
    assert_equal("Uptown Funk", song)
  end

  def test_add()
    result = add(2, 4)
    assert_equal(6, result)
  end

  def test_subtract()
    result = subtract(12, 7)
    assert_equal(5, result)
  end

end