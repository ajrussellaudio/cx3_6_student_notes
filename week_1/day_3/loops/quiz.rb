my_number = rand(10)

while true do
  puts "Guess a number:"
  guess = gets.chomp.to_i
  break if guess == my_number
  puts "You guessed #{guess}. Guess again!"
end

puts "Congrats! #{guess} was the right number!"