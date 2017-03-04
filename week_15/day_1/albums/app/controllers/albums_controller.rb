class AlbumsController < ApplicationController
  def index
    @albums = [
      { title: "OK Computer", artist: "Radiohead" },
      { title: "Check Your Head", artist: "Beastie Boys" },
      { title: "Enter the 36 Chambers", artist: "Wu-Tang Clan" }
    ]

    respond_to do |format|
      format.html
      format.json { render json: @albums }
    end
  end
end