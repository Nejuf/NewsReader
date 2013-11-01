class EntriesController < ApplicationController
  def index
    feed = Feed.find(params[:feed_id])

    if(feed && (feed.entries.last.updated_at < (Time.now - 120) || feed.entries.length == 0))
      feed.reload
    end
    render :json => feed.entries
  end
end
