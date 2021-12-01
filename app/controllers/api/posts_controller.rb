class Api::PostsController < ApplicationController

  before_action :set_page, only: [:index, :feed]

  def index
    @posts = Post.where(community_id: params[:community_id]).limit(10).offset(@page.to_i * 10).order(created_at: :desc)
    if @posts
      render :index
    else
      render json: @posts.errors.full_messages, status: 404
    end
  end

  def feed
    @posts = Post.limit(10).offset(@page.to_i * 10).order(created_at: :desc)
    if @posts
      render :index
    else
      render json: @post.errors.full_messages, status: 404
    end
  end

  def show
    @post = Post.find(params[:id])
    if @post
      render :show
    else
      render json: @post.errors.full_messages, status: 404
    end
  end

  def create
    @post = Post.new(post_params)
    @post.poster_id = current_user.id
    if @post.save
      render :show
    else
      render json: @post.errors.full_messages, status: 400
    end
  end

  def update
    @post = Post.find(params[:id])
    if @post.update(post_params)
      render :show
    else
      render json: @post.errors.full_messages, status: 404
    end
  end

  def delete
    @post = Post.find(params[:id])
    @post.delete
    render :show
  end

  private
  def post_params
    params.require(:post).permit(:title, :body, :media, :link, :community_id)
  end

  def set_page
    @page = params[:page] || 0
  end

end