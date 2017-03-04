require "sinatra"
require "sinatra/contrib/all"

get( '/hi' ) do 
  return "Hello world!"
end

get( '/name/:title/:first/:last' ) do
  # print params
  name = params[:title]
  return "Your name is 
  #{params[:title].capitalize} 
  #{params[:first].capitalize} 
  #{params[:last].capitalize}."
end

get( '/address' ) do
  return "address!"
end

get( '/book/:title') do
  title = params[:title]
  title = title.split('-').map { |word| word.capitalize }.join(' ')
  return "Your favourite book is #{title}."
end