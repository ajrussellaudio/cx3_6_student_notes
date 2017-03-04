require ("minitest/autorun")
require_relative("../tdd_lab.rb")

class TDD_Lab < MiniTest::Test

  def test_question_1()
    prices = [ 1.23, 6.98, 8.43, 2.45 ]
    costs = [ 4.23, 1.12, 0.52, 8.67 ]
    result = add_array_length(prices, costs)
    assert_equal(8, result)
  end

  def test_question_2()
    data = [ 1, 2, 3, 4 ,5 ]
    result = add_array_elements(data)
    assert_equal(15, result)
  end

  def test_question_3()
    hogwarts = [ 'Hufflepuff', 'Slytherin', 'Gryffindor', 'Ravenclaw' ]
    ravenclaw_result = find_item?(hogwarts, "Ravenclaw")
    batman_result = find_item?(hogwarts, "Batman")
    assert_equal(true, ravenclaw_result)
    assert_equal(false, batman_result)
  end

  def test_question_4()
    teacher_wallets = {
      'Sandy' => 12,
      'Zsolt'  => 10,
      'Val'  => 1356,
      'Jay' => 1
    }
    result = first_key_name(teacher_wallets)
    assert_equal("Sandy", result)
  end

  def test_question_5()
    countries = {
      uk: {
        capital: 'London',
        population: 60
      },
      france: {
        capital: 'Paris',
        population: 70
      },
      italy: {
        capital: 'Rome',
        population: 56
      }
    }
    result = array_of_capitals(countries)
    assert_equal([ 'London', 'Paris', 'Rome' ], result)
  end

end
