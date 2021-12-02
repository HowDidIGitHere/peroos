class Api::CommentsController < ApplicationController

  def index
    @comments = Comment.where(post_id: params[:post_id]).limit(10).offset(@page.to_i * 10).order(created_at: :desc)
    if @comments
      render :index
    else
      render json: @comments.errors.full_messages, status: 404
    end
  end

  def create
    @comment = Comment.new(comment_params)
    @comment.commenter_id = current_user.id
    if @comment.save
      render :show
    else
      render json: @comment.errors.full_messages, status: 400
    end
  end

  def update
    @comment = Comment.find(params[:id])
    if @comment.update
      render :show
    else
      render json: @comment.errors.full_messages, status: 404
    end
  end

  def delete
    @comment = Comment.find(params[:id])
    @comment.delete
    render :show
  end

  private
  def comment_params
    params.require(:comment).permit(:content, :post_id)
  end

  def set_page
    @page = params[:page] || 0
  end

end