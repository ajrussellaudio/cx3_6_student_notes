class GigsController < ApplicationController

  def index
    gigs = Gig.where artist: params[:artist_id]
    render json: gigs.as_json( include: [:artist, :venue] )
  end

  def create
    gig = Gig.create({ 
      price: params[:price], 
      date: params[:date],
      venue_id: params[:venue_id],
      artist_id: params[:artist_id]
    })
    render json: gig
  end

end