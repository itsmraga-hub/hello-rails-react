class Api::V1::MessagesController < Api::V1::ApplicationController
  def index
    @messages = Message.all
    render json: @messages, status: :ok
  end

  def show
    @message = Message.find(params[:id])
    render json: @message, status: :ok
  end

  def randommessage
    @message = Message.find(rand(1..5))
    render json: @message, status: :ok
  end
end
