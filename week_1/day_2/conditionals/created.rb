puts "Guess what year Ruby was created."
guess = gets.chomp.to_i

if guess == 1995
  puts "Congrats!"
elsif guess == 1994 || guess == 1996
  puts "Close!"
else
  puts "Wrong. Duh!"
end