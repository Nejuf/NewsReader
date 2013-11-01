class EntriesController < ApplicationController
  def index
    feed = Feed.find(params[:feed_id])

    if(feed && (feed.updated_at < (Time.now - 120) || feed.entries.length == 0))
      feed.reload
      debugger
    end
    render :json => feed.entries
  end
end
