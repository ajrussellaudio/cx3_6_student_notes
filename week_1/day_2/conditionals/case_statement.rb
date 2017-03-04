# # puts "Enter score:"
# # score = gets.chomp.to_i
# #
# # result = case score
# #   when 10 
# #     "Genius"
# #   when 8..9
# #     "Merit"
# #   when 5..7
# #     "Pass"
# #   when 4
# #     "Resit"
# #   else
# #     "Fail"
# # end
# #
# # puts result

# score = 6

# result = "fail"

# # if score > 10
# #   result = "pass"
# # end

# result = "pass" if score > 6

# score = 6

# puts score > 6 ? "pass" : "fail" # ternary
# # only use for tiny bits of code

zsolt_hungry = true
zsolt_tired = true

puts "Zsolt is hangry!" if zsolt_hungry && zsolt_tired