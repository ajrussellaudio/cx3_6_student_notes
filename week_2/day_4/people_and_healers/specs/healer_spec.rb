require "minitest/autorun"
require "minitest/rg"
require_relative "../healer"

class HealerTest < MiniTest::Test

  def setup
    @doctor = Healer.new("Julius Hibbert")
  end

  def test_has_name
    assert_equal("Julius Hibbert", @doctor.name)
  end

  def test_can_heal
    assert_equal(110, @doctor.heal)
  end

  def test_can_talk
    assert_equal(
      "Hello, everybody. I'm Dr Hibbert.",
      @doctor.talk)
  end

end