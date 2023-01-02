class Api::V1::RandomMessageController < Api::V1::ApplicationController
  def index
    @message = Message.find(rand(1..5))
    render json: @message, status: :ok
  end
end
