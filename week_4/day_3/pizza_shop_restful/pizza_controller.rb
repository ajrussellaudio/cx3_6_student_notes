require "sinatra"
require "sinatra/contrib/all"
require "pry-byebug"

require_relative "./models/pizza"

get "/pizzas/new" do # RESTful :new
  erb(:new)
end

post "/pizzas" do # RESTful :create
  @pizza = Pizza.new(params)
  @pizza.save()
  # binding.pry
  erb(:create)
end

get "/pizzas" do # RESTful :index
  @pizzas = Pizza.all()
  erb(:index)
end

get '/pizzas/:id' do # RESTful :show
  @pizza = Pizza.find( params[:id] )
  erb(:show)
end

get '/pizzas/:id/edit' do # RESTful :edit
  @pizza = Pizza.find( params[:id] )
  erb(:edit)
end  

post '/pizzas/:id' do # RESTful :update
  Pizza.update( params )
  # binding.pry
  redirect to "/pizzas/#{params[:id]}"
end

post '/pizzas/:id/delete' do
  Pizza.destroy( params[:id] )
  redirect to "/pizzas"
end