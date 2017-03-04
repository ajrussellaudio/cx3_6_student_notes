require "minitest/autorun"
require "minitest/rg"
require_relative "../person"

class PersonTest < MiniTest::Test

  def setup
    @alan = Person.new("Alan Russell")
  end

  def test_has_full_name
    assert_equal("Alan Russell", @alan.name)
  end

  def test_has_first_name
    assert_equal("Alan", @alan.first_name)
  end

  def test_can_talk
    assert_equal(
      "Hi, my name is Alan Russell.",
      @alan.talk
      )
  end

  def test_has_health
    assert_equal(100, @alan.health)
  end

end