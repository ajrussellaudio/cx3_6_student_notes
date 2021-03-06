class ArtistsController < ApplicationController

  def index
    artists = Artist.all
    render json: artists.as_json( include: :albums, only: [:name] )
  end

  def show
    artist = Artist.find( params[:id] )
    render json: artist.as_json( include: :albums, only: [:name] )
  end

end