class BooksController < ApplicationController
  http_basic_authenticate_with name:"admin", "password": "admin"

  def index
    @book = Books.all
  end
  def new
    @book = Books.new
  end

  def create
    @book = Books.new(book_params)
    if @book.save
      redirect_to @book
    else
      render :new, status: :unprocessable_entity
    end
  end
  def book_params
    params.require(:book).permit(:name, :description, :price, :avatar)
  end
end
