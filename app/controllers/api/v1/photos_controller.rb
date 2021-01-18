class Api::V1::PhotosController < ApplicationController
    def index
        photos = Photo.all
        render json: PhotoSerializer.new(photos)
    end

    def show
        photo = Photo.find_by(id: params[:id])
        render json: PhotoSerializer.new(photo)
    end

    def create
        photo = Photo.create(url)
        repo = FavoritesRepo.first
        photo.favorites_repo = repo
        photo.save
    end
end