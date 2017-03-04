def map(numbers)
  result = []
  for number in numbers
    result << yield(number)
  end
  return result
end

# def multiply_by_two(numbers)
#   result = []
#   for number in numbers
#     result << number * 2
#   end
#   return result
# end

def up_to_you
  name = "Alan"
  return yield(name)
end