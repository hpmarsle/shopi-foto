class Api::V1::FavoritesReposController < ApplicationController
    def index
        favorites_repos = FavoritesRepo.all
        render json: FavoritesRepoSerializer.new(favorites_repos)
    end

    def show
        favorites_repo = FavoritesRepo.find_by(id: params[:id])
        render json: FavoritesRepoSerializer.new(favorites_repo)
    end
end