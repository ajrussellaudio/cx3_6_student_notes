class AnimalsController < ApplicationController

  def index
    @animals = Animal.all
    render :json => @animals.as_json(methods: :move)
  end

  def show
    @animal = Animal.find( params[:id] )
    render :json => @animal.as_json(methods: :move)
  end

  def create
    animal = Animal.create( animal_params )
    render :json => animal
  end

  def update
    animal = Animal.find(params[:id])
    if animal.update_attributes( animal_params )
      render :json => animal
    else
      render :json => { status: :update_failed }
    end
  end

  def destroy
    animal = Animal.find(params[:id])
    animal.destroy!
    render :json => Animal.all
  end

  private

  def animal_params
    params.require(:animal).permit([:name, :legs])
  end

end