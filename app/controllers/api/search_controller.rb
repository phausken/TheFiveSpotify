class Api::SearchController < ApplicationController

  def index
    @results = PgSearch.multisearch(params[:query])
    render json: @results
  end

end
