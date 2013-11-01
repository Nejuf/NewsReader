class FeedsController < ApplicationController

  def index
    respond_to do |format|
      format.html { render :index }
      format.json { render :json => Feed.all, include: :entries }
    end
  end

  def create
    feed = Feed.find_or_create_by_url(params[:feed][:url])

    if feed
      if(feed.entries.length == 0 ||
          feed.entries.first.updated_at < Time.now - 120)
        feed.reload
      end
      render :json => feed
    else
      render :json => { error: "invalid url" }, status: :unprocessable_entity
    end
  end
end
