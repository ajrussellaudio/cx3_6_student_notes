require "sinatra"
require "sinatra/contrib/all"
require "json"

require_relative "./models/calculator"

get "/" do
  erb(:home)
end

get "/add/:num1/:num2" do
  calculator = Calculator.new(params[:num1].to_i, params[:num2].to_i)
  # return "#{calculator.add()}"
  @calculation = calculator.add()
  erb(:result)
end

get "/subtract/:num1/:num2" do
  calculator = Calculator.new(params[:num1].to_i, params[:num2].to_i)
  # return "#{calculator.subtract()}"
  @calculation = calculator.subtract()
  erb(:result)
end

get "/multiply/:num1/:num2" do
  calculator = Calculator.new(params[:num1].to_i, params[:num2].to_i)
  # return "#{calculator.multiply()}"
  @calculation = calculator.multiply()
  erb(:result)
end

get "/divide/:num1/:num2" do
  calculator = Calculator.new(params[:num1].to_i, params[:num2].to_i)
  # return "#{calculator.divide()}"
  @calculation = calculator.divide()
  erb(:result)
end

get "/all/:num1/:num2" do
  content_type( :json )
  calculator = Calculator.new(params[:num1].to_i, params[:num2].to_i)
  result = {
    add:      calculator.add(),
    subtract: calculator.subtract(),
    multiply: calculator.multiply(),
    divide:   calculator.divide()
  }

  result.to_json()
end